<template>
	<!--Left menu Activ block-->
	<section class="menu-act">
		<svg @click="toggleMenu" v-show="!this.$store.state.categoryMenuShow" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" class="menu-act__close menu-act__close--open">
			<path d="M6.375 10.0167L5.42706 11L0.125 5.5L5.42706 1.46355e-06L6.375 0.983335L2.02089 5.5L6.375 10.0167Z" fill="#D5D5D5"/>
			<path d="M11.75 10.0167L10.8021 11L5.5 5.5L10.8021 1.46355e-06L11.75 0.983335L7.39589 5.5L11.75 10.0167Z" fill="#D5D5D5"/>
		</svg>
		<div v-show="this.$store.state.categoryMenuShow">
			<ul class="tabs-control-menu">
				<li @click='changeCategory' class="tabs-control-menu__list tabs-control-menu__active"><a class="tabs-control-menu__link" href="#">Активные</a></li>
				<li @click='changeCategory' class="tabs-control-menu__list"><a class="tabs-control-menu__link" href="#">Все</a></li>
				<svg @click="toggleMenu" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" class="menu-act__close">
					<path d="M6.375 10.0167L5.42706 11L0.125 5.5L5.42706 1.46355e-06L6.375 0.983335L2.02089 5.5L6.375 10.0167Z" fill="#D5D5D5"/>
					<path d="M11.75 10.0167L10.8021 11L5.5 5.5L10.8021 1.46355e-06L11.75 0.983335L7.39589 5.5L11.75 10.0167Z" fill="#D5D5D5"/>
				</svg>
			</ul>
			<div class="clear"></div>
			
			<div class="menu-act-heading">Выберите адрес</div>

			<div class="all_adres select-box">
				<div @click="selectLists[0].selectListShow = !selectLists[0].selectListShow" :class="['select', selectLists[0].selectListShow ? 'select--open' : '']">
					{{selectLists[0].selectListSel}}
				</div>
				<ul v-if="selectLists[0].selectList.length && selectLists[0].selectListShow" class="select__list">
					<div class="select__search">
						<button class="select__search-icon" type="submit">
							<svg class="icon icon--zoom">
									<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
							</svg>
						</button>
						<input class="select__search-input" type="text" placeholder="Поиск..." name="search">
					</div>
					<li
						v-for="(selectItem, index) in selectLists[0].selectList"
						:key="index"
						@click="selSelectList(selectItem, 0)"
						class="select__item"
					>
						{{selectItem}}
					</li>
				</ul>
			</div>
			<a href="#" class="add_adres">
				<span class="add_adres__icon"></span>
				<span>Добавить адрес</span>
			</a>
			
			<div class="menu-act-heading">Категории</div>

			<draggable-tree
				:data="categorysList"
				draggable
				cross-tree
				:getTriggerEl="handleEl"
			>
				<div slot-scope="{data, store, vm}">
					<!--
					//- data is node
					//- store is the tree
					//- vm is node Vue instance, you can get node level by vm.level
					-->

					<template>
						<div @click="selCategory(data)" class="menu-categories__lev">
							<div class="cat-org-actions">
								<svg :class="data.open ? 'arrowOpen' : 'arrowOpen open'" @click="store.toggleOpen(data)" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.36704 5.46714L0.267041 0.732864L8.46704 0.732865L4.36704 5.46714Z" fill="#D5D5D5"/>
								</svg>
								<svg class="handle-table-outside icon icon--menu">
									<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
								</svg>
							</div>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input @click="allSelectedChange( data)" v-model="data.selected" class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
							<span class="text-name">{{data.name}}</span>
							<input @keyup.enter="editName" class="text-input" v-model="data.name">
							<div class="cat-actions">
								<svg @click="addChildCat(data)" xmlns="http://www.w3.org/2000/svg" v-if="vm.level == 1" class="icon--add-child">
									<use xlink:href="@/assets/img/public/icons-pack.svg#addRect"></use>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" class="icon--hide">
									<use xlink:href="@/assets/img/public/icons-pack.svg#eye"></use>
								</svg>
								<svg @click="editName" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
								<svg @click="openDelDialog(store.deleteNode, data)" class="icon icon--trash">
									<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
								</svg>
							</div>
						</div>
					</template>
				</div>
			</draggable-tree>
			
			<div v-show="selectedData.length" class="menu-categories-hover">
				<div class="menu-categories-hover__label">{{selectedData.length}}</div>
				<span>{{selectedData.length}} выделен</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg @click="deletAllNodes" class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
			</div>
			<a @click.prevent="openAddPopup = true" href="#" class="add_adres">
				<span class="add_adres__icon"></span>
				<span>Добавить категорию</span>
			</a>
		</div>
		<popup :show="openDelPopup" @closePopup="closeDelPopup">
			<h3>Вы действительно хотите <br>удалить категорию?</h3>
			<div class="btn-box btn-box--popup">
				<button @click="removeSelectedCategory" class="button">Да, удалить</button>
				<button @closePopup="closeDelPopup" class="button button--grey">Нет, отменить</button>
			</div>
		</popup>
		<popup :show="openAddPopup" type="addCat" @closePopup="closeAddPopup">
			<h3>Создание категории</h3>

			<div class="popup__row">
				<h4>Название категории</h4>
				<input v-model="newCatName" type="text" placeholder="Введите название...">
			</div>

			<div class="popup__row">
				<h4>Выберите надкатегорию</h4>
				<div class="select-box">
					<div @click="selectLists[1].selectListShow = !selectLists[1].selectListShow" :class="['select', selectLists[1].selectListShow ? 'select--open' : '']">
						{{selectLists[1].selectListSel.name}}
					</div>
					<ul v-if="category1LvlList.length && selectLists[1].selectListShow" class="select__list">
						<div class="select__search">
							<button class="select__search-icon" type="submit">
								<svg class="icon icon--zoom">
										<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
								</svg>
							</button>
							<input class="select__search-input" type="text" placeholder="Поиск..." name="search">
						</div>
						<li
							v-for="(selectItem, index) in category1LvlList"
							:key="index"
							@click="selSelectList(selectItem, 1)"
							class="select__item"
						>
							{{selectItem.name}}
						</li>
					</ul>
				</div>
			</div>

			<div class="popup__row">
				<h4>Выберите тип категории</h4>
				<div class="select-box">
					<div @click="selectLists[2].selectListShow = !selectLists[2].selectListShow" :class="['select', selectLists[2].selectListShow ? 'select--open' : '']">
						{{selectLists[2].selectListSel}}
					</div>
					<ul v-if="selectLists[2].selectList.length && selectLists[2].selectListShow" class="select__list">
						<div class="select__search">
							<button class="select__search-icon" type="submit">
								<svg class="icon icon--zoom">
										<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
								</svg>
							</button>
							<input class="select__search-input" type="text" placeholder="Поиск..." name="search">
						</div>
						<li
							v-for="(selectItem, index) in selectLists[2].selectList"
							:key="index"
							@click="selSelectList(selectItem, 2)"
							class="select__item"
						>
							{{selectItem}}
						</li>
					</ul>
				</div>
			</div>

			<div class="popup__row popup__row--photo">
				<cards-photo-preview type="popup" title="Загрузите фото"/>
			</div>
			<div class="popup__row popup__row--photo">
				<cards-photo-preview type="popup" title="Загрузите иконку"/>
			</div>

			<button @click="addCategoryPopup" class="button button--addCat">Создать категорию</button>
		</popup>
	</section>
	<!--Left menu Activ block end-->
</template>

<script>
import {DraggableTree} from 'vue-draggable-nested-tree'
import Popup from "@/components/Popup"
import CardsPhotoPreview from "@/components/parts/CardsPhotoPreview"

export default {

	name: 'VMenuAct',

	components: {
		CardsPhotoPreview,
		DraggableTree,
		Popup,
	},

	data () {
		return {
			openDelPopup: false,
			openAddPopup: false,

			newCatName: '',

			selectLists: [
				{
					selectList: [
						"Профсоюзная 1, корп. 2",
						"Профсоюзная 1, корп. 2",
						"Профсоюзная 1, корп. 2",
						"Профсоюзная 1, корп. 2",
						"г. Москва, Московская 1, корп. 2",
						"ул. Кирова, д. 5"
					],
					selectListShow: false,
					selectListSel: "Все адреса",
				},
				{
					selectList: [],
					selectListShow: false,
					selectListSel: {name: "Не выбран", data: {}},
				},
				{
					selectList: [
						"Профсоюзная 1, корп. 2",
						"Профсоюзная 1, корп. 2",
						"Профсоюзная 1, корп. 2",
						"Профсоюзная 1, корп. 2",
						"г. Москва, Московская 1, корп. 2",
						"ул. Кирова, д. 5"
					],
					selectListShow: false,
					selectListSel: "Не выбран",
				}
			],

			selectedData: [],

			selCat: 0,
			
			categorysList: this.$store.state.categorysList
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
		},

		category1LvlList() {
			return this.categorysList.flat()
		}
	},

	methods: {
		selCategory(data){
			this.$store.state.selCategory = data
		},
		addChildCat(data, name="Роллы") {

			data.children.push(
					{
						name: name || "Не назван",
						selected: false,
					}
				)
		},

		deletAllNodes() {
			this.openDelPopup = true
			this.selCat = false
		},

		openDelDialog(method, data=false) {
			this.openDelPopup = true
			this.selCat = [method, data]
		},

		removeSelectedCategory() {
			this.openDelPopup = false 
			if (this.selCat) {
				this.selCat[0](this.selCat[1])
			} else {
				for(let node of this.selectedData) {
					this.arrayRemove(node.parent.children, node)
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
			this.$store.state.categoryMenuShow = !this.$store.state.categoryMenuShow
		},

		selSelectList(item, id) {
			this.selectLists[id].selectListShow = false
			this.selectLists[id].selectListSel = item
		},

		addCategoryPopup() {
			const data = this.selectLists[1].selectListSel
			if (data._id) {
				this.addChildCat(data, this.newCatName)
			} else {
				this.categorysList.push(
					{
						name: this.newCatName || "Не назван",
						selected: false,
					}
				)
			}
			this.newCatName = ""
			this.closeAddPopup(false)
		},

		removeChildAt(uuid) {
			this.categorysList.forEach(element => {
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

		editName(event) {
			const textName = event.currentTarget.parentElement.parentElement.querySelector('.text-name'),
						textInput = event.currentTarget.parentElement.parentElement.querySelector('.text-input');

			textName.classList.toggle("edit")
			textInput.classList.toggle("edit")
		}
	},
}
</script>

<style lang="css" scoped>
</style>