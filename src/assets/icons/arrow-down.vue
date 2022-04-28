<template>
	<svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.893939 -3.90753e-08L-2.2249e-07 0.910026L5 6L10 0.910026L9.10606 -3.98039e-07L5 4.17995L0.893939 -3.90753e-08Z" :fill="fill"/>
	</svg>
</template>

<script>
export default {
	name: "arrow-down",
	props: {
		theme: {
			type: String,
			default: "light",
		},
	},
	computed: {
		fill() {
			return this.theme === 'light' ? '#000000' : '#ffffff';
		}
	}
}
</script>