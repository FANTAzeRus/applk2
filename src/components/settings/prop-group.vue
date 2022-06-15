<template>
	<div class="prop-group-wrapper">
		<div class="header-wrapper">
			<div class="group-header">
				{{meta.group}}
			</div>
			<div class="reset" @click="showClearPopup(meta_key)">Сбросить настройки</div>
		</div>

		<div class="group-description">
			{{meta.description}}
		</div>

		<div class="params-wrapper">
			<prop-line v-for="item in meta.items" :key="`props_line_${item.name}`" :item="item" />
		</div>
	</div>
</template>

<script>
import PropLine from "./prop-line"
export default {
	name: "prop-group",

	components: {PropLine},

	computed: {
		params_meta() {
			return this.$store.state.settings.params_meta;
		},

		meta() {
			return this.params_meta[this.meta_key];
		}
	},

	props: ['meta_key'],

	methods: {
		showClearPopup(group) {
			this.$store.commit("settings/showClearPopup", {
				callback: this.setGroupDefaultValues,
				group: group,
			});
		},
		setGroupDefaultValues(group) {
			this.$store.dispatch('settings/resetToDefault', group);
		}
	}
}
</script>

<style lang="sass" scoped>
	.prop-group-wrapper
		margin: 0 30px
		.header-wrapper
			display: flex
			align-items: center
			padding: 25px 0 14px 0
			&:first-child
				padding-top: 10px

			.group-header
				color: #000000
				font-size: 13px
				line-height: 14.3px
				font-weight: 400
				text-transform: uppercase
				display: flex
				align-items: center
				gap: 12px

			.reset
				flex: 1
				text-align: right
				font-size: 13px
				line-height: 14.3px
				font-weight: 400
				text-decoration: underline
				cursor: pointer

				&:hover
					color: #E6442F

		.group-description
			font-size: 13px
			line-height: 14.3px
			font-weight: 400
			margin-top: 19px
			padding-bottom: 15px
			color: #9b9b9b

		.params-wrapper
			margin: 20px 0
			display: flex
			flex-direction: column

</style>