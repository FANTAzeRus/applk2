<template>
	<!-- popup -->
	<div @click="closeOutsidePopup" class="popup" v-show="show">
		<div class="popup__wrap" :class="[
			type == 'orders' ? 'popup__wrap--orders' : '', 
			type == 'login' ? 'popup__wrap--login' : '',
			type == 'addCat' ? 'popup__wrap--addCart' : ''
			]">
			<div class="popup__header" :class="type == 'orders' ? 'popup__header--orders' : ''">
				<slot name="header">
				</slot>
				<img
					src="@/assets/img/public/icons/close-popup.svg"
					class="popup__close"
					@click="closePopup"
					alt=""
				>
			</div>
			<div class="popup__content" :class="type == 'orders' ? 'popup__content--orders' : ''">
				<slot></slot>
			</div>
		</div>
	</div>
	<!-- ./popup -->
</template>

<script>
export default {

	name: 'Popup',

	data() {
		return {
			login: "",
			name: ""
		}
	},

	props: {
		show: {
			require: true,
			type: Boolean
		},

		type: String
	},

	methods: {
		closePopup() {
			this.login = ""
			this.name = ""

			this.$emit("closePopup", false)
		},

		closeOutsidePopup(event) {
			if (!event.target.closest(".popup__wrap") && !event.target.closest(".select__list")) {
				this.closePopup()
			}
		}
	},

	watch: {
		show() {
			if(document.body.style.overflowY != 'hidden'){
				document.body.style.overflowY = 'hidden'
			} else {
				document.body.style.overflowY = 'auto'
			}
		},

		time() {
			if (this.time == 0 && this.show && this.show) {
				clearInterval(this.timeInterval)
			}
		},
	}
}
</script>