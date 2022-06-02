<template>
	<div class="color-picker-wrapper">
		<div class="color-picker">
			<div class="close" @click="saveAndClosePicker">
				<close />
			</div>
			<chrome v-model="colors" @input="updateColor" />
		</div>
	</div>
</template>

<script>
import { Chrome } from "vue-color";
import Close from "@/assets/icons/close";

export default {
	name: "color-picker",

	components: {Close, Chrome},

	data() {
		return {
			colors: "#555",
			default: "#555",
		}
	},

	mounted() {
		this.colors = this.$store.state.settings.currentColorValue;
		this.default = this.$store.state.settings.currentColorValue;
	},

	methods: {
		updateColor(val) {
			this.colors = val.hex;
			this.$store.dispatch("settings/updateColor", val.hex);
		},
		closePicker() {
			this.$store.dispatch("settings/updateColor", this.default);
			this.$store.dispatch("settings/closeColorPicker");
		},
		saveAndClosePicker() {
			this.$store.dispatch("settings/closeColorPicker");
		},
	}
}
</script>

<style lang="sass" scoped>
	.color-picker-wrapper
		position: absolute
		//background: #000000dd

		left: 0
		right: 0
		top: 0
		bottom: 0
		display: flex
		justify-content: center
		align-items: center
		z-index: 1000

		.color-picker
			z-index: 1001
			display: flex
			flex-direction: column
			align-items: center
			background: #aaa
			border-radius: 5px
			gap: 10px
			padding: 7px

			.close
				cursor: pointer
				width: 100%
				text-align: right
				margin-right: 7px
</style>