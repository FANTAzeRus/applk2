<template>
	<div>
		<!--  && selItem != selectItem -->
		<li
			v-for="(selectItem, index) in list"
			:key="index"
			class="select__item"
			:class="selectItem.disabled ? 'select__item--disabled' : ''"
			v-show="(!preview || (selectItem.model || hasCheckedElement(selectItem)))"
			@click="oneSel ? selSelectList({item: selectItem}) :''"
		>
			<div v-if="!oneSel">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input
						v-if="!preview"
						:disabled="selectItem.disabled"
						v-model="selectItem.model"
						@click="selSelectList({item: selectItem, condition: $event.currentTarget.checked})"
						class="checkbox__input" type="checkbox"
					>
					<input
						v-else
						:disabled="true"
						v-model="selectItem.model"
						class="checkbox__input" type="checkbox"
					>
					<span class="checkbox__span"></span>
					<span class="checkbox__text">{{selectItem.data || selectItem.title}}</span>
				</label>
			</div>
			<div v-else>
				<span class="checkbox__text">{{selectItem.data || selectItem.title}}</span>
			</div>

			<multi-select-item
				class="select__item--child"
				v-if="selectItem.children && selectItem.children.length"
				:list="selectItem.children"
				:preview="preview"
				:oneSel="oneSel"
				:selItem="selItem"
				@selSelectList="selSelectList"
			/>
		</li>
	</div>
</template>

<script>
export default {

	name: 'MultiSelectItem',

	props: {
		list: {
			type: Array,
			require: true
		},
		preview: Boolean,
		oneSel: Boolean,
		selItem: Object
	},

	methods: {
		hasCheckedElement(item) {
			return item.parent?.children.some(item => item.model)
		},

		selSelectList({item, condition}) {
			this.$emit("selSelectList", {item: item, condition: condition})
		}
	}
}
</script>

<style lang="css" scoped>
</style>