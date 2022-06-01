<template>
	<svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.7143 27C12.3192 27 12.8096 26.5096 12.8096 25.9048C12.8096 25.2999 12.3192 24.8095 11.7143 24.8095C11.1094 24.8095 10.6191 25.2999 10.6191 25.9048C10.6191 26.5096 11.1094 27 11.7143 27Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M23.7619 27C24.3668 27 24.8572 26.5096 24.8572 25.9048C24.8572 25.2999 24.3668 24.8095 23.7619 24.8095C23.157 24.8095 22.6667 25.2999 22.6667 25.9048C22.6667 26.5096 23.157 27 23.7619 27Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M2.95239 4H7.33334L10.2686 18.6652C10.3687 19.1695 10.6431 19.6224 11.0435 19.9448C11.444 20.2672 11.9451 20.4384 12.4591 20.4286H23.1048C23.6188 20.4384 24.1199 20.2672 24.5203 19.9448C24.9208 19.6224 25.1951 19.1695 25.2952 18.6652L27.0476 9.47619H13.0223M14.7235 15.0233H25.2952" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script>
export default {
	name: "basket-icon",

	props: {
		color: {
			type: String,
			default: "#47474A",
		}
	}
}
</script>
