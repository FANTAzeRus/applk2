<template>
	<!--Default page-->
	
	<default-page :pageOptions="pageOptions">

		<template v-slot:top-content>
			<ul class="top-content__list">
				<li class="top-content__tab">
					<h3>Заказы за 07 сентября 2021 г.</h3>
					<svg @click="reloadProgressBar" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.0433541 9.09523C-0.0604656 8.19546 0.0260508 7.32684 0.261376 6.52396C1.04348 3.8558 3.49709 1.8936 6.40751 1.859V0.114824C6.40751 0.0179256 6.52863 -0.0339843 6.60822 0.0248469L10.1969 2.66187C10.2558 2.70686 10.2558 2.79683 10.1969 2.83836L6.61168 5.47538C6.52863 5.53422 6.41097 5.48231 6.41097 5.38541V3.6447C4.49722 3.67584 2.86379 4.85593 2.16128 6.52396C1.89481 7.1538 1.75984 7.8494 1.79791 8.5796C1.84982 9.58319 2.22703 10.5072 2.82226 11.2547C3.14064 11.6527 3.06451 12.234 2.65269 12.5351C2.26164 12.8224 1.71485 12.7428 1.41377 12.3621C0.676655 11.4416 0.185241 10.3203 0.0433541 9.09523ZM10.4046 5.74532C11.0033 6.48936 11.3805 7.41681 11.4289 8.4204C11.467 9.15406 11.3286 9.84966 11.0656 10.476C10.363 12.1441 8.72961 13.3276 6.81586 13.3553V11.6146C6.81586 11.5177 6.69474 11.4658 6.61515 11.5246L3.02644 14.1616C2.96761 14.2066 2.96761 14.2966 3.02644 14.3381L6.61168 16.9752C6.69474 17.034 6.8124 16.9821 6.8124 16.8852V15.141C9.72282 15.1099 12.1799 13.1477 12.9585 10.476C13.1939 9.67316 13.2769 8.80454 13.1766 7.90477C13.0381 6.67969 12.5467 5.55844 11.8096 4.63791C11.5051 4.25723 10.9617 4.17764 10.5707 4.46487C10.1623 4.76595 10.0862 5.34734 10.4046 5.74532Z" fill="#D5D5D5"/>
					</svg>
				</li>
				<progress ref="reloadProgress" value="0" max="1000"></progress>
			</ul>
		</template>

		<section class="content">
			<div class="content_block_grey content_block_grey--table">
				
				<!--Product Table header block-->
				<div class="table-heder-products table-heder-products--orders">
					<div class="table-heder-products__dates">
						<div class="table-heder-filtr table-heder-filtr__address">
							<div>
								<h3>Выберите адрес</h3>
								<label class="checkbox checkbox--filled">
									<input class="checkbox__input" type="checkbox" checked>
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Только активные</span>
								</label>
							</div>
							<div class="table-heder-filtr__dates table-heder-filtr__dates--time">
								<select class="select">
									<option value="" selected>Все адреса</option>
									<option>Адрес1</option>
									<option>Адрес2</option>
								</select>
							</div>
						</div>

						<div class="table-heder-filtr-search table-heder-filtr-search--table">
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

						<div class="table-heder-filtr table-heder-filtr__address">
							<h3>Выберите период отображения</h3>
							<div class="table-heder-filtr__dates">
								<div class="table-heder-filtr__btns-row">
									<button @click="filterSelect" >Сегодня</button>
									<button @click="filterSelect" >Вчера</button>
									<button @click="filterSelect" >Неделя</button>
									<div class="select-box">
										<button class="select" @click.prevent="openTooltip">3й квартал</button>
										<div class="tooltip-orders tooltip-orders--select">
											<ul class="tooltip-orders__list">
												<li class="tooltip-orders__item">Адрес1</li>
												<li class="tooltip-orders__item">Адрес2</li>
											</ul>
										</div>
									</div>
									<div class="select-box">
										<button class="select last" @click.prevent="openTooltip">2021г.</button>
										<div class="tooltip-orders tooltip-orders--select">
											<ul class="tooltip-orders__list">
												<li class="tooltip-orders__item">2020г.</li>
												<li class="tooltip-orders__item">2019г.</li>
											</ul>
										</div>
									</div>
								</div>
								<!-- @update="updateValues"
												@toggle="checkOpen" -->
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
										<svg class="dateRange__pic" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.6667 2.00002H10V0.666687H8.66667V2.00002H3.33333V0.666687H2V2.00002H1.33333C0.593333 2.00002 0.00666666 2.60002 0.00666666 3.33335L0 12.6667C0 13.4 0.593333 14 1.33333 14H10.6667C11.4 14 12 13.4 12 12.6667V3.33335C12 2.60002 11.4 2.00002 10.6667 2.00002ZM10.6667 12.6667H1.33333V5.33335H10.6667V12.6667Z" fill="#E6442F"/>
										</svg>

										{{ picker.startDate | date }} - {{ picker.endDate | date }}
									</template>
								</date-range-picker>
							</div>
						</div>
					</div>


					<div class="table-heder-products__other">
						<div class="table-heder-filtr table-heder-filtr__btns">
							<button @click="filterSelect" class="table-heder-filtr__btn selected"><p>Всего:</p> <span>53</span></button>
							<button @click="filterSelect" class="table-heder-filtr__btn"><p>Доставки:</p> <span>13</span></button>
							<button @click="filterSelect" class="table-heder-filtr__btn"><p>Самовывоз:</p> <span>40</span></button>
						</div>

						<!--Filter and Search block-->
						<div class="table-heder-filtr-search table-heder-filtr-search--table-hide">
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
					<div class="table-products__list table-products__list--orders table-products__list--grey">
						<div @click="sortBy" class="table-products__item table-products__item--sortable table-products__item--dates">
							Дата и время
							<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
							</svg>
						</div>
						<div class="table-products__item table-products__item--os">OS</div>
						<div @click="sortBy" class="table-products__item table-products__item--sortable table-products__item--orders">
							Заказы
							<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
							</svg>
						</div>
						<div class="table-products__item table-products__item--typeOrder">ТИП заказа</div>
						<div class="table-products__item table-products__item--deadline">Срок</div>
						<div class="table-products__item table-products__item--customer">Заказчик</div>
						<div @click="sortBy" class="table-products__item table-products__item--sortable table-products__item--priceR">
							сумма, ₽
							<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.804546 0.925603L5.38628e-08 1.73316L4.5 6.25L9 1.73316L8.19545 0.925603L4.5 4.63489L0.804546 0.925603Z" fill="#9B9B9B"/>
							</svg>
						</div>
						<div class="table-products__item table-products__item--pay">Оплата</div>
						<div class="table-products__item table-products__item--status">Статус</div>
						<div class="table-products__item table-products__item--review">отзыв</div>
						<div class="table-products__item table-products__item--comment">коммент</div>
						<div class="table-products__item table-products__item--open">весь</div>
					</div>
					<!--Product Table row end-->  
					
					<!--Product Table row-->        
					<div
						class="table-products__list table-products__list--orders"
						v-for="(item, index) in Array(7)"
						:class="index == 1 ? 'table-products__list--new' : ''"
						:key="item"
					>        
						<a class="table-products__item table-products__item--dates">
						10.08.21  15:00
						</a>
						<div class="table-products__item table-products__item--os">
							<img v-if="!index % 2" src="@/assets/img/public/icons/android.svg" alt="">
							<img v-else src="@/assets/img/public/icons/apple.svg" alt="">
						</div>
						<div class="table-products__item table-products__item--orders-list">
							<p @click="openTooltip">
								№1028
							</p>
							
							<div class="tooltip-orders tooltip-orders--orders" :class="[index == 0 || index == 1 ? 'show--bottom' : '', index == 2 ? 'show--left' : '']">
								<div class="tooltip-orders__header">
									<h3>Позиции в заказе</h3>
									<div class="print">
										<p @click="openInnerTooltip" class="print">
											<svg class="print-outer" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.3074 12.844H5.6865C5.39206 12.844 5.15332 13.1011 5.15332 13.4182C5.15332 13.7353 5.39203 13.9924 5.6865 13.9924H10.3073C10.6018 13.9924 10.8405 13.7353 10.8405 13.4182C10.8405 13.1011 10.6018 12.844 10.3074 12.844Z" fill="#D5D5D5"/>
												<path d="M10.3074 11.0332H5.6865C5.39206 11.0332 5.15332 11.2903 5.15332 11.6074C5.15332 11.9245 5.39203 12.1816 5.6865 12.1816H10.3073C10.6018 12.1816 10.8405 11.9245 10.8405 11.6074C10.8405 11.2903 10.6018 11.0332 10.3074 11.0332Z" fill="#D5D5D5"/>
												<path d="M14.7511 3.89735H13.0546V0.574196C13.0546 0.257105 12.8159 0 12.5215 0H3.4737C3.17925 0 2.94051 0.257071 2.94051 0.574196V3.89735H1.24406C0.558081 3.89735 0 4.49839 0 5.23714V11.0138C0 11.7526 0.558081 12.3536 1.24406 12.3536H2.94061V15.4358C2.94061 15.7529 3.17932 16.01 3.47379 16.01H12.5214C12.8158 16.01 13.0545 15.7529 13.0545 15.4358V12.3536H14.7511C15.4371 12.3536 15.9951 11.7526 15.9951 11.0138V5.23714C15.9951 4.49842 15.4371 3.89735 14.7511 3.89735ZM4.00685 1.14839H11.9883V3.89735H4.00685V1.14839ZM11.9882 14.8616H4.00697C4.00697 14.7494 4.00697 10.3028 4.00697 10.164H11.9882C11.9882 10.3063 11.9882 14.7537 11.9882 14.8616ZM12.5215 7.26894H11.1643C10.8698 7.26894 10.6311 7.01187 10.6311 6.69475C10.6311 6.37762 10.8698 6.12055 11.1643 6.12055H12.5215C12.8159 6.12055 13.0546 6.37762 13.0546 6.69475C13.0546 7.01187 12.8159 7.26894 12.5215 7.26894Z" fill="#9B9B9B"/>
											</svg>

											Печать
										</p>
										<div class="tooltip-orders tooltip-orders--print">
											<ul class="tooltip-orders__list">
												<p class="print-inner">
													<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.3074 12.844H5.6865C5.39206 12.844 5.15332 13.1011 5.15332 13.4182C5.15332 13.7353 5.39203 13.9924 5.6865 13.9924H10.3073C10.6018 13.9924 10.8405 13.7353 10.8405 13.4182C10.8405 13.1011 10.6018 12.844 10.3074 12.844Z" fill="#D5D5D5"/>
														<path d="M10.3074 11.0332H5.6865C5.39206 11.0332 5.15332 11.2903 5.15332 11.6074C5.15332 11.9245 5.39203 12.1816 5.6865 12.1816H10.3073C10.6018 12.1816 10.8405 11.9245 10.8405 11.6074C10.8405 11.2903 10.6018 11.0332 10.3074 11.0332Z" fill="#D5D5D5"/>
														<path d="M14.7511 3.89735H13.0546V0.574196C13.0546 0.257105 12.8159 0 12.5215 0H3.4737C3.17925 0 2.94051 0.257071 2.94051 0.574196V3.89735H1.24406C0.558081 3.89735 0 4.49839 0 5.23714V11.0138C0 11.7526 0.558081 12.3536 1.24406 12.3536H2.94061V15.4358C2.94061 15.7529 3.17932 16.01 3.47379 16.01H12.5214C12.8158 16.01 13.0545 15.7529 13.0545 15.4358V12.3536H14.7511C15.4371 12.3536 15.9951 11.7526 15.9951 11.0138V5.23714C15.9951 4.49842 15.4371 3.89735 14.7511 3.89735ZM4.00685 1.14839H11.9883V3.89735H4.00685V1.14839ZM11.9882 14.8616H4.00697C4.00697 14.7494 4.00697 10.3028 4.00697 10.164H11.9882C11.9882 10.3063 11.9882 14.7537 11.9882 14.8616ZM12.5215 7.26894H11.1643C10.8698 7.26894 10.6311 7.01187 10.6311 6.69475C10.6311 6.37762 10.8698 6.12055 11.1643 6.12055H12.5215C12.8159 6.12055 13.0546 6.37762 13.0546 6.69475C13.0546 7.01187 12.8159 7.26894 12.5215 7.26894Z" fill="#9B9B9B"/>
													</svg>

													Печать всего заказа
												</p>
												<p class="print-inner">
													<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.3074 12.844H5.6865C5.39206 12.844 5.15332 13.1011 5.15332 13.4182C5.15332 13.7353 5.39203 13.9924 5.6865 13.9924H10.3073C10.6018 13.9924 10.8405 13.7353 10.8405 13.4182C10.8405 13.1011 10.6018 12.844 10.3074 12.844Z" fill="#D5D5D5"/>
														<path d="M10.3074 11.0332H5.6865C5.39206 11.0332 5.15332 11.2903 5.15332 11.6074C5.15332 11.9245 5.39203 12.1816 5.6865 12.1816H10.3073C10.6018 12.1816 10.8405 11.9245 10.8405 11.6074C10.8405 11.2903 10.6018 11.0332 10.3074 11.0332Z" fill="#D5D5D5"/>
														<path d="M14.7511 3.89735H13.0546V0.574196C13.0546 0.257105 12.8159 0 12.5215 0H3.4737C3.17925 0 2.94051 0.257071 2.94051 0.574196V3.89735H1.24406C0.558081 3.89735 0 4.49839 0 5.23714V11.0138C0 11.7526 0.558081 12.3536 1.24406 12.3536H2.94061V15.4358C2.94061 15.7529 3.17932 16.01 3.47379 16.01H12.5214C12.8158 16.01 13.0545 15.7529 13.0545 15.4358V12.3536H14.7511C15.4371 12.3536 15.9951 11.7526 15.9951 11.0138V5.23714C15.9951 4.49842 15.4371 3.89735 14.7511 3.89735ZM4.00685 1.14839H11.9883V3.89735H4.00685V1.14839ZM11.9882 14.8616H4.00697C4.00697 14.7494 4.00697 10.3028 4.00697 10.164H11.9882C11.9882 10.3063 11.9882 14.7537 11.9882 14.8616ZM12.5215 7.26894H11.1643C10.8698 7.26894 10.6311 7.01187 10.6311 6.69475C10.6311 6.37762 10.8698 6.12055 11.1643 6.12055H12.5215C12.8159 6.12055 13.0546 6.37762 13.0546 6.69475C13.0546 7.01187 12.8159 7.26894 12.5215 7.26894Z" fill="#9B9B9B"/>
													</svg>

													Печать стикеров
												</p>
												<p class="print-inner">
													<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.3074 12.844H5.6865C5.39206 12.844 5.15332 13.1011 5.15332 13.4182C5.15332 13.7353 5.39203 13.9924 5.6865 13.9924H10.3073C10.6018 13.9924 10.8405 13.7353 10.8405 13.4182C10.8405 13.1011 10.6018 12.844 10.3074 12.844Z" fill="#D5D5D5"/>
														<path d="M10.3074 11.0332H5.6865C5.39206 11.0332 5.15332 11.2903 5.15332 11.6074C5.15332 11.9245 5.39203 12.1816 5.6865 12.1816H10.3073C10.6018 12.1816 10.8405 11.9245 10.8405 11.6074C10.8405 11.2903 10.6018 11.0332 10.3074 11.0332Z" fill="#D5D5D5"/>
														<path d="M14.7511 3.89735H13.0546V0.574196C13.0546 0.257105 12.8159 0 12.5215 0H3.4737C3.17925 0 2.94051 0.257071 2.94051 0.574196V3.89735H1.24406C0.558081 3.89735 0 4.49839 0 5.23714V11.0138C0 11.7526 0.558081 12.3536 1.24406 12.3536H2.94061V15.4358C2.94061 15.7529 3.17932 16.01 3.47379 16.01H12.5214C12.8158 16.01 13.0545 15.7529 13.0545 15.4358V12.3536H14.7511C15.4371 12.3536 15.9951 11.7526 15.9951 11.0138V5.23714C15.9951 4.49842 15.4371 3.89735 14.7511 3.89735ZM4.00685 1.14839H11.9883V3.89735H4.00685V1.14839ZM11.9882 14.8616H4.00697C4.00697 14.7494 4.00697 10.3028 4.00697 10.164H11.9882C11.9882 10.3063 11.9882 14.7537 11.9882 14.8616ZM12.5215 7.26894H11.1643C10.8698 7.26894 10.6311 7.01187 10.6311 6.69475C10.6311 6.37762 10.8698 6.12055 11.1643 6.12055H12.5215C12.8159 6.12055 13.0546 6.37762 13.0546 6.69475C13.0546 7.01187 12.8159 7.26894 12.5215 7.26894Z" fill="#9B9B9B"/>
													</svg>

													Печать только списка
												</p>
											</ul>
										</div>
									</div>
								</div>
								<div class="tooltip-orders__table-box">
									<ul class="tooltip-orders__table tooltip-orders__table--sticky table-products__list table-products__list--light-grey">
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
						</div>
						<div class="table-products__item table-products__item--typeOrder-list">
							<p @click.prevent="openTooltip">
								Доставка
							</p>
							<div class="tooltip-orders">
								<div class="tooltip-orders__header">
									<h3>Адрес доставки</h3>
									<div class="print">
										<img src="@/assets/img/public/icons/printer.svg" alt="">
										Печать
									</div>
								</div>
								<h4>г. Москва, ул. Профсоюзная, д.9</h4>
								<ul class="tooltip-orders__list">
									<li class="tooltip-orders__item">квартира (офис): <div></div> <span>21</span></li>
									<li class="tooltip-orders__item">этаж <div></div> <span>3</span></li>
									<li class="tooltip-orders__item">домофон <div></div> <span>3424</span></li>
								</ul>
							</div>
						</div>
						<div class="table-products__item ">к 17:30</div>
						<div class="table-products__item table-products__item--customer-list">
							<p @click.prevent="openTooltip">
								Александр
							</p>
							<div class="tooltip-orders">
								<div class="tooltip-orders__header">
									<h3>Заказчик</h3>
									<div class="print">
										<img src="@/assets/img/public/icons/printer.svg" alt="">
										Печать
									</div>
								</div>
								<ul class="tooltip-orders__list tooltip-orders__list--nom">
									<li class="tooltip-orders__item">ФИО: <div></div> <span>Иванов Александр</span></li>
									<li class="tooltip-orders__item">телефон <div></div> <span>+7 (123) 435-43-54</span></li>
									<li class="tooltip-orders__item">e-mail: <div></div> <span>test@mail.ru</span></li>
									<li class="tooltip-orders__item">день рождения: <div></div> <span>12 июня 1990 г.</span></li>
								</ul>
								<a class="tooltip-orders__all-orders" href="#">
									Всего 25 заказов
									<img src="@/assets/img/public/icons/tooltip-link.svg" alt="">
								</a>
							</div>
						</div>
						<div v-if="index % 3" class="table-products__item table-products__item--priceR-list">
							<a @click.prevent="openTooltip" href="#">5000</a>

							<div class="tooltip-orders">
								<h3>Стоимость</h3>
								<ul class="tooltip-orders__list">
									<li class="tooltip-orders__item">По прайсу <div></div> <span>5500 руб.</span></li>
									<li class="tooltip-orders__item">Скидка <div></div> <span>200 руб.</span></li>
									<li class="tooltip-orders__item">Доставка <div></div> <span>300 руб.</span></li>
									<li class="tooltip-orders__item tooltip-orders__item--accent">Итого <div></div> <span>5000 руб.</span></li>
								</ul>
							</div>
						</div>
						<div v-else class="table-products__item ">5000</div>
						
						<a v-if="index % 2" href="#" class="table-products__item table-products__item--pay-list">оплачен</a>
						<a v-else href="#" class="table-products__item table-products__item--pay-list no--pay">не оплачен</a>
						
						<div v-if="!index % 4" class="table-products__item table-products__item--status-list">
							<p @click.prevent="openTooltip">принят</p>
							<div class="tooltip-orders tooltip-orders--status">
								<h3>Статус заказа</h3>
								<p>принят в 17:30</p>
								<ul class="tooltip-orders__list">
									<li class="tooltip-orders__item">в работе</li>
									<li class="tooltip-orders__item">доставляется</li>
									<li class="tooltip-orders__item">доставлен</li>
								</ul>
							</div>
						</div>
						<div v-else-if="index % 3" class="table-products__item table-products__item--status-list">
							<p @click.prevent="openTooltip">новый</p>
							<div class="tooltip-orders tooltip-orders--status">
								<h3>Статус заказа</h3>
								<ul class="tooltip-orders__list">
									<li class="tooltip-orders__item">принять</li>
									<li class="tooltip-orders__item">отказать</li>
									<li class="tooltip-orders__item">игнорировать</li>
								</ul>
							</div>
						</div>
						<div v-else-if="index % 2" class="table-products__item table-products__item--status-list denied">
							<p>отказано</p>
						</div>
						<div v-else class="table-products__item table-products__item--status-list executed">
							<p @click.prevent="openTooltip">исполнен</p>
							<div class="tooltip-orders tooltip-orders--status">
								<h3>Статус заказа</h3>
								<p>доставлен в 17:30</p>
								<ul class="tooltip-orders__list">
									<li class="tooltip-orders__item tooltip-orders__item--green">исполнен</li>
								</ul>
							</div>
						</div>

						<div v-if="index % 2" class="table-products__item">нет</div>
						<div v-else class="table-products__item">
							<img @click.prevent="openTooltip" src="@/assets/img/public/icons/star-list.svg" alt="">

							<div class="tooltip-orders tooltip-orders--review">
								<h3>Отзыв о заказе</h3>
								<img src="@/assets/img/public/icons/star-list.svg" alt="">
								<div>
									Еда как обычно вкусная, но где вы берете таких курьеров! Пришел, бросил заказ и убежал!
								</div>
							</div>
						</div>

						<div v-if="index % 2" href="#" class="table-products__item table-products__item--comment-list has--comment">
							<p @click.prevent="openTooltip">есть</p>
							<div class="tooltip-orders tooltip-orders--review show--right">
								<h3>Комментарий о заказе</h3>
								<div>
									Еда как обычно вкусная, но где вы берете таких курьеров! Пришел, бросил заказ и убежал!
								</div>
							</div>
						</div>
						<div v-else href="#" class="table-products__item table-products__item--comment-list">нет</div>

						<div class="table-products__item table-products__item--open-list">
							<img @click="openPopup" src="@/assets/img/public/icons/open-order.svg" alt="">
						</div>
					</div>
					<!--Product Table row end-->
				
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
import DateRangePicker from 'vue2-daterange-picker'
import Popup from '@/components/Popup'
import Pagination from '@/components/parts/Pagination'
//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

let today = new Date()
today.setHours(0, 0, 0, 0)

let yesterday = new Date()
yesterday.setDate(today.getDate() - 1)
yesterday.setHours(0, 0, 0, 0);

export default {

	name: 'orders',

	components: {
		DefaultPage,
		DateRangePicker,
		Popup,
		Pagination
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
			this.$refs.reloadProgress.value++;
			if (this.$refs.reloadProgress?.value >= 1000) {
				this.$refs.reloadProgress.value = 0;
			}
		}, 100)
	},

	data() {
		return {
			orderPopup: false,

			dateRange: {
				startDate: '2020-12-10',
				endDate: '2020-12-20',
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
				name:"orders",

				components: {
					menuAct: false,
					content: true,
					breadcrumbs: true
				}
			}
		}
	},

	methods: {
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