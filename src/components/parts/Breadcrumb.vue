<template>
	<div class="breadcrumbs__item">
		<a @click.prevent="changeCat" href="#" class="breadcrumbs__text">{{parent.name}}</a>
		<div class="breadcrumbs__separator"></div>
	</div>
</template>

<script>
export default {

	name: 'Breadcrumb',

	props: {
		category: Object,
		level: Number
	},

	data () {
		return {
		}
	},

	computed: {
		parent() {
			if (this.level == 1) {
				return this.category.parent
			}
			if (this.level == 2) {
				return this.category.parent.parent
			}
			if (this.level == 3) {
				return this.category.parent.parent.parent
			}
			if (this.level == 4) {
				return this.category.parent.parent.parent.parent
			}
			if (this.level == 5) {
				return this.category.parent.parent.parent.parent.parent
			}
			return this.category
		}
	},

	methods: {
		changeCat() {
			this.$store.state.selCategory = this.parent
		}
	}
}
</script>

<style lang="css" scoped>
</style>