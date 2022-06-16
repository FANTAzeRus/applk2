<template>
	<div class="color-picker-wrapper" @mouseup.self="saveAndClosePicker">
		<div class="color-picker" :style="calcPosition">
			<div class="close" @click="saveAndClosePicker">
				<close :color="closeIconColor" />
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

	computed: {
		params_model() {
			return this.$store.state.settings.color_picker_position;
		},
		calcPosition() {
			return {
				top: `${this.params_model.y}px`,
				left: `${this.params_model.x}px`,
			}
		},
		closeIconColor() {
			return this.$store.state.applicationModule.theme.mode === "dark" ? "#ffffff":"#333333"
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
	z-index: 1000

	.color-picker
		width: 225px
		z-index: 1001
		position: absolute
		left: 0
		right: 0

		.close
			display: flex
			justify-content: flex-end
			cursor: pointer
			padding-bottom: 7px
</style>