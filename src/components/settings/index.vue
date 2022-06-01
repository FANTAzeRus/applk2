<template>
	<div class="settings__wrapper">
		<div class="settings__content">
			<div class="tabs">
				<div @click="setActiveTab(tab.name)" class="tab" :class="{'tab--active': tab.name === activeTab}" v-for="tab in tabs" :key="tab.name">
					{{ tab.title }}
				</div>
			</div>
			<div class="setting-main-wrapper">
				<div class="params-wrapper">
					<step title="Шаг 1" info="Выбор интерфейса главной страницы приложения"/>
					<interfaces :items="interfaces" v-model="activeInterface"/>

					<step title="Шаг 2" info="Выбор цветовой темы фона приложения"/>
					<themes :items="themes" v-model="activeTheme"/>

					<step title="Шаг 3" info="Настройка цветовой темы фона приложения"/>
					<template v-if="model_ready">
						<prop-group :meta_key="key" v-for="key in keys" :key="`prop_group_${key}`"/>
					</template>
				</div>

				<div class="preview-wrapper">
					<preview :withSlider="withSlider" :sliderDirection="sliderDirection"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Step from "./step"
import Interfaces from "./interfaces"
import Themes from "@/components/settings/themes";
import PropGroup from "@/components/settings/prop-group";
import Preview from "@/components/settings/preview";

export default {
	name: "settings",

	components: {PropGroup, Themes, Step, Interfaces, Preview},

	watch: {
		activeInterface() {
			this.$store.commit("settings/setWithSlider", this.withSlider);
		}
	},

	computed: {
		model_ready() {
			return this.$store.state.settings.model_ready;
		},
		currentColorValue() {
			return this.$store.state.settings.currentColorValue;
		},
		showColorPicker() {
			return this.$store.state.settings.showColorPicker;
		},
		keys() {
			return Object.keys(this.$store.state.settings.params_meta);
		},
		selectedInterface() {
			return this.interfaces.find(i => i.name === this.activeInterface)
		},
		withSlider() {
			return this.selectedInterface ? this.selectedInterface.with_slider : false;
		},
		sliderDirection() {
			return this.selectedInterface.direction;
		}
	},

	data() {
		return {
			firstRun: true,
			tabs: [
				{name: "main", title: "Главная стрница"},
				{name: "dashboard", title: "Дашборд"},
				{name: "settings", title: "Настройки"},
			],
			activeTab: "main",
			interfaces: [
				{name: 'interface_0', title: "Каталог без слайдера", with_slider: false},
				{name: 'interface_1', title: "Слайдер горизонтальный", with_slider: true, direction: 'horizontal'},
				{name: 'interface_2', title: "Слайдер вертикальный", with_slider: true, direction: 'vertical'},
			],
			activeInterface: 'interface_0',
			themes: [
				{name: 'light', title: "Светлая тема"},
				{name: 'black', title: "Темная тема"},
			],
			activeTheme: null,
		}
	},

	mounted() {
		this.$store.dispatch("settings/initModel");
	},

	methods: {
		setActiveTab(tab) {
			this.activeTab = tab;
		},
	}
}
</script>