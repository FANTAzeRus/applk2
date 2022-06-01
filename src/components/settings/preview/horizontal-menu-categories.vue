<template>
	<div class="horizontal-menu-categories-wrapper">
		<div class="menu-button" :style="menuButtonBackgroundColor">
			<category-menu-item :color="menuButtonIconColor"/>
		</div>


		<ul class="menu-items">
			<li @click="selectItem(idx)" class="item" :style="idx === selectedItem ? menuItemActiveStyle : menuItemStyle" v-for="(item, idx) in items" :key="item.id">{{ item.title }}</li>
		</ul>
	</div>
</template>

<script>
import CategoryMenuItem from "@/components/settings/preview/icons/category-menu-icon";

export default {
	name: "horizontal-menu-categories",

	components: {CategoryMenuItem},

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},

		menuButtonIconColor() {
			return this.params_model['menu_categories_icon_color'];
		},
		menuButtonBackgroundColor() {
			return {backgroundColor: this.params_model['menu_categories_icon_background_color']};
		},

		menuItemStyle() {
			return {
				backgroundColor: this.params_model['menu_categories_not_active_background_color'],
				color: this.params_model['menu_categories_not_active_font_color'],
			};
		},

		menuItemActiveStyle() {
			return {
				backgroundColor: this.params_model['menu_categories_background_color'],
				color: this.params_model['menu_categories_font_color'],
			};
		},
	},

	data() {
		return {
			selectedItem: 0,
			items: [
				{id: 'cat1', title: 'Категория 1'},
				{id: 'cat2', title: 'Категория 2'},
				{id: 'cat3', title: 'Категория 3'},
			]
		}
	},

	methods: {
		selectItem(idx) {
			this.selectedItem = idx;
		}
	}
}
</script>

<style lang="sass" scoped>
.horizontal-menu-categories-wrapper
	margin: 10px
	display: flex
	overflow-y: hidden
	align-items: center
	gap: 10px

	.menu-button
		width: 35px
		height: 35px
		padding: 13px 10px
		display: flex
		justify-content: center
		align-items: center
		border-radius: 5px

	.menu-items
		list-style: none
		display: flex
		gap: 0 13px
		position: relative
		overflow: scroll
		width: 100%
		margin: 0
		padding: 5px
		&::-webkit-scrollbar
			width: 0 !important
			height: 0
			display: none !important
			background: transparent

		.item
			position: relative
			min-width: 85px
			height: 35px
			padding: 7px 10px
			border-radius: 5px
			font-size: 10px
			background-color: #109CF1
			display: flex
			justify-content: center
			align-items: center
			cursor: pointer

</style>