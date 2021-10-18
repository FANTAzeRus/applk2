<template>
	<div class="language">
		<div @click="$event.currentTarget.classList.toggle('open')" ref="languageCurrent" class="language__current">
			<div class="language__flag">
				<svg class="icon"><use xlink:href="@/assets/img/public/icon-lang.svg#rus" /></svg>
			</div>
			<div class="language__arrow"></div>
		</div>
		<div class="language__list">
			<div
				v-for="locale in $i18n.availableLocales"
				:key="`locale-${locale}`"
				@click="selLang(locale)"
				class="language__item"
			>
				<svg class="icon"><use xlink:href="@/assets/img/public/icon-lang.svg#rus" /></svg>
				{{formatedLang(locale)}}
			</div>
			
		</div>
	</div>
</template>

<script>
export default {

	name: 'LangSwitcher',

	data () {
		return {

		}
	},

	methods: {
		selLang(locale) {
			setTimeout(() => {
				this.$refs.languageCurrent.classList.remove('open')
				
				setTimeout(()=> {
					if (this.$i18n.locale !== locale) {
						this.$i18n.locale = locale
						localStorage.setItem("lang", this.$i18n.locale)
					}
				}, 50)

			}, 100)
			
		},

		formatedLang(locale) {
			if (locale == 'ua') {
				return "Український"
			} else if (locale == 'en') {
				return "English"
			} else if(locale == 'ru') {
				return "Русский"
			}
		}
	}
}
</script>

<style lang="css" scoped>
</style>