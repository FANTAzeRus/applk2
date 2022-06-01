<template>
	<div :class="[`${themeMode}_theme_wrapper`]">
		<router-view/>

		<ColorPicker v-if="showColorPicker" />
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import ColorPicker from "@/components/settings/color-picker";

export default {
	name: "App",
	components: {ColorPicker},
	computed: {
		...mapGetters(['themeMode']),
		showColorPicker() {
			return this.$store.state.settings.showColorPicker;
		},
	}
}
</script>

<style lang="sass">
@import "@/assets/css/base/normalize"
@import "@/assets/css/base/colors"
@import "@/assets/css/base/breakpoints"
@import "@/assets/css/base/reset"
@import "@/assets/css/base/fonts"
@import "@/assets/css/base/mixins"
@import "@/assets/countries/sprite"

@import "@/assets/css/components/controls"
@import "@/assets/css/components/public"
@import "@/assets/css/components/popup"
@import "@/assets/css/components/slider"

@import '@/assets/css/pages/default-page'
@import '@/assets/css/pages/table-page'
@import '@/assets/css/pages/card__product'
@import '@/assets/css/pages/card__address'
@import '@/assets/css/pages/login'
@import '@/assets/css/pages/settings'
@import '@/assets/css/base/theme'

</style>