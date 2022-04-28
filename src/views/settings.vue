<template>
	<default-page :pageOptions="pageOptions">
		Settings...
	</default-page>
</template>

<script>
import DefaultPage from "@/components/DefaultPage";

export default {
	name: "settings",

	components: {DefaultPage},

	data() {
		return {
			pageOptions: {
				name: "settings",
				components: {
					content: true,
					breadcrumbs: true,
				}
			}
		}
	}

}
</script>