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
				<li class="tabs-control-menu__list"><a class="tabs-control-menu__link" href="#">Все</a></li>
				<a class="menu-act__close" href="" ><img src="@/assets/img/public/double-arrows-grey.svg" alt="" /></a>
			</ul>
			<div class="clear"></div>
			
			<select class="all_adres">
				<option value="" selected>Все адреса</option>
				<option>Адрес1</option>
				<option>Адрес2</option>
			</select>
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
						<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
							<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
							<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
							<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
						<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
							<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
							<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
							<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
				<img class="icon--edit" src="img/public/icons/edit.svg" alt="">
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
				<div class="separator_all_grey"></div>
				<div class="content_section">
					<div class="heading-grey">Основные параметры</div>
					<div class="separator_all_grey"></div>
					<div class="grid_50_24">
						<div>
							<div class="content_heading default-heading heading-first">Категории</div>
							<select>
								<option value="" selected>Пицца</option>
								<option>Пицца1</option>
								<option>Пицца2</option>
							</select>
						</div>
						<div>
							<div class="content_heading default-heading heading-first">Адреса</div>
							<select>
								<option value="" selected>Пицца</option>
								<option>Пицца1</option>
								<option>Пицца2</option>
							</select>
						</div>
					</div>
					<div class="text-label-inline">
						<div class="content_heading default-heading">Дополнительные категории</div>
						<div class="text-label--with-arrow">Блюдо дня</div><br />
						<div class="text-label--with-arrow">Бизнес-ланч</div><br />
						<div class="text-label--with-arrow">Акция на апрель</div>
					</div>
					<div class="grid_40_36">
						<div>
							<div class="art-heading">
								<div class="content_heading default-heading">Артикул</div>
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox" checked="">
									<span class="checkbox__span"></span>
									<span class="checkbox__text">Отображать артикул</span>
								</label>							
							</div>
							<input type="text" class="input-text" placeholder="АА123345">
							<div class="content_heading default-heading">Название</div>
							<input type="text" class="input-text" placeholder="Пицца">
							<div class="grid_40_10">
								<div>
									<div class="content_heading default-heading">Цена</div>
									<input type="text" class="input-text" placeholder="500 руб.">
								</div>
								<div>
									<div class="content_heading default-heading">Старая цена</div>
									<input type="text" class="input-text" placeholder="700 руб.">
								</div>
							</div>
						</div>
						<div class="promo-date-block">
							<div class="promo-date-heading">
								<label class="checkbox checkbox--filled checkbox--super--small">
									<input class="checkbox__input" type="checkbox" checked="">
									<span class="checkbox__span"></span>
								</label>
								<span class="act">Акция</span>
								<span class="checkbox__text">Дата и время акции</span>
								<a href ><img src="@/assets/img/public/calendar-icon.svg" alt="" /></a>
							</div>
							<div class="content_heading default-heading">Временное название</div>
							<input type="text" class="input-text" placeholder="Пицца по акции">
							<div class="content_heading default-heading">Новая цена</div>
							<input type="text" class="input-text" placeholder="400 руб.">

						</div>
					</div>
					
					<div class="grid_20_10">
						<div>
							<div class="content_heading default-heading">Вес</div>
							<input type="text" class="input-text" placeholder="100 гр.">
						</div>
						<div>
							<div class="content_heading default-heading">Шаг</div>
							<input type="text" class="input-text" placeholder="100 гр.">
						</div>
						<div>
							<div class="content_heading default-heading">Мин. кол-во покупки</div>
							<input type="text" class="input-text" placeholder="2">
						</div>
						<div>
							<div class="content_heading default-heading">Цена за кол-во</div>
							<input type="text" class="input-text" placeholder="1">
						</div>
						<div>
							<div class="content_heading default-heading">Ед. измерения</div>
							<input type="text" class="input-text" placeholder="штука">
						</div>
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

	name: 'test',
}
</script>