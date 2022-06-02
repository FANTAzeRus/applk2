<template>
	<div class="preview-wrapper">
		<div class="phone"><img src="../../../../public/phone_bg.png" alt=""></div>
		<div class="phone-body">
			<div class="header-all-wrapper" :style="allWrapperStyle">
				<phone-header />

				<template v-if="withSlider">
					<phone-slider :direction="sliderDirection" />
				</template>
			</div>

			<div class="phone-content">
				<horizontal-menu-categories />

				<catalog />
			</div>

			<navigation-panel />
		</div>
		<div class="phone-top"></div>
	</div>
</template>

<script>
import PhoneHeader from "@/components/settings/preview/phone-header";
import PhoneSlider from "@/components/settings/preview/phone-slider";
import HorizontalMenuCategories from "@/components/settings/preview/horizontal-menu-categories";
import Catalog from "@/components/settings/preview/catalog";
import NavigationPanel from "@/components/settings/preview/navigation-panel";

export default {
	name: "preview",

	components: {NavigationPanel, PhoneHeader, PhoneSlider, HorizontalMenuCategories, Catalog},

	props: ['withSlider', 'sliderDirection'],

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},

		allWrapperStyle() {
			const preview = this.$store.state.settings.preview_img;
			const ret = {
				backgroundImage: `url('${preview ? preview : "img/texture.png"}')`
			};
			console.log(ret);

			return ret;
		}
	}
}
</script>

<style lang="sass" scoped>
	.preview-wrapper
		margin: 44px 100px 0 50px
		width: 278px
		height: 561px
		background-repeat: no-repeat
		position: relative

		.phone
			position: absolute
			left: 0
			top: 0

		.phone-top
			position: absolute
			background-image: url("../../../../public/phone_top_bg.png")
			left: 0
			right: 0
			top: 0
			height: 35px
			z-index: 100

		.phone-body
			position: absolute
			left: 18px
			top: 16px
			width: 242px
			height: 525px
			z-index: 9
			display: flex
			flex-direction: column

			.header-all-wrapper
				background-size: cover

			.phone-content
				flex: 1
				background: #ededee
				overflow: hidden
				&::-webkit-scrollbar
					width: 0 !important
					height: 0
					display: none !important
					background: transparent
</style>