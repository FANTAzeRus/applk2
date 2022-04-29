import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep'

const createDataTree = dataset => {
   const hashTable = Object.create(null);
   dataset.forEach(aData => hashTable[aData.id] = {
      ...aData,
      children: []
   });
   const dataTree = [];
   dataset.forEach(aData => {
      if (aData.parent_category) hashTable[aData.parent_category].children.push(hashTable[aData.id])
      else dataTree.push(hashTable[aData.id])
   });
   return dataTree;
};

const setCategories = (state, payload) => {
	const newPayload = [],
				defaultProperties = {
					model: false,
					selected: false,
					currentCategory: false,
					icons: {
						photo: {
							imagesList: [],
						},
						icon: {
							imagesList: [],
						}
					}
				}

	payload.forEach(item => {
		newPayload.push(Object.assign(item, defaultProperties))
	})
	state.categories = createDataTree(newPayload)
}


export default {
	state: {
		theme: {
			mode: null,
		},

		applications: [],

		currentApplication: {
			id: "1ec57fa6-e054-6a8e-87a4-0025900cf785",
			title: "Чешские пивные",
			trademarks: [
					"1ec57fa6-e08b-6a02-907f-0025900cf785",
					"1ec57fa6-e669-637a-b1f6-0025900cf785",
					"1ec57fa6-ec2f-67c8-b40f-0025900cf785"
			]
		},

		categories: [],
		categoriesTypes: [],

		addresses: [
			{title: 'Адрес 1', address: 'Улица 1', selected: false, type: {title: "Не выбран", data: {}}},
			{title: 'Адрес 2', address: 'Улица 2', selected: false, type: {title: "Не выбран", data: {}}},
			{title: 'Адрес 3', address: 'Улица 3', selected: false, type: {title: "Не выбран", data: {}}},
			{title: 'Адрес 4', address: 'Улица 4', selected: false, type: {title: "Не выбран", data: {}}},
			{title: 'Адрес 5', address: 'Улица 5', selected: false, type: {title: "Не выбран", data: {}}},
			{title: 'Адрес 6', address: 'Улица 6', selected: false, type: {title: "Не выбран", data: {}}},
			{title: 'Адрес 7', address: 'Улица 7', selected: false, type: {title: "Не выбран", data: {}}}
		],

		selCategory: {},
		categoryMenuShow: true,
	},
	getters: {
		getTrademark(state) {
			return state.currentApplication.trademarks[0]
		},
		getCategories(state) {
			return state.categories
		},
		getCategoriesTypes(state) {
			return cloneDeep(state.categoriesTypes)
		},
		getSelCategory(state) {
			return state.selCategory
		},
		catalogPositions(state) {
			return state.selCategory.positions
		},
		getSelCategoryStore(state) {
			return state.selCategory._vm.store.getNodeById
		},
		getCategoryMenuShow(state) {
			return state.categoryMenuShow
		},
		getAddresses(state) {
			return state.addresses
		},
		themeMode: (state) => {
			if (state.theme.mode) {
				return state.theme.mode;
			}

			let theme = localStorage.getItem("app_theme");
			if (!theme) {
				theme = "light";
				localStorage.setItem("app_theme", theme);
			}

			return theme;
		},
	},
	actions: {
		fetchApplications({state, getters}) {
			return new Promise((resolve, reject)=> {
				axios.get('https://api.apps4business.ru/applications')
					.then(res => {
						state.applications = res.data
						state.currentApplication = res.data[0]

						return axios.get(`https://api.apps4business.ru/menu/?trademark=${getters.getTrademark || '1ec57fa6-e08b-6a02-907f-0025900cf785'}&expand=type,positions`)
					})
					.then(res => {
						resolve(res.data)
						setCategories(state, res.data)
					})
					.catch(err => reject(err))
			})
		},

		fetchCategoriesTypes({state}) {
			axios.get('https://api.apps4business.ru/menu/types/')
				.then(res => {
					state.categoriesTypes = res.data
				})
		}
	},

	mutations: {
		setTheme(state, mode) {
			state.theme.mode = mode;
			localStorage.setItem("app_theme", mode);
		}
	},
}