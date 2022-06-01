<template>
	<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="5" y="14" width="14" height="2" rx="1" :fill="color"/>
		<rect x="5" y="8" width="20" height="2" rx="1" :fill="color"/>
		<rect x="5" y="20" width="18" height="2" rx="1" :fill="color"/>
	</svg>
</template>

<script>
export default {
	name: "category-menu-item",

	props: {
		color: {
			default: "#47474A",
		}
	}
}
</script>
