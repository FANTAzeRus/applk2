<template>
	<default-page :pageOptions="pageOptions">
		<Settings />
	</default-page>
</template>

<script>
import DefaultPage from "@/components/DefaultPage";
import Settings from "@/components/settings";

export default {
	name: "settings-base",

	components: {DefaultPage, Settings},

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