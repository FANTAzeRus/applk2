<template>
	<default-page :pageOptions="pageOptions">
		<Settings />

		<popup :show="displayClearPopup" @closePopup="closeClearPopup">
			<h3>Вы действительно хотите <br>сбросить настройки?</h3>
			<div class="btn-box btn-box--popup">
				<button @click="clearSelectedGroup" class="button">Да, сбросить</button>
				<button @click="closeClearPopup(false)" class="button button--grey">Нет, отменить</button>
			</div>
		</popup>
	</default-page>
</template>

<script>
import DefaultPage from "@/components/DefaultPage";
import Settings from "@/components/settings";
import Popup from "@/components/Popup";

export default {
	name: "settings-base",

	components: {DefaultPage, Settings, Popup},

	computed: {
		displayClearPopup() {
			return this.$store.state.settings.clear_popup;
		}
	},

	data() {
		return {
			pageOptions: {
				name: "settings",
				components: {
					content: true,
					breadcrumbs: true,
				}
			}
		}
	},

	methods: {
		closeClearPopup() {
			this.$store.commit("settings/hideClearPopup");
		},
		clearSelectedGroup() {
			if (this.$store.state.settings.clear_callback && typeof this.$store.state.settings.clear_callback === 'function') {
				this.$store.state.settings.clear_callback(this.$store.state.settings.clear_group);
				this.$store.commit("settings/hideClearPopup");
			}
		}
	}

}
</script>