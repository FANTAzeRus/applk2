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


			<div class="breadcrumbs__text">Позиции в категории
				<a class="breadcrumbs__link">{{selCategory.name}}</a>
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

	data() {
		return {
			categorysList: this.$store.state.categorysList
		}
	},

	computed: {
		selCategory () {
			return this.$store.state.selCategory
		}
	}

}
</script>