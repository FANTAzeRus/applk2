<template>
	<div class="page library-page controls">
		<div class="container controls__wrapper">

			<div class="controls__block controls__block--buttons">
				<h2 class="controls__header">Buttons</h2>
				<div class="controls__items">
					<a class="button">Default button</a>
					<a class="button button--bordered">Default button</a>
					<a class="button button--small">Button small</a>
					<a class="button button--medium">Button medium</a>
					<a class="button button--large">Button large</a>
					<a class="button__add">Добавить маркер</a>
				</div>
			</div>

			<div class="controls__block controls__block--check-radio">
				<h2 class="controls__header">Checkboxes & Radios</h2>
				<div class="controls__items">
					<label class="checkbox">
						<input class="checkbox__input" type="checkbox" checked>
						<span class="checkbox__span"></span>
						<span class="checkbox__text">Checkbox text</span>
					</label>
					<label class="checkbox checkbox--filled">
						<input class="checkbox__input" type="checkbox" checked>
						<span class="checkbox__span"></span>
						<span class="checkbox__text">Checkbox text</span>
					</label>

					<label class="radio">
						<input name="radio-name" class="radio__input" type="radio" checked>
						<span class="radio__span"></span>
						<span class="radio__text">Radio text</span>
					</label>
					<label class="radio">
						<input name="radio-name" class="radio__input" type="radio">
						<span class="radio__span"></span>
						<span class="radio__text">Radio text</span>
					</label>

					<label class="radio radio--filled">
						<input name="radio-name-filled" class="radio__input" type="radio" checked>
						<span class="radio__span"></span>
						<span class="radio__text">Radio text filled</span>
					</label>
					<label class="radio radio--filled">
						<input name="radio-name-filled" class="radio__input" type="radio">
						<span class="radio__span"></span>
						<span class="radio__text">Radio text filled</span>
					</label>
				</div>
			</div>

			<div class="controls__block controls__block--inputs">
				<h2 class="controls__header">Inputs & Textarea</h2>
				<div class="controls__items">
					<input type="text" class="input-text" placeholder="Пустое поле для ввода...">
					<input type="text" class="input-text" placeholder="Пустое поле для ввода..." value="Заполненное поле">
					<input type="text" class="input-text" disabled placeholder="Недоступно для ввода">
					<input type="text" class="input-text input-text--error" value="Ошибка ввода">
				</div>
				<br /><br />
				<h2 class="controls__header">Select</h2>
				<select class="select">
					<option value="" selected>Все адреса</option>
					<option>Адрес1</option>
					<option>Адрес2</option>
				</select>
			</div>

			<div class="controls__block controls__block--tags">
				<h2 class="controls__header">Tags</h2>
				<div class="controls__items">
					<div class="tag__list">
						<div class="tag__item">
							ультратонкое
							<a class="tag__close"></a>
						</div>
						<div class="tag__item">
							тонкое
							<a class="tag__close"></a>
						</div>
						<div class="tag__item">
							классическое
							<a class="tag__close"></a>
						</div>
						<a class="tag__add"></a>
					</div>
				</div>
			</div>

			<div class="controls__block controls__block--diagram">
				<h2 class="controls__header">Diagram</h2>
				<div class="controls__items">
					<div class="diagram" style="--percent: 75;">
						<div class="diagram__inner">
							<div class="diagram__digit">255</div>
							<div class="diagram__text">дней</div>
						</div>
						<svg width="50" height="50">
							<circle transform="rotate(-90)" r="22" cx="-25" cy="25"/>
							<circle transform="rotate(-90)" r="22" cx="-25" cy="25"/>
						</svg>
					</div>
				</div>
			</div>

			<div class="controls__block controls__block--notify">
				<h2 class="controls__header">Notification</h2>
				<div class="controls__items">

					<div class="notification notification--alert">Войти можно через 30 сек.</div>
					<div class="notification notification--success notification--full-width">Войти можно через 30 сек.</div>

				</div>
			</div>

			<div class="controls__block controls__block--forms">
				<h2 class="controls__header">Forms</h2>
				<div class="controls__items">

					<div class="form modal-form">
						<a class="close form__close"></a>
						<div class="form__header">Забыли пароль?
							<div class="form__subheader">Заполните данные, ссылка на смену пароля придет Вам на почту</div>
						</div>
						<form action="" method="post" class="form__form">
							<input type="text" name="login" placeholder="Логин" class="input-text form__input-text">
							<input type="text" name="name" placeholder="Название организации"
								   class="input-text form__input-text">
							<button class="button form__button">Отправить</button>
						</form>
					</div>

				</div>
			</div>

			<div class="controls__block controls__block--icons">
				<h2 class="controls__header">Icons</h2>
				<div class="controls__items">

					<div class="icon__list">
						<svg class="icon icon--email">
							<use xlink:href="img/public/icons-pack.svg#email"></use>
						</svg>
						<svg class="icon icon--phone">
							<use xlink:href="img/public/icons-pack.svg#phone"></use>
						</svg>
						<svg class="icon icon--add">
							<use xlink:href="img/public/icons-pack.svg#add"></use>
						</svg>
						<svg class="icon icon--copy">
							<use xlink:href="img/public/icons-pack.svg#copy"></use>
						</svg>
						<svg class="icon icon--attention">
							<use xlink:href="img/public/icons-pack.svg#attention"></use>
						</svg>
						<svg class="icon icon--trash">
							<use xlink:href="img/public/icons-pack.svg#trash"></use>
						</svg>
						<svg class="icon icon--layers">
							<use xlink:href="img/public/icons-pack.svg#layers"></use>
						</svg>
						<svg class="icon icon--filter">
							<use xlink:href="img/public/icons-pack.svg#filter"></use>
						</svg>
						<svg class="icon icon--zoom">
							<use xlink:href="img/public/icons-pack.svg#zoom"></use>
						</svg>
						<svg class="icon icon--menu">
							<use xlink:href="img/public/icons-pack.svg#menu"></use>
						</svg>



						<svg class="icon icon--close-round">
							<use xlink:href="img/public/icons-pack.svg#close-round"></use>
						</svg>
						<svg class="icon icon--check-round">
						<use xlink:href="img/public/icons-pack.svg#check-round"></use>
						</svg>
					</div>

					<div class="icon__list">
						<svg class="icon icon--stop">
							<use xlink:href="img/public/icons-pack.svg#stop"></use>
						</svg>
					</div>


					<div class="icon__list">
						<svg class="icon icon--soc icon--fb">
							<use xlink:href="img/public/icons-pack.svg#fb"></use>
						</svg>
						<svg class="icon icon--soc icon--vk">
							<use xlink:href="img/public/icons-pack.svg#vk"></use>
						</svg>
						<svg class="icon icon--soc icon--you">
							<use xlink:href="img/public/icons-pack.svg#you"></use>
						</svg>
					</div>

					<div class="text-label">Акция</div>

					<div class="text-label--with-arrow">Блюдо дня</div>

				</div>
			</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'library',
}
</script>