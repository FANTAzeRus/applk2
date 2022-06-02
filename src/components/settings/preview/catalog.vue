<template>
	<div class="catalog-wrapper" :style="catalogBackgroundColor">
		<Category :item="category" v-for="(category,idx) in categories" :key="`cat_${idx}`" />
	</div>
</template>

<script>
import Category from "@/components/settings/preview/category";
export default {
	name: "catalog",

	components: {Category},

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},

		catalogBackgroundColor() {
			return {
				backgroundColor: this.params_model['catalog_background_color']
			}
		}
	},

	data() {
		return {
			categories: [
				{
					category: "Категориия 1",
					items: [
						{id: 'c1_item_1', title: 'Продукт 1', img: 'category_img_1.png', weight: '300гр.', price: '800руб'},
						{id: 'c1_item_2', title: 'Продукт 2', img: 'category_img_2.png', weight: '300гр.', price: '655руб'},
					]
				},
				{
					category: "Категориия 2",
					items: [
						{id: 'c2_item_1', title: 'Продукт 1', img: 'category_img_1.png', weight: '300гр.', price: '800руб'},
						{id: 'c2_item_2', title: 'Продукт 2', img: 'category_img_2.png', weight: '300гр.', price: '655руб'},
					]
				},
				{
					category: "Категориия 3",
					items: [
						{id: 'c3_item_1', title: 'Продукт 1', img: 'category_img_1.png', weight: '300гр.', price: '800руб'},
						{id: 'c3_item_2', title: 'Продукт 2', img: 'category_img_2.png', weight: '300гр.', price: '655руб'},
					]
				},
			]
		}
	}
}
</script>

<style lang="sass" scoped>
.catalog-wrapper
	color: #000
	background-color: #ededee
</style>