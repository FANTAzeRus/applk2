<template>
	<div class="phone-slider-wrapper" :style="sliderBackgroundColor">
		<div class="horizontal" v-if="direction === 'vertical'">
			<div class="item-list">
				<div class="item" v-for="item in hitems" :key="item.id" :style="sliderCardBackgroundColor">
					<img :src="item.img" alt="">
					<div class="service" :style="serviceNameColor">{{item.title}}</div>
					<div class="description" :style="descriptionColor">{{item.description}}</div>
				</div>
			</div>
		</div>

		<div class="vertical" v-else>
			<div class="item-list">
				<div class="item" v-for="item in vitems" :key="item.id">
					<img :src="item.img" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "phone-slider",

	props: ['direction'],

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},
		sliderBackgroundColor() {
			if (!this.$store.state.settings.with_slider) {
				return {backgroundColor: this.params_model['slider_background_color']}
			}

			return {}
		},
		serviceNameColor() {
			return {color: this.params_model['slider_service_font_color']}
		},
		descriptionColor() {
			return {color: this.params_model['slider_description_font_color']}
		},
		sliderCardBackgroundColor() {
			return {backgroundColor: this.params_model['slider_description_background_color']}
		}
	},

	data() {
		return {
			hitems: [
				{id: 1, title: 'Сервис 1', img: 'slider_1.png', description: 'Описание 1'},
				{id: 2, title: 'Сервис 2', img: 'slider_2.png', description: 'Описание 2'},
				{id: 3, title: 'Сервис 3', img: 'slider_3.png', description: 'Описание 3'},
				{id: 4, title: 'Сервис 4', img: 'slider_1.png', description: 'Описание 4'},
				{id: 5, title: 'Сервис 5', img: 'slider_2.png', description: 'Описание 5'},
			],
			vitems: [
				{id: 6, img: 'slider_4.png'},
				{id: 7, img: 'slider_4.png'},
				{id: 8, img: 'slider_4.png'},
			]
		}
	}
}
</script>

<style lang="sass" scoped>
	.phone-slider-wrapper
		padding: 10px
		overflow: hidden

		.horizontal
			.item-list
				overflow: scroll
				display: flex
				align-items: center
				gap: 10px

				&::-webkit-scrollbar
					width: 0 !important
					height: 0
					display: none !important
					background: transparent

				.item
					min-width: 67px
					min-height: 116px
					display: flex
					flex-direction: column
					align-items: flex-start
					justify-content: space-between
					background-color: #ffffff
					border-radius: 10px

					img
						border-top-left-radius: 10px
						border-top-right-radius: 10px
						border-bottom-right-radius: 10px

					.service
						font-size: 11px
						font-weight: 600
						padding: 0 5px

					.description
						font-size: 9px
						padding: 0 5px 5px

		.vertical
			.item-list
				overflow: scroll
				display: flex
				gap: 10px

				&::-webkit-scrollbar
					width: 0 !important
					height: 0
					display: none !important
					background: transparent

			.item
				min-width: 222px
				border-radius: 10px

				img
					border-radius: 10px
</style>