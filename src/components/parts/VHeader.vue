<template>
	<!--Site header block-->
	<header class="header">
		<a href="/" class="logo">
			<img src="@/assets/img/public/logo.svg" alt="Логотип Apps4B" class="logo__img">
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
				<img src="@/assets/img/public/icons/drop-arrow.svg" class="header-user__icon" alt="">
			</div>

			<div class="header-user__actions">
				<img src="@/assets/img/public/icons/notification.svg" alt="">
				<img src="@/assets/img/public/icons/quest.svg" alt="">
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