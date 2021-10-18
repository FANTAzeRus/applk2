<template>
	<!--Left menu Activ block-->
	<section class="menu-act">
		<ul class="tabs-control-menu">
			<li class="tabs-control-menu__list tabs-control-menu__active"><a class="tabs-control-menu__link" href="#">Активные</a></li>
			<li class="tabs-control-menu__list"><a class="tabs-control-menu__link" href="#">Все</a></li>
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
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				<span>Пиццерия</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
			</svg>
			</div>
			
			<ul class="menu-categories__lev2">
			<!--Categories Level2 block-->
			<li class="menu-categories__lev2__list">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				<span>Пиццы</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
			</li>
			<!--Categories Level1 block end-->
			
			<!--Categories Level1 block-->
			<li class="menu-categories__lev2__list">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				<span>Роллы</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
			</li>
			<!--Categories Level1 block end-->
			
			<!--Categories Level1 block-->
			<li class="menu-categories__lev2__list">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				<span>Пироги</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
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
				<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
			</svg>
			<label class="checkbox checkbox--filled checkbox--super--small">
				<input class="checkbox__input" type="checkbox">
				<span class="checkbox__span"></span>
			</label>
			<span>Пиццерия</span>
			<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
			<svg class="icon icon--trash">
				<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
			</svg>
			</div>
			
			<ul class="menu-categories__lev2">
			<!--Categories Level2 block-->
			<li class="menu-categories__lev2__list">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox" checked>
					<span class="checkbox__span"></span>
				</label>
				<span class="menu-categories__lev2__list__act">Пиццы</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
			</li>
			<!--Categories Level1 block end-->
			
			<!--Categories Level1 block-->
			<li class="menu-categories__lev2__list">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				<span>Роллы</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
			</li>
			<!--Categories Level1 block end-->
			
			<!--Categories Level1 block-->
			<li class="menu-categories__lev2__list">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				<span>Пироги</span>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
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
				<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
			</svg>
		</div>
	</section>
	<!--Left menu Activ block end-->
</template>

<script>
export default {

	name: 'VMenuAct',

	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
</style>