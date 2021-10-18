<template>
	<div class="page login-page">
		<div class="login-page__form-wrapper">
			<div class="login-page__header">
				<a href="/" class="logo">
					<img src="@/assets/img/public/logo.svg" alt="Логотип Apps4B" class="logo__img">
					<span class="logo__text">Мобильные приложения<br>для бизнеса</span>
				</a>

				<lang-switcher class="language--login"/>
			</div>

			<div class="login-alert" ref="alert">
				<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="11" cy="11" r="11" fill="#E6442F"/>
					<path d="M15 7.80571L14.1943 7L11 10.1943L7.80571 7L7 7.80571L10.1943 11L7 14.1943L7.80571 15L11 11.8057L14.1943 15L15 14.1943L11.8057 11L15 7.80571Z" fill="white"/>
				</svg>

				<div class="form__sub-header tooltip-container">
					Войти можно через {{cooldownTimer}} сек.
				</div>
			</div>	

			<form @submit.prevent="loginIn" class="form login-form">
				<div class="form__header">Вход в личный кабинет</div>
				<div class="form__sub-header tooltip-container">
					Введите данные, полученные при регистрации
					<div @click="startCooldown" class="tooltip">
						<div class="tooltip__text">Введите данные, полученные при регистрации</div>
					</div>
				</div>
				<div class="form__controls">
					<div class="form__control">
						<input 
							v-model="login" 
							type="text" 
							class="form__input" 
							placeholder="Логин" 
							name="user-login"
							required
						>
					</div>
					<div class="form__control form__control--password">
						<input 
							v-model="password" 
							type="password" 
							class="form__input form__input--password"
							placeholder="Пароль" 
							name="user-password"
							required
						>
						<a @click="showPassword" href="#" class="form__pass-toggler"></a>
					</div>
					<div class="form__control form__control--bottom">
						<label class="checkbox">
							<input class="checkbox__input" type="checkbox" v-model="saveLogin">
							<span class="checkbox__span"></span>
							<span class="checkbox__text">Запомнить логин</span>
						</label>
						<button :disabled="!login || !password || timer != 30000" class="button form__button" ref="loginBtn">Войти</button>
					</div>
				</div>
				<div class="form__bottom-part">
					<span class="form__bottom-text">Нет логина и пароля? </span>
					<a href="#" @click.prevent="popupRegistrationShow = true" class="form__link">Зарегистрироваться</a>
					<br>
					<a href="#" @click.prevent="popupRecovShow = true" class="form__link">Забыли пароль?</a>
				</div>
			</form>
			<div class="copyrights">
				<div class="copyrights__text">Apps4Business © 2021 г.  Все права защищены</div>
				<a href="#" class="copyrights__policy">Политика конфиденциальности</a>
			</div>
		</div>

		<div class="login-page__slider-wrapper">
			<swiper class="login-slider" :options="swiperOptions" ref="loginSwiper">
				<swiper-slide class="login-slider__content" v-for="(slide, index) in Array(4)" :key="index">

					<div class="login-slider__text">
						<div>
							<h3>Доработка функционала «ДОСТАВКА»</h3>
							<p>Мы доработали вариант управления режимом ДОСТАВКИ. Теперь вы можете настраивать Минимальный размер корзины Заказа, Время работы Доставки.</p>
						</div>

						<button class="button button--bordered">Читать подробнее</button>
					</div>
					
					<div class="login-slider__img">
						<img src="" alt="">
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>

		<div class="login-contacts">
			<p class="login-contacts__text">Нужна помощь?</p>
			<a href="tel:88001234578" class="login-contacts__phone">8 (800) 123-45-78</a>
		</div>

		<popup :show="popupRecovShow" @closePopup="closeRecPopup">
			<h3>Забыли пароль?</h3>
			<p class="popup__text">Заполните данные, ссылка на смену пароля придет Вам на почту</p>
			<div class="form__control">
				<input 
					v-model="login" 
					type="text" 
					class="form__input" 
					placeholder="Логин" 
					name="user-login"
					required
				>
			</div>
			<div class="form__control">
				<input
					v-model="organizationName" 
					type="text" 
					class="form__input" 
					placeholder="Название организации" 
					name="organization-name"
					required
				>
			</div>

			<button @click="popupRecovShow = false" :disabled="!login || !organizationName" class="button">Подтвердить</button>
		</popup>

		<popup :show="popupRegistrationShow" @closePopup="closeRegPopup">
			<h3>Регистрация</h3>
			<p class="popup__text">Заполните данные, на почту придет пароль для входа в личный кабинет</p>
			<div class="form__control">
				<input 
					v-model="registration.email" 
					type="email" 
					class="form__input" 
					placeholder="E-mail" 
					name="user-email"
					required
				>
			</div>
			<div class="form__control form__control--password">
				<label for="dialCode" class="selectLang__wrap">
					<select id="dialCode" @click="$refs.arrow.classList.add('open')" v-model="lang" class="selectLang" :class="activeCountryCode ? activeCountryCode.toLowerCase() : ''">
						<option v-for="(language, index) in languages" :key="index" :value="language.iso2">
							{{language.name}}
						</option>
					</select>

					<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" ref="arrow" class="drop-arrow">
						<path d="M0.893939 -3.90753e-08L-2.2249e-07 0.910026L5 6L10 0.910026L9.10606 -3.98039e-07L5 4.17995L0.893939 -3.90753e-08Z" fill="black"/>
					</svg>

				</label>

				<input
					v-model="registration.phone"
					v-mask="maskFormated.mask"
					:placeholder="maskFormated.placeholder" 
					type="tel"
					class="form__input form__input--phone" 
					name="organization-name"
					required
				>
				<!-- maskFormated -->
			</div>
			<div class="form__control">
				<input 
					v-model="registration.login" 
					type="text" 
					class="form__input" 
					placeholder="Логин" 
					name="user-login"
					required
				>
			</div>
			<div class="form__control">
				<input 
					v-model="registration.loginRepeat" 
					type="text" 
					class="form__input" 
					placeholder="Повтор логина"
					required
				>
			</div>

			<label class="checkbox">
				<input class="checkbox__input" type="checkbox" v-model="agreeCheck">
				<span class="checkbox__span"></span>
				<span class="checkbox__text">Согласен на обработку персональных данных</span>
			</label>

			<button @click="popupRegistrationShow = false" :disabled="registration.loginRepeat != registration.login || rawRegPhone.length != 10 || !registration.email || !agreeCheck" class="button button--registration">Отправить</button>
		</popup>
	</div>
</template>

<script>
import LangSwitcher from "@/components/parts/LangSwitcher"
import Popup from "@/components/Popup"

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import allCountries from "@/assets/countries/all-countries"

import { maska } from 'maska'

export default {

	name: 'index',

	components: {
		LangSwitcher,
		Popup,
		Swiper,
		SwiperSlide
	},

	directives: {
		mask: maska
	},

	mounted() {
		if (localStorage.getItem("login")) {
			this.login = localStorage.getItem("login")
		}

		document.title = "APPS4B - Мобильные приложения для бизнеса"

		document.addEventListener("touchmove", event => {
			if (event.touches.length > 1) {
				event.preventDefault();
				event.stopImmediatePropagation();
			}
		}, {passive: false})


	},

	data() {
		return {
			login: '',
			password: '',
			saveLogin: false,

			lang: "RU",

			organizationName: '',

			timer: 30000,

			popupRecovShow: false,
			popupRegistrationShow: false,

			agreeCheck: false,

			registration: {
				email: "",
				phone: "",
				login: "",
				loginRepeat: "",
			},

			swiperOptions: {
				slidesPerView: 1,
				// loop: true,
				// autoplay: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet(index, className) {
							return `<span class="${className} swiper-pagination-bullet-${index}"></span>`
						}
				},
				// Some Swiper option/callback...
			}
		}
	},

	computed: {
		cooldownTimer() {
			return (this.timer / 1000).toFixed(0);
		},

		rawRegPhone() {
			const rawValueArray = []
			const str = "+"+this.dialCode+" (###) ###-##-##"
			str.split('').forEach((character, i) => {
				if (character === '#') {
					rawValueArray.push(this.registration.phone[i])
				}
			})

			return rawValueArray.join('')
		},

		languages() {
			return allCountries.filter(country => this.countryList.includes(country.iso2.toLowerCase()))
		},
		activeCountryCode() {
			return this.findCountry(this.lang)?.iso2;
		},
		countryList() {
			return ['de', 'ru', 'uk', 'ua', 'us', 'cn', 'fr', 'pl', 'it', 'es', 'fi', 'se', 'au', 'ge', 'lt', 'cy', 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz']
		},
		dialCode() {
			return this.languages.find(language => language.iso2 == this.lang)?.dialCode
		},
		maskFormated() {
			return {
				mask: '+' + this.dialCode + " (###) ###-##-##",
				placeholder: '+' + this.languages.find(language => language.iso2 == this.lang)?.dialCode + " (999) 999-99-99"
			}
		},
		phoneCode() {
			return this.languages.find(language => language.iso2 == this.lang).dialCode
		}
	},

	methods: {
		loginIn() {
			this.saveLogin ? localStorage.setItem("login", this.login) : localStorage.removeItem("login")
			// const body = {
			// 	login: this.login,
			// 	password: this.password,
			// }

			// this.$load(async () => {
			// 	const data = await this.$api.auth.signIn(body)
			// 		.then(res => {
			// 			this.$router.push('/menu')
			// 		})
			// })
		},

		findCountry(iso = '') {
			return this.languages.find((country) => country.iso2 === iso.toUpperCase());
		},

		closeRecPopup(state) {
			this.popupRecovShow = state
		},
		closeRegPopup(state) {
			this.popupRegistrationShow = state
		},

		startCooldown() {
			clearInterval(cooldown)
			this.refs.loginBtn.sidabled = true
			this.$refs.alert.classList.add("show") 

			const cooldown = setInterval(()=> {
				this.timer -= 1000

				if (this.timer == 0) {
					clearInterval(cooldown)
					this.timer = 30000
					this.refs.loginBtn.sidabled = false
					this.$refs.alert.classList.remove("show") 
				}
			}, 1000)
		},

		showPassword(event) {
			event.currentTarget.classList.toggle("show")
			if (event.currentTarget.previousElementSibling.type == 'password') {
				event.currentTarget.previousElementSibling.type = 'text'
			} else {
				event.currentTarget.previousElementSibling.type = "password"
			}
		}
	}
}
</script>

<style lang="sass">
</style>