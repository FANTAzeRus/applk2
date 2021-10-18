<template>
	<!--Left menu block-->
	<nav class="menu">
		<ul class="menu__list">
			<li class="menu__item menu__item--selected">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#address" /></svg>
					Адреса
				</a>
			</li>
			<li class="menu__item">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#catalog" /></svg>
					Каталог
				</a>
			</li>
			<li class="menu__item">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#clients" /></svg>
					Клиенты
				</a>
			</li>
			<li class="menu__item">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#actions" /></svg>
					Акции</a>
			</li>
			<li class="menu__item">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#news" /></svg>
					Новости
				</a>
			</li>
			<li class="menu__item">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#maps" /></svg>
					Карты
				</a>
			</li>
			<li class="menu__item">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#push" /></svg>
					Push
				</a>
			</li>
			<li class="menu__item">
				<a href="#" class="menu__link">
					<svg class="icon"><use xlink:href="@/assets/img/public/icons-pack.svg#settings" /></svg>
					Настройки
				</a>
			</li>
		</ul>
	</nav>
	<!--Left menu block end-->
</template>

<script>
export default {

  name: 'Menu',

}
</script>