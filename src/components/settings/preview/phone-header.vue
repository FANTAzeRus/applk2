<template>
	<div class="phone-header-wrapper" :style="headerBackgroundColorStyle">
		<div class="header__time">{{time}}</div>
		<div class="header__body">
			<div class="phone-header">
				<span :style="headerFontColorStyle">Заголовок</span>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "moment";

export default {
	name: "phone-header",

	props: ["id"],

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},
		headerFontColorStyle() {
			return {
				color: this.params_model['header_font_color']
			}
		},
		headerBackgroundColorStyle() {
			if (!this.$store.state.settings.with_slider) {
				return {
					backgroundColor: this.params_model['header_background_color']
				}
			}

			return {};
		}
	},

	data() {
		return {
			time: null,
			timer: null
		}
	},

	mounted() {
		this.updateTime();
		this.timer = setInterval(() => {
			this.updateTime();
		}, 1000);
	},

	destroyed() {
		clearInterval(this.timer);
	},

	methods: {
		updateTime() {
			this.time = moment().format("HH:mm");
		}
	}
}
</script>

<style lang="sass" scoped>
.phone-header-wrapper
	border-top-left-radius: 24px
	border-top-right-radius: 24px

	.header__time
		font-size: 12px
		font-weight: 600
		padding-left: 18px
		min-height: 19px
		display: flex
		align-items: center

	.phone-header
		font-weight: 600
		padding: 25px 7px 15px 7px
</style>