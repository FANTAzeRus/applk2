<template>
	<div>
		<div class="content_heading default-heading">{{title}}</div>
		<div class="content_caption">Размер: 600x360 пикс, вес не более 600 кБайт</div>
		<div class="flex-wrap">
			<!--Photo position-->
			<div
				v-for="(image, index) in imagesList"
				:key="index"
				class="position_photo__block"
				v-show="type == 'cardProduct'"
			>
				<img class="position_photo__block__pic" :src="image.previewImage" alt="">
				<div class="position_photo__block__txt">
					<div class="position_photo__block--name">{{image.name}}</div>
					<a class="position_photo__block--size" href="" >{{image.size}}</a>
				</div>
				<div class="position_photo__block__icon">
					<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
					<svg @click="removeToBasket(index)" class="icon icon--trash">
						<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
					</svg>
				</div>
				<div class="clear"></div>
			</div>
			
			<!--Photo position end-->
			
			<!--Photo add-->
			<div class="position_photo__block">
				<div @click="$refs.fileInput.click()" class="position_photo__block__new-photo"><img class="position_photo__block__new-photo--icon" src="@/assets/img/public/pic/icon--add-photo.svg" alt=""></div>
				<div @click="$refs.fileInput.click()" class="position_photo__block__txt">
					<a class="position_photo__block--name position_photo__block--namelink">Загрузить новое фото</a>
					<a class="position_photo__block--size">Выбрать из библиотеки фото</a>
					<input type="file" ref="fileInput" @input="pickFile" hidden>
				</div>
			</div>
			<!--Photo add end-->
		</div>
		
		<!--Photo in basket-->
		<div v-if="type == 'cardProduct'" class="content_heading default-heading">Фото в корзине {{basketList.length}}:{{basketList.length}}</div>
		<div v-show="type == 'cardProduct'" v-for="(image, index) in basketList" :key="index" class="position_photo__block">
			<img class="position_photo__block__pic" :src="image.previewImage" alt=""> 
			<div class="position_photo__block__txt">
				<a class="position_photo__block--name position_photo__block--namelink" href="" >Загрузить другое фото</a>
				<a class="position_photo__block--size" href="" >Выбрать из библиотеки фото</a>
			</div>
		</div>
		<!--Photo in basket end-->
	</div>
</template>

<script>
export default {

	name: 'CardsPhotoPreview',

	props: {
		type: {
			type: String,
			default: "cardProduct"
		},
		title: {
			type: String,
			default: "Основное фото позиции"
		}
	},

	data () {
		return {
			imagesList: [
				{
					previewImage: "/applk2/img/position_photo-main.svg", 
					name: 'Пицца1.jpg', 
					size: '2 кБайт'
				},
			],
			basketList: [
				{
					previewImage: "/applk2/img/position_photo-other.svg", 
				},
			],
		}
	},

	// computed: {

	// },

	methods: {
		pickFile () {
			const file = this.$refs.fileInput.files

			if (file && file[0] && file[0].size <= 600) {
				const reader = new FileReader
				reader.onload = e => {
					this.imagesList.push({
						previewImage: e.target.result,
						name: file[0].name,
						size: file[0].size+" кБайт",
					})
				}

				reader.readAsDataURL(file[0])
				this.$emit('input', file[0])
			}
		},
		removeToBasket(idx) {
			this.basketList.push(this.imagesList.splice(idx, 1)[0]);
		},

	}
}
</script>

<style lang="css" scoped>
</style>