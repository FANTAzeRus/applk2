<template>
	<div class="table-heder-filtr-search table-heder-filtr-search--catalog">
		<a @click.prevent="openFilterTooltip" class="table-heder-filtr-search__filtr">
			<svg class="icon icon--filter">
				<use xlink:href="@/assets/img/public/icons-pack.svg#filter"></use>
			</svg>
			Фильтр
		</a>
		<div class="tooltip-orders tooltip-orders--filter">
			<h3>Активный фильтр</h3>
			<div class="condition-box">
				<ul class="condition__list">
					<li
						v-for="(condition, idx) in conditionList"
						:key="idx"
						class="condition"
					>
						<div v-if="condition.biOperator.openAvailable" class="select-box">
							<div @click="condition.biOperator.opened = !condition.biOperator.opened" :class="['select', 'select--xsmall', condition.biOperator.opened ? 'select--open' : '']">
								{{condition.biOperator.data}}
							</div>
							<ul v-if="condition.biOperator.opened" class="select__list select__list--xsmall">
								<li
									v-for="(selectItem, index) in ['и', 'или']"
									:key="index"
									@click="selBiOperator(selectItem, idx)"
									class="select__item"
								>
									{{selectItem}}
								</li>
							</ul>
						</div>
						<div class="select--xsmall" v-else>
							<span>{{condition.biOperator.data}}</span>
						</div>
						<div class="select-box">
							<div @click="condition.selectedCondition.opened = !condition.selectedCondition.opened" :class="['select', 'select--grey', condition.selectedCondition.opened ? 'select--open' : '']">
								{{condition.selectedCondition.data.name}}
							</div>
							<ul v-if="selectList.length && condition.selectedCondition.opened" class="select__list">
								<li
									v-for="(selectItem, index) in selectList"
									:key="index"
									@click="selCondition(selectItem, idx)"
									class="select__item"
								>
									{{selectItem.name}}
								</li>
							</ul>
						</div>
						<div class="select-box">
							<div @click="condition.biCondition.opened = !condition.biCondition.opened" :class="['select', 'select--small', condition.biCondition.opened ? 'select--open' : '']">
								{{condition.biCondition.data}}
							</div>
							<ul v-if="condition.biCondition.opened" class="select__list">
								<li
									v-for="(selectItem, index) in ['=', '<', '>']"
									:key="index"
									@click="selBiCondition(selectItem, idx)"
									class="select__item"
								>
									{{selectItem}}
								</li>
							</ul>
						</div>

						<div v-if="condition.selectedCondition.data.input">
							<input class="filter__input" type="text">
						</div>
						<div v-else>
							<multi-select :selectOptions="condition.selectedMark" class="select-box--small"/>
						</div>

						<svg @click="removeCondition(idx)" class="icon icon--remove">
							<use xlink:href="@/assets/img/public/icons-pack.svg#remove"></use>
						</svg>	
					</li>
				</ul>
			</div>
			<div @click="addCondition" class="addFilter">
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.0871 6.5697V5.43024H6.5697V0.912842H5.43024V5.43024H0.912842V6.5697H5.43024V11.0871H6.5697V6.5697H11.0871Z" fill="#E6442F"/>
				</svg>
				<p>Добавить фильтр</p>
			</div>
		</div>
		<form @submit="submitSearch" class="table-heder-filtr-search__search" action="">
			<div class="table-heder-filtr-search__search--button" type="submit">
				<svg class="icon icon--zoom">
						<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
				</svg>
			</div>
			<input v-model="search" class="table-heder-filtr-search__input" type="text" placeholder="Поиск..." name="search">
			<button @click="removeSearchInput" class="search__remove">
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9B9B9B"/>
				</svg>
			</button>
		</form>
		
		<div @click="closeTooltips" class="tooltip-mask" ref="tooltipMask"></div>
	</div>
</template>

<script>
import MultiSelect from "@/components/parts/MultiSelect"

export default {

	name: 'FilterSearch',

	components: {
		MultiSelect
	},

	data () {
		return {
			search: '',

			selectList: [
				{
					name: "Маркеры",
				},
				{
					name: "Цена",
					input: true,
				},
				{
					name: "Название",
					input: true,
				},
				{
					name: "Акции",
				},
				{
					name: "Вес",
					input: true,
				},
			],

			conditionList: [
				{
					biOperator: {
						data: "где",
						opened: false,
						openAvailable: false
					},
					biCondition: {
						data: ">",
						opened: false
					},
					selectedCondition: {
						data: "",
						opened: false
					},
					selectedMark: {
						selectList: [
							{
								title: "Маркеры",
								model: false
							},
							{
								title: "Цена",
								input: true,
								model: false
							},
							{
								title: "Название",
								input: true,
								model: false
							},
							{
								title: "Акции",
								model: false
							},
							{
								title: "Вес",
								input: true,
								model: false
							},
							{
								title: "Вес2",
								input: true,
								model: false
							},
						],
						selectListSels: [],
						selectListShow: false
					}
				},
			],
		}
	},

	methods: {
		removeSearchInput() {
			this.search = ''
		},
		submitSearch(event) {
			event.preventDefault()
			event.target.blur()
		},

		openFilterTooltip(event) {
			const openTooltip = document.querySelector(".tooltip-orders.show")

			const allClasses = Array.from(event.currentTarget.nextElementSibling.classList)
			if (
					allClasses.some(elClass => elClass == "tooltip-orders")
					&& !allClasses.some(elClass => elClass == "show")
				) {
				// close all tooltip
				openTooltip?.classList.remove("show", "show--top")
				this.$refs.tooltipMask.classList.remove("show")
				// open need tooltip
				if (document.querySelector(".page").clientHeight - event.pageY > event.currentTarget.nextElementSibling.clientHeight) {
					event.currentTarget.nextElementSibling.classList.add("show")
				} else {
					event.currentTarget.nextElementSibling.classList.add("show", "show--top")
				}
				this.$refs.tooltipMask.classList.add("show")
				event.currentTarget.parentElement.parentElement.classList.add("table-products__list--selected")
			} else {
				// close all tooltip
				this.$refs.tooltipMask.classList.remove("show")
				openTooltip?.classList.remove("show", "show--top")
			}
		},

		closeTooltips() {
			const openTooltips = document.querySelectorAll(".tooltip-orders.show")

			this.$refs.tooltipMask.classList.remove("show")
			openTooltips.forEach(openTooltip => openTooltip.classList.remove("show"))
		},
		
		removeCondition(idx) {
			this.conditionList.splice(idx, 1);
		},

		addCondition() {
			const defaultObject = {
				biCondition: {
					data: ">",
					opened: false
				},
				selectedCondition: {
					data: "",
					opened: false
				},
				selectedMark: {
					selectList: [
						{
							title: "Маркеры",
							model: false
						},
						{
							title: "Цена",
							model: false
						},
						{
							title: "Название",
							model: false
						},
						{
							title: "Акции",
							model: false
						},
						{
							title: "Вес",
							model: false
						},
					],
					selectListSels: [],
					selectListShow: false
				}
			}
			if (this.conditionList.length) {
				this.conditionList.push(
					Object.assign({
						biOperator: {
							data: "и",
							opened: false,
							openAvailable: true
						}
					}, defaultObject)
				);
			} else {
				this.conditionList.push(
					Object.assign({
						biOperator: {
							data: "где",
							opened: false,
							openAvailable: false
						}
					}, defaultObject)
				);
			}
		},

		selBiOperator(item, index) {
			this.conditionList[index].biOperator.data = item
			this.conditionList[index].biOperator.opened = false
		},
		selBiCondition(item, index) {
			this.conditionList[index].biCondition.data = item
			this.conditionList[index].biCondition.opened = false
		},
		selCondition(item, index) {
			this.conditionList[index].selectedCondition.data = item
			this.conditionList[index].selectedCondition.opened = false
		},
	}
}
</script>

<style lang="css" scoped>
</style>