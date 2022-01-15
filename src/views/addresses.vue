<template>
	<!--Default page-->
	
	<default-page :pageOptions="pageOptions">

		<template v-slot:top-content>
			<p class="font-sm top-content__title">
				Адреса
			</p>
		</template>

		<section class="content">
			<div class="content_block_grey content_block_grey--table">
				
				<!--Product Table header block-->
				<div class="table-heder-products table-heder-products--orders">
					<div class="table-heder-products__dates table-heder-products__dates--flex">
						<div class="table-heder-filtr__address-box">							

							<div
								class="table-heder-filtr table-heder-filtr__address"
								v-for="(select, index) in selectsList"
								:key="index"
							>
								<div>
									<h3>{{select.title}}</h3>
								</div>

								<tooltip
									:show="select.open"
									:list="selectList"
									:selItem.sync="select.sel"
									@toggleSelectList="toggleSelectList(select)"
								/>
							</div>
						</div>

						<div class="table-heder-products__actions">
							<div class="card-table-new-position">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Только активные</span>
								</label>
							</div>
							<a href="#" class="add_adres">
								<span class="add_adres__icon"></span>
								<span>Добавить город</span>
							</a>
							<router-link :to="{name:'card-address'}" class="button button--narrow">Добавить адрес</router-link>
						</div>
						<filter-search class="table-heder-filtr-search--address table-heder-filtr-search--table" />
					</div>


					<div class="table-heder-products__other">
						<div class="table-heder-filtr table-heder-filtr__btns">
							<button @click="filterSelect" class="table-heder-filtr__btn selected"><p>Всего:</p> <span>53</span></button>
							<button @click="filterSelect" class="table-heder-filtr__btn"><p>Пилснер:</p> <span>13</span></button>
							<button @click="filterSelect" class="table-heder-filtr__btn"><p>Козловица:</p> <span>40</span></button>
						</div>

						<!--Filter and Search block-->

						<div class="table-heder-filtr-search table-heder-filtr-search--address table-heder-filtr-search--table-hide">
							<filter-search download/>
							<a class="table-heder-filtr-search__download table-heder-filtr-search__download--address" href="#">Выгрузить в XSL</a>
						</div>
					</div>
					<!--Filter and Search block end-->
				</div>
				<!--Product Table header block end-->
				
				<div class="separator_all_grey separator_all_grey--bold"></div>
				
				<!--Product Table block-->
				<div class="table-products">
				<!--Product Table row-->
					<!--Product Table row-->
					<div class="table-products__list table-products__list--address table-products__list--grey ">
						<div class="table-products__item table-products__item--menudrop"></div>
						<div @click="sortBy" class="table-products__item table-products__item--country table-products__item--sortable table-products__item--sortable--right-arrow">
							Страна
							<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
							</svg>
						</div>
						<div @click="sortBy" class="table-products__item table-products__item--city table-products__item--sortable table-products__item--sortable--right-arrow">
							Город
							<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
							</svg>
						</div>
						<div @click="sortBy" class="table-products__item table-products__item--TM table-products__item--sortable table-products__item--sortable--right-arrow">
							ТМ
							<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
							</svg>
						</div>
						<div class="table-products__item table-products__item--district">
							Улица
						</div>
						<div class="table-products__item table-products__item--house">дом</div>
						<div class="table-products__item table-products__item--floor">Этаж</div>
						<div class="table-products__item table-products__item--office">Офис</div>
						<div class="table-products__item table-products__item--trade-business">Торговый бизнес центр</div>
						<div class="table-products__item table-products__item--pavilion">Павильон</div>
						<div class="table-products__item table-products__item--status">Статус</div>
						<div class="table-products__item table-products__item--actions">действия</div>
					</div>
					<!--Product Table row end-->  
					
					<!--Product Table block-->
					<draggable
						tag="div"
						v-model="addressesItems"
						v-bind="dragOptions"
						handle=".handle-table"
						class="table-products"
					>
						<!--Product Table row-->        
						<div
							v-for="(item, idx) in addressesItems"
							:key="item.name"
							class="table-products__list table-products__list--address"
							:class="item.blocked ? 'table-products__list--light-grey' : ''"
							v-show="
								idx < selectedPaginationCount * paginationPage 
								&& (idx >= selectedPaginationCount * (paginationPage - 1))"
						>        
							<a class="handle-table table-products__item table-products__item--menudrop table-products">
								<svg class="icon icon--menu">
									<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="table-products__item table-products__item--country">
								Украина
							</div>
							<div class="table-products__item table-products__item--city">
								Киев
							</div>
							<div class="table-products__item table-products__item--TM">Пилснер</div>
							<div class="table-products__item table-products__item--district">Гиляровского</div>
							<div class="table-products__item table-products__item--house">5</div>
							<div class="table-products__item table-products__item--floor">2</div>
							<div class="table-products__item table-products__item--office">-</div>
							<div class="table-products__item table-products__item--trade-business">Каширский двор</div>
							<div class="table-products__item table-products__item--pavilion">-</div>
							<a v-if="!item.blocked" class="table-products__item table-products__item--pay-list">активен</a>
							<a v-else class="table-products__item table-products__item--pay-list no--pay">не активен</a>

							<div class="table-products__item table-products__item--actions">
								<svg @click="copyItem(idx)" class="icon icon--copy">
									<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
								<svg @click="removeWithDialog(removeAt, item)" class="icon icon--trash">
									<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
								</svg>
							</div>
						</div>
						<!--Product Table row end-->

					</draggable>
					<!--Product Table block end-->
				
				</div>
				<!--Product Table block end-->
				
				<pagination
					:listLength="addressesItems ? addressesItems.length : 0"
					@changePage="changePage"
					:page.sync="paginationPage"
				/>
			</div>
			<div @click="closeTooltips" class="tooltip-mask" ref="tooltipMask"></div>

			<popup :show="openDelPopup" @closePopup="closeDelPopup">
				<h3>Вы действительно хотите <br>удалить {{delText}}?</h3>
				<div class="btn-box btn-box--popup">
					<button @click="removeSelected" class="button">Да, удалить</button>
					<button @click="closeDelPopup(false)" class="button button--grey">Нет, отменить</button>
				</div>
			</popup>

		</section>

	</default-page>

	<!--Default page end-->
</template>

<script>
import FilterSearch from '@/components/parts/FilterSearch'
import Tooltip from '@/components/parts/Tooltip'
import DefaultPage from '@/components/DefaultPage'
import Pagination from '@/components/parts/Pagination'
import draggable from "vuedraggable";

export default {

	name: 'orders',

	components: {
		DefaultPage,
		Tooltip,
		FilterSearch,
		Pagination,
		draggable
	},

	filters: {
		date (value) {
			if (!value)
				return ''
			let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
			return Intl.DateTimeFormat('ru-RU', options).format(value)
		}
	},

	created() {
		setInterval(()=> {
			if (this.$refs.reloadProgress) {
				this.$refs.reloadProgress.value++;
				if (this.$refs.reloadProgress?.value >= 1000) {
					this.$refs.reloadProgress.value = 0;
				}
			}
		}, 200)
	},

	data() {
		return {

			openDelPopup: false,
			selCat: [],

			search: '',

			paginationPage: 1,
			selectedPaginationCount: 10,

			selectList: [
				{title: "Все адреса"},
				{title: "Профсоюзная 1, корп. 2"},
				{title: "Профсоюзная 1, корп. 2"},
				{title: "Профсоюзная 1, корп. 2"},
				{title: "Профсоюзная 1, корп. 2"},
				{title: "г. Москва, Московская 1, корп. 2"},
				{title: "ул. Кирова, д. 5"},
			],

			selectsList: [
				{title: "Выберите страну", sel: {title: "Все города"}, open: false},
				{title: "Выберите город", sel: {title: "Все города"}, open: false}
			],

			orderPopup: false,

			addressesItems: [
				{
					id:1,
					blocked: false,
					title:"AA3456"
				},
				{
					id:2,
					blocked: false,
					title:"AA3756"
				},
				{
					id:3,
					blocked: true,
					title:"AA3453"
				},
				{
					id:4,
					blocked: false,
					title:"YA3456"
				},
				{
					id:5,
					blocked: false,
					title:"AA3456"
				},
				{
					id:6,
					blocked: false,
					title:"AA3756"
				},
				{
					id:7,
					blocked: true,
					title:"AA3453"
				},
				{
					id:8,
					blocked: false,
					title:"YA3456"
				},
				{
					id:9,
					blocked: false,
					title:"AA3456"
				},
				{
					id:10,
					blocked: false,
					title:"AA3756"
				},
				{
					id:11,
					blocked: true,
					title:"AA3453"
				},
				{
					id:12,
					blocked: false,
					title:"YA3456"
				},
			],

			pageOptions: {
				name: "addresses",

				components: {
					menuAct: false,
					content: true,
					breadcrumbs: true
				}
			},
		}
	},

	computed: {
		dragOptions() {
			return {
				animation: 200,
				group: "description",
				disabled: false,
				ghostClass: "ghost"
			};
		}
	},

	methods: {

		removeWithDialog(method, index, list) {
			this.delText = "адрес"
			this.openDelDialog(method, index, list)
		},

		openDelDialog(method, data, list) {
			this.openDelPopup = true
			this.selCat = [method, data, list]
		},

		removeSelected() {
			this.openDelPopup = false
			if (this.selCat[2] !== undefined) {
				this.selCat[0](this.selCat[1], this.selCat[2])
			} else if(this.selCat[1] !== undefined) {
				this.selCat[0](this.selCat[1])
			} else {
				this.selCat[0]()
			}
		},

		closeDelPopup(state = false) {
			this.openDelPopup = state
			this.selCat = []
		},

		changePage(count) {
			this.selectedPaginationCount = count
		},

		toggleSelectList(selectList) {
			if (!selectList.open) {
				this.selectsList.map(select => {
					select.open = false
				})
			}
			selectList.open = !selectList.open
		},

		removeSearchInput() {
			this.search = ''
		},
		submitSearch(event) {
			event.preventDefault()
			event.target.blur()
		},

		selSelectList(item, select) {
			select.open = false
			select.sel = item
			this.closeTooltips()
		},

		removeAt(idx) {
			this.addressesItems.splice(idx, 1);
		},

		copyItem(idx) {
			const newItem = Object.assign({}, this.addressesItems[idx])
			newItem.id += 100

			let preventNumber = newItem.title.split(" ").pop()

			if (+preventNumber) {
				newItem.title = `${newItem.title.slice(0, newItem.title.length - preventNumber.length)}${+preventNumber + 1}`
			} else {
				newItem.title += ' 1'
			}

			this.addressesItems.splice(idx, 0, newItem)
		},

		filterSelect(event) {
			event.currentTarget.parentElement.children.forEach(btn=> {
				btn.classList.remove("selected")	
			})
			event.currentTarget.classList.add("selected")
		},

		openSelect(select) {
			select.open = !select.open
			this.$refs.tooltipMask.classList.add("show")
		},

		closeTooltips() {
			const openTooltips = document.querySelectorAll(".tooltip-orders.show")
			const selectedRow = document.querySelector(".table-products__list--selected")

			this.$refs.tooltipMask.classList.remove("show")
			openTooltips.forEach(openTooltip => openTooltip.classList.remove("show"))

			this.selectsList.map(select => select.open = false)
			
			selectedRow?.classList.remove("table-products__list--selected")
		},

		sortBy(event) {
			const selectedSortable = document.querySelector('.table-products__item--sortable.selected')

			if (selectedSortable == event.currentTarget) {
				event.currentTarget.classList.add("selected")
				event.currentTarget.classList.toggle("unselected")
			} else {
				selectedSortable?.classList.remove("selected", "unselected")
				event.currentTarget.classList.add("selected")
			}
		},

		openPopup() {
			this.orderPopup = true
		},
		closePopup(state) {
			this.orderPopup = state
		},

		reloadProgressBar(event) {
			clearTimeout(timeOutBtn)

			const btn = event.currentTarget

			btn.style.transform = "rotate(720deg)"
			const timeOutBtn = setTimeout(() => {
				btn.removeAttribute("style")
			}, 300)

			this.$refs.reloadProgress.value = 0;
		}
	}

}
</script>