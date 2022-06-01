<template>
	<div class="category-wrapper">
		<h1 :style="categoryColor">{{item.category}}</h1>

		<div class="item-list">
			<div :class="{item1: isEven(idx), item2: !isEven(idx)}" v-for="(line,idx) in item.items" :key="line.id">
				<img :src="line.img" alt="">
				<template v-if="isEven(idx)">
					<div class="data-wrapper">
						<div class="description" :style="positionColor">{{line.title}}</div>
						<div class="weight" :style="paramsColor">{{line.weight}}</div>
					</div>
					<div class="price" :style="buttonStyle">{{line.price}}</div>
				</template>

				<template v-else>
					<div class="data-wrapper">
						<div class="description" :style="positionColor">{{line.title}}</div>
						<div class="params-wrapper">
							<div class="price" :style="priceColor">{{line.price}}</div> / <div class="weight" :style="paramsColor">{{line.weight}}</div>
						</div>
					</div>

					<div class="buttons_wrapper">
						<div class="dec" :style="buttonStyle">-</div>
						<div class="count" :style="countColor">1</div>
						<div class="inc" :style="buttonStyle">+</div>
					</div>
				</template>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "category",

	props: ['item', 'even_item'],

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},

		categoryColor() {
			return {
				color: this.params_model['catalog_title_color'],
			}
		},

		positionColor() {
			return {
				color: this.params_model['catalog_position_name_color'],
			}
		},

		paramsColor() {
			return {
				color: this.params_model['catalog_params_color'],
			}
		},

		priceColor() {
			return {
				color: this.params_model['catalog_price_color'],
			}
		},

		buttonStyle() {
			return {
				color: this.params_model['catalog_text_to_cart_color'],
				backgroundColor: this.params_model['catalog_background_to_cart_color'],
			}
		},

		countColor() {
			return {
				color: this.params_model['catalog_count_color'],
			}
		},
	},

	methods: {
		isEven(idx) {
			return idx % 2 === 0;
		}
	}
}
</script>

<style lang="sass" scoped>
	.category-wrapper
		padding: 10px
		color: #000

		h1
			font-size: 16px
			font-weight: 600

		.item-list
			display: flex
			gap: 10px
			flex-wrap: wrap

			.item1
				flex: 1
				display: flex
				flex-direction: column
				gap: 3px
				align-items: flex-start

				.data-wrapper
					flex: 1

					.description
						font-size: 12px
						font-weight: 600

					.weight
						font-size: 10px

				.price
					width: 100%
					font-size: 10px
					padding: 5px
					border-radius: 5px
					text-align: center
					font-weight: 600
					cursor: pointer

			.item2
				flex: 1
				display: flex
				flex-direction: column
				gap: 3px
				align-items: flex-start

				.data-wrapper
					flex: 1

					.description
						font-size: 12px
						font-weight: 600

					.params-wrapper
						display: flex
						align-items: center
						gap: 7px

						.price
							font-size: 10px

						.weight
							font-size: 10px


				.buttons_wrapper
					width: 100%
					display: flex
					justify-content: space-between
					align-items: center

					.inc, .dec
						width: 100%
						font-size: 14px
						padding: 2px
						border-radius: 5px
						text-align: center
						font-weight: 600
						cursor: pointer
						flex: 1

					.count
						font-size: 14px
						text-align: center
						flex: 1
						margin: 0 5px

</style>