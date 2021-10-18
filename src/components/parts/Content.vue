<template>
	<!--Content block-->
	<section class="content">
		<div class="content_block_grey">
			
			<!--Product Table header block-->
			<div class="table-heder-products">
			<div class="table-heder-products__block">
				<div class="table-heder-products__label">1</div>
				<div class="table-heder-products__label-text">1 выделен</div>
				<div class="table-heder-products__battons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				<svg class="icon icon--layers">
					<use xlink:href="@/assets/img/public/icons-pack.svg#layers"></use>
				</svg>
				</div>
			</div>
			
			<!--Filter and Search block-->
			<div class="table-heder-filtr-search">
				<a class="table-heder-filtr-search__filtr" href="">
				<svg class="icon icon--filter">
					<use xlink:href="@/assets/img/public/icons-pack.svg#filter"></use>
				</svg>
				Фильтр
				</a>
				<form class="table-heder-filtr-search__search" action="">
				<button class="table-heder-filtr-search__search--button" type="submit">
				<svg class="icon icon--zoom">
							<use xlink:href="@/assets/img/public/icons-pack.svg#zoom"></use>
				</svg>
				</button>
				<input class="table-heder-filtr-search__input" type="text" placeholder="Поиск" name="search">
				</form>
			</div>
			<!--Filter and Search block end-->
			
			<div class="table-heder-new-position">
				<a class="button table-heder-new-position__button">Создать позицию</a>
			</div>
			</div>
			<!--Product Table header block end-->
			
			<div class="separator_all_grey"></div>
			
			<!--Product Table block-->
			<div class="table-products">
			<!--Product Table row-->
			<div class="table-products__list table-products__list--grey">
				<div class="table-products__item table-products__item--menudrop"></div>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo">Фото</div>
				<div class="table-products__item table-products__item--vendor-code">Артикул</div>
				<div class="table-products__item table-products__item--name table-products__item--select">Название</div>
				<div class="table-products__item table-products__item--desciption">Описание</div>
				<div class="table-products__item table-products__item--bju">БЖУ</div>
				<div class="table-products__item table-products__item--marker">Маркеры</div>
				<div class="table-products__item table-products__item--promo">Акции</div>
				<div class="table-products__item table-products__item--weigh">Вес</div>
				<div class="table-products__item table-products__item--price">Цена</div>
				<div class="table-products__item table-products__item--icon"></div>
			</div>
			<!--Product Table row end-->  
			
			<!--Product Table row-->        
			<div class="table-products__list">        
				<a class="table-products__item table-products__item--menudrop table-products">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				</a>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo"><img src="@/assets/img/public/pic/table-products-photo1.svg" alt="" /></div>
				<div class="table-products__item table-products__item--vendor-code">AA3456</div>
				<div class="table-products__item table-products__item--name">Кисло-сладкий цыпленок</div>
				<div class="table-products__item table-products__item--desciption">
				<img class="icon--desc" src="img/public/icons/rus.svg" alt="" />
				<img class="icon--desc" src="img/public/icons/ukr.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--bju">
				<svg class="icon icon--close-round">
					<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
				</svg>
				</div>
				<div class="table-products__item table-products__item--marker">
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-moon.jpg" alt="" />
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-tree.jpg" alt="" />
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-star.jpg" alt="" />
				</div>
				<div class="table-products__item table-products__item--promo">
				<div class="text-label">Акция</div>
				</div>
				<div class="table-products__item table-products__item--weight">
				1 пуч
				</div>
				<div class="table-products__item table-products__item--price">
				1000 ₴
				</div>
				<div class="table-products__item table-products__item--icons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				</div>
			</div>
			<!--Product Table row end-->

			<!--Product Table row-->        
			<div class="table-products__list">  
				<a class="table-products__item table-products__item--menudrop">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				</a>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox" checked>
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo">
				<img src="@/assets/img/public/pic/table-products-photo2.svg" alt="" />
				<svg class="icon icon--stop">
					<use xlink:href="@/assets/img/public/icons-pack.svg#stop"></use>
				</svg>
				</div>
				<div class="table-products__item table-products__item--vendor-code">AA3456</div>
				<div class="table-products__item table-products__item--name">Цыпленок ранч</div>
				<div class="table-products__item table-products__item--desciption">
				<img class="icon--desc" src="img/public/icons/rus-grey.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--bju">
				<img class="icon icon--closed-grey" src="img/public/icons/icon--closed-grey.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--marker">
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-moon-grey.jpg" alt="" />
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-tree-grey.jpg" alt="" />
				</div>
				<div class="table-products__item table-products__item--promo">
				<div class="text-label text-label-grey">ХИТ</div>
				</div>
				<div class="table-products__item table-products__item--weight">
				100 гр.
				</div>
				<div class="table-products__item table-products__item--price">
				500 ₽
				</div>
				<div class="table-products__item table-products__item--icons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				</div>
			</div>
			<!--Product Table row end-->
			
			<!--Product Table row-->
			<div class="table-products__list">  
				<a class="table-products__item table-products__item--menudrop">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				</a>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo">
				<img src="@/assets/img/public/table-products-none.svg" alt="" />
				<span class="table-products__item--photo--nophoto">Нет фото</span>
				</div>
				<div class="table-products__item table-products__item--vendor-code">AA3456</div>
				<div class="table-products__item table-products__item--name">Чизбургер-пицца</div>
				<div class="table-products__item table-products__item--desciption">
				<img class="icon icon--closed-grey" src="img/public/icons/icon--closed-grey.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--bju">
				<svg class="icon icon--close-round">
					<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
				</svg>
				</div>
				<div class="table-products__item table-products__item--marker">
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-moon.jpg" alt="" />
				</div>
				<div class="table-products__item table-products__item--promo">
				<img class="icon icon--closed-grey" src="img/public/icons/icon--closed-grey.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--weight">
				200 гр.
				</div>
				<div class="table-products__item table-products__item--price">
				300 ₽
				</div>
				<div class="table-products__item table-products__item--icons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				</div>
			</div>
			<!--Product Table row end-->
			
			<!--Product Table row-->
			<div class="table-products__list">  
				<a class="table-products__item table-products__item--menudrop">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				</a>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo">
				<img src="@/assets/img/public/pic/table-products-photo4.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--vendor-code act">AA3456</div>
				<div class="table-products__item table-products__item--name table-products-name-2-pos">
				<ul class="table-products__item--name--ul">    
					<li class="table-products__item--name--li">
					<div class="table-products__item--name--li--zag">Пирог</div>
					2 варианта
					</li>
				</ul>
				</div>
				<div class="table-products__item table-products__item--bju">

				</div>
				<div class="table-products__item table-products__item--marker">
				</div>
				<div class="table-products__item table-products__item--promo">
				</div>
				<div class="table-products__item table-products__item--weight">
				</div>
				<div class="table-products__item table-products__item--price">
				500-1000 ₽
				</div>
				<div class="table-products__item table-products__item--icons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				</div>
			</div>
			<!--Product Table row end-->
			
			<!--Product Table row-->
			<div class="table-products__list table-products__list--dark-grey">  
				<a class="table-products__item table-products__item--menudrop">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				</a>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo">
				<img src="@/assets/img/public/pic/table-products-photo5.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--vendor-code">AA3457</div>
				<div class="table-products__item table-products__item--name table-products-name-2-pos">Размер пиццы 30см, тесто тонкое, мука классическая</div>
				<!--Product Table 3 cell-->
				<div class="table-products__item table-products__item--bju table-products-bju-3-pos">
				Белки 200 гр, Жиры 100 гр, Углеводы 200 гр. Калории 1000 ккал
				</div>
				<div class="table-products__item table-products__item--weight">
				100 гр.
				</div>
				<div class="table-products__item table-products__item--price">
				500 ₽
				</div>
				<div class="table-products__item table-products__item--icons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				</div>
			</div>
			<!--Product Table row end-->
			
			<!--Product Table row-->
			<div class="table-products__list table-products__list--dark-grey">  
				<a class="table-products__item table-products__item--menudrop">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				</a>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo">
				<img src="@/assets/img/public/pic/table-products-photo6.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--vendor-code">AA3458</div>
				<div class="table-products__item table-products__item--name table-products-name-2-pos">Размер пиццы 50см, тесто тонкое, мука классическая</div>
				<!--Product Table 3 cell-->
				<div class="table-products__item table-products__item--bju table-products-bju-3-pos">
				Белки 100 гр, Жиры 200 гр, Углеводы 200 гр. Калории 1000 ккал
				</div>
				<div class="table-products__item table-products__item--weight">
				100 гр.
				</div>
				<div class="table-products__item table-products__item--price">
				1000 ₴
				</div>
				<div class="table-products__item table-products__item--icons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				</div>
			</div>
			<!--Product Table row end-->
			
			<!--Product Table row-->
			<div class="table-products__list">  
				<a class="table-products__item table-products__item--menudrop">
				<svg class="icon icon--menu">
					<use xlink:href="@/assets/img/public/icons-pack.svg#menu"></use>
				</svg>
				</a>
				<div class="table-products__item table-products__item--check">
				<label class="checkbox checkbox--filled checkbox--super--small">
					<input class="checkbox__input" type="checkbox">
					<span class="checkbox__span"></span>
				</label>
				</div>
				<div class="table-products__item table-products__item--photo">
				<img src="@/assets/img/public/pic/table-products-photo7.svg" alt="" />
				</div>
				<div class="table-products__item table-products__item--vendor-code">AA3458</div>
				<div class="table-products__item table-products__item--name table-products-name-2-pos">Цыпленок ранч</div>
				<div class="table-products__item table-products__item--bju">
				<svg class="icon icon--close-round">
					<use xlink:href="@/assets/img/public/icons-pack.svg#close-round"></use>
				</svg>
				</div>
				<div class="table-products__item table-products__item--marker">
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-moon.jpg" alt="" />
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-tree.jpg" alt="" />
				<img class="table-products__item--marker--icon" src="img/public/icons/marker-star.jpg" alt="" />
				</div>
				<div class="table-products__item table-products__item--promo">
				<div class="text-label">Акция</div>
				</div>
				<div class="table-products__item table-products__item--weight">
				1 пуч
				</div>
				<div class="table-products__item table-products__item--price">
				1000 ₴
				</div>
				<div class="table-products__item table-products__item--icons">
				<svg class="icon icon--copy">
					<use xlink:href="@/assets/img/public/icons-pack.svg#copy"></use>
				</svg>
				<svg class="icon icon--attention">
					<use xlink:href="@/assets/img/public/icons-pack.svg#attention"></use>
				</svg>
				<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"/></svg>
				<svg class="icon icon--trash">
					<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
				</svg>
				</div>
			</div>
			<!--Product Table row end-->
			
			</div>
			<!--Product Table block end-->
			
			<!-- Pagination -->
			<div class="pagination">
			<ul class="pagination__list">
			<li class="pagination__item">
				<a class="pagination__link pagination__link__prev" href="#">&nbsp;</a>
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
				<a class="pagination__link pagination__link__next" href="#">&nbsp;</a>
			</li>
			</ul>
			</div>
		
		</div>
	</section>
	<!--Content block end-->
</template>

<script>
export default {

	name: 'Content',

}
</script>