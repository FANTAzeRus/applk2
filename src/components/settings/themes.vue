<template>
	<div class="themes-wrapper">
		<div class="theme" v-for="(item, idx) in items" :key="`theme_${idx}`">
			<radio :name="item.name" :current="selectedTheme" :label="item.title" v-model="selectedTheme" selectName="selectedTheme" />
		</div>
	</div>
</template>

<script>
import Radio from "@/components/settings/radio";
export default {
	name: "themes",
	components: {Radio},
	props: {
		items: {
			type: Array,
			default: () => [],
		}
	},

	data() {
		return {
			selectedTheme: "light",
		}
	},

	watch: {
		selectedInterface(val) {
			this.$emit("input", val);
		}
	}
}
</script>

<style lang="sass" scoped>
.themes-wrapper
	margin: 0 30px
	display: flex
	flex-direction: column
	gap: 27px

	.theme
		display: flex
		align-items: center
</style>