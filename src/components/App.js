import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import Footer from './Footer.js';
import './../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditProfilePopupOpen}
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
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isAddPlacePopupOpen}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="add-cards"
        title="Новое место"
        isOpen={isEditAvatarPopupOpen}
      >
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
      </PopupWithForm>

      <PopupWithForm name="delete-img" title="Вы уверены?">
        <button type="submit" class="submit submit-delete-card">
          Да
        </button>
      </PopupWithForm>
    </>
  );
}

export default App;
