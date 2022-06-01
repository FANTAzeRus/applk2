<template>
	<label class="radio radio--filled">
		<input :name="selectName" :value="name" class="radio__input" type="radio" @change="onChangeHandler" :checked="current === name">
		<span class="radio__span"></span>
		<span v-if="label" class="radio__text radio__text--bold">{{label}}</span>
	</label>
</template>

<script>
export default {
	name: "radio",

	props: ['value', 'name', 'selectName', 'label', 'current'],

	data() {
		return {
			selectedInterface: null,
		}
	},

	methods: {
		onChangeHandler(e) {
			this.$emit("input", e.target.value);
		}
	}
}
</script>