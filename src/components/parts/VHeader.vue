<template>
	<!--Site header block-->
	<header class="header">
		<a href="/" class="logo">
			<img src="@/assets/img/public/logo.svg" alt="Логотип Apps4B" class="logo__img">
			<span class="logo__text">Мобильные приложения<br>для бизнеса</span>
		</a>
		<lang-switcher />
		<div class="header-contacts">
			<a href="#" class="header-contacts__help-link">Нужна помощь?</a>
			<a href="mailto:" class="header-contacts__item header-contacts__email">
				<svg class="icon icon--email">
					<use xlink:href="@/assets/img/public/icons-pack.svg#email"></use>
				</svg>
			</a>
			<a href="tel:" class="header-contacts__item header-contacts__phone">
				<svg class="icon icon--phone">
					<use xlink:href="@/assets/img/public/icons-pack.svg#phone"></use>
				</svg>
			</a>
			<a href="tel:" class="header-contacts__item header-contacts__plus">
				<svg class="icon icon--add">
					<use xlink:href="@/assets/img/public/icons-pack.svg#add"></use>
				</svg>
			</a>
		</div>
		<div class="header-user">
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
			<div class="header-user__text">
				<div class="header-user__name">Иванов Александр</div>
				<div class="header-user__role">Администратор</div>
			</div>
		</div>
	</header>
	<!--Site header block end-->
</template>

<script>
import LangSwitcher from "@/components/parts/LangSwitcher"
export default {

	name: 'VHeader',

	components: {
		LangSwitcher
	}
}
</script>