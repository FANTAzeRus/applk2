<template>
	<div class="step-wrapper">
		<div class="title">{{title}}</div>
		<div class="info">{{info}}</div>
	</div>
</template>

<script>
export default {
	name: "step",

	props: ['title', 'info'],
}
</script>

<style lang="sass" scoped>
	.step-wrapper
		margin: 28px 30px

		.title
			font-size: 16px
			line-height: 17.6px
			font-weight: 600

		.info
			margin-top: 5px
			margin-bottom: 15px
			font-size: 14px
			line-height: 15.4px
			font-weight: 400
</style>