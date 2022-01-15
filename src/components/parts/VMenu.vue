<template>
	<!--Left menu block-->
	<nav class="menu">
		<ul class="menu__list">

			<li
				:class="[ checkItem(svgId) ? 'menu__item menu__item--selected' : 'menu__item']"
				v-for="({title, svgId}, index) in menuList"
				:key="index"
			>
			<!-- :xlink:href="`img/icons-pack.b740c51d.svg#${svgId}`" -->
				<router-link :to="{name: svgId}" class="menu__link">
					<svg class="icon"><use :xlink:href="`img/icons-pack.b740c51d.svg#${svgId}`" /></svg>
					{{title}}
				</router-link>
			</li>

		</ul>
	</nav>
	<!--Left menu block end-->
</template>

<script>
export default {

	name: 'Menu',

	props: {
		selectedItem: String
	},

	data() {
		return {
			menuList: [
				{ title: 'Сводка', svgId: 'dashboard' },
				{ title: 'Компании', svgId: 'company' },
				{ title: 'Адреса', svgId: 'addresses' },
				{ title: 'Каталог', svgId: 'catalog' },
				{ title: 'Заказы', svgId: 'orders' },
				{ title: 'Акции', svgId: 'actions' },
				{ title: 'Новости', svgId: 'news' },
				{ title: 'Карты', svgId: 'maps' },
				{ title: 'Push', svgId: 'push' },
				{ title: 'Настройки', svgId: 'settings' }
			]
		}
	},

	methods: {
		checkItem(id) {
			return this.selectedItem.toLowerCase() == id
		}
	}

}
</script>