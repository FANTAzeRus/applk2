<template>
	<div class="interfaces-wrapper">
		<div class="interface" v-for="(item, idx) in items" :key="`interface_${idx}`">
			<img :src="`/img/interfaces/${item.name}.png`" alt=""/>
			<div class="check">
				<radio :name="item.name" v-model="selectedInterface" selectName="selectedInterface" :current="selectedInterface" />
			</div>
			<div class="title">{{item.title}}</div>
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
		},
		value: {
			type: String
		}
	},

	data() {
		return {
			selectedInterface: null,
		}
	},

	mounted() {
		this.selectedInterface = this.value;
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
	gap: 30px

	.interface
		width: 173px
		display: flex
		flex-direction: column
		align-items: center

		.check
			margin-top: 14px

		.title
			padding-top: 10px
			text-align: center
</style>