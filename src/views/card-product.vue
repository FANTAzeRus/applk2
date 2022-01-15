<template>

	<default-page class="left-act" :pageOptions="pageOptions">
		<section class="content" :class="!isCreatePage ? 'content--masked' : ''">
			<div class="content_block content_block-card">
				<!--Card Product Heder-->
				<div class="flex_block">
					
					<router-link v-if="isCreatePage" class="add_positionk" :to="{name:'catalog'}">Добавление новой позиции</router-link>
					<span
						class="add_positionk"
						v-else
						@click="hasChanges ? $router.push({name:'card-product'}) : $router.go(-1)"
					>
						Редактирование {{editItem.title || ''}}
					</span>

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

							<multi-select :selectOptions="selectLists[0]" noRoot selAll categories title="Категории"/>
							<multi-select :selectOptions="selectLists[1]" noRoot selAll title="Адреса"/>

						</div>
						<!--Categories and Addresses end-->
						
						<!--Additional Categories-->
						<div class="other-categories">

							<div :class="selectLists[0].selectListSels.length ? 'other-categories--show' : ''">
								<div class="content_heading default-heading">Выбранные категории</div>

								<multi-select :selectOptions="selectLists[0]" preview categories title="Категории"/>
							</div>

							<div :class="selectLists[1].selectListSels.length ? 'other-categories--show' : ''">
								<div class="content_heading default-heading">Выбранные адреса</div>
								<div class="other-categories__list">
									<div
										v-for="(item, index) in selectLists[1].selectListSels"
										:key="index"
										class="text-label--with-arrow"
									>
										{{item.title || ''}}
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
									<input class="checkbox__input" type="checkbox">
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
									<input class="checkbox__input" type="checkbox">
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
								<input v-if="editItem" v-model="editItem.article" type="text" id="vendor-code" class="input-text">
								<input v-else type="text" id="vendor-code" class="input-text">
								<label for="name" class="content_heading default-heading">Название</label>
								<input v-if="editItem" v-model="editItem.title" type="text" id="name" class="input-text">
								<input v-else type="text" id="name" class="input-text">
								<div class="vendor-code-and-date-block__price">
									<div>
										<label for="price" class="content_heading default-heading">Цена</label>
										<input v-if="editItem" v-model="editItem.price" type="text" id="price" class="input-text">
										<input v-else type="text" id="price" class="input-text">
									</div>
									<div>
										<label for="old-price" class="content_heading default-heading">Старая цена</label>
										<input type="text" id="old-price" class="input-text">
									</div>
								</div>
							</div>
							<!--Inputs block end-->
								
							<!--Date Promotions block-->
							<div class="promo-date-block">
								<div class="promo-date-heading">
									<label class="checkbox checkbox--filled checkbox--super--small">
										<input class="checkbox__input" type="checkbox" >
										<span class="checkbox__span"></span>
										<span class="checkbox__text">Акция</span>
									</label>
									
									<div class="promo-date-heading__date">
										<date-range-picker
											class="dateRange dateRange--card-product"
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
												
												<a class="promo-date-heading__date-icon" ><img src="@/assets/img/public/calendar-icon.svg" alt="" /></a>
											</template>
											<template v-slot:footer="actions">
												<div class="drp-buttons">
													<button @click="clearDateRange" type="button" class="cancelBtn btn btn-sm btn-secondary">Очистить</button>

													<button @click="actions.clickApply" type="button" class="applyBtn btn btn-sm btn-success">Принять</button>
												</div>
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
								<input v-if="editItem" v-model="editItem.weight" type="text" id="list_properties-weight" class="input-text">
								<input v-else type="text" id="list_properties-weight" class="input-text">
							</div>
							<div>
								<label for="list_properties-step" class="content_heading default-heading">Шаг</label>
								<input type="text" id="list_properties-step" class="input-text" >
							</div>
							<div>
								<label for="list_properties-min-koll" class="content_heading default-heading">Мин. кол-во покупки</label>
								<input type="text" id="list_properties-min-koll" class="input-text" >
							</div>
							<div>
								<label for="list_properties-price" class="content_heading default-heading">Цена за кол-во</label>
								<input type="text" id="list_properties-price" class="input-text" >
							</div>
							<div>
								<label for="list_properties-unit" class="content_heading default-heading">Ед. измерения</label>
								<input type="text" id="list_properties-unit" class="input-text" >
							</div>
						</div>
						<!--Inputs block secend end-->
						
						<label for="description-textarea" class="content_heading default-heading">Описание</label>
						<textarea v-if="editItem" v-model="editItem.description" id="description-textarea" class="textarea-text"></textarea>
						<textarea v-else id="description-textarea" class="textarea-text"></textarea>
						
						<div class="heading-grey">Фото</div>
						<div class="separator_all_grey"></div>
						
						<!--Photo position block-->
						<div class="position_photo">
							<cards-photo-preview
								@removePhoto="removePhoto"
								:lists="photoList"
							/>
							<cards-photo-preview
								@removePhoto="removePhoto"
								:lists="basketList"
								title="Фото в корзине 1:1"
								type="basket"
								onePhoto
								class="photo--square"
							/>
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
									<img v-if="mark.icon" class="card_product-marker-icon" :src="mark.icon.previewImage" alt="">
									<div v-if="mark.edited" class="icon-box">
										<svg @click.prevent="editMarker(index)" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
										<svg @click.prevent="removeMarker(index)" class="icon icon--trash">
											<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
										</svg>
									</div>
								</label>
							</div>
							<div class="clear"></div>
						</div>
							
						<div class="clear"></div>
						<a class="button__add" @click="openAddMarkPopupShow">Добавить маркер</a>
						<!--Properties markers end-->
						
						<!--Properties promo-->
						<div class="content_heading default-heading">Акция</div>
						<div class="promo-block">
							<div>
								<label class="radio radio--filled">
									<input name="promo-name" class="radio__input" type="radio" checked="">
									<span class="radio__span"></span>
									<span class="radio__text radio__text--bold radio__text--accent">Нет акции</span>
								</label>
							</div>
							<div v-for="(promo, index) in promoList" :key="index">
								<label class="radio radio--filled">
									<input v-model="promo.model" name="promo-name" class="radio__input" type="radio" checked="">
									<span class="radio__span"></span>
									<span class="radio__text">{{promo.name}}</span>
								</label>
								<div v-if="promo.edited" class="icon-box">
									<svg @click.prevent="editPromo(index)" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
									<svg @click.prevent="removePromo(index)" class="icon icon--trash">
										<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
									</svg>
								</div>
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
								<input id="bju-protein" type="text" class="input-text" >
							</div>
							<div>
								<label for="bju-fats" class="content_heading default-heading">Жиры, гр.</label>
								<input id="bju-fats" type="text" class="input-text" >
							</div>
							<div>
								<label for="bju-carbohydrates" class="content_heading default-heading">Углеводы, гр.</label>
								<input id="bju-carbohydrates" type="text" class="input-text" >
							</div>
							<div>
								<label for="bju-calories" class="content_heading default-heading">Калории, ккал</label>
								<input id="bju-calories" type="text" class="input-text" >
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
								:key="modificator.id"
								class="tag__list"
							>
								<svg class="handle-table-outside icon icon--menu">
									<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
								</svg>
								<span @click="changeModifParent(indexList)" class="tag__title">{{modificator.name}}</span>
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
									<input class="checkbox__input" type="checkbox">
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
								<div @click="sortBy($event, 'params')" class="card-table-products__item card-table-products__item--name table-products__item--sortable">
									Параметры
									<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
									</svg>
								</div>
								<div class="card-table-products__item card-table-products__item--bju">БЖУ</div>
								<div class="card-table-products__item card-table-products__item--weigh">Вес</div>
								<div @click="sortBy($event, 'price')" class="card-table-products__item card-table-products__item--price table-products__item--sortable">
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
								:group="{name: 'card-table-products'}"
								v-bind="dragOptions"
								handle=".handle-table"
								class="card-table-products"
							>	
								<!--Product Table row-->				
								<div
									v-for="(item, idx) in catalogPositions"
									:key="item.name"
									class="card-table-products__list"
								>				
									<div class="handle-table card-table-products__item card-table-products__item--menudrop">
										<svg class="icon icon--menu">
											<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
										</svg>
									</div>
									<div class="card-table-products__item card-table-products__item--check">
										<label class="checkbox checkbox--filled checkbox--super--small">
											<input v-model="item.selected" class="checkbox__input" type="checkbox">
											<span class="checkbox__span"></span>
										</label>
									</div>
									<div class="card-table-products__item card-table-products__item--photo">
										<img :class="item.blocked ? 'grayFilter' : ''" :src="item.image" alt="" />
										<svg :class="item.blocked ? 'show' : ''" class="icon icon--stop icon--stop--card">
											<use xlink:href="@/assets/img/public/icons-pack.svg#stop"></use>
										</svg>
									</div>
									<div class="card-table-products__item card-table-products__item--art">{{item.article}}</div>
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
										<span @click="openEdit(false, $event)">{{item.price}} ₴</span>
										<input v-model="item.price" type="text">
									</div>
									<div class="card-table-products__item card-table-products__item--icons">
										<svg @click="blockItem(idx)" :class="item.blocked ? 'icon--attention--hover' : ''" class="icon icon--attention">
											<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
										</svg>
										<svg @click="$router.push({name:'card-product-id', params:{id: item.id}})" class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
									</div>
								</div>
								<!--Product Table row end-->
							<!--Card Product Table block end-->
							</draggable>
						</div>
						
						<div class="heading-grey">Дополнительные товары</div>
						<div class="separator_all_grey"></div>
						
						<!--Additional goods header block-->
						<div v-if="additionalItems.length" class="card-table-heder additional-goods-heder">
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

						<div v-if="additionalItems.length" class="separator_all_grey separator_all_grey--full"></div>
						<!--Additional goods Table block-->
						<div v-if="additionalItems.length" class="card-table-products--scroll card-table-products--scroll-add">	

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
								:group="{name: 'additional-goods'}"
								handle=".handle-table"
								class="additional-goods"
							>
								<!--Additional goods row-->
								<div
									v-for="(item, idx) in additionalItems"
									:key="item.idx"
									class="additional-goods__list"
									:class="item.blocked ? 'additional-goods__list--blocked' : ''"
								>
									<div class="handle-table card-table-products__item card-table-products__item--menudrop">
										<svg class="icon icon--menu">
											<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
										</svg>
									</div>
									<div class="additional-goods__item additional-goods__item--check">
										<label class="checkbox checkbox--filled checkbox--super--small">
											<input @input="hasChanges = true" v-model="item.selected" class="checkbox__input" type="checkbox">
											<span class="checkbox__span"></span>
										</label>
									</div>

									<multi-select
										class="oneSelect additional-goods__item additional-goods__item--category"
										@openSelectList="toggleSelectListEmit"
										:selectOptions="item"
										categories
									/>

									<div class="additional-goods__item additional-goods__item--name">
										<input v-model="item.inputs.name" @input="hasChangesToggle" type="text" class="input-text input-text--specific" placeholder="Соусы к пицце">
									</div>
									<div class="additional-goods__item additional-goods__item--min-number">
										<input v-model="item.inputs.minCount" @input="hasChangesToggle" type="number" class="input-text input-text--specific">
									</div>
									<div class="additional-goods__item additional-goods__item--max-number">
										<input v-model="item.inputs.maxCount" @input="hasChangesToggle" type="number" class="input-text input-text--specific">
									</div>
									<div class="additional-goods__item additional-goods__item--max-quantity">
										<input v-model="item.inputs.maxMinCount" @input="hasChangesToggle" type="number" class="input-text input-text--specific">
									</div>
									<div class="additional-goods__item additional-goods__item--quantity-free">
										<input v-model="item.inputs.freeCount" @input="hasChangesToggle" type="number" class="input-text input-text--specific">
									</div>
									<div class="additional-goods__item additional-goods__item--icons">
										<svg @click="blockAdditionalItem(idx)" class="icon icon--attention" :class="item.blocked ? 'icon--attention--hover' : ''">
											<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
										</svg>
										<svg @click="removeAdditional(removeAtAdd, idx)" class="icon icon--trash">
											<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
										</svg>
									</div>
								</div>	
								<!--Additional goods row end-->
							</draggable>
						</div>

						<!--Additional goods add category-->
						<a @click="addAdditional" class="button__add add_category_button">Добавить доп. товар</a>

						
						<div v-if="isCreatePage" class="content_heading default-heading">По умолчанию позиция добавляется в конец списка</div>
						<label v-if="isCreatePage" class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
							<span class="checkbox__text">Добавить в начало списка</span>
						</label>
						<!--Additional goods add category end-->
						<br />
						
						<div v-if="isCreatePage">
							<router-link :to="{name: 'catalog'}" class="button card_product_add_position">Добавить позицию</router-link>
							<router-link :to="{name: 'catalog'}" class="button button--bordered-grey card_product_button_back"><span class="button--arrow-back"></span>Назад в каталог</router-link>
						</div>
						<div v-else>
							<router-link :to="{name: 'card-product'}" class="button card_product_add_position">Изменить позицию</router-link>
							<router-link :to="{name: 'card-product'}" class="button button--bordered-grey card_product_button_back"><span class="button--arrow-back"></span>Назад</router-link>
						</div>
					</div>
				</div>
			</div>

			<popup :show="openAddMarkPopup" type="addCat" @closePopup="closeAddPopup">
				<h3 v-if="!edited">Создание маркера</h3>
				<h3 v-else>Изменение маркера</h3>

				<div class="popup__row">
					<h4>Название маркера</h4>
					<input v-model="newMarkName" type="text" placeholder="Введите название...">
				</div>

				<div class="popup__row popup__row--photo">
					<cards-photo-preview
						:lists="newIconData"
						@removePhoto="removePhoto"
						onePhoto
						type="popup"
						title="Загрузите иконку"
					/>
				</div>

				<button v-if="!edited" @click="addMarkPopup" class="button button--addMod">Создать маркер</button>
				<button v-else @click="changeMarker" class="button button--addMod">Изменить маркер</button>
			</popup>

			<popup :show="openAddPromPopup" type="addCat" @closePopup="closeAddPopup">
				<h3 v-if="!edited">Создание акции</h3>
				<h3 v-else>Редактирование акции</h3>

				<div class="popup__row">
					<h4>Название акции</h4>
					<input v-model="newPromName" type="text" placeholder="Введите название...">
				</div>

				<button v-if="!edited" @click="addPromPopup" class="button button--addCat">Создать акцию</button>
				<button v-else @click="changePromo" class="button button--addCat">Изменить акцию</button>
			</popup>

			<popup :show="openAddModifiPopup" type="addCat" @closePopup="closeAddPopup">
				<h3 class="popup__title--small">Создание строки модификаторов</h3>

				<div class="popup__row">
					<h4>Название строки модификаторов</h4>
					<input v-model="newModifiName" type="text" placeholder="Введите название...">
				</div>

				<button @click="addModifiPopup" class="button button--addMod">Создать строку модификаторов</button>
			</popup>

			<popup :show="openChangeParentModPopup" type="addCat" @closePopup="closeAddPopup">
				<h3>Редактирование строки модификаторов</h3>

				<div class="popup__row">
					<h4>Название строки модификаторов</h4>
					<input v-if="modificatorList.length" v-model="newModificatorParentName" type="text" placeholder="Введите название...">
				</div>

				<div class="btn-box">
					<button @click="removeParentMod(parentModId)" class="button button--grey button--addCat">Удалить</button>

					<button @click="changeModifParentPopup()" class="button button--max-width">Изменить</button>
				</div>
			</popup>

			<popup :show="openAddChangeModifiPopup.opened" type="addCat" @closePopup="closeAddPopup">
				<h3>Редактирование модификатора</h3>

				<div class="popup__row">
					<h4>Название модификатора</h4>
					<input v-model="newChangeModifiName" type="text" placeholder="Введите название...">
				</div>

				<div class="btn-box">
					<button @click="removeModificator(openAddChangeModifiPopup.data[0], openAddChangeModifiPopup.data[1])" class="button button--grey button--addCat">Удалить</button>
					<button @click="changeChildAt(openAddChangeModifiPopup.data[0], openAddChangeModifiPopup.data[1])" class="button">Сохранить</button>
				</div>
			</popup>

			<popup :show="openDelPopup" @closePopup="closeDelPopup">
				<h3>Вы действительно хотите <br>удалить {{delText}}?</h3>
				<div class="btn-box btn-box--popup">
					<button @click="removeSelectedMod" class="button">Да, удалить</button>
					<button @click="closeDelPopup(false)" class="button button--grey">Нет, отменить</button>
				</div>
			</popup>

			<popup :show="openWarningPopupShow && hasChanges" @closePopup="closeDelPopup">
				<h3>На странице производились<br> изменения данных</h3>
				<div class="btn-box btn-box--popup">
					<button ref="dialogButton" class="button">Сохранить</button>
					<button ref="cancelButton" class="button button--grey">Отменить</button>
				</div>
			</popup>
			<div @click="closeSelects" class="tooltip-mask" ref="tooltipMask"></div>
		</section>
		<div :class="!isCreatePage ? 'show' : 'hidden'" class="globalMask"></div>
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
import {mapGetters} from 'vuex'

//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

let today = new Date()
today.setHours(0, 0, 0, 0)

export default {
	name: 'card_product',

	beforeRouteLeave(to, from, next) {
		if (this.hasChanges && !this.isCreatePage) {

			this.openWarningPopupShow = true
			next(from)
			// eventListeners
			this.$refs.dialogButton.addEventListener('click', () => {
				this.openWarningPopupShow = false
				this.hasChanges = false
				next(to)
			}, {once: true})

			this.$refs.cancelButton.addEventListener('click', () => {
				this.openWarningPopupShow = false
				this.hasChanges = false
				next(to)
			}, {once: true})
		} else {
			this.openWarningPopupShow = false
			next()
		}
	},

	components: {
		DefaultPage,
		LangSwitcher,
		DateRangePicker,
		CardsPhotoPreview,
		MultiSelect,
		draggable,
		Popup,
	},

	filters: {
		date (value) {
			if (!value)
				return ''
			let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
			return Intl.DateTimeFormat('ru-RU', options).format(value)
		}
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
			hasChanges: false,
			openWarningPopupShow: false,

			openDelPopup: false,
			selCat: [],
			delText: '',

			edited: false,

			editPromoIndex: null,
			editMarkerIndex: null,
			newIconData: {
				imagesList: []
			},

			openChangeParentModPopup: false,
			newModificatorParentName: "",
			parentModId: 0,

			photoList: {
				imagesList: []
			},

			basketList: {
				imagesList: []
			},

			additionalItems: [],

			modificatorList: [],

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
					edited: false,
					icon: {
						previewImage: "/applk2/img/marker-moon.jpg",
						name: "Острое.jpg",
						size: "2 кБайт"
					}
				},
				{
					name: "Халяль",
					model: false,
					edited: false,
					icon: {
						previewImage: "/applk2/img/marker-halal.png",
						name: "Халяль.png",
						size: "2 кБайт"
					}
				},
				{
					name: "Вегетарианское",
					model: false,
					edited: false,
					icon: {
						previewImage: "/applk2/img/marker-vegan.png",
						name: "Вегетарианское.png",
						size: "2 кБайт"
					}
				},
			],

			promoList: [
				{
					name: "ХИТ",
					model: false,
					edited: false,
				},
				{
					name: "АКЦИЯ",
					model: false,
					edited: false,
				},
				{
					name: "НОВОЕ",
					model: false,
					edited: false,
				},
			],

			selectLists: [
				{
					selectList: this.$store.getters.getCategories,
					selectListShow: false,
					selectListSels: [],
				},
				{
					selectList: [
						{
							title: "Профсоюзная 1, корп. 2",
							model: false,
							// disabled: true
						},
						{
							title: "Профсоюзная 1, корп. 2",
							model: false,
							// disabled: true
						},
						{
							title: "Профсоюзная 1, корп. 2",
							model: false,
							// disabled: true
						},
						{
							title: "Профсоюзная 1, корп. 2",
							model: false,
							// disabled: true
						},
						{
							title: "г. Москва, Московская 1, корп. 2",
							model: false,
							// disabled: true
						},
						{
							title: "ул. Кирова, д. 5",
							model: false,
							// disabled: true
						},
					],
					selectListShow: false,
					selectListSels: [],
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
			opens: 'left',
			minDate: '2019-05-02 04:00:00',
			maxDate: '2026-12-31 14:00:00',
			rangesData: {
				'Сегодня': [today, today],
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
		...mapGetters({
				categoriesList: 'getCategories',
				catalogPositions: "catalogPositions",
			}),

		selectedCount() {
			if (this.catalogPositions) {
				return this.catalogPositions.filter(item => item?.selected).length
			} else {
				return 0
			}
		},
		selectedCountAdd() {
			return this.additionalItems.filter(item => item?.selected).length
		},

		isCreatePage() {
			return !(this.$route.params.id)
		},

		editItem() {
			if (this.catalogPositions?.length) {
				return this.catalogPositions.filter(item => item.id == this.$route.params.id)[0]
			} else {
				return {}
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

		openWarningPopup() {
			this.openWarningPopupShow = true
		},
		hasChangesToggle() {
			this.hasChanges = true
		},

		clearDateRange() {
			this.dateRange.startDate = null
			this.dateRange.endDate = null
		},
		removePhoto({lists, id}) {
			this.delText = "картинку"

			this.openDelDialog( (id, lists) => {
				lists.imagesList.splice(id, 1)[0]
			}, id, lists )
		},

		toggleSelectListEmit(selectList) {
			if (!selectList.selectListShow) {
				this.selectLists.map(select => {
					select.selectListShow = false
				})
			}
		},

		addAdditional() {
			this.additionalItems.push({
					selectList: [{
												name: "Корневая",
												model: false,
												selected: false,
												isRoot: true
											}].concat(this.$store.getters.getCategories),
					selectListShow: false,
					selectListSel: {name: "Корневая", data: {}},
					inputs: {
						name: '',
						minCount: 0,
						maxCount: 0,
						maxMinCount: 0,
						freeCount: 0,
					}
				})
		},

		removeAdditional(method, index) {
			this.delText = "дополнительный товар"
			this.openDelDialog(method, index)
		},
		changeModifParentPopup() {
			this.modificatorList[this.parentModId].name = this.newModificatorParentName
			
			this.openChangeParentModPopup = false
			this.parentModId = 0
			this.newModificatorParentName = ''
		},
		changeModifParent(index) {
			this.parentModId = index
			this.openChangeParentModPopup = true
			this.newModificatorParentName = this.modificatorList[index].name
		},

		removeParentMod(index) {
			this.delText = "строку модификаторов"
			this.openDelDialog((indexEl)=> {
				this.modificatorList.splice(indexEl, 1)

				while (this.modificatorList.child?.length){
					this.modificatorList.children.splice(0, 1)
				}

				this.openChangeParentModPopup = false

			}, index)
		},


		// logic Marker
		openAddMarkPopupShow() {
			this.openAddMarkPopup = true
			this.newIconData.imagesList = []
			this.newMarkName = ""
		},

		editMarker(index) {
			this.openAddMarkPopup = true
			this.edited = true
			let {name, icon} = this.markList[index]

			this.editMarkerIndex = index

			this.newMarkName = name
			this.newIconData.imagesList = [icon]
		},

		changeMarker() {
			if (this.markList[this.editMarkerIndex].name != this.newMarkName) {
				this.markList[this.editMarkerIndex].name = this.newMarkName || "Не назван"
			}
			if (this.markList[this.editMarkerIndex].icon != this.newIconData.imagesList[0]) {
				this.markList[this.editMarkerIndex].icon = this.newIconData.imagesList[0]
			}

			this.newMarkName = ""
			this.newIconData.imagesList = []
			this.editMarkerIndex = null
			this.closeAddPopup(false)
		},

		removeMarker(index) {
			this.delText = "маркер"
			this.openDelDialog((indexEl)=> {
				this.markList.splice(indexEl, 1)
			}, index)
		},

		// logic Promo
		editPromo(index) {
			this.openAddPromPopup = true
			this.edited = true
			let {name} = this.promoList[index]

			this.editPromoIndex = index

			this.newPromName = name
		},

		changePromo() {
			if (this.promoList[this.editPromoIndex].name != this.newPromName) {
				this.promoList[this.editPromoIndex].name = this.newPromName || "Не назван"
			}

			this.newPromName = ""
			this.editPromoIndex = null
			this.closeAddPopup(false)
		},

		removePromo(index) {
			this.delText = "акцию"
			this.openDelDialog((indexEl)=> {
				this.promoList.splice(indexEl, 1)
			}, index)
		},
	
		// logic Modificator
		changeModifChild(parentId, childId) {
			this.openAddChangeModifiPopup.opened = true
			this.openAddChangeModifiPopup.data[0] = parentId
			this.openAddChangeModifiPopup.data[1] = childId
			if (this.modificatorList[parentId].child[childId].trim().toLowerCase() != 'название') {
				this.newChangeModifiName = this.modificatorList[parentId].child[childId]
			}
		},

		removeModificator(item, list){
			this.newModificatorParentName = ''
			this.delText = "модификатор"
			this.openDelDialog(this.removeChildAt, item, list)
		},

		closeDelPopup(state) {
			this.openDelPopup = state
			this.openWarningPopupShow = state
			this.selCat = []
		},

		openDelDialog(method, data, list) {
			this.openDelPopup = true
			this.selCat = [method, data, list]
		},

		removeSelectedMod() {
			this.openDelPopup = false
			if (this.selCat[2] !== undefined) {
				this.selCat[0](this.selCat[1], this.selCat[2])
			} else if(this.selCat[1] !== undefined) {
				this.selCat[0](this.selCat[1])
			} else {
				this.selCat[0]()
			}
		},

		closeSelects() {
			if (
				!event.target.closest(".select__list")
			) {
				this.selectLists.forEach(el => el.selectListShow = false)
				this.$refs.tooltipMask.classList.remove("show")
			}
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

			this.modificatorList[parentId].child[index] = this.newChangeModifiName || "Название"

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
				name: this.newMarkName || "Не назван",
				icon: this.newIconData.imagesList[0] || {
					previewImage: "/applk2/img/marker-moon.jpg",
					name: "Не выбран",
					size: "2 кБайт"
				},
				model: false,
				edited: true
			})
			this.newMarkName = ""
			this.newIconData.imagesList = []
			this.edited = false
			this.closeAddPopup(false)
		},

		addPromPopup() {
			this.promoList.push({
				name: this.newPromName,
				model: false,
				edited: true,
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
			this.newChangeModifiName = ''
			this.edited = false
			this.openAddMarkPopup = state
			this.openAddPromPopup = state
			this.openAddModifiPopup = state
			this.openAddChangeModifiPopup.opened = state
			this.openChangeParentModPopup = state
		},

		sortBy(event, key) {
			const selectedSortable = document.querySelector('.card-table-products__item.selected')

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

		blockAdditionalItem(idx) {
			this.additionalItems[idx].blocked = !this.additionalItems[idx].blocked;
		},

		blockAllSelected() {
			this.catalogPositions.filter(item => item.selected).forEach(row => {
				this.blockItem(this.catalogPositions.findIndex(item => item.id == row.id))
			})
		},

		selectAll() {
			if (!this.selectAllInput) {
				this.catalogPositions.map(item => item.selected = true)
			} else {
				this.catalogPositions.map(item => item.selected = false)
			}
		},

		removeAllSelectedAdd() {
			this.openDelDialog(() => {
				this.additionalItems.filter(item => item.selected).forEach(row => {
					this.removeAtAdd(this.additionalItems.findIndex(item => item.id == row.id))
				})
				this.selectAllInputAdd = false
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
		},
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
