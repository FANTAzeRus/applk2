<template>
	<div class="color-picker-wrapper">
		<div class="color-picker">
			<chrome v-model="colors" @input="updateColor" />
			<div class="preview" :style="{backgroundColor: colors}"></div>
			<div class="buttons">
				<button class="button" @click="saveAndClosePicker">Сохранить</button>
				<button class="button" @click="closePicker">Отмена</button>
			</div>

		</div>
	</div>
</template>

<script>
import { Chrome } from "vue-color";

export default {
	name: "color-picker",

	components: {Chrome},

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
		background: #000000dd
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

			.preview
				width: 100%
				height: 80px
				border-radius: 5px
				margin: 10px
				border: 1px solid #0000007f
				box-shadow: 0 0 2px rgb(0 0 0 / 30%), 0 4px 8px rgb(0 0 0 / 30%)

			.buttons
				display: flex
				justify-content: center
				align-items: center
				gap: 10px
</style>