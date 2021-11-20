<template>
	<div>
		<div v-if="title" class="content_heading default-heading heading-first">{{title}}</div>
		<div class="select-box select-box--fheight">
			<div @click="selectOptions.selectListShow = !selectOptions.selectListShow" :class="['select', selectOptions.selectListShow ? 'select--open' : '']">
				<div class="card-addres-tags" ref="tagsList" :class="isOverflowed && selectOptions.selectListSels.length > 0 ? 'card-addres-tags--overflowed':''">
					<p
						v-for="(selectItem, index) in selectOptions.selectListSels"
						:key="index"
					>
						{{selectItem.data}}
					</p>
					<p class="more">Ещё {{selectOptions.selectListSels.length - 1}}...</p>
				</div>
			</div>
			<ul v-if="selectOptions.selectList.length && selectOptions.selectListShow" class="select__list">
				<div class="select__search">
					<button class="select__search-icon" type="submit">
						<svg class="icon icon--zoom">
								<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
						</svg>
					</button>
					<input class="select__search-input" type="text" placeholder="Поиск..." name="search">
				</div>
				<li
					v-for="(selectItem, index) in selectOptions.selectList"
					:key="index"
					class="select__item"
				>
					<label class="checkbox checkbox--filled checkbox--super--small">
						<input v-model="selectItem.model" @click="selSelectList(selectItem, $event)" class="checkbox__input" type="checkbox">
						<span class="checkbox__span"></span>
						<span class="checkbox__text">{{selectItem.data}}</span>
					</label>	
				</li>
			</ul>
		</div>
	</div>
		
</template>

<script>
export default {

	name: 'MultiSelect',

	props: {
		selectOptions: Object,
		title: String
	},

	data () {
		return {
			isOverflowed: false
		}
	},

	methods: {
		selSelectList(item, event) {
			if (event.currentTarget.checked) {
				this.selectOptions.selectListSels.push(item)
				this.$nextTick(() => {this.checkOverflow()})
			} else {
				this.$nextTick(() => {this.checkOverflow()})
				this.selectOptions.selectListSels.splice(this.selectOptions.selectListSels.indexOf(item), 1)
			}
		},
		checkOverflow() {
			console.log((this.$refs.tagsList ? this.$refs.tagsList.scrollWidth : null), (this.$refs.tagsList ? this.$refs.tagsList.offsetWidth : null))
      this.isOverflowed = (this.$refs.tagsList ? this.$refs.tagsList.scrollWidth : null) > (this.$refs.tagsList ? this.$refs.tagsList.offsetWidth : null)
    }
	}
}
</script>

<style lang="css" scoped>
</style>