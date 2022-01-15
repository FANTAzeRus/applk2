<template>
	<!-- Pagination -->
	<div class="pagination">

		<div v-if="showPaginationCountList" class="pagination__count">
			<span>Показывать по:</span>
			<ul class="pagination__count-list">
				<li
					v-for="(count, index) in paginationCountList"
					:key="index"
					:class="count.selected ? 'pagination__count-item--selected' : ''"
					@click="selPaginationCount(index)"
					class="pagination__count-item"
				>
					{{count.name}}
				</li>
			</ul>
		</div>

		<ul v-if="paginationButton > 1" class="pagination__list">
			<li @click="changePage(page - 1)" class="pagination__item">
				<a class="pagination__link pagination__link__prev">
					<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 10.9273L6.36247 12L5.24537e-07 6L6.36247 5.56225e-07L7.5 1.07273L2.27506 6L7.5 10.9273Z" fill="#D5D5D5"/>
					</svg>
				</a>
			</li>
			<li @click="changePage(index)" v-for="index in paginationButton" :key="index" class="pagination__item">
				<a class="pagination__link" :class="{'pagination__link--active': index === page}">{{index}}</a>
			</li>
			<li @click="changePage(page + 1)" class="pagination__item">
				<a class="pagination__link pagination__link__next">
					<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.59894e-07 10.9273L1.13753 12L7.5 6L1.13753 5.56225e-07L-1.61813e-09 1.07273L5.22494 6L8.59894e-07 10.9273Z" fill="#D5D5D5"/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

	name: 'Pagination',

	props: {
		paginationCountList: {
			type: Array,
			require: false,
			default: () => {
				return [
					{name: 10, selected: true},
					{name: 20, selected: false},
					{name: 30, selected: false},
				]
			}
		},
		listLength: {
			type: Number,
			require: false
		},
		page: {
			type: Number
		}
	},

	data() {
		return {
			itemPerPage: 10,
		}
	},

	computed: {
		showPaginationCountList() {
			return this.paginationCountList.some(item => item.name <= this.listLength)
		},
		paginationButton() {
			return Math.ceil(this.listLength / this.itemPerPage)
		},
		selectedPaginationCount() {
			return this.paginationCountList.filter(item => item.selected)[0].name
		},
	},

	methods: {
		changePage(idx) {
			if (idx >= 1 && idx <= this.paginationButton) {
				this.$emit('update:page', idx)
			}
			this.$emit('changePage', this.selectedPaginationCount)
		},
		selPaginationCount(idx) {
			this.paginationCountList.map(count => count.selected = false)
			this.paginationCountList[idx].selected = true
			this.itemPerPage = this.paginationCountList[idx].name
			this.changePage(1)
		},
	}
}
</script>

<style lang="css" scoped>
</style>