<template>
	<div class="prop-line-wrapper">
		<div class="prop-line-title">{{item.title}}</div>
		<prop-value :type="item.type" v-model="params_model[item.name]" :model_key="item.name" />
	</div>
</template>

<script>
import PropValue from "./prop-value";
export default {
	name: "prop-line",

	components: {PropValue},

	props: ['item'],

	computed: {
		params_model() {
			return this.$store.state.settings.params_model;
		},
	},

	mounted() {
	}

}
</script>

<style lang="sass" scoped>
	.prop-line-wrapper
		margin-bottom: 24px

		.prop-line-title
			font-size: 13px
			line-height: 14.3px
			font-weight: 600
			margin-bottom: 13px
</style>