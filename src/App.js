import React from 'react';
import logo from './images/header/logo.svg';
import './index.css';

function App() {
  return (
    <div class="page">

      <header className="header">
        <img className="logo" src={logo} alt="Логотип" />
      </header>

      <main className="main">

        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              {/* <img src="<%=require('./images/profile/__avatar/whale.jpg')%>" className="profile__avatar-img"
        alt="Whale - lord of the ocean"> */}
              <div className="profile__overlay">
              </div>
            </div>
            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">Whale</h1>
                <button type="submit" className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle">Lord of the ocean</p>
            </div>
          </div>
          <button type="submit" className="profile__add"></button>
        </section>

        <section className="grid">
          <ul className="elements">
            {/* <!-- block for template Cards --> */}
          </ul>
        </section>

      </main>

      <footer className="footer">
        <p className="footer__copyright">&#169; 2020 Mesto Russia</p>
      </footer>


      <div className="popup popup_type_edit-profile popup_delete">
        <div className="popup__overlay"></div>
        <div className="popup__container popup__container_form popup__container_form-edit">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form action="#" className="form" novalidate>
            <label className="form__label">
              <input type="text" name="form-title" id="title-input" className="form__input form__input_name" value=""
          placeholder="Имя" minlength="2" maxlength="40" autocomplete="off" required />
              <span id="title-input-error" className="form__input-error form__input-error_name">Необходимо заполнить данное
          поле</span>
            </label>
            <label className="form__label">
              <input type="text" name="form-subtitle" id="subtitle-input" className="form__input form__input_job" value=""
          placeholder="О себе" minlength="2" maxlength="200" autocomplete="off" required />
              <span id="subtitle-input-error" className="form__input-error form__input-error_job">Необходимо заполнить данное
          поле</span>
            </label>
            <button type="submit" className="form__submit">Сохранить</button>
          </form>
        </div>
      </div>

      {/* <!-- popup Edit Avatar --> */}
      <div className="popup popup_type_edit-avatar popup_delete">
        <div className="popup__overlay"></div>
        <div className="popup__container popup__container_form popup__container_form-edit-avatar">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form action="#" className="form" novalidate>
            <label className="form__label">
              <input type="url" name="form-avatar" id="description-input-avatar" className="form__input form__input_url-avatar" value=""
          placeholder="Ссылка на картинку" autocomplete="off" required />
              <span id="description-input-avatar-error" className="form__input-error form__input-error_avatar">Необходимо заполнить
          данное поле</span>
            </label>
            <button type="submit" className="form__submit" disabled>Сохранить</button>
          </form>
        </div>
      </div>

      {/* <!-- popup Add --> */}
      <div className="popup popup_type_add-cards popup_delete">
        <div className="popup__overlay"></div>
        <div className="popup__container popup__container_form popup__container_form-add">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">Новое место</h3>
          <form action="#" className="form" novalidate>
            <label className="form__label">
              <input type="text" name="form-title" id="name-input" className="form__input form__input_place" value=""
          placeholder="Название" minlength="1" maxlength="30" autocomplete="off" required />
              <span id="name-input-error" className="form__input-error form__input-error_name">Необходимо заполнить данное
          поле</span>
            </label>
            <label className="form__label">
              <input type="url" name="form-subtitle" id="description-input" className="form__input form__input_url" value=""
          placeholder="Ссылка на картинку" autocomplete="off" required />
              <span id="description-input-error" className="form__input-error form__input-error_job">Необходимо заполнить
          данное поле</span>
            </label>
            <button type="submit" className="form__submit " disabled>Создать</button>
          </form>
        </div>
      </div>

      {/* <!-- popup img --> */}
      <div className="popup popup_type_img popup_delete">
        <div className="popup__overlay"></div>
        <div className="popup__container-img">
          <div className="popup__wrapper">
            <figure className="popup__figure">
              <button type="button" className="popup__close-icon"></button>
              {/* <img className="popup__img" src="#" alt="шаблон"> */}
            </figure>
            <figcaption className="popup__figcaption">
              <h2 className="popup__title-img"></h2>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
