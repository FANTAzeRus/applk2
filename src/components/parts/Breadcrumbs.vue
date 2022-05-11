<template>
	<!--Breadcrumbs block-->
	<section class="breadcrumbs" :class="{'breadcrumbs__menu--close': !this.$store.getters.getCategoryMenuShow}">
		<svg @click="toggleMenu" v-show="!this.$store.getters.getCategoryMenuShow" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" class="menu-act__close menu-act__close--open">
			<path d="M6.375 10.0167L5.42706 11L0.125 5.5L5.42706 1.46355e-06L6.375 0.983335L2.02089 5.5L6.375 10.0167Z" fill="#D5D5D5"/>
			<path d="M11.75 10.0167L10.8021 11L5.5 5.5L10.8021 1.46355e-06L11.75 0.983335L7.39589 5.5L11.75 10.0167Z" fill="#D5D5D5"/>
		</svg>

		<div v-if="selCategory._vm" class="breadcrumbs__list">

			<div v-if="!selCategory.parent.isRoot" class="breadcrumbs__item-list">
				<div
					class="breadcrumbs__item"
					v-for="(level, index) in Array(selCategory._vm.level - 1)"
					:key="level"
				>
					<breadcrumb :category="selCategory" :level="index + 1"/>
				</div>
			</div>

			<div v-if="!menuActAddress" class="breadcrumbs__text">Позиции в категории
				<a class="breadcrumbs__link">{{selCategory.title}}</a>
			</div>
			<div v-else class="breadcrumbs__item-list">
				<div class="breadcrumbs__item">
					<div class="breadcrumbs__item">
						{{selCategory.title}}
					</div>
				</div>
				<div class="breadcrumbs__item">
					<a @click="$router.push({name:'addresses'})" class="breadcrumbs__text breadcrumbs__text--reg">Адреса</a>
					<div class="breadcrumbs__separator"></div>
				</div>
				<div class="breadcrumbs__item">
					<a @click="$router.push({name:'addresses'})" class="breadcrumbs__text breadcrumbs__text--reg">Главная</a>
					<div class="breadcrumbs__separator"></div>
				</div>
			</div>
		</div>
		<div v-else>
			Выберите категорию
		</div>
	</section>
	<!--Breadcrumbs block end-->
</template>

<script>
import Breadcrumb from "@/components/parts/Breadcrumb"

export default {

	name: 'Breadcrumbs',

	components: {
		Breadcrumb
	},

	props: {
		menuActAddress: Boolean,
	},

	computed: {
		selCategory () {
			return this.$store.state.applicationModule.selCategory
		}
	},

	methods: {
		toggleMenu() {
			this.$store.state.applicationModule.categoryMenuShow = !this.$store.state.applicationModule.categoryMenuShow
		},
	}
}
</script>