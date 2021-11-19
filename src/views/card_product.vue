<template>

	<default-page class="left-act" :pageOptions="pageOptions">
		<section class="content">
			<div class="content_block content_block-card">
				<!--Card Product Heder-->
				<div class="flex_block">
					<router-link class="add_positionk" :to="{name:'catalog'}">Добавление новой позиции</router-link>

					<div class="language_razdel">
						<div class="language_razdel-txt">Язык раздела</div>
						<lang-switcher class="language_razdel-cont"/>
					</div>
				</div>
				<!--Card Product Heder end-->
				
				<div class="separator_all_grey"></div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">категории и адреса</div>
						<div class="separator_all_grey"></div>
						
						<!--Categories and Addresses--> 
						<div class="categories_fddresses-block">

							<multi-select :selectOptions="selectLists[0]" title="Категории"/>
							<multi-select :selectOptions="selectLists[1]" title="Адреса"/>

						</div>
						<!--Categories and Addresses end-->
						
						<!--Additional Categories-->
						<div class="other-categories">
							<div v-if="selectLists[0].selectListSels.length">
								<div class="content_heading default-heading">Выбранные категории</div>
								<div class="other-categories__list">
									<div
										v-for="(item, index) in selectLists[0].selectListSels"
										:key="index"
										class="text-label--with-arrow"
									>
										{{item.data}}
									</div>
								</div>
							</div>

							<div v-if="selectLists[1].selectListSels.length">
								<div class="content_heading default-heading">Выбранные адреса</div>
								<div class="other-categories__list">
									<div
										v-for="(item, index) in selectLists[1].selectListSels"
										:key="index"
										class="text-label--with-arrow"
									>
										{{item}}
									</div>
								</div>
							</div>
						</div>
						<!--Additional Categories end-->

						<div class="heading-grey">Основные параметры</div>
						<div class="separator_all_grey"></div>
						
						<div class="content_heading default-heading">Тип доставки</div>
						<div class="marker-block">
							<div>
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox" checked="">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Доставка по адресу</span>
								</label>
							</div>
							<div>
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Доставка до стола</span>
								</label>
								<br />
							</div>
							<div>
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox" checked="">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Самовывоз</span>
								</label>
								<br />
							</div>
							<div class="clear"></div>
						</div>
						
						<div class="vendor-code-and-date-block">
						
							<!--Inputs block-->
							<div class="vendor-code-block">
								<div class="vendor-code-heading">
									<label for="vendor-code" class="content_heading default-heading">Артикул</label>
									<label class="checkbox checkbox--filled checkbox--super--small">
										<input class="checkbox__input" type="checkbox" checked="">
										<span class="checkbox__span"></span>
										<span class="checkbox__text">Отображать артикул</span>
									</label>							
								</div>
								<input type="text" id="vendor-code" class="input-text" placeholder="АА123345">
								<label for="name" class="content_heading default-heading">Название</label>
								<input type="text" id="name" class="input-text" placeholder="Пицца">
								<div class="vendor-code-and-date-block__price">
									<div>
										<label for="price" class="content_heading default-heading">Цена</label>
										<input type="text" id="price" class="input-text" placeholder="500 руб.">
									</div>
									<div>
										<label for="old-price" class="content_heading default-heading">Старая цена</label>
										<input type="text" id="old-price" class="input-text" placeholder="700 руб.">
									</div>
								</div>
							</div>
							<!--Inputs block end-->
								
							<!--Date Promotions block-->
							<div class="promo-date-block">
								<div class="promo-date-heading">
									<label class="checkbox checkbox--filled checkbox--super--small">
										<input class="checkbox__input" type="checkbox" checked="">
										<span class="checkbox__span"></span>
										<span class="checkbox__text">Акция</span>
									</label>
									
									<div class="promo-date-heading__date">
										<date-range-picker
											class="dateRange"
											:opens="opens"
											:locale-data="localeData"
											:ranges="rangesData"
											:minDate="minDate" :maxDate="maxDate"
											:singleDatePicker="singleDatePicker"
											:timePicker="timePicker"
											:timePicker24Hour="timePicker24Hour"
											:showWeekNumbers="showWeekNumbers"
											:showDropdowns="showDropdowns"
											:autoApply="autoApply"
											v-model="dateRange"
											:linkedCalendars="linkedCalendars"
										>
											<template v-slot:input="picker">

												<span v-if="picker.startDate" class="promo-date-heading__date--text">
													{{ picker.startDate | date }} <span v-if="picker.endDate">-</span> {{ picker.endDate | date }}
												</span>
												<span v-else class="promo-date-heading__date--text">
													Дата и время акции
												</span>
												
												<a class="promo-date-heading__date-icon" href="" ><img src="@/assets/img/public/calendar-icon.svg" alt="" /></a>
											</template>
										</date-range-picker>
									</div>
								</div>
								<label for="temp-name" class="content_heading default-heading">Временное название</label>
								<input type="text" id="temp-name" class="input-text" placeholder="Пицца по акции">
								<label for="new-price" class="content_heading default-heading">Новая цена</label>
								<input type="text" id="new-price" class="input-text" placeholder="400 руб.">
							</div>
							<!--Date Promotions block end-->	
						</div>
						
						<!--Inputs block secend-->
						<div class="list_properties_position">
							<div>
								<label for="list_properties-weight" class="content_heading default-heading">Вес</label>
								<input type="text" id="list_properties-weight" class="input-text" placeholder="100 гр.">
							</div>
							<div>
								<label for="list_properties-step" class="content_heading default-heading">Шаг</label>
								<input type="text" id="list_properties-step" class="input-text" placeholder="100 гр.">
							</div>
							<div>
								<label for="list_properties-min-koll" class="content_heading default-heading">Мин. кол-во покупки</label>
								<input type="text" id="list_properties-min-koll" class="input-text" placeholder="2">
							</div>
							<div>
								<label for="list_properties-price" class="content_heading default-heading">Цена за кол-во</label>
								<input type="text" id="list_properties-price" class="input-text" placeholder="1">
							</div>
							<div>
								<label for="list_properties-unit" class="content_heading default-heading">Ед. измерения</label>
								<input type="text" id="list_properties-unit" class="input-text" placeholder="штука">
							</div>
						</div>
						<!--Inputs block secend end-->
						
						<label for="description-textarea" class="content_heading default-heading">Описание</label>
						<textarea id="description-textarea" class="textarea-text" placeholder="Пицца"></textarea>
						
						<div class="heading-grey">Фото</div>
						<div class="separator_all_grey"></div>
						
						<!--Photo position block-->
						<div class="position_photo">
							<cards-photo-preview />
						</div>
						<!--Photo position block end-->
						
						<div class="heading-grey">Свойства</div>
						<div class="separator_all_grey"></div>
						<div class="content_heading default-heading">Маркеры</div>
						
						<!--Properties markers-->
						<div class="marker-block">
							<div v-for="(mark, index) in markList" :key="index">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input v-model="mark.model" class="checkbox__input" type="checkbox" checked="">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">{{mark.name}}</span>
									<img class="card_product-marker-icon" :src="mark.icon" alt="">
								</label>
							</div>
							<div class="clear"></div>
						</div>
							
						<div class="clear"></div>
						<a class="button__add" @click="openAddMarkPopup = true">Добавить маркер</a>
						<!--Properties markers end-->
						
						<!--Properties promo-->
						<div class="content_heading default-heading">Акция</div>
						<div class="promo-block">
							<div v-for="(promo, index) in promoList" :key="index">
								<label class="radio radio--filled">
									<input v-model="promo.model" name="promo-name" class="radio__input" type="radio" checked="">
									<span class="radio__span"></span>
									<span class="radio__text">{{promo.name}}</span>
								</label>
							</div>
						</div>
						<a class="button__add" @click="openAddPromPopup = true">Добавить акцию</a>
						<!--Properties promo end-->
						
						<div class="heading-grey">БЖУ</div>
						<div class="separator_all_grey"></div>
						
						<!--BJU block inputs-->
						<div class="bju_block">
							<div>
								<label for="bju-protein" class="content_heading default-heading">Белки, гр.</label>
								<input id="bju-protein" type="text" class="input-text" placeholder="100">
							</div>
							<div>
								<label for="bju-fats" class="content_heading default-heading">Жиры, гр.</label>
								<input id="bju-fats" type="text" class="input-text" placeholder="20">
							</div>
							<div>
								<label for="bju-carbohydrates" class="content_heading default-heading">Углеводы, гр.</label>
								<input id="bju-carbohydrates" type="text" class="input-text" placeholder="100">
							</div>
							<div>
								<label for="bju-calories" class="content_heading default-heading">Калории, ккал</label>
								<input id="bju-calories" type="text" class="input-text" placeholder="100">
							</div>
						</div>
						<!--BJU block inputs end-->
						
						<!--BJU block radio-->
						<div class="bju-block">
							<label class="radio radio--filled">
								<input name="bju-name" class="radio__input" type="radio" checked="">
								<span class="radio__span"></span>
								<span class="radio__text">На 100 гр. продукта</span>
							</label>
							<label class="radio radio--filled">
								<input name="bju-name" class="radio__input" type="radio">
								<span class="radio__span"></span>
								<span class="radio__text">На всю позицию</span>
							</label>
						</div>
						<!--BJU block radio end-->
						
						<div v-if="isCreatePage" class="heading-grey">Модификаторы</div>
						<div v-if="isCreatePage" class="separator_all_grey"></div>
						
						<!--Modifiers block-->
						<draggable
							v-if="isCreatePage"
							tag="div"
							:group="{name: 'modificator'}"
							v-model="modificatorList"
							v-bind="dragOptions"
							handle=".handle-table-outside"
							class="card_product_tag"
						>
							<div
								v-for="(modificator, indexList) in modificatorList"
								:key="indexList"
								class="tag__list"
							>
								<svg class="handle-table-outside icon icon--menu">
									<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
								</svg>
								<span class="tag__title">{{modificator.name}}</span>
								<draggable
									tag="div"
									:group="{name: 'child' + indexList}"
									v-model="modificator.child"
									v-bind="dragOptions"
									class="tag__row"
								>
									<div
										v-for="(child, index) in modificator.child"
										:key="index"
										class="tag__item"
										@click="changeModifChild(indexList, index)"
									>
										{{child}}
									</div>
								</draggable>
								

								<a @click="addChild(indexList)" class="tag__add"></a>
							</div>

							<a @click="openAddModifiPopup = true" class="button__add">Добавить модификатор</a>
						</draggable>
						<!--Modifiers block end-->
						
						<div v-if="isCreatePage" class="heading-grey">Варианты</div>
						<div v-if="isCreatePage" class="separator_all_grey"></div>
						
						<!--Cadr Product Table header block-->
						<div
							v-if="isCreatePage"
							class="card-table-heder">
							<div>
								<div class="card-table-heder__label">{{selectedCount}}</div>
								<div class="card-table-heder__label-text">{{selectedCount}} выделен</div>
								<div class="card-table-heder__battons">
									<svg @click="blockAllSelected" class="icon icon--attention">
										<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
									</svg>
								</div>
							</div>
											
							<div class="card-table-new-position">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox" checked="">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Скрыть неактивные</span>
								</label>
							</div>
						</div>
						<!--Cadr Product Table header block end-->
						
						<div v-if="isCreatePage" class="separator_all_grey separator_all_grey--full"></div>
						<div v-if="isCreatePage" class="card-table-products--scroll">	
							<!--Product Table row-->
							<div class="card-table-products__list card-table-products__list--grey">
								<div class="card-table-products__item card-table-products__item--menudrop"></div>
								<div class="card-table-products__item card-table-products__item--check">
									<label @input="selectAll" class="checkbox checkbox--filled checkbox--super--small">
										<input v-model="selectAllInput" class="checkbox__input" type="checkbox">
										<span class="checkbox__span"></span>
									</label>
								</div>
								<div  class="card-table-products__item card-table-products__item--photo">Фото</div>
								<div class="card-table-products__item card-table-products__item--art">Артикул</div>
								<div @click="sortBy" class="card-table-products__item card-table-products__item--name table-products__item--sortable">
									Параметры
									<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
									</svg>
								</div>
								<div class="card-table-products__item card-table-products__item--bju">БЖУ</div>
								<div class="card-table-products__item card-table-products__item--weigh">Вес</div>
								<div @click="sortBy" class="card-table-products__item card-table-products__item--price table-products__item--sortable">
									Цена
									<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
									</svg>
								</div>
								<div class="card-table-products__item card-table-products__item--iconsy"></div>
							</div>
							<!--Product Table row end-->	
											
							<!--Cadr Product Table block-->
							<draggable
								v-if="isCreatePage"
								tag="div"
								v-model="catalogItems"
								v-bind="dragOptions"
								handle=".handle-table"
								class="card-table-products"
							>	
								<!--Product Table row-->				
								<div
									v-for="(item, idx) in catalogItems"
									:key="item.name"
									class="card-table-products__list card-table-products__list"
								>				
									<a class="handle-table card-table-products__item card-table-products__item--menudrop">
									</a>
									<div class="card-table-products__item card-table-products__item--check">
										<label class="checkbox checkbox--filled checkbox--super--small">
											<input v-model="item.selected" class="checkbox__input" type="checkbox">
											<span class="checkbox__span"></span>
										</label>
									</div>
									<div class="card-table-products__item card-table-products__item--photo">
										<img :class="item.blocked ? 'grayFilter' : ''" src="@/assets/img/public/pic/table-products-photo1.svg" alt="" />
										<svg :class="item.blocked ? 'show' : ''" class="icon icon--stop icon--stop--card">
											<use xlink:href="@/assets/img/public/icons-pack.svg#stop"></use>
										</svg>
									</div>
									<div class="card-table-products__item card-table-products__item--art">{{item.name}}</div>
									<div class="card-table-products__item card-table-products__item--name">
										Размер пиццы 30см, тесто тонкое, мука классическая
									</div>
									<div class="card-table-products__item card-table-products__item--bju">
										Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
									</div>
									<div class="card-table-products__item card-table-products__item--weight">
										<span @click="openEdit(item, $event)">{{item.weight}}</span>
										<input v-model="item.weight" type="text">
									</div>
									<div class="card-table-products__item card-table-products__item--price">
										<span @click="openEdit(false, $event)">{{item.price}}</span>
										<input v-model="item.price" type="text">
									</div>
									<div class="card-table-products__item card-table-products__item--icons">
										<svg @click="blockItem(idx)" :class="item.blocked ? 'icon--attention--hover' : ''" class="icon icon--attention">
											<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
										</svg>
										<svg @click="$router.push({name:'card-product-name', params:{name: item.name}})" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
									</div>
								</div>
								<!--Product Table row end-->
							<!--Card Product Table block end-->
							</draggable>
						</div>
						
						<div class="heading-grey">Дополнительные товары</div>
						<div class="separator_all_grey"></div>
						
						<!--Additional goods header block-->
						<div class="card-table-heder additional-goods-heder">
							<div>
								<div class="card-table-heder__label">{{selectedCountAdd}}</div>
								<div class="card-table-heder__label-text">{{selectedCountAdd}} выделен</div>
								<div class="card-table-heder__battons">
									<svg @click="removeAllSelectedAdd" class="icon icon--trash">
										<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
									</svg>
								</div>
							</div>
						</div>
						<!--Cadr Product Table header block end-->

						<div class="separator_all_grey separator_all_grey--full"></div>
						<!--Additional goods Table block-->
						<div class="card-table-products--scroll card-table-products--scroll-add">	

							<!--Additional goods headlines-->
							<div class="additional-goods__list additional-goods__list--grey">
								<div class="additional-goods__item additional-goods__item--check">
									<label @input="selectAllAdd" class="checkbox checkbox--filled checkbox--super--small">
										<input v-model="selectAllInputAdd" class="checkbox__input" type="checkbox">
										<span class="checkbox__span"></span>
									</label>
								</div>
								<div class="additional-goods__item additional-goods__item--category">Категория</div>
								<div class="additional-goods__item additional-goods__item--name">Название</div>
								<div class="additional-goods__item additional-goods__item--min-number">Мин. число добавок</div>
								<div class="additional-goods__item additional-goods__item--max-number">МАКС. число добавок</div>
								<div class="additional-goods__item additional-goods__item--max-quantity">МАКС. кол-во 1 добавки</div>
								<div class="additional-goods__item additional-goods__item--quantity-free">Кол-во бесплатных</div>
								<div class="additional-goods__item additional-goods__item--icons"></div>
							</div>	
							<!--Additional goods headlines end-->

							<draggable
								tag="div"
								v-model="additionalItems"
								v-bind="dragOptions"
								handle=".ggggg"
								class="additional-goods"
							>
								
								<!--Additional goods row-->
								<div
									v-for="(item, idx) in additionalItems"
									:key="item.id"
									class="additional-goods__list"
								>
									<div class="additional-goods__item additional-goods__item--check">
										<label class="checkbox checkbox--filled checkbox--super--small">
											<input v-model="item.selected" class="checkbox__input" type="checkbox">
											<span class="checkbox__span"></span>
										</label>
									</div>
									<div class="additional-goods__item additional-goods__item--category">
										<select class="select">
											<option value="" selected="">Соусы</option>
											<option>Соус1</option>
											<option>Соус2</option>
										</select></div>
									<div class="additional-goods__item additional-goods__item--name">
										<input type="text" class="input-text" placeholder="Соусы к пицце">
									</div>
									<div class="additional-goods__item additional-goods__item--min-number">
										<input type="text" class="input-text" placeholder="1">
									</div>
									<div class="additional-goods__item additional-goods__item--max-number">
										<input type="text" class="input-text" placeholder="2">
									</div>
									<div class="additional-goods__item additional-goods__item--max-quantity">
										<input type="text" class="input-text" placeholder="4">
									</div>
									<div class="additional-goods__item additional-goods__item--quantity-free">
										<input type="text" class="input-text" placeholder="1">
									</div>
									<div class="additional-goods__item additional-goods__item--icons">
										<svg class="icon icon--attention">
											<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
										</svg>
										<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
										<svg @click="removeAtAdd(idx)" class="icon icon--trash">
											<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
										</svg>
									</div>
								</div>	
								<!--Additional goods row end-->
							</draggable>
						</div>

						<!--Additional goods add category-->
						<a class="button__add add_category_button">Добавить категорию</a>	
						<div class="content_heading default-heading">По умолчанию позиция добавляется в конец списка</div>
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox" checked>
							<span class="checkbox__span"></span>
							<span class="checkbox__text">Добавить в начало списка</span>
						</label>
						<!--Additional goods add category end-->
						<br />
						
						
						<router-link :to="{name: 'catalog'}" class="button card_product_add_position">Добавить позицию</router-link>
						<router-link :to="{name: 'catalog'}" class="button button--bordered-grey card_product_button_back"><span class="button--arrow-back"></span>Назад в каталог</router-link>
					</div>
				</div>
			</div>

			<popup :show="openAddMarkPopup" type="addCat" @closePopup="closeAddPopup">
				<h3>Создание маркера</h3>

				<div class="popup__row">
					<h4>Название маркера</h4>
					<input v-model="newMarkName" type="text" placeholder="Введите название...">
				</div>

				<div class="popup__row popup__row--photo">
					<cards-photo-preview type="popup" title="Загрузите иконку"/>
				</div>

				<button @click="addMarkPopup" class="button button--addMod">Создать маркер</button>
			</popup>

			<popup :show="openAddPromPopup" type="addCat" @closePopup="closeAddPopup">
				<h3>Создание акции</h3>

				<div class="popup__row">
					<h4>Название акции</h4>
					<input v-model="newPromName" type="text" placeholder="Введите название...">
				</div>

				<button @click="addPromPopup" class="button button--addCat">Создать акцию</button>
			</popup>

			<popup :show="openAddModifiPopup" type="addCat" @closePopup="closeAddPopup">
				<h3>Создание модификатора</h3>

				<div class="popup__row">
					<h4>Название модификатора</h4>
					<input v-model="newModifiName" type="text" placeholder="Введите название...">
				</div>

				<button @click="addModifiPopup" class="button button--addCat">Создать модификатора</button>
			</popup>

			<popup :show="openAddChangeModifiPopup.opened" type="addCat" @closePopup="closeAddPopup">
				<h3>Редактирование модификатора</h3>

				<div class="popup__row">
					<h4>Название модификатора</h4>
					<input v-model="newChangeModifiName" type="text" placeholder="Введите название...">
				</div>

				<div class="btn-box">
					<button @click="removeChildAt(openAddChangeModifiPopup.data[0], openAddChangeModifiPopup.data[1])" class="button button--grey button--addCat">Удалить</button>
					<button @click="changeChildAt(openAddChangeModifiPopup.data[0], openAddChangeModifiPopup.data[1])" class="button button--addCat">Сохранить</button>
				</div>
			</popup>
		</section>
	</default-page>

</template>

<script>
import DefaultPage from '@/components/DefaultPage'
import DateRangePicker from 'vue2-daterange-picker'
import LangSwitcher from "@/components/parts/LangSwitcher"
import CardsPhotoPreview from "@/components/parts/CardsPhotoPreview"
import MultiSelect from "@/components/parts/MultiSelect"
import draggable from "vuedraggable";
import Popup from "@/components/Popup"

//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

let today = new Date()
today.setHours(0, 0, 0, 0)

let yesterday = new Date()
yesterday.setDate(today.getDate() - 1)
yesterday.setHours(0, 0, 0, 0);

export default {
	name: 'card_product',

	components: {
		DefaultPage,
		LangSwitcher,
		DateRangePicker,
		CardsPhotoPreview,
		MultiSelect,
		draggable,
		Popup
	},

	filters: {
		date (value) {
			if (!value)
				return ''
			let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
			return Intl.DateTimeFormat('ru-RU', options).format(value)
		}
	},

	data() {
		return {
			modificatorList: [
				{
					name: "Размер пиццы",
					child: [
						"30см",
						"50см",
						"70см"
					]
				},
				{
					name: "Тесто",
					child: [
						"ультратонкое",
						"тонкое",
						"классическое"
					]
				},
				{
					name: "Мука",
					child: [
						"пшеничная",
						"рисовая",
						"ржаная"
					]
				}
			],

			selectAllInput: false,
			selectAllInputAdd: false,

			openAddMarkPopup: false,
			openAddPromPopup: false,
			openAddModifiPopup: false,
			openAddChangeModifiPopup: {
				opened: false,
				data: []
			},

			newMarkName:'',
			newPromName:'',
			newModifiName:'',
			newChangeModifiName:'',

			markList: [
				{
					name: "Острое",
					model: false,
					icon: "/img/marker-moon.jpg"
				},
				{
					name: "Халяль",
					model: false,
					icon: "/img/marker-moon.jpg"
				},
				{
					name: "Вегетарианское",
					model: false,
					icon: "/img/marker-moon.jpg"
				},
			],

			promoList: [
				{
					name: "хит",
					model: false
				},
				{
					name: "акция",
					model: false
				},
				{
					name: "Новое",
					model: false
				},
			],

			selectLists: [
				{
					selectList: [
						{
							data: "Профсоюзная 1, корп. 2",
							model: false
						},
						{
							data: "Профсоюзная 1, корп. 2",
							model: false
						},
						{
							data: "Профсоюзная 1, корп. 2",
							model: false
						},
						{
							data: "Профсоюзная 1, корп. 2",
							model: false
						},
						{
							data: "г. Москва, Московская 1, корп. 2",
							model: false
						},
						{
							data: "ул. Кирова, д. 5",
							model: false
						},
					],
					selectListShow: false,
					selectListSels: [],
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
					selectListSels: [],
				}
			],

			catalogItems: [
				{
					id:1,
					price: "500 ₴",
					weight: "100 гр.",
					blocked: false,
					name:"AA3456",
					selected: false
				},
				{
					id:2,
					price: "500 ₴",
					weight: "100 гр.",
					blocked: false,
					name:"AA3756",
					selected: false
				},
				{
					id:3,
					price: "500 ₴",
					weight: "100 гр.",
					blocked: false,
					name:"AA3453",
					selected: false
				},
				{
					id:4,
					price: "500 ₴",
					weight: "100 гр.",
					outer: true,
					childs: [5, 6],
					blocked: false,
					name:"AB3456",
					selected: false
				},
				{
					id:5,
					price: "500 ₴",
					weight: "100 гр.",
					inner: true,
					blocked: false,
					name:"BA3456",
					selected: false
				},
				{
					id:6,
					price: "500 ₴",
					weight: "100 гр.",
					inner: true,
					blocked: false,
					name:"AC3456",
					selected: false
				},
				{
					id:7,
					price: "500 ₴",
					weight: "100 гр.",
					blocked: false,
					name:"YA3456",
					selected: false
				},
			],

			additionalItems: [
				{
					id:1,
					blocked: false,
					selected: false
				},
				{
					id:2,
					blocked: false,
					selected: false
				}
			],

			dateRange: {
				startDate: '',
				endDate: '',
			},
			single_range_picker: true,
			show_ranges: false,
			singleDatePicker: false,
			timePicker: false,
			timePicker24Hour: false,
			showDropdowns: false,
			autoApply: false,
			showWeekNumbers: false,
			linkedCalendars: true,
			alwaysShowCalendars: true,
			appendToBody: false,
			closeOnEsc: true,
			opens: 'center',
			minDate: '2019-05-02 04:00:00',
			maxDate: '2021-12-26 14:00:00',
			rangesData: {
				'Сегодня': [today, today],
				'Вчера': [yesterday, yesterday],
				'Этот месяц': [new Date( today.getFullYear(), today.getMonth(), 1), new Date( today.getFullYear(), today.getMonth(), 30)],
				'Этот год': [new Date(today.getFullYear(), 0, 1), new Date(today.getFullYear(), 11, 31)],
				'Последний месяц': [new Date(today.getFullYear(), today.getMonth() - 1, 1), new Date(today.getFullYear(), today.getMonth(), 0)],
			},
			localeData: {
				firstDay: 1,
				format: 'dd-mm-yyyy',
				separator: ' - ',
				applyLabel: 'Принять',
				cancelLabel: 'Отменить',
				weekLabel: 'Н',
				daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				monthNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июня', 'Июля', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			},

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
		selectedCountAdd() {
			return this.additionalItems.filter(item => item?.selected).length
		},

		isCreatePage() {
			return !(this.$route.params.name)
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
		changeModifChild(parentId, childId) {
			this.openAddChangeModifiPopup.opened = true
			this.openAddChangeModifiPopup.data[0] = parentId
			this.openAddChangeModifiPopup.data[1] = childId
		},

		removeChildAt(parentId, childId) {
			const children = this.modificatorList[parentId].child,
						index = children.indexOf(children[childId])

			this.modificatorList[parentId].child.splice(index, 1)

			this.openAddChangeModifiPopup.data = []
			this.closeAddPopup(false)
		},

		changeChildAt(parentId, childId) {
			const children = this.modificatorList[parentId].child,
						index = children.indexOf(children[childId])

			this.modificatorList[parentId].child[index] = this.newChangeModifiName

			this.newChangeModifiName = ""
			this.openAddChangeModifiPopup.data = []
			this.closeAddPopup(false)
		},

		addChild(idx) {
			this.modificatorList[idx].child.push("Название")
		},

		openEdit(item, event) {
			this.closeEdit()
			event.currentTarget.nextElementSibling.addEventListener("keydown", e => {
				const reg = new RegExp('.*(гр|кг)')

				if(e.which == 13) {
					if (reg.exec(e.target.value)) {
						this.closeEdit()
					} else {
						if (item) item.weight += "гр."
						this.closeEdit()
					}
					
				}
			})
			event.currentTarget.parentElement.classList.add("card-table-products__item--edit")
		},
		closeEdit() {
			const editArray = document.querySelector(".card-table-products__item--edit")
			editArray?.classList.remove("card-table-products__item--edit")
		},

		addMarkPopup() {
			this.markList.push({
				name: this.newMarkName,
				icon: "/img/marker-moon.jpg",
				model: false
			})
			this.newMarkName = ""
			this.closeAddPopup(false)
		},

		addPromPopup() {
			this.promoList.push({
				name: this.newPromName,
				model: false
			})
			this.newPromName = ""
			this.closeAddPopup(false)
		},

		addModifiPopup() {
			this.modificatorList.push({
					name: this.newModifiName,
					child: [
					]
				})
			this.newModifiName = ""
			this.closeAddPopup(false)
		},

		closeAddPopup(state) {
			this.openAddMarkPopup = state
			this.openAddPromPopup = state
			this.openAddModifiPopup = state
			this.openAddChangeModifiPopup.opened = state
		},

		sortBy(event) {
			const selectedSortable = document.querySelector('.card-table-products__item.selected')

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
		},

		removeAllSelectedAdd() {
			this.additionalItems.filter(item => item.selected).forEach(row => {
				this.removeAtAdd(this.additionalItems.findIndex(item => item.id == row.id))
			})
		},

		removeAtAdd(idx) {
			this.additionalItems.splice(idx, 1);
		},

		blockItemAdd(idx) {
			this.additionalItems[idx].blocked = !this.additionalItems[idx].blocked;
		},

		blockAllSelectedAdd() {
			this.additionalItems.filter(item => item.selected).forEach(row => {
				this.blockItemAdd(this.additionalItems.findIndex(item => item.id == row.id))
			})
		},

		selectAllAdd() {
			if (!this.selectAllInputAdd) {
				this.additionalItems.map(item => item.selected = true)
			} else {
				this.additionalItems.map(item => item.selected = false)
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
		},
		selectedCountAdd(newValue) {
			if (!newValue) {
				this.selectAllInputAdd = false
			} else {
				this.selectAllInputAdd = true
			}
		}
	}
}
</script>
