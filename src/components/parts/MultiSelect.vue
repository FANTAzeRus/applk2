<template>
	<div>
		<div v-if="title && !preview" class="content_heading default-heading heading-first">{{title}}</div>

		<div v-if="!preview" class="select-box select-box--fheight">
			<div @click="openSelectList" :class="['select', this.selectOptions.selectListShow ? 'select--open' : '']">
				<div v-if="listLength == 0 && !oneSel">
					{{"Ни создано не одной " + title}}
				</div>
				<div v-if="!oneSel" class="card-addres-tags" ref="tagsList" :class="[
					isOverflowed && selectOptions.selectListSels.length > 0 ? 'card-addres-tags--overflowed':'',
					categories ? 'card-addres-tags--cat' : ''
					]">
					<p
						v-for="(selectItem, index) in selectOptions.selectListSels"
						:key="index"
					>
						{{selectItem.title}}
					</p>
					<p class="more">Ещё {{moreCount}}...</p>
				</div>
				<div v-else>
					{{selectOptions.selectListSel.title || 'Корневая категория'}}
				</div>
			</div>
			<ul v-if="(listLength || oneSel) && selectOptions.selectListShow" class="select__list">
				<div class="select__search">
					<button class="select__search-icon" type="submit">
						<svg class="icon icon--zoom">
								<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
						</svg>
					</button>
					<input v-model="search" class="select__search-input" type="text" placeholder="Поиск..." name="search">
					<button v-show="search.length" @click="removeSearchInput" class="search__remove">
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9B9B9B"/>
						</svg>
					</button>
				</div>
				<li
					v-if="selAll"
					class="select__item"
				>
					<label @input="selectAll" class="checkbox checkbox--filled checkbox--super--small">
						<input
							v-model="selAllSelectModel"
							class="checkbox__input" type="checkbox">
						<span class="checkbox__span"></span>
						<span class="checkbox__text checkbox__text--bold">Все {{title.toLowerCase()}}</span>
					</label>  
				</li>

				<multi-select-item
					:oneSel="oneSel"
					:class="categories ? 'select__list--cat' : ''"
					:list="searchedList || categoriesSelectList"
					:selItem="selectOptions.selectListSel"
					@selSelectList="selSelectList"
				/>
			</ul>
		</div>
		<div v-else>
			<ul class="select__list">
				<multi-select-item :selItem="selectOptions.selectListSel" preview :class="categories ? 'select__list--cat' : ''" :list="categories ? selectOptions.selectList : categoriesSelectList" @selSelectList="selSelectList" />
			</ul>
		</div>

	</div>
		
</template>

<script>
import MultiSelectItem from "@/components/parts/MultiSelectItem"

export default {

	name: 'MultiSelect',

	props: {
		selectOptions: Object,
		title: String,
		selAll: Boolean,
		categories: Boolean,
		preview: Boolean,
		noRoot: Boolean
	},

	components: {
		MultiSelectItem
	},

	created() {
		if (!this.oneSel) this.selectOptions.selectListSels?.push(...this.checksModel)
		this.$nextTick(() => {this.checkOverflow()})
	},

	data () {
		return {
			isOverflowed: false,
			selAllSelectModel: false,
			childCount: 0,
			search: ''
		}
	},

	computed: {
		searchedList() {
			return this.search.length >= 3
				? (this.selectOptions.selectList?.length ? this.selectOptions.selectList : this.categoriesSelectList).filter(item => {
					return item.title?.toLowerCase().includes(this.search?.toLowerCase())
				})
				: this.categories ? this.categoriesSelectList : this.selectOptions.selectList
		},
		categoriesList() {
			return this.$store.state.applicationModule.categories
		},
		categoriesSelectList() {
			return this.noRoot ? this.categoriesList : [{
								title: "Корневая категория",
								model: false,
								selected: false,
								isRoot: true
							}].concat(this.categoriesList)
		},
		listLength() {
			if (this.categories) {
				return this.categoriesList.length
			} else {
				return this.selectOptions.selectList.length
			}
		},
		oneSel() {
			return Boolean(typeof this.selectOptions?.selectListSel == "object")
		},
		moreCount() {
			if (!this.oneSel) {
				if (!this.categories) {
					return window.innerWidth >= 1555 ? this.selectOptions.selectListSels.length - 2 : this.selectOptions.selectListSels.length - 1
				} else {
					return window.innerWidth >= 1555 ? this.selectOptions.selectListSels.length - 4 : this.selectOptions.selectListSels.length - 2
				}
			}
			return false
		},
		checksModel() {
			if (this.categories) {
				return  this.categoriesList.filter(select => select.model)
			} else {
				return this.selectOptions.selectList.filter(select => select.model)
			}
		},
		selectedCount() {
			if (this.categories) {
				return this.categoriesList.filter(item => item?.model).length
			} else {
				return this.selectOptions.selectList.filter(item => item?.model).length
			}
		},
	},

	methods: {

		removeSearchInput() {
			this.search = ''
		},

		openSelectList() {
			if (this.preview) {
				return this.selectOptions.selectListShow = true
			}

			const mask = document.querySelector('.tooltip-mask')
			mask.classList.add("show")

			this.$emit('openSelectList', this.selectOptions)
			this.selectOptions.selectListShow = !this.selectOptions.selectListShow

		},

		addAllParent(itemP) {
			if (!itemP.parent.isRoot ) {
				if (this.selectOptions.selectListSels.indexOf(itemP.parent) == -1) {
					itemP.parent.model = true
					this.selectOptions.selectListSels.push(itemP.parent)
				}

				this.addAllParent(itemP.parent)
			}
		},

		removeAllChild(itemP) {
			if (itemP.children?.length) {
				itemP.children.map(child => {
					child.model = false
					this.selectOptions.selectListSels.splice(this.selectOptions.selectListSels.indexOf(child), 1)
					this.removeAllChild(child)
				})
			}
		},

		selSelectList({item, condition}) {
			if (!this.oneSel) {
				// console.log("gg2")

				if (condition) {
					if (this.categories) this.addAllParent(item)

					this.selectOptions.selectListSels.push(item)
					this.$nextTick(() => {this.checkOverflow()})
				} else {
					if (this.categories) this.removeAllChild(item)

					this.selectOptions.selectListSels.splice(this.selectOptions.selectListSels.indexOf(item), 1)
					this.$nextTick(() => {this.checkOverflow()})
				}
			} else {
				this.selectOptions.selectListSel = item
				this.selectOptions.selectListShow = false
				const mask = document.querySelector('.tooltip-mask')
				mask.classList.remove("show")
			}
		},

		checkOverflow() {
			this.isOverflowed = (this.$refs.tagsList ? this.$refs.tagsList.scrollWidth : null) > (this.$refs.tagsList ? this.$refs.tagsList.offsetWidth : null)
		},

		addToSels(itemP) {
			itemP.map(item => {
				item.model = true
				this.selectOptions.selectListSels.push(item)

				if (item.children?.length) this.addToSels(item.children)
			})
		},

		removeToSels(itemP) {
			itemP.map(item => {
				item.model = false
				if (item.children?.length) this.removeToSels(item.children)
			})
		},

		selectAll() {
			this.selectOptions.selectListSels = []
			if (!this.selAllSelectModel) {
				this.addToSels(!this.categories ? this.selectOptions.selectList : this.categoriesList)
				
				this.$nextTick(() => {this.checkOverflow()})
			} else {
				this.removeToSels(!this.categories ? this.selectOptions.selectList : this.categoriesList)
			}
		}
	},
	watch: {
		selectedCount(newValue) {
			if (!newValue) {
				this.selAllSelectModel = false
			}
			if(newValue != this.listLength) {
				this.selAllSelectModel = false
			} else {
				this.selAllSelectModel = true
			}
		}
	}
}
</script>

<style lang="css" scoped>
</style>