<template>
	<!--Default page-->
	
	<default-page :pageOptions="pageOptions">
		<section class="content">
			<div class="content_block_grey content_block_grey--catalog">
				
				<!--Product Table header block-->
				<div class="table-heder-products table-heder-products--catalog">
					<div v-show="selectedCount" class="table-heder-products__block">
						<div class="table-heder-products__label">{{selectedCount}}</div>
						<div class="table-heder-products__label-text">{{selectedCount}} выделен</div>
						<div class="table-heder-products__battons">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg @click="blockAllSelected" class="icon icon--attention">
							<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg @click="removeAllSelected" class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>

					<div v-show="!selectedCount">
					</div>
					
					<!--Filter and Search block-->
					<div class="table-heder-filtr-search table-heder-filtr-search--catalog">
						<a @click.prevent="openTooltip" class="table-heder-filtr-search__filtr" href="">
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
												{{condition.selectedCondition.data}}
											</div>
											<ul v-if="selectList.length && condition.selectedCondition.opened" class="select__list">
												<li
													v-for="(selectItem, index) in selectList"
													:key="index"
													@click="selCondition(selectItem, idx)"
													class="select__item"
												>
													{{selectItem}}
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

										<multi-select :selectOptions="condition.selectedMark" class="select-box--small"/>

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
								Добавить фильтр
							</div>
						</div>
						<form class="table-heder-filtr-search__search" action="">
							<div class="table-heder-filtr-search__search--button" type="submit">
								<svg class="icon icon--zoom">
										<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
								</svg>
							</div>
							<input class="table-heder-filtr-search__input" type="text" placeholder="Поиск..." name="search">
						</form>
					</div>
					<!--Filter and Search block end-->
					
					<div class="table-heder-new-position">
						<router-link :to="{name:'card-product'}" class="button table-heder-new-position__button">Создать позицию</router-link>
					</div>
				</div>
				<!--Product Table header block end-->
				
				<div class="separator_all_grey"></div>

				<!--Product Table row-->
				<div class="table-products__list table-products__list--catalog table-products__list--grey">
					<div class="table-products__item table-products__item--menudrop"></div>
					<div class="table-products__item table-products__item--check">
					<label @input="selectAll" class="checkbox checkbox--filled checkbox--super--small">
						<input v-model="selectAllInput" class="checkbox__input" type="checkbox">
						<span class="checkbox__span"></span>
					</label>
					</div>
					<div class="table-products__item table-products__item--photo">Фото</div>
					<div class="table-products__item">Артикул</div>
					<div @click="sortBy" class="table-products__item table-products__item--name table-products__item--sortable">
						Название
						<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
						</svg>
					</div>
					<div class="table-products__item table-products__item--desciption">Описание</div>
					<div class="table-products__item table-products__item--bju">БЖУ</div>
					<div class="table-products__item table-products__item--marker">Маркеры</div>
					<div class="table-products__item table-products__item--promo">Акции</div>
					<div class="table-products__item table-products__item--weigh">Вес</div>
					<div @click="sortBy" class="table-products__item table-products__item--price table-products__item--sortable">
						Цена
						<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
						</svg>
					</div>
					<div class="table-products__item table-products__item--icon"></div>
				</div>
				<!--Product Table row end-->  
				
				<!--Product Table block-->
				<draggable
					tag="div"
					v-model="catalogItems"
					v-bind="dragOptions"
					handle=".handle-table"
					class="table-products"
				>
					<!--Product Table row-->        
					<div
						v-for="(item, idx) in catalogItems"
						:key="item.name"
						class="table-products__list table-products__list--catalog"
						:class="item.inner ? 'table-products__list--dark-grey' : ''"
						v-show="item.show || !item.inner"
					>        
						<a class="handle-table table-products__item table-products__item--menudrop table-products">
							<svg class="icon icon--menu">
								<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
							</svg>
						</a>
						<div class="table-products__item table-products__item--check">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input v-model="item.selected" class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
						</div>

						<div class="table-products__item table-products__item--photo">
							<img v-if="idx == 3" src="@/assets/img/public/table-products-none.svg" alt="" />
							<span v-if="idx == 3" class="table-products__item--photo--nophoto">Нет<br> фото</span>
							<img v-if="idx != 3" :class="item.blocked ? 'grayFilter' : ''" src="@/assets/img/public/pic/table-products-photo1.svg" alt="" />
							<svg v-if="idx != 3" :class="item.blocked ? 'show' : ''" class="icon icon--stop">
								<use xlink:href="@/assets/img/public/icons-pack.svg#stop"></use>
							</svg>
						</div>
						<!-- AA3456 -->
						<div v-if="!checkChild(item)" class="table-products__item table-products__item--vendor-code">{{item.name}}</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--name">Кисло-сладкий цыпленок</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--desciption">
							<img class="icon--desc" src="@/assets/img/public/icons/rus.svg" alt="" />
							<img class="icon--desc" src="@/assets/img/public/icons/ukr.svg" alt="" />
						</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--bju">
							<svg class="icon icon--close-round">
								<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
							</svg>
						</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--marker">
							<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-moon.jpg" alt="" />
							<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-tree.jpg" alt="" />
							<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-star.jpg" alt="" />
						</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--promo">
							<div class="text-label">Акция</div>
							</div>

						<div v-if="item.inner" class="table-products__item table-products__item--name table-products-name-2-pos">Размер пиццы 30см, тесто тонкое, мука классическая</div>
						<!--Product Table 3 cell-->
						<div v-if="item.inner" class="table-products__item table-products__item--bju table-products-bju-3-pos">
						Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
						</div>

						<div v-if="!checkChild(item)" class="table-products__item table-products__item--weight">1 пуч</div>
						<div v-if="!checkChild(item)" class="table-products__item table-products__item--price">1000 ₴</div>

						<div v-if="checkChild(item)" class="table-products__item table-products__item--vendor-code act">{{item.name}}</div>
						<div v-if="checkChild(item)" class="table-products__item table-products__item--name table-products-name-2-pos">
							<ul class="table-products__item--name--ul">    
								<li @click="toggleMenuList(item.childs, $event)" class="table-products__item--name--li">
									<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.09995 5.88897L-4.86374e-05 -4.45856e-07L10.2 4.45856e-07L5.09995 5.88897Z" fill="#E6442F"/>
									</svg>
									<div class="table-products__item--name--li--zag">Пирог</div>
									2 варианта
								</li>
							</ul>
						</div>
						<div v-if="checkChild(item)" class="table-products__item table-products__item--bju"></div>
						<div v-if="checkChild(item)" class="table-products__item table-products__item--marker"></div>
						<div v-if="checkChild(item)" class="table-products__item table-products__item--promo"></div>
						<div v-if="checkChild(item)" class="table-products__item table-products__item--weight"></div>
						<div v-if="checkChild(item)" class="table-products__item table-products__item--price">500-1000 ₽</div>

						<div class="table-products__item table-products__item--icons">
							<svg class="icon icon--copy">
								<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
							</svg>
							<svg @click="blockItem(idx)" :class="item.blocked ? 'icon--attention--hover' : ''" class="icon icon--attention">
								<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							</svg>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							<svg @click="removeAt(idx, true)" class="icon icon--trash">
								<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
							</svg>
						</div>
					</div>
					<!--Product Table row end-->

					<!--Product Table row-->        
					<div v-if="false" class="table-products__list">  
						<a class="table-products__item table-products__item--menudrop">
						<svg class="icon icon--menu">
							<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
						</svg>
						</a>
						<div class="table-products__item table-products__item--check">
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox" checked>
							<span class="checkbox__span"></span>
						</label>
						</div>
						<div class="table-products__item table-products__item--photo">
							<img src="@/assets/img/public/pic/table-products-photo2.svg" alt="" />
							<svg class="icon icon--stop">
								<use xlink:href="@/assets/img/public/icons-pack.svg#stop"></use>
							</svg>
						</div>
						<div class="table-products__item table-products__item--vendor-code">AA3456</div>
						<div class="table-products__item table-products__item--name">Цыпленок ранч</div>
						<div class="table-products__item table-products__item--desciption">
						<img class="icon--desc" src="@/assets/img/public/icons/rus-grey.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--bju">
						<img class="icon icon--closed-grey" src="@/assets/img/public/icons/icon--closed-grey.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--marker">
						<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-moon-grey.jpg" alt="" />
						<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-tree-grey.jpg" alt="" />
						</div>
						<div class="table-products__item table-products__item--promo">
						<div class="text-label text-label-grey">ХИТ</div>
						</div>
						<div class="table-products__item table-products__item--weight">
						100 гр.
						</div>
						<div class="table-products__item table-products__item--price">
						500 ₽
						</div>
						<div class="table-products__item table-products__item--icons">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg class="icon icon--attention">
							<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>
					<!--Product Table row end-->
					
					<!--Product Table row-->
					<div v-if="false" class="table-products__list">  
						<a class="table-products__item table-products__item--menudrop">
						<svg class="icon icon--menu">
							<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
						</svg>
						</a>
						<div class="table-products__item table-products__item--check">
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
						</label>
						</div>
						<div class="table-products__item table-products__item--photo">
						<img src="@/assets/img/public/table-products-none.svg" alt="" />
						<span class="table-products__item--photo--nophoto">Нет фото</span>
						</div>
						<div class="table-products__item table-products__item--vendor-code">AA3456</div>
						<div class="table-products__item table-products__item--name">Чизбургер-пицца</div>
						<div class="table-products__item table-products__item--desciption">
						<img class="icon icon--closed-grey" src="@/assets/img/public/icons/icon--closed-grey.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--bju">
						<svg class="icon icon--close-round">
							<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
						</svg>
						</div>
						<div class="table-products__item table-products__item--marker">
						<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-moon.jpg" alt="" />
						</div>
						<div class="table-products__item table-products__item--promo">
						<img class="icon icon--closed-grey" src="@/assets/img/public/icons/icon--closed-grey.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--weight">
						200 гр.
						</div>
						<div class="table-products__item table-products__item--price">
						300 ₽
						</div>
						<div class="table-products__item table-products__item--icons">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg class="icon icon--attention">
							<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>
					<!--Product Table row end-->
					
					<!--Product Table row-->
					<div v-if="false" class="table-products__list">  
						<a class="table-products__item table-products__item--menudrop">
						<svg class="icon icon--menu">
							<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
						</svg>
						</a>
						<div class="table-products__item table-products__item--check">
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
						</label>
						</div>
						<div class="table-products__item table-products__item--photo">
						<img src="@/assets/img/public/pic/table-products-photo4.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--vendor-code act">AA3456</div>
						<div class="table-products__item table-products__item--name table-products-name-2-pos">
						<ul class="table-products__item--name--ul">    
							<li class="table-products__item--name--li">
							<div class="table-products__item--name--li--zag">Пирог</div>
							2 варианта
							</li>
						</ul>
						</div>
						<div class="table-products__item table-products__item--bju">

						</div>
						<div class="table-products__item table-products__item--marker">
						</div>
						<div class="table-products__item table-products__item--promo">
						</div>
						<div class="table-products__item table-products__item--weight">
						</div>
						<div class="table-products__item table-products__item--price">
						500-1000 ₽
						</div>
						<div class="table-products__item table-products__item--icons">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg class="icon icon--attention">
							<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>
					<!--Product Table row end-->
					
					<!--Product Table row-->
					<div v-if="false" class="table-products__list table-products__list--dark-grey">  
						<a class="table-products__item table-products__item--menudrop">
						<svg class="icon icon--menu">
							<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
						</svg>
						</a>
						<div class="table-products__item table-products__item--check">
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
						</label>
						</div>
						<div class="table-products__item table-products__item--photo">
						<img src="@/assets/img/public/pic/table-products-photo5.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--vendor-code">AA3457</div>
						<div class="table-products__item table-products__item--name table-products-name-2-pos">Размер пиццы 30см, тесто тонкое, мука классическая</div>
						<!--Product Table 3 cell-->
						<div class="table-products__item table-products__item--bju table-products-bju-3-pos">
						Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
						</div>
						<div class="table-products__item table-products__item--weight">
						100 гр.
						</div>
						<div class="table-products__item table-products__item--price">
						500 ₽
						</div>
						<div class="table-products__item table-products__item--icons">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg class="icon icon--attention">
							<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>
					<!--Product Table row end-->
					
					<!--Product Table row-->
					<div v-if="false" class="table-products__list table-products__list--dark-grey">  
						<a class="table-products__item table-products__item--menudrop">
						<svg class="icon icon--menu">
							<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
						</svg>
						</a>
						<div class="table-products__item table-products__item--check">
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
						</label>
						</div>
						<div class="table-products__item table-products__item--photo">
						<img src="@/assets/img/public/pic/table-products-photo6.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--vendor-code">AA3458</div>
						<div class="table-products__item table-products__item--name table-products-name-2-pos">Размер пиццы 50см, тесто тонкое, мука классическая</div>
						<!--Product Table 3 cell-->
						<div class="table-products__item table-products__item--bju table-products-bju-3-pos">
						Белки 100 гр, Жиры 200 гр, Углеводы 200 гр. Калории 1000 ккал
						</div>
						<div class="table-products__item table-products__item--weight">
						100 гр.
						</div>
						<div class="table-products__item table-products__item--price">
						1000 ₴
						</div>
						<div class="table-products__item table-products__item--icons">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg class="icon icon--attention">
							<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>
					<!--Product Table row end-->
					
					<!--Product Table row-->
					<div v-if="false" class="table-products__list">  
						<a class="table-products__item table-products__item--menudrop">
						<svg class="icon icon--menu">
							<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
						</svg>
						</a>
						<div class="table-products__item table-products__item--check">
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
						</label>
						</div>
						<div class="table-products__item table-products__item--photo">
						<img src="@/assets/img/public/pic/table-products-photo7.svg" alt="" />
						</div>
						<div class="table-products__item table-products__item--vendor-code">AA3458</div>
						<div class="table-products__item table-products__item--name table-products-name-2-pos">Цыпленок ранч</div>
						<div class="table-products__item table-products__item--bju">
						<svg class="icon icon--close-round">
							<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
						</svg>
						</div>
						<div class="table-products__item table-products__item--marker">
						<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-moon.jpg" alt="" />
						<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-tree.jpg" alt="" />
						<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-star.jpg" alt="" />
						</div>
						<div class="table-products__item table-products__item--promo">
						<div class="text-label">Акция</div>
						</div>
						<div class="table-products__item table-products__item--weight">
						1 пуч
						</div>
						<div class="table-products__item table-products__item--price">
						1000 ₴
						</div>
						<div class="table-products__item table-products__item--icons">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg class="icon icon--attention">
							<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>
					<!--Product Table row end-->
					
				</draggable>
				<!--Product Table block end-->
				
				<pagination />
			
			</div>

			<popup :show="openDelPopup" @closePopup="closeDelPopup">
				<h3>Вы действительно хотите <br>удалить {{delName}}?</h3>
				<div class="btn-box btn-box--popup">
					<button ref="dialogButton" class="button">Да, удалить</button>
					<button @click="closeDelPopup" class="button button--grey">Нет, отменить</button>
				</div>
			</popup>
		</section>
		<div @click="closeTooltips" class="tooltip-mask" ref="tooltipMask"></div>
	</default-page>

	<!--Default page end-->
</template>

<script>
// document.querySelector('.js-select').select2({
//   minimumResultsForSearch: Infinity
// });
import MultiSelect from "@/components/parts/MultiSelect"
import Pagination from '@/components/parts/Pagination'
import DefaultPage from '@/components/DefaultPage'
import Popup from "@/components/Popup"
import draggable from "vuedraggable";

export default {

	name: 'table-page',

	components: {
		DefaultPage,
		Pagination,
		draggable,
		MultiSelect,
		Popup
	},

	data() {
		return {
			selectList: [
				"Маркеры",
				"Цена",
				"Название",
				"Акции",
				"Вес"
			],

			openDelPopup: false,
			delName: 'позицию',

			selectAllInput: false,

			catalogItems: [
				{
					id:1,
					blocked: false,
					inner: false,
					show: true,
					name:"AA3456",
					selected: false
				},
				{
					id:2,
					blocked: false,
					inner: false,
					show: true,
					name:"AA3756",
					selected: false
				},
				{
					id:3,
					blocked: false,
					inner: false,
					show: true,
					name:"AA3453",
					selected: false
				},
				{
					id:4,
					inner: false,
					childs: [5, 6, 7],
					blocked: false,
					name:"AB3456",
					selected: false
				},
				{
					id:5,
					inner: true,
					show: true,
					blocked: false,
					name:"BA3456",
					selected: false
				},
				{
					id:6,
					inner: true,
					show: true,
					blocked: false,
					name:"AC3456",
					selected: false
				},
				{
					id:7,
					inner: true,
					show: true,
					blocked: false,
					name:"YA3456",
					selected: false
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
								data: "Маркеры",
								model: false
							},
							{
								data: "Цена",
								model: false
							},
							{
								data: "Название",
								model: false
							},
							{
								data: "Акции",
								model: false
							},
							{
								data: "Вес",
								model: false
							},
						],
						selectListSels: [],
						selectListShow: false
					}
				},
			],

			pageOptions: {
				name: "catalog",
				components: {
					menuAct: true,
					content: true,
					breadcrumbs: true,
				}
			}
		}
	},

	computed: {
		selectedCount() {
			return this.catalogItems.filter(item => item?.selected).length
		},

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
		checkChild(item) {
			return Boolean(item.childs?.length)
		},

		toggleMenuList(childs, event) {
			event.currentTarget.classList.toggle('open')
			childs.forEach(childId => {
				this.catalogItems[childId - 1].show = !this.catalogItems[childId - 1].show
			})
		},

		openTooltip(event) {
			const selectedRow = document.querySelector(".table-products__list--selected")
			const openTooltip = document.querySelector(".tooltip-orders.show")

			const allClasses = Array.from(event.currentTarget.nextElementSibling.classList)
			if (
					allClasses.some(elClass => elClass == "tooltip-orders")
					&& !allClasses.some(elClass => elClass == "show")
				) {
				// close all tooltip
				openTooltip?.classList.remove("show", "show--top")
				this.$refs.tooltipMask.classList.remove("show")
				selectedRow?.classList.remove("table-products__list--selected")
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
				selectedRow?.classList.remove("table-products__list--selected")
			}
		},

		closeTooltips() {
			const openTooltips = document.querySelectorAll(".tooltip-orders.show")
			const selectedRow = document.querySelector(".table-products__list--selected")

			this.$refs.tooltipMask.classList.remove("show")
			openTooltips.forEach(openTooltip => openTooltip.classList.remove("show"))
			
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

		blockItem(idx) {
			this.catalogItems[idx].blocked = !this.catalogItems[idx].blocked;
		},

		removeCondition(idx) {
			this.conditionList.splice(idx, 1);
		},

		addCondition() {
			if (this.conditionList.length) {
				this.conditionList.push(
					{
						biOperator: {
							data: "и",
							opened: false,
							openAvailable: true
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
								data: "Маркеры",
								model: false
							},
							{
								data: "Цена",
								model: false
							},
							{
								data: "Название",
								model: false
							},
							{
								data: "Акции",
								model: false
							},
							{
								data: "Вес",
								model: false
							},
						],
							selectListSels: [],
							selectListShow: false
						}
					}
				);
			} else {
				this.conditionList.push(
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
								data: "Маркеры",
								model: false
							},
							{
								data: "Цена",
								model: false
							},
							{
								data: "Название",
								model: false
							},
							{
								data: "Акции",
								model: false
							},
							{
								data: "Вес",
								model: false
							},
						],
							selectListSels: [],
							selectListShow: false
						}
					}
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

		selSelectList(item, index) {
			this.conditionList[index].selectedMark.data[0] = item
			this.conditionList[index].selectedMark.opened = false
		},

		openDelDialog(delName) {
			this.openDelPopup = true
			this.delName = delName
			return new Promise((resolve) => {
				this.$refs.dialogButton.addEventListener('click', () => {
						resolve(true);
				}, {once: true});
			});
		},
		closeDelPopup() {
			this.openDelPopup = false
		},

		removeAt(idx, promise=false) {
			if (promise) {
				this.openDelDialog("позицию")
					.then(() => {
						this.catalogItems.splice(idx, 1);
						this.openDelPopup = false
					})
			} else {
				this.catalogItems.splice(idx, 1);
				this.openDelPopup = false
			}
			
		},

		removeAllSelected() {
			this.openDelDialog("позици")
					.then(() => {
						this.catalogItems.filter(item => item.selected).forEach(row => {
							this.removeAt(this.catalogItems.findIndex(item => item.id == row.id))
						})
					})
			
		},

		blockAllSelected() {
			this.catalogItems.filter(item => item.selected).forEach(row => {
				this.blockItem(this.catalogItems.findIndex(item => item.id == row.id))
			})
		},

		selectAll() {
			if (!this.selectAllInput) {
				this.catalogItems.map(item => item.selected = true)
			} else {
				this.catalogItems.map(item => item.selected = false)
			}
		}
	},

	watch: {
		selectedCount(newValue) {
			if (!newValue) {
				this.selectAllInput = false
			} else {
				this.selectAllInput = true
			}
		}
	}

}
</script>