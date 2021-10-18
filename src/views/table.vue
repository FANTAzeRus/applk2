<template>
	<!--Default page-->
	
	<default-page class="left-act" :pageOptions="pageOptions"/>

	<!--Default page end-->
</template>

<script>
// document.querySelector('.js-select').select2({
//   minimumResultsForSearch: Infinity
// });
import DefaultPage from '@/components/DefaultPage'

export default {

	name: 'table-page',

	components: {
		DefaultPage
	},

	data() {
		return {
			pageOptions: {
				components: {
					menuAct: true,
					content: true,
				}
			}
		}
	}

}
</script>