<template>
	<div>
		<template v-if="type === 'color'">
			<div class="prop-color-wrapper">
				<div class="value-preview-color color-preview" :style="calcPreview" @click="showPickerHandler"></div>
				<input type="text" class="value-input-color" v-model="currentValue" @input="inputHandler">
			</div>
		</template>

		<template v-if="type === 'img'">
			<div class="prop-img-wrapper">
				<div class="img-description">Размер: 1000x1000 пикс, вес не более 600 кБ</div>
				<div class="upload_wrapper">
					<div class="upload_button">
						<div class="plus">+</div>
					</div>

					<div>
						<input :accept="accept" type="file" class="upload_input" ref="file_for_upload" @change="onChangeHandler" />
						<div class="upload_img" @click="onUploadClick">Загрузить фото</div>
						<div class="select_img">Выбрать из библиотеки фото</div>
					</div>
				</div>

				<div class="preview-img" v-if="statePreview">
					<img :src="preview" alt="">
					<div class="preview-wrapper">
						<div class="preview-name">
							Имя выбранного изображения

							<span class="edit">
								<pencil />
							</span>
							<span class="trash" @click="clearPreviewImg">
								<trash />
							</span>
						</div>
						<div class="preview-size">500Кб</div>
					</div>
				</div>
			</div>
		</template>
	</div>

</template>

<script>
import Pencil from "@/assets/icons/pencil";
import Trash from "@/assets/icons/trash";
export default {
	name: "prop-value",
	components: {Trash, Pencil},
	props: {
		type: {
			type: String,
			default: "color",
		},

		value: {
			type: String,
			default: "",
		},
		model_key: {
			type: String,
		}
	},

	computed: {
		calcPreview() {
				return {backgroundColor: this.currentValue}
		},

		statePreview() {
			return this.$store.state.settings.preview_img;
		},

		preview() {
			return this.statePreview ? this.statePreview : this.currentValue;
		}
	},

	watch: {
		value(val) {
			this.currentValue = val;
		}
	},

	data() {
		return {
			currentValue: null,
			file_for_upload: null,
			accept: [".png", ".jpg", ".jpeg"],
		}
	},

	mounted() {
		this.currentValue = this.value;
	},

	methods: {
		inputHandler(e) {
			this.$emit("input", e.target.value);
			this.$store.commit("settings/updateModel", {
				key: this.model_key,
				value: this.currentValue,
			});
		},
		showPickerHandler(e) {
			const pickerHeight = 240;
			const wh = window.innerHeight;
			const dir = (wh - e.clientY) > pickerHeight ? 1 : -1;
			console.log(dir)
			const x = (e.pageX - e.offsetX) - 17;
			const y = (e.pageY - e.offsetY) + (dir > 0 ? (e.target.clientHeight + 20): -(pickerHeight+20));

			this.$store.dispatch("settings/openColorPicker", {name: this.model_key, x, y});
		},
		onUploadClick() {
			this.$refs.file_for_upload.click();
		},
		onChangeHandler(e) {
			const files = e.target.files;
			if (!files.length) return;

			const [file] = files;
			const reader = new FileReader();
			reader.onload = ev => {
				if (ev.target.result) {
					this.$store.commit("settings/setPreviewImg", ev.target.result);
				}
			};
			reader.readAsDataURL(file);
		},

		clearPreviewImg() {
			this.$store.commit("settings/setPreviewImg", null);
		}
	}
}
</script>

<style lang="sass" scoped>
.prop-color-wrapper
	padding: 14px 16px
	border: 1px solid #eaeaea
	border-radius: 5px
	display: inline-flex
	align-items: center

	.value-preview-color
		margin-right: 11px
		border-radius: 2px
		width: 17px
		height: 17px
		cursor: pointer

	.value-input-color
		font-size: 13px
		font-weight: 400
		border: none
		outline: none
		width: auto
		height: auto
		position: relative

.prop-img-wrapper
	.img-description
		color: #9B9B9B

	.upload_wrapper
		display: flex
		gap: 15px
		align-items: center

	.upload_button
		width: 60px
		height: 60px
		background: #F5F6F8
		border-radius: 5px
		display: flex
		justify-content: center
		align-items: center
		cursor: pointer

		.plus
			width: 18px
			height: 18px
			background: #E6442F
			color: #ffffff
			border-radius: 2px
			display: flex
			justify-content: center
			align-items: center

	.upload_img, .select_img
		text-decoration: underline
		cursor: pointer

	.upload_img
		color: #000000

	.select_img
		color: #9b9b9b

	.upload_input
		display: none

	.preview-img
		margin-top: 18px
		display: flex
		align-items: center
		gap: 15px

		img
			width: 60px
			height: 60px
			border-radius: 5px
			object-fit: cover

		.preview-name
			color: #000000

		.edit
			margin-left: 9px

		.trash
			margin-left: 7px
			cursor: pointer

		.preview-size
			color: #9b9b9b

</style>