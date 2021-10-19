<template>
	<!-- popup -->
	<div @click="closeOutsidePopup" class="popup" v-if="show">
		<div class="popup__wrap">
			<div class="popup__header">
				<img
					src="@/assets/img/public/icons/close-popup.svg"
					class="popup__close"
					@click="closePopup"
					alt=""
				>
			</div>
			<div class="popup__content">
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
	},

	methods: {
		closePopup() {
			this.login = ""
			this.name = ""
			
			this.$emit("closePopup", false)
		},

		closeOutsidePopup(event) {
			if (!event.target.closest(".popup__wrap")) {
				this.closePopup()
			}
		}
	},

	watch: {
		show() {
			if(this.show && this.meal){
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