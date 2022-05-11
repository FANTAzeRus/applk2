<template>
	<!--Default page-->
	<div 
		:class="
			['page', 'default-page',
				pageOptions.components.menuAct ? 'left-act' : '',
				pageOptions.components.menuAct && !this.$store.getters.getCategoryMenuShow ? 'left-act--close' : ''
			]"
	>
		<v-header />

		<div class="base">
			<v-menu :selectedItem="pageOptions.name" />

			<slot v-if="this.$store.getters.getCategoryMenuShow && pageOptions.components.menuAct" name="menuAct">
				<v-menu-act :menuActAddress="pageOptions.components.menuActAddress"/>
			</slot>

			<div class="base-content">
				<slot v-if="pageOptions.components.breadcrumbs" name="top-content">
					<breadcrumbs :menuActAddress="pageOptions.components.menuActAddress"/>
				</slot>

				<!--Content block-->
				<slot></slot>
				<!--Content block end-->
			</div>
		</div>
	</div>
	<!--Default page end-->
</template>

<script>
import VHeader from "@/components/parts/VHeader"
import VMenu from "@/components/parts/VMenu"
import VMenuAct from "@/components/parts/VMenuAct"
import Breadcrumbs from "@/components/parts/Breadcrumbs"

export default {

	components: {
		VHeader,
		VMenu,
		VMenuAct,
		Breadcrumbs,
	},

	name: 'default-page',

	props: {
		pageOptions: {
			name: "",

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
				menuActAddress: Boolean,
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