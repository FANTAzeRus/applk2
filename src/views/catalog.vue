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
						<svg @click="allCopyItem" class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg @click="blockAllSelected" class="icon icon--attention">
							<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
						</svg>
						<svg @click="removeAllSelected" class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						</div>
					</div>

					<div v-show="!selectedCount">
					</div>

					<filter-search/>

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
					<div @click="sortBy($event, 'name')" class="table-products__item table-products__item--name table-products__item--sortable">
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
					<div @click="sortBy($event, 'price')" class="table-products__item table-products__item--price table-products__item--sortable">
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
					v-bind="dragOptions"
					v-model="searchedCatalogPositions"
					handle=".handle-table"
					class="table-products"
				>
					<!--Product Table row-->
					<div
						v-for="(item, idx) in searchedCatalogPositions"
						:key="item.title"
						class="table-products__list table-products__list--catalog"
						v-show="
						idx < selectedPaginationCount * paginationPage
						&& (idx >= selectedPaginationCount * (paginationPage - 1))"
					>
						<!-- :class="item.inner ? 'table-products__list--dark-grey' : ''" -->
					<!-- item.show || !item.inner -->
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
							<!-- <img src="@/assets/img/public/table-products-none.svg" alt="" />
							<span class="table-products__item--photo--nophoto">Нет<br> фото</span> -->
							<img :class="item.blocked ? 'grayFilter' : ''" :src="item.image" alt="" />
							<svg :class="item.blocked ? 'show' : ''" class="icon icon--stop">
								<use xlink:href="@/assets/img/public/icons-pack.svg#stop"></use>
							</svg>
						</div>
						<!-- AA3456 -->
						<div v-if="!checkChild(item)" class="table-products__item table-products__item--vendor-code">{{item.article}}</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--name">{{item.title}}</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--desciption">
							<!-- {{item.description}} -->
							<img class="icon--desc" src="@/assets/img/public/icons/rus.svg" alt="" />
							<img class="icon--desc" src="@/assets/img/public/icons/ukr.svg" alt="" />
						</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--bju">
							<svg class="icon icon--close-round">
								<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
							</svg>
						</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--marker">
							<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/spicy.svg" alt="" />
							<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/vegan.svg" alt="" />
							<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-star.jpg" alt="" />
						</div>
						<div v-if="!checkChild(item) && !item.inner" class="table-products__item table-products__item--promo">
							<div class="text-label">Акция</div>
							</div>

						<!-- <div v-if="item.inner" class="table-products__item table-products__item--name table-products-name-2-pos">Размер пиццы 30см, тесто тонкое, мука классическая</div>
						<div v-if="item.inner" class="table-products__item table-products__item--bju table-products-bju-3-pos">
						Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
						</div> -->

						<div v-if="!checkChild(item)" class="table-products__item table-products__item--weight">{{item.weight}}</div>
						<div v-if="!checkChild(item)" class="table-products__item table-products__item--price">{{item.price}} ₴</div>

						<!-- <div v-if="checkChild(item)" class="table-products__item table-products__item--vendor-code act">{{item.article}}</div>
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
						<div v-if="checkChild(item)" class="table-products__item table-products__item--price">500-1000 ₽</div> -->

						<div class="table-products__item table-products__item--icons">
							<svg @click="copyItem(idx)" class="icon icon--copy">
								<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
							</svg>
							<svg @click="blockItem(idx)" :class="item.blocked ? 'icon--attention--hover' : ''" class="icon icon--attention">
								<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
								<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
							</svg>
							<svg @click="$router.push({name:'card-product-id', params:{id: item.id}})" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
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
							<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
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
							<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
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
							<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
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
							<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
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
							<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
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
							<use v-if="theme === 'light'" xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
							<use v-else xlink:href="@/assets/img/public/icons-pack.svg#attention-black"></use>
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

				<pagination
					:listLength="searchedCatalogPositions ? searchedCatalogPositions.length : 0"
					@changePage="changePage"
					:page.sync="paginationPage"
				/>

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
import Pagination from '@/components/parts/Pagination'
import FilterSearch from '@/components/parts/FilterSearch'
import DefaultPage from '@/components/DefaultPage'
import Popup from "@/components/Popup"
import draggable from "vuedraggable";
import {mapGetters} from 'vuex'

export default {

	name: 'table-page',

	components: {
		DefaultPage,
		Pagination,
		draggable,
		FilterSearch,
		Popup
	},

	mounted() {
		this.$store.dispatch('fetchApplications')
			.then(() => {
				const lastSelCategoryId = localStorage.getItem('lastSelCategoryId'),
							findItem = this.categoriesList.find(item => item.id == lastSelCategoryId)
				if (lastSelCategoryId && findItem) {
					this.selCategory(findItem)
				} else {
					this.selCategory(this.categoriesList[0])
				}
			})
	},

	data() {
		return {
			paginationPage: 1,
			selectedPaginationCount: 10,
			
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

			openDelPopup: false,
			delName: 'позицию',

			selectAllInput: false,

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

			search: '',

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
		...mapGetters({
					categoriesList: 'getCategories',
					catalogPositions: 'catalogPositions',
					theme: 'themeMode',
			}),

		searchedCatalogPositions: {
			get() {
				return this.search.length >= 3
					? this.catalogPositions.filter(item => {
						return [item.title, item.description].some(vocular => {
							return vocular.toLowerCase().includes(this.search.toLowerCase())
						})
					})
					: this.catalogPositions
			},
			set(value) {
				this.$store.state.applicationModule.selCategory.positions = value
			}
		},

		selectedCount() {
			if (this.catalogPositions) {
				return this.catalogPositions.filter(item => item?.selected).length
			} else {
				return 0
			}
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

		changePage(count) {
			this.selectedPaginationCount = count
		},

		selCategory(data) {
			if (this.$store.state.applicationModule.categories.length) {
				const recursionUnCurrent = (item) => {
					item.map(select => {
						select.currentCategory = false
						if (select.children) recursionUnCurrent(select.children)
					})
				}
				recursionUnCurrent(this.$store.state.applicationModule.categories)

				data.currentCategory = true
				localStorage.setItem('lastSelCategoryId', data.id)
				this.$store.state.applicationModule.selCategory = data
			} else {
				return false
			}
		},
		checkChild(item) {
			return Boolean(item.childs?.length)
		},

		toggleMenuList(childs, event) {
			event.currentTarget.classList.toggle('open')
			childs.forEach(childId => {
				this.catalogPositions[childId - 1].show = !this.catalogPositions[childId - 1].show
			})
		},

		closeFilterTooltips() {
			const openTooltips = document.querySelectorAll(".tooltip-orders.show")
			const selectedRow = document.querySelector(".table-products__list--selected")

			this.$refs.tooltipMask.classList.remove("show")
			openTooltips.forEach(openTooltip => openTooltip.classList.remove("show"))
			
			selectedRow?.classList.remove("table-products__list--selected")
		},

		sortBy(event, key) {
			const selectedSortable = document.querySelector('.table-products__item--sortable.selected');
			
			switch (key.toLowerCase()) {
				case 'name':
					if (selectedSortable && !selectedSortable.classList.contains('unselected')) {
						this.catalogPositions.sort((a, b) => (a.title > b.title) ? 1 : -1)
					} else {
						this.catalogPositions.sort((a, b) => (a.title < b.title) ? 1 : -1)
					}
					break
				case 'price':
					if (selectedSortable && !selectedSortable.classList.contains('unselected')) {
						this.catalogPositions.sort((a, b) => (a.price > b.price) ? 1 : -1)
					} else {
						this.catalogPositions.sort((a, b) => (a.price < b.price) ? 1 : -1)
					}
					break
			}

			if (selectedSortable == event.currentTarget) {
				event.currentTarget.classList.add("selected")
				event.currentTarget.classList.toggle("unselected")
			} else {
				selectedSortable?.classList.remove("selected", "unselected")
				event.currentTarget.classList.add("selected")
			}
		},

		blockItem(idx) {
			this.catalogPositions[idx].blocked = !this.catalogPositions[idx].blocked;
		},

		copyItem(idx) {
			const newItem = Object.assign({}, this.catalogPositions[idx])
			newItem.id += 100

			let preventNumber = newItem.title.split(" ").pop()

			if (+preventNumber) {
				newItem.title = `${newItem.title.slice(0, newItem.title.length - preventNumber.length)}${+preventNumber + 1}`
			} else {
				newItem.title += ' 1'
			}

			this.catalogPositions.splice(idx, 0, newItem)
		},

		closeTooltips() {
			const openTooltips = document.querySelectorAll(".tooltip-orders.show")
			const selectedRow = document.querySelector(".table-products__list--selected")

			this.$refs.tooltipMask.classList.remove("show")
			openTooltips.forEach(openTooltip => openTooltip.classList.remove("show"))
			
			selectedRow?.classList.remove("table-products__list--selected")
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
						this.catalogPositions.splice(idx, 1);
						this.openDelPopup = false
					})
			} else {
				this.catalogPositions.splice(idx, 1);
				this.openDelPopup = false
			}
			
		},

		removeAllSelected() {
			this.openDelDialog("позици")
					.then(() => {
						this.catalogPositions.filter(item => item.selected).forEach(row => {
							this.removeAt(this.catalogPositions.findIndex(item => item.id == row.id))
						})
					})
			
		},

		blockAllSelected() {
			this.catalogPositions.filter(item => item.selected).forEach(row => {
				this.blockItem(this.catalogPositions.findIndex(item => item.id == row.id))
			})
		},

		allCopyItem() {
			this.catalogPositions.filter(item => item.selected).forEach(row => {
				this.copyItem(this.catalogPositions.findIndex(item => item.id == row.id))
			})
		},

		selectAll() {
			if (!this.selectAllInput) {
				this.catalogPositions.map(item => item.selected = true)
			} else {
				this.catalogPositions.map(item => item.selected = false)
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