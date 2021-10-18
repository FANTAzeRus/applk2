<template>
	<!--Default page-->
	<div class="page default-page left-act">

		<!--Site header block-->
		<header class="header">
			<a href="#" class="logo">
				<img src="@/assets/img/public/logo.svg" alt="Логотип Apps4B" class="logo__img">
				<span class="logo__text">Мобильные приложения<br>для бизнеса</span>
			</a>
			<div class="language">
				<div class="language__current">
					<div class="language__flag">
						<svg class="icon"><use xlink:href="img/public/icon-lang.svg#rus" /></svg>
					</div>
					<div class="language__arrow"></div>
				</div>
				<div class="language__list">
					<div class="language__item">
						<svg class="icon"><use xlink:href="img/public/icon-lang.svg#rus" /></svg>
						Русский
					</div>
					<div class="language__item">
						<svg class="icon"><use xlink:href="img/public/icon-lang.svg#eng" /></svg>
						English
					</div>
				</div>
			</div>

			<div class="header-contacts">
				<a href="#" class="header-contacts__help-link">Нужна помощь?</a>
				<a href="mailto:" class="header-contacts__item header-contacts__email">
					<svg class="icon icon--email">
						<use xlink:href="img/public/icons-pack.svg#email"></use>
					</svg>
				</a>
				<a href="tel:" class="header-contacts__item header-contacts__phone">
					<svg class="icon icon--phone">
						<use xlink:href="img/public/icons-pack.svg#phone"></use>
					</svg>
				</a>
				<a href="tel:" class="header-contacts__item header-contacts__plus">
					<svg class="icon icon--add">
						<use xlink:href="img/public/icons-pack.svg#add"></use>
					</svg>
				</a>
			</div>
			<div class="header-user">
				<div class="diagram" style="--percent: 75;">
					<div class="diagram__inner">
						<div class="diagram__digit">255</div>
						<div class="diagram__text">дней</div>
					</div>
					<svg width="50" height="50">
						<circle transform="rotate(-90)" r="22" cx="-25" cy="25" />
						<circle transform="rotate(-90)" r="22" cx="-25" cy="25" />
					</svg>
				</div>
				<div class="header-user__text">
					<div class="header-user__name">Иванов Александр</div>
					<div class="header-user__role">Администратор</div>
				</div>
			</div>
		</header>
		<!--Site header block end-->

		<!--Left menu block-->
		<nav class="menu">
			<ul class="menu__list">
				<li class="menu__item menu__item--selected">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#address" /></svg>
						Адреса
					</a>
				</li>
				<li class="menu__item">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#catalog" /></svg>
						Каталог
					</a>
				</li>
				<li class="menu__item">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#clients" /></svg>
						Клиенты
					</a>
				</li>
				<li class="menu__item">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#actions" /></svg>
						Акции</a>
				</li>
				<li class="menu__item">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#news" /></svg>
						Новости
					</a>
				</li>
				<li class="menu__item">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#maps" /></svg>
						Карты
					</a>
				</li>
				<li class="menu__item">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#push" /></svg>
						Push
					</a>
				</li>
				<li class="menu__item">
					<a href="#" class="menu__link">
						<svg class="icon"><use xlink:href="img/public/icons-pack.svg#settings" /></svg>
						Настройки
					</a>
				</li>
			</ul>
		</nav>
		<!--Left menu block end-->
		
		<!--Left menu Activ block-->
		<section class="menu-act">
			<ul class="tabs-control-menu">
				<li class="tabs-control-menu__list tabs-control-menu__active"><a class="tabs-control-menu__link" href="#">Активные</a></li>
				<li class="tabs-control-menu__list"><a class="tabs-control-menu__link" lass="tabs-control-menu__link"href="#">Все</a></li>
				<a class="menu-act__close" href="" ><img src="@/assets/img/public/double-arrows-grey.svg" alt="" /></a>
			</ul>
			<div class="clear"></div>
			
			<div class="all_adres">
				<select class="select">
					<option value="" selected>Все адреса</option>
					<option>Адрес1</option>
					<option>Адрес2</option>
				</select>
			</div>
			<a href="#" class="add_adres">
				<span class="add_adres__icon"></span>
				<span>Добавить адрес</span>
			</a>
			
			<div class="menu-act-heading">Категории</div>
			<ul class="menu-categories">
			
				<!--Categories Level1 block-->
				<li>
					<div class="menu-categories__lev1">
						<svg class="icon icon--menu">
							<use xlink:href="img/public/icons-pack.svg#menu"></use>
						</svg>
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
						</label>
						<span>Пиццерия</span>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="img/public/icons-pack.svg#trash"></use>
						</svg>
					</div>
					
					<ul class="menu-categories__lev2">
						<!--Categories Level2 block-->
						<li class="menu-categories__lev2__list">
							<svg class="icon icon--menu">
								<use xlink:href="img/public/icons-pack.svg#menu"></use>
							</svg>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
							<span>Пиццы</span>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</li>
						<!--Categories Level1 block end-->
						
						<!--Categories Level1 block-->
						<li class="menu-categories__lev2__list">
							<svg class="icon icon--menu">
								<use xlink:href="img/public/icons-pack.svg#menu"></use>
							</svg>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
							<span>Роллы</span>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</li class="menu-categories__list">
						<!--Categories Level1 block end-->
						
						<!--Categories Level1 block-->
						<li class="menu-categories__lev2__list">
							<svg class="icon icon--menu">
								<use xlink:href="img/public/icons-pack.svg#menu"></use>
							</svg>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
							<span>Пироги</span>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</li>
						<!--Categories Level1 block end-->
					</ul>
				</li>
				<!--Categories Level1 block end-->
				
				<!--Categories Level1 block-->
				<li>
					<div class="menu-categories__lev1">
						<svg class="icon icon--menu">
							<use xlink:href="img/public/icons-pack.svg#menu"></use>
						</svg>
						<label class="checkbox checkbox--filled checkbox--super--small">
							<input class="checkbox__input" type="checkbox">
							<span class="checkbox__span"></span>
						</label>
						<span>Пиццерия</span>
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
						<svg class="icon icon--trash">
							<use xlink:href="img/public/icons-pack.svg#trash"></use>
						</svg>
					</div>
					
					<ul class="menu-categories__lev2">
						<!--Categories Level2 block-->
						<li class="menu-categories__lev2__list">
							<svg class="icon icon--menu">
								<use xlink:href="img/public/icons-pack.svg#menu"></use>
							</svg>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox" checked>
								<span class="checkbox__span"></span>
							</label>
							<span class="menu-categories__lev2__list__act">Пиццы</span>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</li>
						<!--Categories Level1 block end-->
						
						<!--Categories Level1 block-->
						<li class="menu-categories__lev2__list">
							<svg class="icon icon--menu">
								<use xlink:href="img/public/icons-pack.svg#menu"></use>
							</svg>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
							<span>Роллы</span>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</li>
						<!--Categories Level1 block end-->
						
						<!--Categories Level1 block-->
						<li class="menu-categories__lev2__list">
							<svg class="icon icon--menu">
								<use xlink:href="img/public/icons-pack.svg#menu"></use>
							</svg>
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
							<span>Пироги</span>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</li>
						<!--Categories Level1 block end-->
					</ul>
				</li>
				<!--Categories Level1 block end-->
			</ul>
			<div class="menu-categories-hover">
				<div class="menu-categories-hover__label">1</div>
				<span>1 выделен</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="img/public/icons-pack.svg#trash"></use>
				</svg>
			</div>
			
		</section>
		<!--Left menu Activ block end-->
		 
		<!--Breadcrumbs block-->
		<section class="breadcrumbs">
			<div class="breadcrumbs__list">
				<a href="#" class="breadcrumbs__item">Категория 1</a>
				<div class="breadcrumbs__separator"></div>
				<a href="#" class="breadcrumbs__item">Категория 1</a>
				<div class="breadcrumbs__separator"></div>
				<div class="breadcrumbs__item">Позиции в категории
					<a class="breadcrumbs__link">Пицца</a>
				</div>
			</div>
		</section>
		<!--Breadcrumbs block end-->

		<!--Content block-->
		<section class="content">
			<div class="content_block content_block-card">
				<!--Card Product Heder-->
				<div class="flex_block">
					<a class="add_positionk" href="/">Добавление новой позиции</a>
					<div class="language_razdel">
						<div class="language_razdel-txt">Язык раздела</div>
						<div class="language language_razdel-cont">
							<div class="language__current">
								<div class="language__flag">
									<svg class="icon"><use xlink:href="img/public/icon-lang.svg#rus" /></svg>
								</div>
								<div class="language__arrow"></div>
							</div>
							<div class="language__list">
								<div class="language__item">
									<svg class="icon"><use xlink:href="img/public/icon-lang.svg#rus" /></svg>
									Русский
								</div>
								<div class="language__item">
									<svg class="icon"><use xlink:href="img/public/icon-lang.svg#eng" /></svg>
									English
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--Card Product Heder end-->
				
				<div class="separator_all_grey"></div>
				<div class="content_section">
				  <div class="content_section__block">
					<div class="heading-grey">Основные параметры</div>
					<div class="separator_all_grey"></div>
					
					<!--Categories and Addresses--> 
					<div class="categories_fddresses-block">
						<div>
							<div class="content_heading default-heading heading-first">Категории</div>
							<select class="select">
								<option value="" selected>Пицца</option>
								<option>Пицца1</option>
								<option>Пицца2</option>
							</select>
						</div>
						<div>
							<div class="content_heading default-heading heading-first">Адреса</div>
							<select class="select js-select-tags">
								  <option selected="selected">Адрес 1</option>
								  <option selected="selected">Адрес 2</option>
								  <option>Адрес 3</option>
								  <option>Адрес 3</option>
								  <option>Адрес 3</option>
							</select>
						</div>
					</div>
					<!--Categories and Addresses end-->
					
					<!--Additional Categories-->
					<div class="other_categories">
						<div class="content_heading default-heading">Дополнительные категории</div>
						<div class="text-label--with-arrow">Блюдо дня</div><br />
						<div class="text-label--with-arrow">Бизнес-ланч</div><br />
						<div class="text-label--with-arrow">Акция на апрель</div>
					</div>
					<!--Additional Categories end-->
					
					<div class="vendor-code-and-date-block">
					
						<!--Inputs block-->
						<div>
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
									<span class="promo-date-heading__date--text">Дата и время акции</span>
									<a class="promo-date-heading__date-icon" href="" ><img src="@/assets/img/public/calendar-icon.svg" alt="" /></a>
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
						<div class="content_heading default-heading">Основное фото позиции</div>
						<div class="content_caption">Размер: 600x360 пикс, вес не более 600 кБ</div>
						
						<!--Photo position-->
						<div class="position_photo__block">
							<img class="position_photo__block__pic" src="img/public/pic/position_photo-main.svg" alt="">
							<div class="position_photo__block__txt">
								<div class="position_photo__block--name">Пицца1.jpg</div>
								<a class="position_photo__block--size" href="" >2 Мб</a>
							</div>
							<div class="position_photo__block__icon">
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
								<svg class="icon icon--trash">
									<use xlink:href="img/public/icons-pack.svg#trash"></use>
								</svg>
							</div>
							<div class="clear"></div>
						</div>
						<!--Photo position end-->
						
						<!--Photo add-->
						<div class="position_photo__block">
							<div class="position_photo__block__new-photo"><img class="position_photo__block__new-photo--icon" src="img/public/pic/icon--add-photo.svg" alt=""></div>
							<div class="position_photo__block__txt">
								<a class="position_photo__block--name position_photo__block--namelink" href="" >Загрузить новое фото</a>
								<a class="position_photo__block--size" href="" >Выбрать из библиотеки фото</a>
							</div>
						</div>
						<!--Photo add end-->
						
						<!--Photo in basket-->
						<div class="content_heading default-heading">Фото в корзине 1:1</div>
						<div class="position_photo__block">
							<img class="position_photo__block__pic" src="img/public/pic/position_photo-other.svg" alt=""> 
							<div class="position_photo__block__txt">
								<a class="position_photo__block--name position_photo__block--namelink" href="" >Загрузить новое фото</a>
								<a class="position_photo__block--size" href="" >Выбрать из библиотеки фото</a>
							</div>
						</div>
						<!--Photo in basket end-->
					</div>
					<!--Photo position block end-->
					
					<div class="heading-grey">Свойства</div>
					<div class="separator_all_grey"></div>
					<div class="content_heading default-heading">Маркеры</div>
					
					<!--Properties markers-->
					<div class="marker-block">
						<div class="marker-block__column">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox" checked="">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Острое</span>
								<img class="card_product-marker-icon" src="img/public/icons/marker-moon.jpg" alt="">
							</label>
						</div>
						<div class="marker-block__column">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Халяль</span>
								<img class="card_product-marker-icon" src="img/public/icons/marker-halal.svg" alt="">
							</label>
							<br />
						</div>
						<div class="marker-block__column">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox" checked="">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Вегетарианское</span>
								<img class="card_product-marker-icon" src="img/public/icons/marker-tree.svg" alt="">
							</label>
							<br />
						</div>
						<div class="marker-block__column">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox" checked="">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Острое</span>
								<img class="card_product-marker-icon" src="img/public/icons/marker-moon.jpg" alt="">
							</label>
							<br />
						</div>
						<div class="marker-block__column">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Халяль</span>
								<img class="card_product-marker-icon" src="img/public/icons/marker-halal.svg" alt="">
							</label>
							<br />
						</div>
						<div class="marker-block__column">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox" checked="">
								<span class="checkbox__span"></span>
								<span class="checkbox__text">Вегетарианское</span>
								<img class="card_product-marker-icon" src="img/public/icons/marker-tree.svg" alt="">
							</label>
						</div>
						
						<div class="clear"></div>
					</div>
						
						<div class="clear"></div>
					</div>
					<a class="button__add">Добавить маркер</a>
					<!--Properties markers end-->
					
					<!--Properties promo-->
					<div class="content_heading default-heading">Акция</div>
					<div class="promo-block">
						<div>
							<label class="radio radio--filled">
								<input name="promo-name" class="radio__input" type="radio" checked="">
								<span class="radio__span"></span>
								<span class="radio__text">ХИТ</span>
							</label>
						</div>
						<div>
							<label class="radio radio--filled">
								<input name="promo-name" class="radio__input" type="radio">
								<span class="radio__span"></span>
								<span class="radio__text">АКЦИЯ</span>
							</label>
						</div>
						<div>
							<label class="radio radio--filled">
								<input name="promo-name" class="radio__input" type="radio">
								<span class="radio__span"></span>
								<span class="radio__text">НОВОЕ</span>
							</label>
						</div>
					</div>
					<a class="button__add">Добавить акцию</a>
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
							<span class="radio__text">ХИТ</span>
						</label>
						<label class="radio radio--filled">
							<input name="bju-name" class="radio__input" type="radio">
							<span class="radio__span"></span>
							<span class="radio__text">АКЦИЯ</span>
						</label>
					</div>
					<!--BJU block radio end-->
					
					<div class="heading-grey">Модификаторы</div>
					<div class="separator_all_grey"></div>
					
					<!--Modifiers block-->
					<div class="card_product_tag">
						<div class="tag__list">
							<span class="tag__title">Размер пиццы</span>
							<div class="tag__item">30см<a class="tag__close"></a></div>
							<div class="tag__item">50см<a class="tag__close"></a></div>
							<div class="tag__item">70см<a class="tag__close"></a></div>
							<a class="tag__add"></a>
						</div>

						<div class="tag__list">
							<span class="tag__title">Тесто</span>
							<div class="tag__item">ультратонкое<a class="tag__close"></a></div>
							<div class="tag__item">тонкое<a class="tag__close"></a></div>
							<div class="tag__item">классическое<a class="tag__close"></a></div>
							<a class="tag__add"></a>
						</div>
						
						<div class="tag__list">
							<span class="tag__title">Мука</span>
							<div class="tag__item">пшеничная<a class="tag__close"></a></div>
							<div class="tag__item">рисовая<a class="tag__close"></a></div>
							<div class="tag__item">ржаная<a class="tag__close"></a></div>
							<a class="tag__add"></a>
						</div>	

						<a class="button__add">Добавить модификатор</a>
					</div>
					<!--Modifiers block end-->
					
					<div class="heading-grey">Варианты</div>
					<div class="separator_all_grey"></div>
					
					<!--Cadr Product Table header block-->
					<div class="card-table-heder">
						<div>
							<div class="card-table-heder__label">1</div>
							<div class="card-table-heder__label-text">1 выделен</div>
							<div class="card-table-heder__battons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
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
					
					<div class="separator_all_grey"></div>
					
					<!--Cadr Product Table block-->
					<div class="card-table-products">
						<!--Product Table row-->
						<div class="card-table-products__list card-table-products__list--grey">
							<div class="card-table-products__item card-table-products__item--menudrop"></div>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo">Фото</div>
							<div class="card-table-products__item card-table-products__item--art">Артикул</div>
							<div class="card-table-products__item card-table-products__item--name table-products__item--select">Параметры</div>
							<div class="card-table-products__item card-table-products__item--bju">БЖУ</div>
							<div class="card-table-products__item card-table-products__item--weigh">Вес</div>
							<div class="card-table-products__item card-table-products__item--price">Цена</div>
							<div class="card-table-products__item card-table-products__item--iconsy"></div>
						</div>
						<!--Product Table row end-->	
						
					  <div class="card-table-products--scroll">
						<!--Product Table row-->				
						<div class="card-table-products__list">				
							<a class="card-table-products__item card-table-products__item--menudrop">
								<svg class="icon icon--menu">
									<use xlink:href="img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
							<div class="card-table-products__item card-table-products__item--art">AA3456</div>
							<div class="card-table-products__item card-table-products__item--name">
								Размер пиццы 30см, тесто тонкое, мука классическая
							</div>
							<div class="card-table-products__item card-table-products__item--bju">
								Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
							</div>
							<div class="card-table-products__item card-table-products__item--weight">
								100 гр.
							</div>
							<div class="card-table-products__item card-table-products__item--price">
								500 ₽
							</div>
							<div class="card-table-products__item card-table-products__item--icons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							</div>
						</div>
						<!--Product Table row end-->
						
						<!--Product Table row-->				
						<div class="card-table-products__list">				
							<a class="card-table-products__item card-table-products__item--menudrop">
								<svg class="icon icon--menu">
									<use xlink:href="img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox" checked>
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
							<div class="card-table-products__item card-table-products__item--art">AA3456</div>
							<div class="card-table-products__item card-table-products__item--name">
								Размер пиццы 30см, тесто тонкое, мука классическая
							</div>
							<div class="card-table-products__item card-table-products__item--bju"></div>
							<div class="card-table-products__item card-table-products__item--weight">
								100 гр.
							</div>
							<div class="card-table-products__item card-table-products__item--price">
								500 ₽
							</div>
							<div class="card-table-products__item card-table-products__item--icons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							</div>
						</div>
						<!--Product Table row end-->
						
						<!--Product Table row-->				
						<div class="card-table-products__list">				
							<a class="card-table-products__item card-table-products__item--menudrop">
								<svg class="icon icon--menu">
									<use xlink:href="img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
							<div class="card-table-products__item card-table-products__item--art">AA3456</div>
							<div class="card-table-products__item card-table-products__item--name">
								Размер пиццы 30см, тесто тонкое, мука классическая
							</div>
							<div class="card-table-products__item card-table-products__item--bju">
								Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
							</div>
							<div class="card-table-products__item card-table-products__item--weight">
								100 гр.
							</div>
							<div class="card-table-products__item card-table-products__item--price">
								500 ₽
							</div>
							<div class="card-table-products__item card-table-products__item--icons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							</div>
						</div>
						<!--Product Table row end-->
						
						<!--Product Table row-->				
						<div class="card-table-products__list">				
							<a class="card-table-products__item card-table-products__item--menudrop">
								<svg class="icon icon--menu">
									<use xlink:href="img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
							<div class="card-table-products__item card-table-products__item--art">AA3456</div>
							<div class="card-table-products__item card-table-products__item--name">
								Размер пиццы 30см, тесто тонкое, мука классическая
							</div>
							<div class="card-table-products__item card-table-products__item--bju">
								Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
							</div>
							<div class="card-table-products__item card-table-products__item--weight">
								100 гр.
							</div>
							<div class="card-table-products__item card-table-products__item--price">
								500 ₽
							</div>
							<div class="card-table-products__item card-table-products__item--icons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							</div>
						</div>
						<!--Product Table row end-->
						
						<!--Product Table row-->				
						<div class="card-table-products__list">				
							<a class="card-table-products__item card-table-products__item--menudrop">
								<svg class="icon icon--menu">
									<use xlink:href="img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
							<div class="card-table-products__item card-table-products__item--art">AA3456</div>
							<div class="card-table-products__item card-table-products__item--name">
								Размер пиццы 30см, тесто тонкое, мука классическая
							</div>
							<div class="card-table-products__item card-table-products__item--bju">
								Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
							</div>
							<div class="card-table-products__item card-table-products__item--weight">
								100 гр.
							</div>
							<div class="card-table-products__item card-table-products__item--price">
								500 ₽
							</div>
							<div class="card-table-products__item card-table-products__item--icons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							</div>
						</div>
						<!--Product Table row end-->	

						<!--Product Table row-->				
						<div class="card-table-products__list">				
							<a class="card-table-products__item card-table-products__item--menudrop">
								<svg class="icon icon--menu">
									<use xlink:href="img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
							<div class="card-table-products__item card-table-products__item--art">AA3456</div>
							<div class="card-table-products__item card-table-products__item--name">
								Размер пиццы 30см, тесто тонкое, мука классическая
							</div>
							<div class="card-table-products__item card-table-products__item--bju">
								Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
							</div>
							<div class="card-table-products__item card-table-products__item--weight">
								100 гр.
							</div>
							<div class="card-table-products__item card-table-products__item--price">
								500 ₽
							</div>
							<div class="card-table-products__item card-table-products__item--icons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							</div>
						</div>
						<!--Product Table row end-->		

						<!--Product Table row-->				
						<div class="card-table-products__list">				
							<a class="card-table-products__item card-table-products__item--menudrop">
								<svg class="icon icon--menu">
									<use xlink:href="img/public/icons-pack.svg#menu"></use>
								</svg>
							</a>
							<div class="card-table-products__item card-table-products__item--check">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox">
									<span class="checkbox__span"></span>
								</label>
							</div>
							<div class="card-table-products__item card-table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
							<div class="card-table-products__item card-table-products__item--art">AA3456</div>
							<div class="card-table-products__item card-table-products__item--name">
								Размер пиццы 30см, тесто тонкое, мука классическая
							</div>
							<div class="card-table-products__item card-table-products__item--bju">
								Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
							</div>
							<div class="card-table-products__item card-table-products__item--weight">
								100 гр.
							</div>
							<div class="card-table-products__item card-table-products__item--price">
								500 ₽
							</div>
							<div class="card-table-products__item card-table-products__item--icons">
								<svg class="icon icon--attention">
									<use xlink:href="img/public/icons-pack.svg#attention"></use>
								</svg>
								<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
							</div>
						</div>
						<!--Product Table row end-->	
					  </div>
					<!--Card Product Table block end-->
					</div>
					
					<div class="heading-grey">Дополнительные товары</div>
					<div class="separator_all_grey"></div>
					
					<!--Additional goods header block-->
					<div class="card-table-heder additional-goods-heder">
						<div>
							<div class="card-table-heder__label">1</div>
							<div class="card-table-heder__label-text">1 выделен</div>
							<div class="card-table-heder__battons">
								<svg class="icon icon--trash">
									<use xlink:href="img/public/icons-pack.svg#trash"></use>
								</svg>
							</div>
						</div>
					</div>
					<!--Cadr Product Table header block end-->
				</div>	
				
				<div class="separator_all_grey"></div>
				<!--Additional goods Table block-->
				<div class="additional-goods">
				
					<!--Additional goods headlines-->
					<div class="additional-goods__list additional-goods__list--grey">
						<div class="additional-goods__item additional-goods__item--check">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
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
					
					<!--Additional goods row-->
					<div class="additional-goods__list">
						<div class="additional-goods__item additional-goods__item--check">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
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
								<use xlink:href="img/public/icons-pack.svg#attention"></use>
							</svg>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</div>
					</div>	
					<!--Additional goods row end-->
					
					<!--Additional goods row-->
					<div class="additional-goods__list">
						<div class="additional-goods__item additional-goods__item--check">
							<label class="checkbox checkbox--filled checkbox--super--small">
								<input class="checkbox__input" type="checkbox">
								<span class="checkbox__span"></span>
							</label>
						</div>
						<div class="additional-goods__item additional-goods__item--category">
							<select class="select">
								<option value="" selected="">Приборы</option>
								<option>Приборы1</option>
								<option>Приборы2</option>
							</select></div>
						<div class="additional-goods__item additional-goods__item--name">
							<input type="text" class="input-text" placeholder="Приборы к пицце">
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
								<use xlink:href="img/public/icons-pack.svg#attention"></use>
							</svg>
							<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
							<svg class="icon icon--trash">
								<use xlink:href="img/public/icons-pack.svg#trash"></use>
							</svg>
						</div>
					</div>	
					<!--Additional goods row end-->
				  </div>
				  <!--Additional goods Table block end-->
				  
				  <div class="content_section__block">
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
					
					
					<a class="button card_product_add_position">Добавить позицию</a>
					<a class="button button--bordered-grey card_product_button_back"><span class="button--arrow-back"></span>Назад в каталог</a>
				  </div>	
				</div>
			</div>
		</section>
		<!--Content block end-->
	</div>
	<!--Default page end-->
</template>

<script>
export default {
  name: 'card_product',
}
</script>
