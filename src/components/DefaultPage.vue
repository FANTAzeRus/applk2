<template>
	<!--Default page-->
	<div class="page default-page">
		<v-header />

		<v-menu />

		<v-menu-act />

		<breadcrumbs />

		<Content />
	</div>
	<!--Default page end-->
</template>

<script>
import VHeader from "@/components/parts/VHeader"
import VMenu from "@/components/parts/VMenu"
import VMenuAct from "@/components/parts/VMenuAct"
import Breadcrumbs from "@/components/parts/Breadcrumbs"
import Content from "@/components/parts/Content"

export default {

	components: {
		VHeader,
		VMenu,
		VMenuAct,
		Breadcrumbs,
		Content
	},

	name: 'default-page',

	props: {
		pageOptions: {
			components: {
				header: {
					type: Boolean,
					default: true
				},
				menu: {
					type: Boolean,
					default: true
				},
				menuAct: Boolean,
				breadcrumbs: {
					type: Boolean,
					default: true
				},
				content: Boolean,
			}
		}
	}
}
</script>

<style lang="css" scoped>
</style>