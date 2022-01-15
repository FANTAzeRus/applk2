<template>
	<div>
		<div class="content_heading default-heading">{{title}}</div>
		<div v-if="type != 'basket'" class="content_caption">{{warningText}}</div>
		<div class="flex-wrap">
			<!--Photo position-->
			<div
				v-for="(image, index) in lists.imagesList"
				:key="index"
				class="position_photo__block"
				v-show="(type == 'cardProduct' || type == 'basket') && !onePhoto"
			>
				<img class="position_photo__block__pic" :class="type == 'basket' ? 'position_photo__block__pic--rect' : ''" :src="image.previewImage" alt="">
				<div class="position_photo__block__txt" :class="type == 'basket' ? 'position_photo__block__txt--rect' : ''">
					<div class="position_photo__block--name">{{image.name}}</div>
					<a class="position_photo__block--size" href="" >{{image.size}}</a>
				</div>
				<div class="position_photo__block__icon" :class="type == 'basket' ? 'position_photo__block__icon--rect' : ''">
					<svg class="icon--edit" @click="$refs.fileChangeInput[index].click()" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
					<svg @click="removePhoto(index)" class="icon icon--trash">
						<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
					</svg>
					<input type="file" ref="fileChangeInput" @input="pickFile(index)" hidden>
				</div>
				<div class="clear"></div>
			</div>
			
			<!--Photo position end-->

			<div class="position_photo__block" v-if="onePhoto && lists.imagesList.length">
				<img class="position_photo__block__pic" :src="lists.imagesList[0].previewImage" alt="">
				<div class="position_photo__block__txt">
					<div class="position_photo__block--name" :class="{'position_photo__block--name--fixedw':file}">{{lists.imagesList[0].name}}</div>
					<a class="position_photo__block--size" href="" >{{lists.imagesList[0].size}}</a>
				</div>
				<div class="position_photo__block__icon">

					<svg v-if="!file" class="icon--edit" @click="$refs.fileChangeInput[0].click()" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
					<div v-else @click="$refs.fileChangeInput[0].click()" class="photo-action-box">
						<svg class="icon--edit" xmlns="http://www.w3.org/2000/svg"><path d="M.974 9.062v2.188h2.188l6.451-6.452-2.187-2.187L.974 9.062zm10.331-5.955a.58.58 0 000-.823L9.94.92a.58.58 0 00-.823 0L8.05 1.987l2.188 2.187 1.067-1.067z"></path></svg>
						<span>Перезаписать</span>
					</div>

					<svg v-if="!file" @click="removePhoto(0)" class="icon icon--trash">
						<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
					</svg>
					<div @click="removePhoto(0)" v-else class="photo-action-box">
						<svg class="icon icon--trash">
							<use xlink:href="@/assets/img/public/icons-pack.svg#trash"></use>
						</svg>
						<span>Очистить</span>
					</div>

					<input type="file" ref="fileChangeInput" @input="pickFile(0)" hidden>
				</div>
				<div class="clear"></div>
			</div>
			
			<!--Photo add-->
			<div v-if="onePhoto && lists.imagesList.length == 0" class="position_photo__block">
				<div @click="$refs.fileInput.click()" class="position_photo__block__new-photo"><img class="position_photo__block__new-photo--icon" src="@/assets/img/public/pic/icon--add-photo.svg" alt=""></div>
				<div @click="$refs.fileInput.click()" class="position_photo__block__txt">
					<a class="position_photo__block--name position_photo__block--namelink">
						{{file ? 'Выберите файл' : 'Загрузить новое фото'}}
					</a>
					<a class="position_photo__block--size">
						{{file ? 'файл не выбран' : 'Выбрать из библиотеки фото'}}
					</a>
					<input type="file" ref="fileInput" @input="pickFile" hidden>
				</div>
			</div>
			<div v-else-if="!onePhoto" class="position_photo__block">
				<div @click="$refs.fileInput.click()" class="position_photo__block__new-photo"><img class="position_photo__block__new-photo--icon" src="@/assets/img/public/pic/icon--add-photo.svg" alt=""></div>
				<div @click="$refs.fileInput.click()" class="position_photo__block__txt">
					<a class="position_photo__block--name position_photo__block--namelink">{{file ? 'Выберите файл' : 'Загрузить новое фото'}}</a>
					<a class="position_photo__block--size">{{file ? 'файл не выбран' : 'Выбрать из библиотеки фото'}}</a>
					<input type="file" ref="fileInput" @input="pickFile" hidden>
				</div>
			</div>
			<!--Photo add end-->
		</div>

		<div class="cracks" ref="crack">
			<div class="cracks__item">
				Превышен размер фотографии. Не больше 600 кБайт
			</div>
		</div>
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
		},
		warningText: {
			type: String,
			default: "Размер: 600x477 пикс, вес не более 600 кБайт"
		},
		lists: {
			type: Object,
			default: ()=> {
				return {
					imagesList: [],
				}
			}
		},
		file: Boolean,
		onePhoto: Boolean
	},

	data() {
		return {
			crackTimeout: null,
		}
	},

	methods: {
		changePhoto(file, e, id, isFile=false) {
			this.lists.imagesList.splice(id, 1, {
				previewImage: isFile ? '' : e.target.result,
				name: file[0].name,
				size: (file[0].size / 1024).toFixed(2) +" кБайт",
			})
		},
		addPhoto(file, e, isFile=false) {
			this.lists.imagesList.push({
				previewImage: isFile ? '' : e.target.result,
				name: file[0].name,
				size: (file[0].size / 1024).toFixed(2) +" кБайт",
			})
		},

		pickFile(index) {
			const file = index >= 0 ? this.$refs.fileChangeInput[index].files : this.$refs.fileInput.files ,
						extension = file[0].name.split('.').pop().toLowerCase(),
						fileTypes = ['jpg', 'jpeg', 'png', 'svg', 'webp'],
						condition = this.file 
												? file && file[0]
												: file && file[0] && file[0].size <= 600000 && fileTypes.indexOf(extension) > -1

			if (condition) {
				const reader = new FileReader
				reader.onload = e => {

					index >= 0 ? this.changePhoto(file, e, index, this.file) : this.addPhoto(file, e, this.file)
					
					this.$emit('input', {file: file[0], list: this.lists.imagesList})
				}

				reader.readAsDataURL(file[0])
			} else {
				this.showCrack()
			}
		},

		showCrack() {
			clearInterval(this.crackTimeout)

			this.$refs.crack.classList.add('cracks--show')

			this.crackTimeout = setTimeout(()=> {
				this.$refs.crack.classList.remove('cracks--show')
				this.crackTimeout = null
			}, 4000)
		},

		removePhoto(idx) {
			this.$emit('removePhoto', {lists: this.lists, id: idx})
		},

	}
}
</script>

<style lang="css" scoped>
</style>