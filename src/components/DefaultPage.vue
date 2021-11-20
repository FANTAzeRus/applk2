<template>
	<!--Default page-->
	<div 
		:class="
			['page', 'default-page',
				pageOptions.components.menuAct ? 'left-act' : '',
				pageOptions.components.menuAct && !this.$store.state.categoryMenuShow ? 'left-act--close' : ''
			]"
	>
		<v-header />

		<v-menu :selectedItem="pageOptions.name" />

		<slot v-if="pageOptions.components.menuAct" name="menuAct">
			<v-menu-act/>
		</slot>

		<slot v-if="pageOptions.components.breadcrumbs" name="top-content">
			<breadcrumbs />
		</slot>
		
		<!--Content block-->
		<slot></slot>
		<!--Content block end-->
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
				menuAct: {
					type: Boolean,
					// default: {
					// 	showMenu: false,
					// 	toggleMenu: ()=>
					// }
				},
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