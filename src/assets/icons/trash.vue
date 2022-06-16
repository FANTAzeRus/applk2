<template>
	<svg @mouseover="setHoverColor" @mouseout="setDefaultColor" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.916667 10.6667C0.916667 11.4 1.51667 12 2.25 12H7.58333C8.31667 12 8.91667 11.4 8.91667 10.6667V2.66667H0.916667V10.6667ZM9.58333 0.666667H7.25L6.58333 0H3.25L2.58333 0.666667H0.25V2H9.58333V0.666667Z" :fill="defaultColor"/>
	</svg>
</template>

<script>
export default {
	name: "trash",

	props: {
		color: {
			default: "#D5D5D5"
		},
		hoveredColor: {
			default: "#E6442F"
		}
	},

	data() {
		return {
			defaultColor: this.color
		}
	},

	methods: {
		setHoverColor() {
			this.defaultColor = this.hoveredColor;
		},
		setDefaultColor() {
			this.defaultColor = this.color;
		}
	},
}
</script>