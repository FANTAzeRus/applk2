<template>
	<!--Breadcrumbs block-->
	<section class="breadcrumbs">
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
	}

}
</script>