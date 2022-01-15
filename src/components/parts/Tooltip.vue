<template>
	<div class="tooltip-comp">
		<div
			@click="toggleSelectList"
			:class="selItemClasses"
		>
			{{selItem.title}}
		</div>
		<ul v-if="list.length && show" class="select__list">
			<div class="select__search">
				<button class="select__search-icon" type="submit">
					<svg class="icon icon--zoom">
						<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
					</svg>
				</button>
				<input v-model="search" class="select__search-input" type="text" placeholder="Поиск..." name="search">
				<button v-show="search.length" @click="removeSearchInput" class="search__remove">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9B9B9B"/>
					</svg>
				</button>
			</div>
			<li
				v-for="(selectItem, index) in searchedList"
				:key="index"
				@click="selSelectList(selectItem)"
				class="select__item"
			>
				{{selectItem.title}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {

	name: 'Tooltip',

	props: {
		show: Boolean,
		list: {
			type: Array,
			require: true
		},
		selItem: {
			type: Object,
			require: true
		}
	},

	data () {
		return {
			search: '',
		}
	},

	computed: {
		selItemClasses() {
			return {
					'select': true,
					'select--open': this.show,
					...this.selItem.class
				}
		},
		searchedList() {
			return this.search.length >= 3
				? (this.list).filter(item => {
					return item.title.toLowerCase().includes(this.search.toLowerCase())
				})
				: this.list
		}
	},

	methods: {
		removeSearchInput() {
			this.search = ''
		},
		
		toggleSelectList() {
			this.$emit('toggleSelectList')
		},

		selSelectList(item) {
			this.$emit('toggleSelectList')
			this.$emit('update:selItem', item)
		},
	}
}
</script>

<style lang="css" scoped>
</style>