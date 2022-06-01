<template>
	<div class="navigation-panel-wrapper" :style="navigationPanelBackgroundColor">
		<div class="item" :style="getStyle(item.active)" v-for="(item, idx) in items" :key="item.id" @click="selectItem(idx)">
			<component :is="`${item.id}-icon`" :color="idx === activeItem ? activeColor : notActiveColor"/>
			{{ item.title }}
			<div v-if="item.marker" class="marker" :style="navigationPanelIconMarkerColor">{{ item.marker }}</div>
		</div>
	</div>
</template>

<script>
import MenuIcon from "@/components/settings/preview/icons/menu-icon";
import StockIcon from "@/components/settings/preview/icons/stock-icon";
import DeliveryIcon from "@/components/settings/preview/icons/delivery-icon";
import BasketIcon from "@/components/settings/preview/icons/basket-icon";

export default {
	name: "navigation-panel",

	components: {BasketIcon, DeliveryIcon, StockIcon, MenuIcon},

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},

		navigationPanelBackgroundColor() {
			return {
				backgroundColor: this.params_model['bottom_navigation_background_color']
			}
		},

		navigationPanelIconMarkerColor() {
			return {
				backgroundColor: this.params_model['bottom_navigation_icon_marker_color']
			}
		},

		activeColor() {
			return this.params_model['bottom_navigation_active_state_color'];
		},
		navigationPanelActiveStateColor() {
			return {
				color: this.activeColor,
			}
		},

		notActiveColor() {
			return this.params_model['bottom_navigation_not_active_state_color'];
		},
		navigationPanelNotActiveStateColor() {
			return {
				color: this.notActiveColor
			}
		},
	},

	data() {
		return {
			activeItem: 0,
			items: [
				{id: 'menu', title: 'меню', marker: null},
				{id: 'stock', title: 'акции', marker: null},
				{id: 'delivery', title: 'доставка', marker: null},
				{id: 'basket', title: 'корзина', marker: "3"},
			]
		}
	},

	methods: {
		getStyle(active) {
			return active ? this.navigationPanelActiveStateColor : this.navigationPanelNotActiveStateColor;
		},
		selectItem(idx) {
			this.activeItem = idx;
		}
	}
}
</script>

<style lang="sass" scoped>
.navigation-panel-wrapper
	padding: 10px
	display: flex
	justify-content: space-between
	border-bottom-left-radius: 24px
	border-bottom-right-radius: 24px

	.item
		display: flex
		flex-direction: column
		align-items: center
		gap: 10px
		font-size: 9px
		line-height: 9px
		text-transform: uppercase
		position: relative
		cursor: pointer

	.marker
		position: absolute
		right: 2px
		top: 0
		width: 16px
		height: 16px
		border-radius: 50%
		color: #fff
		display: flex
		justify-content: center
		align-items: center
		font-size: 10px

</style>