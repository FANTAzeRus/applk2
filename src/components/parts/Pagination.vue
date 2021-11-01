<template>
	<!-- Pagination -->
	<div class="pagination">
		<ul class="pagination__list">
			<li class="pagination__item">
				<a class="pagination__link pagination__link__prev" href="#"><img src="@/assets/img/public/prev.svg" alt=""></a>
			</li>
			<li class="pagination__item">
				<a href="#" class="pagination__link pagination__link--active">1</a>
			</li>
			<li class="pagination__item">
				<a class="pagination__link" href="#">2</a>
			</li>
			<li class="pagination__item">
				<a class="pagination__link pagination__link__ellipsis" href="#">...</a>
			</li>
			<li class="pagination__item">
				<a class="pagination__link" href="#">100</a>
			</li>
			<li class="pagination__item">
				<a class="pagination__link pagination__link__next" href="#"><img src="@/assets/img/public/next.svg" alt=""></a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'Pagination',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>