<template>
	<div class="menu-icon">
		<svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.3333 6.00001L6.66667 6.00001C6.29848 6.00001 6 6.29848 6 6.66667L6 11.3333C6 11.7015 6.29848 12 6.66667 12L11.3333 12C11.7015 12 12 11.7015 12 11.3333L12 6.66667C12 6.29848 11.7015 6.00001 11.3333 6.00001Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M24.1111 5.00001L17.8889 5.00001C17.398 5.00001 17 5.39798 17 5.8889L17 12.1111C17 12.602 17.398 13 17.8889 13L24.1111 13C24.602 13 25 12.602 25 12.1111V5.8889C25 5.39798 24.602 5.00001 24.1111 5.00001Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M12.1111 17L5.88889 17C5.39797 17 5 17.398 5 17.8889L5 24.1111C5 24.602 5.39797 25 5.88889 25L12.1111 25C12.602 25 13 24.602 13 24.1111L13 17.8889C13 17.398 12.602 17 12.1111 17Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M24.1111 17L17.8889 17C17.398 17 17 17.398 17 17.8889L17 24.1111C17 24.602 17.398 25 17.8889 25L24.1111 25C24.602 25 25 24.602 25 24.1111L25 17.8889C25 17.398 24.602 17 24.1111 17Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</div>
</template>

<script>
export default {
	name: "menu-icon",

	props: {
		color: {
			type: String,
			default: "#47474A",
		}
	}
}
</script>