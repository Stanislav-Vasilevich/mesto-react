import React from 'react';
import PopupWidthForm from './PopupWithForm.js';
import avatar from './../images/profile/__avatar/whale.jpg';

function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector('.popup_type_edit-avatar')
      .classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document
      .querySelector('.popup_type_edit-profile')
      .classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document
      .querySelector('.popup_type_add-cards')
      .classList.add('popup_opened');
  }
  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <img
                className="profile__avatar-img"
                src={avatar}
                alt="Whale - lord of the ocean"
              />

              <div
                className="profile__overlay"
                // onClick={props.onEditAvatar}
                onClick={handleEditAvatarClick}
              ></div>
            </div>

            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">Whale</h1>
                <button
                  type="submit"
                  // onClick={props.onEditProfile}
                  onClick={handleEditProfileClick}
                  className="profile__edit-button"
                ></button>
              </div>
              <p className="profile__subtitle">Lord of the ocean</p>
            </div>
          </div>
          <button
            type="submit"
            className="profile__add"
            // onClick={props.onAddPlace}
            onClick={handleAddPlaceClick}
          ></button>
        </section>

        <section className="grid">
          <ul className="elements">{/* block for template Cards */}</ul>
        </section>
      </main>

      <PopupWidthForm
        name="edit-avatar"
        title="Обновить аватар"
        form="form-edit-avatar"
      >
        <label className="form__label">
          <input
            type="url"
            name="form-avatar"
            id="description-input-avatar"
            className="form__input form__input_url-avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            id="description-input-avatar-error"
            className="form__input-error form__input-error_avatar"
          >
            Необходимо заполнить данное поле
          </span>
        </label>
        <button type="submit" className="form__submit" disabled>
          Сохранить
        </button>
      </PopupWidthForm>

      <PopupWidthForm name="edit-profile" title="Редактировать профиль">
        <label className="form__label">
          <input
            type="text"
            name="form-title"
            id="title-input"
            className="form__input form__input_name"
            placeholder="Имя"
            required
          />
          <span
            id="title-input-error"
            className="form__input-error form__input-error_name"
          >
            Необходимо заполнить данное поле
          </span>
        </label>
        <label className="form__label">
          <input
            type="text"
            name="form-subtitle"
            id="subtitle-input"
            className="form__input form__input_job"
            placeholder="О себе"
            required
          />
          <span
            id="subtitle-input-error"
            className="form__input-error form__input-error_job"
          >
            Необходимо заполнить данное поле
          </span>
        </label>
        <button type="submit" className="form__submit">
          Сохранить
        </button>
      </PopupWidthForm>

      <PopupWidthForm name="add-cards" title="Новое место">
        <label className="form__label">
          <input
            type="text"
            name="form-title"
            id="name-input"
            className="form__input form__input_place"
            placeholder="Название"
            required
          />
          <span
            id="name-input-error"
            className="form__input-error form__input-error_name"
          >
            Необходимо заполнить данное поле
          </span>
        </label>
        <label className="form__label">
          <input
            type="url"
            name="form-subtitle"
            id="description-input"
            className="form__input form__input_url"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            id="description-input-error"
            className="form__input-error form__input-error_job"
          >
            Необходимо заполнить данное поле
          </span>
        </label>
        <button type="submit" className="form__submit " disabled>
          Создать
        </button>
      </PopupWidthForm>

      <PopupWidthForm 
        name="img" 
        title="Вы уверены?" 
        form="delete-img"
        >
        <button type="submit" class="submit submit-delete-card">
          Да
        </button>
      </PopupWidthForm>
    </>
  );
}

export default Main;
