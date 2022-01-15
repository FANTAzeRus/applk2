<template>
	<div class="breadcrumbs__item">
		<a @click.prevent="changeCat" href="#" class="breadcrumbs__text">{{parent.title}}</a>
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
			const recursionUnCurrent = (item) => {
				item.map(select => {
					select.currentCategory = false
					if (select.id == this.parent.id) select.currentCategory = true
					if (select.children) recursionUnCurrent(select.children)
				})
			}
			recursionUnCurrent(this.$store.state.applicationModule.categories)

			this.parent.currentCategory = true
			localStorage.setItem('lastSelCategoryId', this.parent.id)
			this.$store.state.applicationModule.selCategory = this.parent
		}
	}
}
</script>

<style lang="css" scoped>
</style>