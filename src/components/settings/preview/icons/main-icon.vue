<template>
	<svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6.27271 16.0315C5.72042 16.0315 5.27271 16.4792 5.27271 17.0315V25.0315C5.27271 26.4571 6.26569 27.9406 7.85948 27.9406H22.1405C23.7343 27.9406 24.7273 26.4571 24.7273 25.0315V17.0315C24.7273 16.4792 24.2795 16.0315 23.7273 16.0315C23.175 16.0315 22.7273 16.4792 22.7273 17.0315V25.0315C22.7273 25.3376 22.6236 25.5857 22.4935 25.7422C22.3651 25.8967 22.2358 25.9406 22.1405 25.9406H7.85948C7.76412 25.9406 7.63487 25.8967 7.5065 25.7422C7.37636 25.5857 7.27271 25.3376 7.27271 25.0315V17.0315C7.27271 16.4792 6.82499 16.0315 6.27271 16.0315Z" :fill="color"/>
		<path d="M17.6777 14.9407H12.3223C11.9937 14.9407 11.7273 15.307 11.7273 15.7589V20.6679C11.7273 21.1198 11.9937 21.4861 12.3223 21.4861H17.6777C18.0063 21.4861 18.2727 21.1198 18.2727 20.6679V15.7589C18.2727 15.307 18.0063 14.9407 17.6777 14.9407Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.9407L15 3.27379L27 14.9407" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M23.7273 11.6679L23.7273 5.66794" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script>
export default {
	name: "main-icon",

	props: {
		color: {
			type: String,
			default: "#47474A",
		}
	}
}
</script>