<template>
	<!--Left menu Activ block-->
	<section class="menu-act">
		<div v-show="this.$store.getters.getCategoryMenuShow">
			<ul class="tabs-control-menu">
				<li @click='changeCategory' class="tabs-control-menu__list tabs-control-menu__active"><a class="tabs-control-menu__link" href="#">Активные</a></li>
				<li @click='changeCategory' class="tabs-control-menu__list"><a class="tabs-control-menu__link" href="#">Все</a></li>
				<svg @click="toggleMenu" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" class="menu-act__close">
					<path d="M6.375 10.0167L5.42706 11L0.125 5.5L5.42706 1.46355e-06L6.375 0.983335L2.02089 5.5L6.375 10.0167Z" fill="#D5D5D5"/>
					<path d="M11.75 10.0167L10.8021 11L5.5 5.5L10.8021 1.46355e-06L11.75 0.983335L7.39589 5.5L11.75 10.0167Z" fill="#D5D5D5"/>
				</svg>
			</ul>
			<div class="clear"></div>
			
			<div class="menu-act-heading">Выберите {{!menuActAddress ? 'адрес' : 'торговую марку'}}</div>

			<div class="all_adres select-box">
				<tooltip
					:show="selectLists[0].selectListShow"
					:list="selectLists[0].selectList"
					:selItem.sync="selectLists[0].selectListSel"
					@toggleSelectList="toggleSelectList(selectLists[0])"
				/>
			</div>
			<a href="#" class="add_adres">
				<span class="add_adres__icon"></span>
				<span>Добавить {{!menuActAddress ? 'адрес' : 'город'}}</span>
			</a>
			
			<div class="menu-act-heading">{{!menuActAddress ? 'Категории' : 'Адреса'}}</div>

			<draggable-tree
				:data="categoriesList"
				draggable
				:getTriggerEl="handleEl"
				v-if="!menuActAddress"
				@change="changeTreeOrder"
			>
				<div slot-scope="{data, store}">
					<!--
					//- data is node
					//- store is the tree
					//- vm is node Vue instance, you can get node level by vm.level
					-->

					<template>
						<div class="menu-categories__lev">
							<div class="cat-org-actions">
								<svg
									:class="[data.open ? 'arrowOpen' : 'arrowOpen open',
													data.children.length ? 'hasChild' : '']"
									@click="store.toggleOpen(data)" 
									width="9" height="6" viewBox="0 0 9 6" fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M4.36704 5.46714L0.267041 0.732864L8.46704 0.732865L4.36704 5.46714Z" fill="#D5D5D5"/>
								</svg>
								<svg class="handle-table-outside icon icon--menu">
									<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
								</svg>
							</div>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input @click="allSelectedChange(data)" v-model="data.selected" class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
							<span
								@click="selGlobalCategory(data)"
								class="text-name"
								:class="{'text-name--current': data.currentCategory}"
							>
								{{data.title}}
							</span>
							<div class="cat-actions">
								<svg @click="addPopup(data)" xmlns="http://www.w3.org/2000/svg" class="icon--add-child">
									<use xlink:href="@/assets/img/public/icons-pack.svg#addRect"></use>
								</svg>
								<svg @click="$event.currentTarget.classList.toggle('active')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="icon--hide">
									<path d="M0.570571 6.31657C0.476476 6.12022 0.476476 5.87978 0.570571 5.68343C1.76411 3.2093 4.2934 1.5 7.22 1.5C10.1466 1.5 12.6759 3.20929 13.8694 5.68339C13.9635 5.87977 13.9635 6.12023 13.8694 6.31661C12.6759 8.79071 10.1466 10.5 7.22 10.5C4.2934 10.5 1.76411 8.7907 0.570571 6.31657ZM3.72 6C3.72 7.92948 5.29052 9.5 7.22 9.5C9.14948 9.5 10.72 7.92948 10.72 6C10.72 4.07052 9.14948 2.5 7.22 2.5C5.29052 2.5 3.72 4.07052 3.72 6Z"/>
									<path d="M7.21992 7.79998C8.21403 7.79998 9.01992 6.99409 9.01992 5.99998C9.01992 5.00587 8.21403 4.19998 7.21992 4.19998C6.22581 4.19998 5.41992 5.00587 5.41992 5.99998C5.41992 6.99409 6.22581 7.79998 7.21992 7.79998Z" />
									<line class="hide-line" x1="11.4843" y1="0.620336" x2="2.78434" y2="11.6203" stroke-width="2"/>
								</svg>
								<svg @click="editCat(data)" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
								<svg @click="openDelDialog(store.deleteNode, data)" class="icon icon--trash">
									<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
								</svg>
							</div>
						</div>
					</template>
				</div>
			</draggable-tree>

			<draggable
				tag="div"
				v-bind="dragOptions"
				class="he-tree tree addresses-drag"
				handle=".handle-table-outside"
				v-else
			>
				<div
					v-for="item in addressesList"
					:key="item.item"
					class="menu-categories__lev menu-categories__lev--address"
				>
					<div class="cat-org-actions cat-org-actions--address">
						<svg class="handle-table-outside icon icon--menu">
							<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
						</svg>
					</div>
					<label class="checkbox checkbox--filled checkbox--super--small">
						<input @click="allSelectedChange(item)" v-model="item.selected" class="checkbox__input" type="checkbox">
						<span class="checkbox__span"></span>
					</label>
					<span
						@click="selGlobalCategory(item)"
						class="text-name"
						:class="{'text-name--current': item.currentCategory, 'text-name--address': menuActAddress}"
					>
						{{item.title}}
						<span class="text-name text-name--gray">
							<br>{{item.address || 'ул. Сущевский вал, д.23, к 2.'}}
						</span>
					</span>
					<div class="cat-actions cat-actions--address">
						<svg @click="editCat(item)" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg @click="openDelDialog(removeAt, item, addressesList)" class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
					</div>
				</div>
			</draggable>
			
			<div v-show="selectedData.length" class="menu-categories-hover">
				<div class="menu-categories-hover__label">{{selectedData.length}}</div>
				<span>{{selectedData.length}} выделен</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg @click="deletAllNodes" class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
			</div>
			<a @click.prevent="addPopup({name: 'Корневая категория'})" href="#" class="add_adres">
				<span class="add_adres__icon"></span>
				<span>Добавить {{!menuActAddress ? 'категорию' : 'адрес'}}</span>
			</a>
		</div>

		<popup :show="openAddPopup" type="addCat" @closePopup="closeAddPopup">
			<h3 v-if="!editCategory">Создание {{!menuActAddress ? 'категории' : 'адреса'}}</h3>
			<h3 v-else>Редактирование {{!menuActAddress ? 'категории' : 'адреса'}}</h3>

			<div class="popup__row">
				<h4>Название {{!menuActAddress ? 'категории' : 'адреса'}}</h4>
				<input v-model="newCatName" type="text" placeholder="Введите название...">
			</div>

			<div v-if="!menuActAddress" class="popup__row">
				<h4>Выберите категорию</h4>
				<div class="select-box">
					<multi-select class="oneSelect" selOne @openSelectList="toggleSelectListEmit" :selectOptions="selectLists[1]" categories/>
				</div>
			</div>

			<div class="popup__row">
				<h4>Выберите тип {{!menuActAddress ? 'категории' : 'адреса'}}</h4>
				<div class="select-box">
					<tooltip
						:show="selectLists[2].selectListShow"
						:list="categoriesTypesList"
						:selItem.sync="selectLists[2].selectListSel"
						@toggleSelectList="toggleSelectList(selectLists[2])"
					/>
				</div>
			</div>

			<div v-if="menuActAddress" class="popup__row">
				<h4>Адрес</h4>
				<input :value="'ул. Сущевский вал, д.23, к 2.'" type="text" placeholder="Введите адрес...">
			</div>

			<div v-if="!menuActAddress" class="popup__row popup__row--photo">
				<cards-photo-preview
					@removePhoto="removePhoto"
					onePhoto
					:lists="newIconData.photo"
					@input="getPhoto"
					type="popup"
					title="Загрузите фото"
					warningText="Размер: 600x600 пикс, вес не более 700 кБайт"
					class="photo--square"
				/>
			</div>
			<div v-if="!menuActAddress" class="popup__row popup__row--photo">
				<cards-photo-preview
					@removePhoto="removePhoto"
					onePhoto
					:lists="newIconData.icon"
					@input="getIcon"
					type="popup"
					title="Загрузите иконку"
					warningText="Размер: 600x600 пикс, вес не более 700 кБайт"
					class="photo--square"
				/>
			</div>

			<button v-if="!editCategory" @click="addCategoryPopup" class="button button--addCat">Создать {{!menuActAddress ? 'категорию' : 'адрес'}}</button>
			<button v-else @click="editCategoryPopup" class="button button--addCat">Изменить {{!menuActAddress ? 'категорию' : 'адрес'}}</button>
		</popup>

		<popup :show="openDelPopup" @closePopup="closeDelPopup">
			<h3>Вы действительно хотите <br>удалить {{delText || menuActAddress ? 'категорию' : 'адрес'}}?</h3>
			<div class="btn-box btn-box--popup">
				<button @click="removeSelectedCategory" class="button">Да, удалить</button>
				<button @click="closeDelPopup(false)" class="button button--grey">Нет, отменить</button>
			</div>
		</popup>
	</section>
	<!--Left menu Activ block end-->
</template>

<script>
import {DraggableTree} from 'vue-draggable-nested-tree'
import CardsPhotoPreview from "@/components/parts/CardsPhotoPreview"
import MultiSelect from "@/components/parts/MultiSelect"
import Tooltip from "@/components/parts/Tooltip"
import Popup from "@/components/Popup"
import draggable from "vuedraggable";
import {mapGetters} from 'vuex'


export default {

	name: 'VMenuAct',

	components: {
		CardsPhotoPreview,
		DraggableTree,
		Tooltip,
		MultiSelect,
		draggable,
		Popup,
	},

	props: {
		menuActAddress: Boolean
	},

	data () {
		return {
			openDelPopup: false,
			openAddPopup: false,

			editCategory: false,
			editCategoryData: {},

			newCatName: '',
			newIconData: {
				photo: {
					imagesList: [],
				},
				icon: {
					imagesList: [],
				}
			},

			selectLists: [
				{
					selectList: [
						{title: "Все адреса"},
						{title: "Профсоюзная 1, корп. 2"},
						{title: "Профсоюзная 1, корп. 2"},
						{title: "Профсоюзная 1, корп. 2"},
						{title: "Профсоюзная 1, корп. 2"},
						{title: "г. Москва, Московская 1, корп. 2"},
						{title: "ул. Кирова, д. 5"},
					],
					selectListShow: false,
					selectListSel: {title: "Все адреса", data: {}},
				},
				{
					selectListShow: false,
					selectListSel: {title: "Корневая категория", data: {}},
				},
				{
					selectListShow: false,
					selectListSel: {title: "Не выбран", data: {}},
				},
			],

			selectedData: [],

			selCat: [],
			delText: '',
		}
	},

	mounted() {
		this.$store.dispatch('fetchCategoriesTypes')
	},

	computed: {
		...mapGetters({
					categoriesList: 'getCategories',
					addressesList: 'getAddresses',
					categoriesTypesList: "getCategoriesTypes",
			}),
		dragOptions() {
			return {
				animation: 200,
				group: "description",
				disabled: false,
				ghostClass: "ghost"
			};
		},
	},

	methods: {

		changeTreeOrder(node) {
			node.sort_order = (node.parent.children.indexOf(node) + 1) * 1000
			node.parent_category = node.parent.id || null

			this.$load(async () => {
				await this.$api.category.update(node)
					.then(() => 0)
			})
		},

		getSelCategoryStore(nodeId) {
			return this.$store.getters.getSelCategoryStore(nodeId)
		},

		getPhoto({list}) {
			this.newIconData.photo.imagesList = list
		},
		getIcon({list}) {
			this.newIconData.icon.imagesList = list
		},

		removePhoto({lists, id}) {
			this.delText = "картинку"

			this.openDelDialog( (id, lists) => {
				lists.imagesList.splice(id, 1)
			}, id, lists )
		},

		selGlobalCategory(data) {
			this.$store.dispatch('fetchApplications')
				.then(() => {
					const recursionUnCurrent = (item) => {
						item.map(category => {
							category.currentCategory = false
							if (category.id == data.id) category.currentCategory = true
							if (category.children) recursionUnCurrent(category.children)
						})
					}
					recursionUnCurrent(this.$store.state.applicationModule.categories)

					localStorage.setItem('lastSelCategoryId', data.id)
					this.$store.state.applicationModule.selCategory = data
				})
		},

		toggleSelectList(selectList) {
			if (!selectList.selectListShow) {
				this.selectLists.map(select => {
					select.selectListShow = false
				})
			}
			selectList.selectListShow = !selectList.selectListShow
		},
		toggleSelectListEmit(selectList) {
			if (!selectList.selectListShow) {
				this.selectLists.map(select => {
					select.selectListShow = false
				})
			}
		},

		addChildCat(parent, data="Роллы") {
			if (typeof data == 'string') {
				const createdObject = {
					title: data || "Не назван",
					model: false,
					currentCategory: false,
					selected: false,
					sort_order: (this.categoriesList.length + 1) * 1000,
					parent_category: parent.id,
					trademark: this.$store.getters.getTrademark,
					type: this.selectLists[2].id || this.categoriesTypesList[0].id,
					icons: this.newIconData || {
						photo: {
							imagesList: [],
						},
						icon: {
							imagesList: [],
						}
					}
				}

				parent.children.push(createdObject)

				this.$load(async () => {
					await this.$api.category.create(createdObject)
						.then(() => 0)
				})

			} else {
				parent.children.push(data)
			}
			
		},

		deletAllNodes() {
			this.openDelPopup = true
			this.selCat = false
		},

		removeSelectedCategory() {
			this.openDelPopup = false 

			if (this.selCat) {
				this.$load(async () => {
					await this.$api.category.delete(this.selCat[1].id)
						.then(() => 0)
				})

				this.selCat[2]
					? this.selCat[0](this.selCat[1], this.selCat[2])
					: this.selCat[0](this.selCat[1])
			} else {
				for(let node of this.selectedData) {
					this.arrayRemove(node.parent.children, node)
					this.$load(async () => {
						await this.$api.category.delete(node.id)
							.then(() => 0)
					})
				}
				this.selectedData = []
			}
		},

		arrayRemove(arr, v) {
			let index;
			let count = 0;

			while ((index = arr.indexOf(v)) > -1) {
				arr.splice(index, 1);
				count++;
			}

			return count;
		},

		closeDelPopup(state) {
			this.openDelPopup = state
			this.selCat = []
			this.newIconData = {
				photo: {
					imagesList: [],
				},
				icon: {
					imagesList: [],
				}
			}
		},

		openDelDialog(method, data, list) {
			this.openDelPopup = true
			this.selCat = [method, data, list]
		},

		closeAddPopup(state) {
			this.openAddPopup = state
		},

		handleEl(nodeVm) {			
			return nodeVm.$el.querySelector(".handle-table-outside")
		},
		allSelectedChange(data) {
			if (event.currentTarget.checked) {
				this.selectedData.push(data)
			} else {
				this.selectedData.splice(this.selectedData.indexOf(data), 1)
			}
		},

		toggleMenu() {
			this.$store.state.applicationModule.categoryMenuShow = !this.$store.state.applicationModule.categoryMenuShow
		},

		selSelectList(item, id) {
			this.selectLists[id].selectListShow = false
			this.selectLists[id].selectListSel = item
		},

		addCategoryPopup() {
			const parent = this.selectLists[1].selectListSel

			if (parent._id) {
				this.addChildCat(parent, this.newCatName)
			} else {
				const createdObject = {
					title: this.newCatName || "Не назван",
					model: false,
					currentCategory: false,
					selected: false,
					type: this.categoriesTypesList[0].id,
					sort_order: (this.categoriesList.length + 1) * 1000,
					parent_category: null,
					trademark: this.$store.getters.getTrademark,
					icons: this.newIconData || {
						photo: {
							imagesList: [],
						},
						icon: {
							imagesList: [],
						}
					}
				}

				this.categoriesList.push(createdObject)

				this.$load(async () => {
					await this.$api.category.create(createdObject)
						.then(() => 0)
				})
			}

			this.newCatName = ""
			this.newIconData = {
				photo: {
					imagesList: [],
				},
				icon: {
					imagesList: [],
				}
			}
			this.closeAddPopup(false)
		},

		editCategoryPopup() {
			const index = !this.menuActAddress
										? this.editCategoryData.parent?.children.indexOf(this.editCategoryData)
										: this.addressesList.indexOf(this.editCategoryData),
						item = !this.menuActAddress
										? this.categoriesList[index]
										: this.addressesList[index]

			if (!this.menuActAddress) {
				if (this.editCategoryData.parent._id != this.selectLists[1].selectListSel._id) {
					const category = this.editCategoryData.parent.children.splice(index, 1)[0];

					category.parent = this.selectLists[1].selectListSel

					if (this.selectLists[1].selectListSel.isRoot) {
						this.categoriesList.push(category)
					} else {
						this.selectLists[1].selectListSel.children.push(category)
					}

					this.$load(async () => {
						await this.$api.category.update(category)
							.then(() => 0)
					})
				}
			}

			if (item.type.id != this.selectLists[2].id || !item.type.id) {
				item.type = this.selectLists[2].selectListSel

				if (!this.menuActAddress) {
					this.$load(async () => {
						await this.$api.category.update(item)
							.then(() => 0)
					})
				}
			}

			if (this.newCatName != item.title) {
				if (this.newCatName.trim() != "") {
					item.title = this.newCatName
				} else {
					this.editCategoryData.title = "Не назван"
				}
				if (!this.menuActAddress) {
					this.$load(async () => {
						await this.$api.category.update(item)
							.then(() => 0)
					})
				}
			}

			this.newCatName = ""
			this.newIconData = {
				photo: {
					imagesList: [],
				},
				icon: {
					imagesList: [],
				}
			}
			this.closeAddPopup(false)
			this.editCategory = false
			this.editCategoryData = {}
		},

		removeChildAt(uuid) {
			this.categoriesList.forEach(element => {
				let index = element.children.findIndex(item => item.uuid == uuid)
				if (index != -1) {
					element.children.splice(index, 1)
				}
			})
		},

		changeCategory(event) {
			for (let tabsControlMenu of event.currentTarget.parentElement.querySelectorAll("li.tabs-control-menu__list") ) {
				tabsControlMenu.classList.remove("tabs-control-menu__active")
			}
			event.currentTarget.classList.add("tabs-control-menu__active")
		},

		addPopup(data) {
			this.editCategory = false
			this.newIconData = {
				photo: {
					imagesList: [],
				},
				icon: {
					imagesList: [],
				}
			}
			
			this.openAddPopup = true
			this.selectLists[1].selectListSel = data
		},

		editCat(data) {
			this.editCategory = true
			this.editCategoryData = data

			this.openAddPopup = true
			this.newCatName = data.title
			this.newIconData = data.icons || {
				photo: {
					imagesList: [],
				},
				icon: {
					imagesList: [],
				}
			}
			if (data.type) {
				this.selectLists[2].selectListSel = data.type
			}

			if (data.parent) {
				if (data.parent.isRoot) {
					this.selectLists[1].selectListSel = {name: "Корневая категория", isRoot:true, _id:data.parent._id, data: data.parent}
				} else {
					this.selectLists[1].selectListSel = data.parent
				}
			}
		}
	},
}
</script>

<style lang="css" scoped>
</style>