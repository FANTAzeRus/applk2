<template>
	<div class="interfaces-wrapper">
		<div class="interface" v-for="(item, idx) in items" :key="`theme_${idx}`">
			<radio :name="item.name" :current="selectedInterface" :label="item.title" v-model="selectedInterface" selectName="selectedInterface" />
		</div>
	</div>
</template>


<script>
import Radio from "@/components/settings/radio";
export default {
	name: "interfaces",
	components: {Radio},
	props: {
		items: {
			type: Array,
			default: () => [],
		}
	},

	data() {
		return {
			selectedInterface: 'interface_0',
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
.interfaces-wrapper
	margin: 0 30px
	display: flex
	flex-direction: column
	gap: 27px

	.interface
		display: flex
		align-items: center
</style>