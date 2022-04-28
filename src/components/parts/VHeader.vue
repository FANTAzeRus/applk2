<template>
	<!--Site header block-->
	<header class="header">
		<a href="/" class="logo">
			<logo :theme="themeMode" />
			<span class="logo__text">Мобильные приложения<br>для бизнеса</span>
		</a>
		<lang-switcher />

		<div class="header-user">
			<div class="header-user__news">
				<img src="@/assets/img/public/pic/chines-news.svg" alt="">
				<select>
					<option value="chines" selected="">Китайские новости</option>
				</select>
			</div>

			<div class="diagram" style="--percent: 75;">
				<div class="diagram__inner">
					<div class="diagram__digit">255</div>
					<div class="diagram__text">дней</div>
				</div>
				<svg width="50" height="50">
					<circle transform="rotate(-90)" r="22" cx="-25" cy="25" />
					<circle transform="rotate(-90)" r="22" cx="-25" cy="25" />
				</svg>
			</div>

			<div class="header-user__role-text">
				Осталось до<br>блокировки ЛК
			</div>

			<img src="@/assets/img/public/pic/user-photo.jpg" class="header-user__photo" alt="">
			
			<div class="header-user__text">
				<div class="header-user__name">Иванов Александр</div>
				<div class="header-user__role">Администратор</div>
				<span class="header-user__icon"><arrow-down :theme="themeMode" /></span>
			</div>

			<div class="header-user__actions">
				<img src="@/assets/img/public/icons/notification.svg" alt="">
				<img src="@/assets/img/public/icons/quest.svg" alt="">
				<img @click="toggleTheme" v-if="themeMode === 'dark'" src="@/assets/img/public/icons/light-mode.svg" alt="" class="header-user__actions--theme">
				<img @click="toggleTheme" v-else src="@/assets/img/public/icons/dark-mode.svg" alt="" class="header-user__actions--theme">
			</div>
		</div>
	</header>
	<!--Site header block end-->
</template>

<script>
import LangSwitcher from "@/components/parts/LangSwitcher"
import {mapGetters} from "vuex";
import Logo from "@/assets/icons/logo";
import ArrowDown from "@/assets/icons/arrow-down";
export default {

	name: 'VHeader',

	components: {
		ArrowDown,
		Logo,
		LangSwitcher
	},

	computed: {
		...mapGetters(['theme', 'themeMode']),
	},

	methods: {
		toggleTheme() {
			this.$store.commit("setTheme", this.themeMode === "dark" ? "light":"dark");
		}
	}
}
</script>