<template>
	<default-page class="left-act" :pageOptions="pageOptions">
		<section class="content" :class="!isCreatePage ? 'content--masked' : ''">
			<div class="content_block content_block-card">
				<!--Card Product Heder-->
				<div class="flex_block">

					<span
						class="add_positionk add_positionk--no-action"
					>
						Создания адреса
					</span>

					<div class="language_razdel">
						<svg class="icon icon--copy">
							<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
						</svg>
						<div class="language_razdel-txt">Язык раздела</div>
						<lang-switcher class="language_razdel-cont language_razdel-cont--address"/>
					</div>
				</div>
				<!--Card Product Heder end-->
				
				<div class="separator_all_grey"></div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Основные параметры</div>
						<div class="separator_all_grey"></div>

						<div class="main-params-row">
							<div class="main-params__name">
								<label for="name" class="content_heading default-heading">Название адреса</label>
								<input v-model="mainParams.name" type="text" name="address" class="input-text">
							</div>
							<div class="main-params__status">
								<label for="name" class="content_heading default-heading">Статус</label>
								<tooltip
									:show="mainParams.status.open"
									:list="mainParams.status.list"
									:selItem.sync="mainParams.status.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(mainParams.status)"
								/>
							</div>
						</div>

						<div class="position_photo--row">
							<cards-photo-preview
								@removePhoto="removePhoto"
								type="popup"
								onePhoto
								:lists="newIconData.mainPhoto"
								title="Фото адреса"
								class="photo--rect"
							/>
							<cards-photo-preview
								@removePhoto="removePhoto"
								type="popup"
								onePhoto
								:lists="newIconData.addressPhoto"
								title="Главное фото"
								class="photo--rect"
							/>
						</div>

					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Адрес</div>
						<div class="separator_all_grey"></div>

						<div class="address-row">
							<div class="address__country">
								<label for="name" class="content_heading default-heading">Страна</label>
								<tooltip
									:show="address.country.open"
									:list="address.country.list"
									:selItem.sync="address.country.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(address.country)"
								/>
							</div>
							<div class="address__city">
								<label for="name" class="content_heading default-heading">Город</label>
								<tooltip
									:show="address.city.open"
									:list="address.city.list"
									:selItem.sync="address.city.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(address.city)"
								/>
							</div>
						</div>

						<div class="address-row address-row--narrow">
							<div class="address__district">
								<label for="name" class="content_heading default-heading">Район</label>
								<tooltip
									:show="address.district.open"
									:list="address.district.list"
									:selItem.sync="address.district.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(address.district)"
								/>
							</div>
							<div class="address__index">
								<label for="name" class="content_heading default-heading">Индекс</label>
								<input v-model="address.index" type="text" name="index" class="input-text">
							</div>
						</div>

						<div class="address-row address-row--narrow">
							<div class="address__street">
								<label for="name" class="content_heading default-heading">Улица</label>
								<input v-model="address.street" type="text" name="street" class="input-text">
							</div>
						</div>

						<div class="address-row">
							<div class="address__house">
								<label for="name" class="content_heading default-heading">Номер дома</label>
								<input v-model="address.house" type="text" name="house" class="input-text">
							</div>
							<div class="address__floor">
								<label for="name" class="content_heading default-heading">Этаж</label>
								<input v-model="address.floor" type="text" name="floor" class="input-text">
							</div>
							<div class="address__office">
								<label for="name" class="content_heading default-heading">Офис</label>
								<input v-model="address.office" type="text" name="office" class="input-text">
							</div>
							<div class="address__pavilion">
								<label for="name" class="content_heading default-heading">Номер павильона</label>
								<input v-model="address.pavilion" type="text" name="pavilion" class="input-text">
							</div>
						</div>

						<div class="address-row">
							<div class="address__trade-business">
								<label for="name" class="content_heading default-heading">Торговый/бизнес центр</label>
								<tooltip
									:show="address.tradeBusiness.open"
									:list="address.tradeBusiness.list"
									:selItem.sync="address.tradeBusiness.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(address.tradeBusiness)"
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Метка на карте и панорама</div>
						<div class="separator_all_grey"></div>

						<div class="map-row">
							<div class="map__map" id="mainMap">
								
							</div>
							<div class="map-column">
								<div class="map__longitude">
									<label for="name" class="content_heading default-heading">Долгота</label>
									<input v-model="map.longitude" type="text" name="address" class="input-text">
								</div>
								<div class="map__latitude">
									<label for="name" class="content_heading default-heading">Широта</label>
									<input v-model="map.latitude" type="text" name="address" class="input-text">
								</div>
							</div>
						</div>
						<div class="map-row">
							<div class="map__latitude">
								<label for="name" class="content_heading default-heading">3D-панорама/Street View</label>
								<input type="text" name="address" class="input-text">
							</div>
						</div>
					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Контакты</div>
						<div class="separator_all_grey"></div>

						<div class="contact-column">
							<div class="contact__phone">
								<label for="name" class="content_heading default-heading">Телефоны для обратной связи</label>
								<draggable
									tag="div"
									:group="{name: 'phone'}"
									v-bind="dragOptions"
									handle=".handle-table"
									class="contact-column"
								>
									<div
										v-for="(phone, idx) in contact.phones"
										:key="idx"
										class="contact__item"
									>
										<div class="handle-table">
											<svg class="icon icon--menu">
												<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
											</svg>
										</div>
										<input
											v-model="phone.data"
											v-mask="maskFormated"
											type="text"
											name="phoneNumber"
											class="input-text input-text--data"
										>
										<input
											v-model="phone.title"
											type="text"
											name="phoneTitle"
											class="input-text input-text--title"
										>
										<div @click="removeWithDialog(removeAt, phone, contact.phones, 'телефон')" class="icon icon--remove">
											<img src="@/assets/img/public/icons/list-remove.svg">
										</div>
									</div>
								</draggable>
								<div class="contact__item contact__item--add" :class="{'contact__item--add--empty': !contact.phones.length}">
									<input
										v-model="newData.phone.data"
										v-mask="maskFormated"
										placeholder="+7 (___) __-__-__"
										type="text"
										name="phoneNumber"
										class="input-text input-text--data input-text--data--phone"
									>
									<input
										v-model="newData.phone.title"
										placeholder="Введите описание телефона..."
										type="text" name="phoneTitle"
										class="input-text input-text--title"
									>
									<div @click="addItem(newData.phone, contact.phones)" class="icon icon--remove">
										<img src="@/assets/img/public/icons/add.svg">
									</div>
								</div>
							</div>

							<div class="contact__email">
								<label for="name" class="content_heading default-heading">Телефоны для обратной связи</label>
								<draggable
									tag="div"
									:group="{name: 'email'}"
									v-bind="dragOptions"
									handle=".handle-table"
									class="contact-column"
								>
									<div
										v-for="(email, idx) in contact.emails"
										:key="idx"
										class="contact__item"
									>
										<div class="handle-table">
											<svg class="icon icon--menu">
												<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
											</svg>
										</div>
										<input v-model="email.data" type="text" name="emailNumber" class="input-text input-text--data">
										<input v-model="email.title" type="text" name="emailTitle" class="input-text input-text--title">
										<div @click="removeWithDialog(removeAt, email, contact.emails, 'email')" class="icon icon--remove">
											<img src="@/assets/img/public/icons/list-remove.svg">
										</div>
									</div>
								</draggable>
								<div class="contact__item contact__item--add" :class="{'contact__item--add--empty': !contact.emails.length}">
									<input v-model="newData.email.data" placeholder="Введите e-mail..." type="text" name="emailNumber" class="input-text input-text--data">
									<input v-model="newData.email.title" placeholder="Введите описание e-mail..." type="text" name="emailTitle" class="input-text input-text--title">
									<div @click="addItem(newData.email, contact.emails)" class="icon icon--remove" >
										<img src="@/assets/img/public/icons/add.svg">
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Как добраться</div>
						<div class="separator_all_grey"></div>

						<div class="how-to-get-column">
							<label for="description-textarea" class="content_heading default-heading">Описание</label>
							<textarea v-model="howToGet.description" id="description-textarea" class="textarea-text"></textarea>
						</div>

						<div class="position_photo--row position_photo--hfix">
							<cards-photo-preview
								@removePhoto="removePhoto"
								:lists="newIconData.howToGetPhoto"
								title="Фото"
								class="photo--rect"
							/>
						</div>

						<div class="how-to-get-row">
							<div class="how-to-get__metro">
								<label for="name" class="content_heading default-heading">Метро</label>
								<tooltip
									:show="howToGet.metro.open"
									:list="howToGet.metro.list"
									:selItem.sync="howToGet.metro.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(howToGet.metro)"
								/>
							</div>
							<div class="how-to-get__time">
								<label for="name" class="content_heading default-heading">Время в пути (мин)</label>
								<input v-model="howToGet.time" type="text" name="address" class="input-text">
							</div>
							<div class="how-to-get__color">
								<div :style="{backgroundColor: `#${howToGet.color || '00B51D'}`}" class="how-to-get__demo"></div>
								<label for="name" class="content_heading default-heading">Цвет</label>
								<input maxlength="6" v-model="howToGet.color" type="text" name="address" class="input-text">
							</div>
							<div class="icon icon--remove">
								<img src="@/assets/img/public/icons/add.svg">
							</div>
						</div>

						<div class="how-to-get-row">
							<div class="how-to-get__name">
								<label for="name" class="content_heading default-heading">Автобус</label>
								<input v-model="howToGet.bus" type="text" name="address" class="input-text">
							</div>
							<div class="how-to-get__name">
								<label for="name" class="content_heading default-heading">Троллейбус</label>
								<input v-model="howToGet.trolleybus" type="text" name="address" class="input-text">
							</div>
							<div class="how-to-get__name">
								<label for="name" class="content_heading default-heading">Трамвай</label>
								<input v-model="howToGet.tram" type="text" name="address" class="input-text">
							</div>
							<div class="how-to-get__name">
								<label for="name" class="content_heading default-heading">Маршрутка</label>
								<input v-model="howToGet.minibus" type="text" name="address" class="input-text">
							</div>
						</div>

					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Режим работы</div>
						<div class="separator_all_grey"></div>

						<div class="working-time-row working-time-row--center">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input v-model="workingTime.aroundClock" class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Круглосуточно</span>
							</label>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input v-model="workingTime.withoutDinner" class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Без обеда</span>
							</label>
						</div>

						<div class="card-table-products">
							<div class="card-table-products__list card-table-products__list--working-time card-table-products__list--grey">
								<div class="card-table-products__item card-table-products__item--check">
									<label @input="selectAll(selectAllInput, workingTime.list)" class="checkbox checkbox--filled checkbox--super--small">
										<input v-model="selectAllInput" class="checkbox__input" type="checkbox">
										<span class="checkbox__span"></span>
									</label>
								</div>
								<div  class="card-table-products__item">Дни недели</div>
								<div class="card-table-products__item">Время работы</div>
								<div class="card-table-products__item">Время Обеда</div>
								<div class="card-table-products__item"></div>
							</div>
							<div
								v-for="item in workingTime.list"
								:key="item.title"
								class="card-table-products__list card-table-products__list--working-time"
							>
								<div class="card-table-products__item card-table-products__item--check">
									<label class="checkbox checkbox--filled checkbox--super--small">
										<input v-model="item.selected" class="checkbox__input" type="checkbox">
										<span class="checkbox__span"></span>
									</label>
								</div>
								<div class="card-table-products__item card-table-products__item--name">
									{{item.title}}
								</div>
								<div class="card-table-products__item">
									<date-range-picker
										class="dateRange dateRange--card-address"
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
										:linkedCalendars="linkedCalendars"
										v-model="item.dateRange"
									>
										<template v-slot:input="picker">
											<a class="promo-date-heading__date-icon promo-date-heading__date-icon--working-time" >
												<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.4915 0C3.7995 0 0 3.808 0 8.5C0 13.192 3.7995 17 8.4915 17C13.192 17 17 13.192 17 8.5C17 3.808 13.192 0 8.4915 0ZM8.5 15.3C4.743 15.3 1.7 12.257 1.7 8.5C1.7 4.743 4.743 1.7 8.5 1.7C12.257 1.7 15.3 4.743 15.3 8.5C15.3 12.257 12.257 15.3 8.5 15.3ZM8.313 4.25H8.262C7.922 4.25 7.65 4.522 7.65 4.862V8.874C7.65 9.1715 7.803 9.452 8.0665 9.605L11.594 11.7215C11.883 11.8915 12.257 11.8065 12.427 11.5175C12.4697 11.4487 12.4981 11.372 12.5105 11.2919C12.5229 11.2119 12.5191 11.1302 12.4993 11.0517C12.4794 10.9732 12.444 10.8994 12.3951 10.8349C12.3462 10.7703 12.2847 10.7163 12.2145 10.676L8.925 8.721V4.862C8.925 4.522 8.653 4.25 8.313 4.25Z" fill="#E6442F"/>
												</svg>
											</a>

											<span v-if="picker.startDate" class="promo-date-heading__date--text">
												{{ picker.startDate | date }} <span v-if="picker.endDate">-</span> {{ picker.endDate | date }}
											</span>
											<span v-else class="promo-date-heading__date--text">
												Выберите время
											</span>
										</template>
										<template v-slot:footer="actions">
											<div class="drp-buttons">
												<button @click="clearDateRange(item.dateRange)" type="button" class="cancelBtn btn btn-sm btn-secondary">Очистить</button>

												<button @click="actions.clickApply" type="button" class="applyBtn btn btn-sm btn-success">Принять</button>
											</div>
										</template>
									</date-range-picker>
								</div>
								<div class="card-table-products__item">
									<date-range-picker
										class="dateRange dateRange--card-address"
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
										:linkedCalendars="linkedCalendars"
										v-model="item.dateRangeDinner"
									>
										<template v-slot:input="picker">
											<a class="promo-date-heading__date-icon promo-date-heading__date-icon--working-time" >
												<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.4915 0C3.7995 0 0 3.808 0 8.5C0 13.192 3.7995 17 8.4915 17C13.192 17 17 13.192 17 8.5C17 3.808 13.192 0 8.4915 0ZM8.5 15.3C4.743 15.3 1.7 12.257 1.7 8.5C1.7 4.743 4.743 1.7 8.5 1.7C12.257 1.7 15.3 4.743 15.3 8.5C15.3 12.257 12.257 15.3 8.5 15.3ZM8.313 4.25H8.262C7.922 4.25 7.65 4.522 7.65 4.862V8.874C7.65 9.1715 7.803 9.452 8.0665 9.605L11.594 11.7215C11.883 11.8915 12.257 11.8065 12.427 11.5175C12.4697 11.4487 12.4981 11.372 12.5105 11.2919C12.5229 11.2119 12.5191 11.1302 12.4993 11.0517C12.4794 10.9732 12.444 10.8994 12.3951 10.8349C12.3462 10.7703 12.2847 10.7163 12.2145 10.676L8.925 8.721V4.862C8.925 4.522 8.653 4.25 8.313 4.25Z" fill="#E6442F"/>
												</svg>
											</a>

											<span v-if="picker.startDate" class="promo-date-heading__date--text">
												{{ picker.startDate | date }} <span v-if="picker.endDate">-</span> {{ picker.endDate | date }}
											</span>
											<span v-else class="promo-date-heading__date--text">
												Выберите время
											</span>
										</template>
										<template v-slot:footer="actions">
											<div class="drp-buttons">
												<button @click="clearDateRange(item.dateRangeDinner)" type="button" class="cancelBtn btn btn-sm btn-secondary">Очистить</button>

												<button @click="actions.clickApply" type="button" class="applyBtn btn btn-sm btn-success">Принять</button>
											</div>
										</template>
									</date-range-picker>
								</div>
								<div></div>
							</div>
						</div>

					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Cоц. сети</div>
						<div class="separator_all_grey"></div>

						<div class="contact__phone">
							<label for="name" class="content_heading default-heading">Адрес ссылки</label>
							<draggable
								tag="div"
								:group="{name: 'link'}"
								v-bind="dragOptions"
								handle=".handle-table"
								class="contact-column"
							>
								<div
									v-for="(link, idx) in soc.links"
									:key="idx"
									class="contact__item"
								>
									<div class="handle-table">
										<svg class="icon icon--menu">
											<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
										</svg>
									</div>
									<input
										v-model="link.data"
										v-mask="maskFormated"
										type="text"
										name="phoneNumber"
										class="input-text input-text--soc--data"
									>
									<input
										v-model="link.title"
										type="text"
										name="phoneTitle"
										class="input-text input-text--soc--title"
									>
									<div @click="removeWithDialog(removeAt, link, soc.links, 'ссылку')" class="icon icon--remove">
										<img src="@/assets/img/public/icons/list-remove.svg">
									</div>
								</div>
							</draggable>
							<div class="contact__item contact__item--add" :class="{'contact__item--add--empty': !soc.links.length}">
								<input
									v-model="newData.link.data"
									placeholder="Введите адрес ссылки полностью"
									type="text"
									name="phoneNumber"
									class="input-text input-text--soc--data"
								>
								<tooltip
									:show="newData.link.open"
									:list="newData.link.list"
									:selItem.sync="newData.link.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(newData.link)"
									class="input-text input-text--soc--title"
								/>
								<div @click="addItem(newData.link, soc.links)" class="icon icon--remove">
									<img src="@/assets/img/public/icons/add.svg">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">E-mail для сервисов</div>
						<div class="separator_all_grey"></div>

						<div class="contact__phone">
							<label for="name" class="content_heading default-heading">E-mail для обратной связи</label>
							<draggable
								tag="div"
								:group="{name: 'email'}"
								v-bind="dragOptions"
								handle=".handle-table"
								class="contact-column"
							>
								<div
									v-for="(link, idx) in email.links"
									:key="idx"
									class="contact__item"
								>
									<div class="handle-table">
										<svg class="icon icon--menu">
											<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
										</svg>
									</div>
									<input
										v-model="link.data"
										type="text"
										name="phoneNumber"
										class="input-text input-text--email--data"
									>
									<input
										v-model="link.title"
										type="text"
										name="phoneTitle"
										class="input-text input-text--email--title"
									>
									<div @click="removeWithDialog(removeAt, link, email.links, 'ссылку')" class="icon icon--remove">
										<img src="@/assets/img/public/icons/list-remove.svg">
									</div>
								</div>
							</draggable>
							<div class="contact__item contact__item--add" :class="{'contact__item--add--empty': !email.links.length}">
								<input
									v-model="newData.emailLink.data"
									placeholder="Введите e-mail..."
									type="text"
									name="phoneNumber"
									class="input-text input-text--email--data"
								>
								<tooltip
									:show="newData.emailLink.open"
									:list="newData.emailLink.list"
									:selItem.sync="newData.emailLink.sel"
									@update:selItem="selSelectItem"
									@toggleSelectList="toggleSelectList(newData.emailLink)"
									class="input-text input-text--email--title"
								/>
								<div @click="addItem(newData.emailLink, email.links)" class="icon icon--remove">
									<img src="@/assets/img/public/icons/add.svg">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="content_section">
					<div class="content_section__block">
						<div class="heading-grey">Зоны доставки</div>
						<div class="separator_all_grey"></div>

						<div class="delivery-zone-row">
							<div class="delivery-zone__map" id="deliveryMap">
								
							</div>
							<div class="delivery-zone-column">

								<div class="position_photo--row position_photo--hfix">
									<cards-photo-preview
										@removePhoto="removeFile"
										:lists="newIconData.deliveryZonePhoto"
										title="Загрузка нового полигона"
										warningText=""
										file
										onePhoto
										class="photo--square"
									/>
								</div>

								<div class="card-table-heder card-table-heder--delivery-zone">
									<div>
										<div class="card-table-heder__label card-table-heder__label--nml">{{selectedCountDelivery}}</div>
										<div class="card-table-heder__label-text">{{selectedCountDelivery}} выделен</div>
										<div class="card-table-heder__battons">
											<svg @click="removeAllSelected" class="icon icon--trash">
												<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
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

								<div class="card-table-products__list card-table-products__list--delivery-zone card-table-products__list--grey">
									<div class="card-table-products__item card-table-products__item--check">
										<label @input="selectAll(selectAllInputDelivery, deliveryZone.list)" class="checkbox checkbox--filled checkbox--super--small">
											<input v-model="selectAllInputDelivery" class="checkbox__input" type="checkbox">
											<span class="checkbox__span"></span>
										</label>
									</div>
									<div class="card-table-products__item">Название</div>
									<div class="card-table-products__item">Стоимость, руб</div>
									<div class="card-table-products__item">Цвет полигона</div>
									<div class="card-table-products__item"></div>
								</div>

								<draggable
									tag="div"
									:group="{name: 'card-table-products-delivery'}"
									v-bind="dragOptions"
									class="card-table-products"
								>			
									<div
										v-for="item in deliveryZone.list"
										:key="item.title"
										class="card-table-products__list card-table-products__list--delivery-zone"
									>	
										<div class="card-table-products__item card-table-products__item--check">
											<label class="checkbox checkbox--filled checkbox--super--small">
												<input v-model="item.selected" class="checkbox__input" type="checkbox">
												<span class="checkbox__span"></span>
											</label>
										</div>

										<div class="card-table-products__item">{{item.title}}</div>
										<div class="card-table-products__item">{{item.price}}</div>
										<div class="card-table-products__item card-table-products__item--color" :style="{backgroundColor: item.color}">{{item.color}}</div>

										<div class="card-table-products__item card-table-products__item--delivery-zone--icons">
											<svg @click="removeWithDialog(removeAt, item, deliveryZone.list, 'зону доставки')" class="icon icon--trash">
												<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
											</svg>
											<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
											<svg class="cursor" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="11.5" cy="11.5" r="11.5" fill="#D5D5D5"/>
												<path d="M9.5 7L14 11.5L9.5 15.5" stroke="white"/>
											</svg>

										</div>
									</div>
								</draggable>

							</div>
						</div>
					</div>
				</div>

				<div class="content_section content_section--bottom">
					<div class="content_section__block">
						<div v-if="isCreatePage">
							<router-link :to="{name: 'addresses'}" class="button card_product_add_position">Добавить адрес</router-link>
						</div>
						<div v-else>
							<router-link :to="{name: 'card-address'}" class="button card_product_add_position">Сохранить изменения</router-link>
						</div>
					</div>
				</div>

			</div>

			<popup :show="openDelPopup" @closePopup="closeDelPopup">
				<h3>Вы действительно хотите <br>удалить {{delText}}?</h3>
				<div class="btn-box btn-box--popup">
					<button @click="removeSelected" class="button">Да, удалить</button>
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
			
			<div @click="closeAllTooltips" class="tooltip-mask" ref="tooltipMask"></div>

		</section>
		<div :class="!isCreatePage ? 'show' : 'hidden'" class="globalMask"></div>
	</default-page>
</template>

<script>
import CardsPhotoPreview from "@/components/parts/CardsPhotoPreview"
import LangSwitcher from "@/components/parts/LangSwitcher"
import DateRangePicker from 'vue2-daterange-picker'
import DefaultPage from '@/components/DefaultPage'
import Tooltip from '@/components/parts/Tooltip'
import Popup from "@/components/Popup"
import draggable from "vuedraggable"
import { maska } from 'maska'

//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

let today = new Date()
today.setHours(0, 0, 0, 0)

export default {
	name: 'card-address',

	components: {
		CardsPhotoPreview,
		DateRangePicker,
		LangSwitcher,
		DefaultPage,
		draggable,
		Tooltip,
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

	directives: {
		mask: maska
	},

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

	data() {
		return {
			selectAllInput: false,
			selectAllInputDelivery: false,

			hasChanges: false,
			openWarningPopupShow: false,

			openDelPopup: false,
			delText: '',


			newData: {
				phone: {
					data: '',
					title: ''
				},
				email: {
					data: '',
					title: ''
				},
				link: {
					data: '',
					title: '',
					open: false,
					list: [{title: 'Ютуб'}, {title: 'Не Ютуб'}],
					sel: {title: 'Выберите соц. сеть', class: {"select--gray": true}},
				},
				emailLink: {
					data: '',
					title: '',
					open: false,
					list: [{title: 'Ютуб'}, {title: 'Не Ютуб'}],
					sel: {title: 'Заявки с приложения', class: {"select--gray": true}},
				}
			},

			newIconData: {
				mainPhoto: {
					imagesList: [],
				},
				addressPhoto: {
					imagesList: [],
				},
				howToGetPhoto: {
					imagesList: [{
						name: 'Пицца1.jpg',
						previewImage: '/applk2/img/position_photo-other.svg',
						size: '0.19 кБайт',
					}],
				},
				deliveryZonePhoto: {
					imagesList: []
				},
			},


			mainParams: {
				name: 'Gambrinus на Московской',
				status: {
					list: [{title: 'Активен'}, {title: 'Не активен'}],
					open: false,
					sel: {title: 'Активен'},
				}
			},
			address: {
				country: {
					list: [{title: 'Россия'}, {title: 'Украина'}],
					open: false,
					sel: {title: 'Россия'},
				},
				city: {
					list: [{title: 'Москва'}, {title: 'Киев'}],
					open: false,
					sel: {title: 'Москва'},
				},
				district: {
					list: [{title: 'Савеловский (САО)'}],
					open: false,
					sel: {title: 'Савеловский (САО)'},
				},
				street: '',
				index: '',
				house: '',
				floor: '',
				office: '',
				pavilion: '',
				tradeBusiness: {
					list: [{title: 'Москва'}, {title: 'Киев'}],
					open: false,
					sel: {title: 'Москва'},
				},
			},
			map: {
				longitude: '',
				latitude: '',
			},
			contact: {
				phones: [
					{title: 'Телефон доставки', data: '+7 (999) 999-99-99'},
					{title: 'Телефон директора', data: '+7 (999) 123-45-67'}
				],
				emails: [
				]
			},
			howToGet: {
				description: '',
				metro: {
					list: [{title: 'Савеловский (САО)'}],
					open: false,
					sel: {title: 'Савеловский (САО)'},
				},
				bus: '',
				trolleybus: '',
				tram: '',
				minibus: ''
			},
			soc: {
				links: [],
			},
			email: {
				links: [],
			},
			workingTime: {
				aroundClock: false,
				withoutDinner: false,
				list: [
					{
						title: 'Понедельник',
						selected: false,
						dateRange: {
							startDate: '',
							endDate: '',
						},
						dateRangeDinner: {
							startDate: '',
							endDate: '',
						}
					},
					{
						title: 'Вторник',
						selected: false,
						dateRange: {
							startDate: '',
							endDate: '',
						},
						dateRangeDinner: {
							startDate: '',
							endDate: '',
						}
					},
					{
						title: 'Среда',
						selected: false,
						dateRange: {
							startDate: '',
							endDate: '',
						},
						dateRangeDinner: {
							startDate: '',
							endDate: '',
						}
					},
					{
						title: 'Четверг',
						selected: false,
						dateRange: {
							startDate: '',
							endDate: '',
						},
						dateRangeDinner: {
							startDate: '',
							endDate: '',
						}
					},
					{
						title: 'Пятница',
						selected: false,
						dateRange: {
							startDate: '',
							endDate: '',
						},
						dateRangeDinner: {
							startDate: '',
							endDate: '',
						}
					},
					{
						title: 'Суббота',
						selected: false,
						dateRange: {
							startDate: '',
							endDate: '',
						},
						dateRangeDinner: {
							startDate: '',
							endDate: '',
						}
					},
					{
						title: 'Воскресенье',
						selected: false,
						dateRange: {
							startDate: '',
							endDate: '',
						},
						dateRangeDinner: {
							startDate: '',
							endDate: '',
						}
					}
				]
			},
			deliveryZone: {
				list: [
					{
						selected: false,
						title: 'Полигон в МКАД',
						price: '250',
						color: '#E6442F'
					},
					{
						selected: false,
						title: 'Полигон за МКАД',
						price: '2504',
						color: '#E6432F'
					}
				]
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
				name: "addresses",
				components: {
					menuAct: true,
					menuActAddress: true,
					content: true,
					breadcrumbs: true,
				}
			}
		}
	},

	computed: {
		maskFormated() {
			return '+# (###) ###-##-##'
		},

		lists() {
			return Object.assign(this.mainParams, this.address, this.howToGet, this.newData)
		},

		isCreatePage() {
			return !(this.$route.params.id)
		},

		selectedCount() {
			if (this.workingTime.list) {
				return this.workingTime.list.filter(item => item?.selected).length
			} else {
				return 0
			}
		},

		selectedCountDelivery() {
			if (this.deliveryZone.list) {
				return this.deliveryZone.list.filter(item => item?.selected).length
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
		clearDateRange(dateRange) {
			dateRange.startDate = null
			dateRange.endDate = null
		},

		selectAll(input, list) {
			if (!input) {
				list.map(item => item.selected = true)
			} else {
				list.map(item => item.selected = false)
			}
		},

		addItem(item, list) {
			if (typeof item.data == 'string' || typeof item.title == 'string') {
				if (
						!(item.data.toLowerCase().trim() == '' || item.title.toLowerCase().trim() == '')
						|| item.sel
					) {
					if (item.sel) {
						item.title = item.sel.title
						list.push(item)
					} else {
						list.push(item)
					}

					this.newData = {
							phone: {
								data: '',
								title: ''
							},
							email: {
								data: '',
								title: ''
							},
							link: {
								data: '',
								title: '',
								open: false,
								list: [{title: 'Ютуб'}, {title: 'Не Ютуб'}],
								sel: {title: ''},
							},
							emailLink: {
								data: '',
								title: '',
								open: false,
								list: [{title: 'Ютуб'}, {title: 'Не Ютуб'}],
								sel: {title: ''},
							}
						}

				}
			}
		},
		removeAt(item, list) {
			list.splice(list.indexOf(item), 1);
		},

		removeWithDialog(method, index, list, delText="дополнительный товар") {
			this.delText = delText
			this.openDelDialog(method, index, list)
		},

		removeAllSelected() {
			if (this.selectedCountDelivery) {
				this.delText = "зоны доставки"
				this.openDelDialog(() => {
					this.deliveryZone.list.filter(item => item.selected).forEach(row => {
						this.removeAt(this.deliveryZone.list.findIndex(item => item.id == row.id), this.deliveryZone.list)
					})
					this.selectAllInputDelivery = false
				}) 
			}
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

		toggleSelectList(selectList) {
			if (!selectList.open) {
				this.closeAllTooltips()
				this.$refs.tooltipMask.classList.add("show")
			}
			selectList.open = !selectList.open
		},

		selSelectItem() {
			this.$refs.tooltipMask.classList.remove("show")
		},

		closeAllTooltips() {
			for (let key in this.lists) {
				if (this.lists[key] instanceof Object) this.lists[key].open = false
			}
			this.$refs.tooltipMask.classList.remove("show")
		},

		removePhoto({lists, id}) {
			this.delText = "картинку"

			this.openDelDialog( (id, lists) => {
				lists.imagesList.splice(id, 1)[0]
			}, id, lists )
		},
		removeFile({lists, id}) {
			this.delText = "файл"

			this.openDelDialog( (id, lists) => {
				lists.imagesList.splice(id, 1)[0]
			}, id, lists )
		},

		hasChangesToggle() {
			this.hasChanges = true
		},

		closeDelPopup(state = false) {
			this.openDelPopup = state
			this.openWarningPopupShow = state
			this.selCat = []
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
	}
}
</script>