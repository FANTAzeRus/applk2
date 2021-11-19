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
							<div class="table-heder-filtr table-heder-filtr__address">
								<div>
									<h3>Выберите страну</h3>
								</div>
								<div class="table-heder-filtr__dates table-heder-filtr__dates--time select-box">
									<div @click="selectListsShow[0] = !selectListsShow[0]" :class="['select', selectListsShow[0] ? 'select--open' : '']">
										{{selectListsSel[0]}}
									</div>
									<ul v-if="selectList.length && selectListsShow[0]" class="select__list select__list--narrow">
										<div class="select__search">
											<button class="select__search-icon" type="submit">
												<svg class="icon icon--zoom">
														<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
												</svg>
											</button>
											<input class="select__search-input" type="text" placeholder="Поиск..." name="search">
										</div>
										<li
											v-for="(selectItem, index) in selectList"
											:key="index"
											@click="selSelectList(selectItem, 0)"
											class="select__item"
										>
											{{selectItem}}
										</li>
									</ul>
								</div>
							</div>

							<div class="table-heder-filtr table-heder-filtr__address">
								<div>
									<h3>Выберите город</h3>
								</div>
								<div class="table-heder-filtr__dates table-heder-filtr__dates--time select-box">
									<div @click="selectListsShow[1] = !selectListsShow[1]" :class="['select', selectListsShow[1] ? 'select--open' : '']">
										{{selectListsSel[1]}}
									</div>
									<ul v-if="selectList.length && selectListsShow[1]" class="select__list select__list--narrow">
										<div class="select__search">
											<button class="select__search-icon" type="submit">
												<svg class="icon icon--zoom">
														<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
												</svg>
											</button>
											<input class="select__search-input" type="text" placeholder="Поиск..." name="search">
										</div>
										<li
											v-for="(selectItem, index) in selectList"
											:key="index"
											@click="selSelectList(selectItem, 1)"
											class="select__item"
										>
											{{selectItem}}
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div class="table-heder-products__actions">
							<div class="card-table-new-position">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox" checked="">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Только активные</span>
								</label>
							</div>
							<a href="#" class="add_adres">
								<span class="add_adres__icon"></span>
								<span>Добавить город</span>
							</a>
							<router-link :to="{name:'add-address'}" class="button button--narrow">Добавить адрес</router-link>
						</div>

						<div class="table-heder-filtr-search table-heder-filtr-search--address table-heder-filtr-search--table">
							<a class="table-heder-filtr-search__filtr" href="">
								<svg class="icon icon--filter">
									<use xlink:href="@/assets/img/public/icons-pack.svg#filter"></use>
								</svg>
								Фильтр
							</a>
							<form class="table-heder-filtr-search__search" action="">
								<button class="table-heder-filtr-search__search--button" type="submit">
									<svg class="icon icon--zoom">
											<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
									</svg>
								</button>
								<input class="table-heder-filtr-search__input" type="text" placeholder="Поиск" name="search">
								<a class="table-heder-filtr-search__download" href="#">Выгрузить в XSL</a>
							</form>
						</div>
					</div>


					<div class="table-heder-products__other">
						<div class="table-heder-filtr table-heder-filtr__btns">
							<button @click="filterSelect" class="table-heder-filtr__btn selected"><p>Всего:</p> <span>53</span></button>
							<button @click="filterSelect" class="table-heder-filtr__btn"><p>Пилснер:</p> <span>13</span></button>
							<button @click="filterSelect" class="table-heder-filtr__btn"><p>Козловица:</p> <span>40</span></button>
						</div>

						<!--Filter and Search block-->
						<div class="table-heder-filtr-search table-heder-filtr-search--address table-heder-filtr-search--table-hide">
							<a class="table-heder-filtr-search__filtr" href="">
								<svg class="icon icon--filter">
									<use xlink:href="@/assets/img/public/icons-pack.svg#filter"></use>
								</svg>
								Фильтр
							</a>
							<form class="table-heder-filtr-search__search" action="">
								<button class="table-heder-filtr-search__search--button" type="submit">
									<svg class="icon icon--zoom">
											<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
									</svg>
								</button>
								<input class="table-heder-filtr-search__input" type="text" placeholder="Поиск" name="search">
								<a class="table-heder-filtr-search__download" href="#">Выгрузить в XSL</a>
							</form>
						</div>
					</div>
					<!--Filter and Search block end-->
				</div>
				<!--Product Table header block end-->
				
				<div class="separator_all_grey"></div>
				
				<!--Product Table block-->
				<div class="table-products">
				<!--Product Table row-->
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
								<img :class="item.blocked ? 'grayFilter' : ''" src="@/assets/img/public/pic/table-products-photo1.svg" alt="" />
								<svg :class="item.blocked ? 'show' : ''" class="icon icon--stop">
									<use xlink:href="@/assets/img/public/icons-pack.svg#stop"></use>
								</svg>
							</div>
							<!-- AA3456 -->
							<div v-if="!item.outer" class="table-products__item table-products__item--vendor-code">{{item.name}}</div>
							<div v-if="!item.outer" class="table-products__item table-products__item--name">Кисло-сладкий цыпленок</div>
							<div v-if="!item.outer" class="table-products__item table-products__item--desciption">
								<img class="icon--desc" src="@/assets/img/public/icons/rus.svg" alt="" />
								<img class="icon--desc" src="@/assets/img/public/icons/ukr.svg" alt="" />
							</div>
							<div v-if="!item.outer" class="table-products__item table-products__item--bju">
								<svg class="icon icon--close-round">
									<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
								</svg>
							</div>
							<div v-if="!item.outer" class="table-products__item table-products__item--marker">
								<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-moon.jpg" alt="" />
								<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-tree.jpg" alt="" />
								<img class="table-products__item--marker--icon" src="@/assets/img/public/icons/marker-star.jpg" alt="" />
							</div>
							<div v-if="!item.outer" class="table-products__item table-products__item--promo">
								<div class="text-label">Акция</div>
								</div>
							<div v-if="!item.outer" class="table-products__item table-products__item--weight">1 пуч</div>
							<div v-if="!item.outer" class="table-products__item table-products__item--price">1000 ₴</div>

							<div v-if="item.outer" class="table-products__item table-products__item--vendor-code act">{{item.name}}</div>
							<div v-if="item.outer" class="table-products__item table-products__item--name table-products-name-2-pos">
								<ul class="table-products__item--name--ul">    
									<li class="table-products__item--name--li">
									<div class="table-products__item--name--li--zag">Пирог</div>
									2 варианта
									</li>
								</ul>
							</div>
							<div v-if="item.outer" class="table-products__item table-products__item--bju"></div>
							<div v-if="item.outer" class="table-products__item table-products__item--marker"></div>
							<div v-if="item.outer" class="table-products__item table-products__item--promo"></div>
							<div v-if="item.outer" class="table-products__item table-products__item--weight"></div>
							<div v-if="item.outer" class="table-products__item table-products__item--price">500-1000 ₽</div>

							<div class="table-products__item table-products__item--icons">
								<svg class="icon icon--copy">
									<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
								</svg>
								<svg @click="blockItem(idx)" :class="item.blocked ? 'icon--attention--hover' : ''" class="icon icon--attention">
									<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
								<svg @click="removeAt(idx)" class="icon icon--trash">
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
				
				</div>
				<!--Product Table block end-->
				
				<pagination />
			
			</div>
		</section>

		<popup type="orders" :show="orderPopup" @closePopup="closePopup">

			<template v-slot:header>
				<h2>Заказ №1028</h2>
				<div class="print">
					<svg class="print-outer" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.3074 12.844H5.6865C5.39206 12.844 5.15332 13.1011 5.15332 13.4182C5.15332 13.7353 5.39203 13.9924 5.6865 13.9924H10.3073C10.6018 13.9924 10.8405 13.7353 10.8405 13.4182C10.8405 13.1011 10.6018 12.844 10.3074 12.844Z" fill="#D5D5D5"/>
						<path d="M10.3074 11.0332H5.6865C5.39206 11.0332 5.15332 11.2903 5.15332 11.6074C5.15332 11.9245 5.39203 12.1816 5.6865 12.1816H10.3073C10.6018 12.1816 10.8405 11.9245 10.8405 11.6074C10.8405 11.2903 10.6018 11.0332 10.3074 11.0332Z" fill="#D5D5D5"/>
						<path d="M14.7511 3.89735H13.0546V0.574196C13.0546 0.257105 12.8159 0 12.5215 0H3.4737C3.17925 0 2.94051 0.257071 2.94051 0.574196V3.89735H1.24406C0.558081 3.89735 0 4.49839 0 5.23714V11.0138C0 11.7526 0.558081 12.3536 1.24406 12.3536H2.94061V15.4358C2.94061 15.7529 3.17932 16.01 3.47379 16.01H12.5214C12.8158 16.01 13.0545 15.7529 13.0545 15.4358V12.3536H14.7511C15.4371 12.3536 15.9951 11.7526 15.9951 11.0138V5.23714C15.9951 4.49842 15.4371 3.89735 14.7511 3.89735ZM4.00685 1.14839H11.9883V3.89735H4.00685V1.14839ZM11.9882 14.8616H4.00697C4.00697 14.7494 4.00697 10.3028 4.00697 10.164H11.9882C11.9882 10.3063 11.9882 14.7537 11.9882 14.8616ZM12.5215 7.26894H11.1643C10.8698 7.26894 10.6311 7.01187 10.6311 6.69475C10.6311 6.37762 10.8698 6.12055 11.1643 6.12055H12.5215C12.8159 6.12055 13.0546 6.37762 13.0546 6.69475C13.0546 7.01187 12.8159 7.26894 12.5215 7.26894Z" fill="#9B9B9B"/>
					</svg>
					Печать
				</div>
			</template>

			<template v-slot:default>
				<div>
					<div class="tooltip-orders">
						<p class="tooltip-orders__text">Форма оплаты</p>
						<p class="tooltip-orders__text-bold">Картой online</p>
					</div>
					<div class="tooltip-orders">
						<p class="tooltip-orders__text">Статус оплаты заказа</p>
						<p class="tooltip-orders__text-green">ОПЛАЧЕН</p>
					</div>
				</div>

				<div>
					<div class="tooltip-orders">
						<div class="tooltip-orders__header">
							<h3>Заказчик</h3>
						</div>
						<ul class="tooltip-orders__list tooltip-orders__list--popup tooltip-orders__list--nom">
							<li class="tooltip-orders__item">ФИО: <div></div> <span>Иванов Александр</span></li>
							<li class="tooltip-orders__item">телефон <div></div> <span>+7 (123) 435-43-54</span></li>
							<li class="tooltip-orders__item">e-mail: <div></div> <span>test@mail.ru</span></li>
							<li class="tooltip-orders__item">день рождения: <div></div> <span>12 июня 1990 г.</span></li>
						</ul>
					</div>
					<div class="tooltip-orders">
						<div class="tooltip-orders__header">
							<h3>Адрес</h3>
						</div>
						<h4>г. Москва, ул. Профсоюзная, д.9</h4>
						<ul class="tooltip-orders__list tooltip-orders__list--popup">
							<li class="tooltip-orders__item">квартира (офис): <div></div> <span>21</span></li>
							<li class="tooltip-orders__item">этаж <div></div> <span>3</span></li>
							<li class="tooltip-orders__item">домофон <div></div> <span>3424</span></li>
						</ul>
					</div>		
					<div class="tooltip-orders tooltip-orders--review">
						<h3>Отзыв о заказе</h3>
						<img src="@/assets/img/public/icons/star-list.svg" alt="">
						<div>
							Еда как обычно вкусная, но где вы берете таких курьеров! Пришел, бросил заказ...
						</div>
						<a href="#">Читать подробнее</a>
					</div>
				</div>

				<div class="tooltip-orders tooltip-orders--orders">
					<div class="tooltip-orders__header">
						<h3>Позиции в заказе</h3>
					</div>
					<div class="tooltip-orders__table-box">
						<ul class="tooltip-orders__table table-products__list table-products__list--light-grey">
							<li class="table-products__item">№</li>
							<li class="table-products__item table-products__item--photo">Фото</li>
							<li class="table-products__item">Категория и наименование</li>
							<li class="table-products__item">Цена, ₽</li>
							<li class="table-products__item">Кол-во</li>
							<li class="table-products__item">Скидка в %</li>
							<li class="table-products__item">Скидка, ₽</li>
							<li class="table-products__item">Сумма, ₽</li>
						</ul>
						<ul class="tooltip-orders__table table-products__list" v-for="(item, index) in Array(5)" :key="item">
							<li class="table-products__item">{{index + 1}}</li>
							<li class="table-products__item table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></li>
							<li class="table-products__item table-products__item--naming">
								<p>гарниры <span>/</span> Артикул: 234323</p>
								Картофель запеченый с чесноком и грибами (123)
							</li>
							<li class="table-products__item">110</li>
							<li class="table-products__item">1</li>
							<li class="table-products__item">10%</li>
							<li class="table-products__item">10</li>
							<li class="table-products__item">100</li>
						</ul>
					</div>
					<div class="tooltip-orders__table-info">
						<div class="tooltip-orders__table tooltip-orders__table--info">
							<p>
								5
							</p>
							<p>
								- количество позиций в заказе
							</p>

							<p>Сумма по заказу:</p>
							<p>330</p>
							<p>3</p>
							<p>10%</p>
							<p>30</p>
							<p>300</p>
						</div>

						<ul class="tooltip-orders__list tooltip-orders__list--info">
							<li class="tooltip-orders__item">Доставка:<div></div> <span>200</span></li>
							<li class="tooltip-orders__item">Бонусы:<div></div> <span>-100</span></li>
							<li class="tooltip-orders__item tooltip-orders__item--accent">ИТОГО:<div></div> <span>400 ₽</span></li>
						</ul>
					</div>
				</div>
			</template>
		</popup>

		<div @click="closeTooltips" class="tooltip-mask" ref="tooltipMask"></div>

	</default-page>

	<!--Default page end-->
</template>

<script>
// document.querySelector('.js-select').select2({
//   minimumResultsForSearch: Infinity
// });
import DefaultPage from '@/components/DefaultPage'
import Popup from '@/components/Popup'
import Pagination from '@/components/parts/Pagination'
import draggable from "vuedraggable";

export default {

	name: 'orders',

	components: {
		DefaultPage,
		Popup,
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
			selectList: [
				"Профсоюзная 1, корп. 2",
				"Профсоюзная 1, корп. 2",
				"Профсоюзная 1, корп. 2",
				"Профсоюзная 1, корп. 2",
				"г. Москва, Московская 1, корп. 2",
				"ул. Кирова, д. 5"
			],

			selectListsShow: [
				false,
				false
			],
			selectListsSel: [
				"Все адреса",
				"Все города",
			],

			orderPopup: false,

			catalogItems: [
				{
					id:1,
					blocked: false,
					name:"AA3456",
					selected: false
				},
				{
					id:2,
					blocked: false,
					name:"AA3756",
					selected: false
				},
				{
					id:3,
					blocked: false,
					name:"AA3453",
					selected: false
				},
				{
					id:7,
					blocked: false,
					name:"YA3456",
					selected: false
				},
			],

			pageOptions: {
				name:"address",

				components: {
					menuAct: false,
					content: true,
					breadcrumbs: true
				}
			},
		}
	},

	methods: {
		selSelectList(item, select) {
			this.selectListsShow[select] = false
			this.selectListsSel[select] = item
		},

		removeAt(idx) {
			this.catalogItems.splice(idx, 1);
		},

		filterSelect(event) {
			event.currentTarget.parentElement.children.forEach(btn=> {
				btn.classList.remove("selected")	
			})
			event.currentTarget.classList.add("selected")
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

		openInnerTooltip(event) {
			// open need tooltip
			event.currentTarget.nextElementSibling.classList.toggle("show")
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