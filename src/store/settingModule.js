export default {
	namespaced: true,
	state: {
		with_slider: false,
		preview_img: null,
		model_ready: false,
		params_model: {},
		params_meta: {
			header: {
				group: "Настройка параметров Хедера",
				description: "Хедер - верхний блок в интерфейсе приложения",
				items: [
					{type: "color", name: "header_background_color", title: "Цвет фона в хедере"},
					{type: "color", name: "header_font_color", title: "Цвет шрифтов в хедере"},
					{type: "color", name: "header_icons_color", title: "Цвет иконок в хедере"},
				],
			},

			slider: {
				group: "Настройка параметров Слайдера",
				description: "При выборе Интерфейс - 2 или 3, появляется «слайдер»",
				items: [
					{type: "img", name: "slider_background_image", title: "Фото для фона слайдера"},
					{type: "color", name: "slider_background_color", title: "Цвет фона"},
					{type: "color", name: "slider_service_font_color", title: "Цвет шрифта названия сервиса"},
					{type: "color", name: "slider_description_font_color", title: "Цвет шрифта описания"},
					{type: "color", name: "slider_description_background_color", title: "Цвет фона под описанием"},
				],
			},

			menu_categories: {
				group: "Настройка параметров Горизонтального меню категорий",
				description: "Горизонтальное меню Категорий показывает Категорию каталога и позволяет перейти в режим Категории списком, кликнув на левую иконку в виде трех полосок",
				items: [
					{type: "color", name: "menu_categories_background_color", title: "Цвет фона активной кнопки"},
					{type: "color", name: "menu_categories_not_active_background_color", title: "Цвет фона не активной кнопки"},
					{type: "color", name: "menu_categories_font_color", title: "Цвет шрифта в активной кнопке"},
					{type: "color", name: "menu_categories_not_active_font_color", title: "Цвет шрифта в не активной кнопки"},
					{type: "color", name: "menu_categories_icon_color", title: "Цвет иконки «список Категорий»"},
					{type: "color", name: "menu_categories_icon_background_color", title: "Цвет фона иконки «список Категорий»"},
				],
			},

			catalog: {
				group: "Настройка параметров каталога",
				description: "Каталог для отображения Позиций в Категориях",
				items: [
					{type: "color", name: "catalog_background_color", title: "Цвет фона Каталога"},
					{type: "color", name: "catalog_title_color", title: "Цвет названия категорий"},
					{type: "color", name: "catalog_position_name_color", title: "Цвет названия позиций"},
					{type: "color", name: "catalog_params_color", title: "Цвет параметров (вес, и т.д.)"},
					{type: "color", name: "catalog_price_color", title: "Цвет стоимости в позициях"},
					{type: "color", name: "catalog_price_background_color", title: "Цвет фона стоимости в позициях"},
					{type: "color", name: "catalog_text_to_cart_color", title: "Цвет текста кнопки «В корзину»"},
					{type: "color", name: "catalog_background_to_cart_color", title: "Цвет фона кнопки «В корзину»"},
					{type: "color", name: "catalog_count_color", title: "Цвет количества выбранных элементов"},
					{type: "color", name: "catalog_digits_to_cart_color", title: "Цвет цифр кнопки «В корзину»"},
					{type: "color", name: "catalog_background_banner_color", title: "Цвет фона рекламных баннеров"},
					{type: "color", name: "catalog_banner_color", title: "Цвет текста в рекламных банерах"},
				],
			},

			bottom_navigation: {
				group: "Настройка параметров навигационной панели",
				description: "Нижняя навигационная панель нужна для быстрого перехода на страницы приложения",
				items: [
					{type: "color", name: "bottom_navigation_background_color", title: "Цвет фона"},
					{type: "color", name: "bottom_navigation_active_state_color", title: "Цвет активного состояния"},
					{type: "color", name: "bottom_navigation_not_active_state_color", title: "Цвет не активного состояния"},
					{type: "color", name: "bottom_navigation_icon_marker_color", title: "Цвет маркера на иконке"},

				],
			},
		},

		activeParam: null,
		colors: [
			"#32FD7B", "#0000dd", "#dd3b00", "#dd006f",
			"#c57867", "#d9ca25", "#1a7700", "#d21414",
			"#343436", "#27bd8f", "#783ab6", "#54ff24"
		],
		showColorPicker: false,
		currentColor: "",
		currentColorValue: "",
		default_model: {
			header_font_color: "#373737",
			header_icons_color: "#47474A",
			header_background_color: "#f1f1f1",

			slider_background_image: "img/texture.png",
			slider_background_color: "#23A67E",
			slider_service_font_color: "#000000",
			slider_description_font_color: "#909090",
			slider_description_background_color: "#dedede",

			menu_categories_icon_color: "#47474A",
			menu_categories_icon_background_color: "#EAEAEA",
			menu_categories_background_color: "#22986b",
			menu_categories_not_active_background_color: "#f4f4f4",
			menu_categories_font_color: "#ffffff",
			menu_categories_not_active_font_color: "#373737",

			catalog_background_color: "#ffffff",
			catalog_title_color: "#37373a",
			catalog_position_name_color: "#32FD7B",
			catalog_params_color: "#909090",
			catalog_price_color: "#303030",
			catalog_text_to_cart_color: "#ffffff",
			catalog_background_to_cart_color: "#22986b",
			catalog_digits_to_cart_color: "#32FD7B",
			catalog_background_banner_color: "#32FD7B",
			catalog_banner_color: "#32FD7B",
			catalog_count_color: "#505050",

			bottom_navigation_active_state_color: "#757575",
			bottom_navigation_not_active_state_color: "#303030",
			bottom_navigation_icon_marker_color: "#22986b",
		},
	},

	actions: {
		initModel({dispatch}) {
			dispatch("fillModel");
		},

		openColorPicker({state},name) {
			state.currentColor = name;
			state.currentColorValue = state.params_model[state.currentColor];
			state.showColorPicker = true;
		},

		closeColorPicker({state}) {
			state.showColorPicker = false;
		},

		updateColor({state}, color) {
			state.params_model[state.currentColor] = color;
			state.currentColorValue = state.params_model[state.currentColor];
		},

		fillModel({commit, state}) {
			const model = {};
			const keys = Object.keys(state.params_meta);

			keys.forEach(key => {
				const line = state.params_meta[key];
				line.items.forEach(item => {
					model[item.name] = state.default_model[item.name];
				});
			});

			commit("fillModel", model);
		},

		resetToDefault({state}, group) {
			const items = state.params_meta[group].items;
			if (items.length) {
				items.forEach(item => {
					state.params_model[item.name] = state.default_model[item.name];
				});
			}
		},
	},
	mutations: {
		fillModel(state, model) {
			state.params_model = model;
			state.model_ready = true;
		},
		updateModel(state, payload) {
			state.params_model[payload.key] = payload.value;
		},
		setWithSlider(state, with_slider) {
			state.with_slider = with_slider;
		},
		setPreviewImg(state, img) {
			state.preview_img = img;
		}
	},
	getters: {
		params_model: state => state.params_model,
		params_meta: state => state.params_meta,
	},

}