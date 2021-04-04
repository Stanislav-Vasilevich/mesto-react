import React from 'react';
import {useState, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Footer from './Footer.js';
import './../index.css';
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    console.log('открыть popup edit')
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleUpdateUser({name, about}) {
    api.patchUserInfo({
      name: name,
      about: about
    })
      .then(res => {
        setCurrentUser({name, about});
      })
      .finally(() => {
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

      <PopupWithForm
        name="add-cards"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        <button type="submit" className="submit submit-delete-card">
          Да
        </button>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
