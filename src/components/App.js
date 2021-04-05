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
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = React.useState({
    avatar: '../images/spinner/loader.gif',
    name: 'Загрузка',
    about: 'Загрузка'
  });

  useEffect((isLoading) => {
    setIsLoading(!isLoading);
    api
      .getDataCards()
      .then((data) => {
        const cards = data.map((item) => {
          return {
            link: item.link,
            name: item.name,
            likes: item.likes,
            _id: item._id,
            owner: item.owner
          };
        });
        setCards(cards);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(isLoading));
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    setIsLoading(!isLoading);
    api.deleteCard(card._id)
      .then(res => {
        setIsLoading(!isLoading);
        const newCard = cards.filter(item => item._id !== card._id);
        setCards(newCard);
      })
      .finally(() => setIsLoading(isLoading));
  }

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
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  // Отправка данных для изменения данных профиля
  function handleUpdateUser({name, about}) {
    api.patchUserInfo({
      name: name,
      about: about
    })
      .then(res => {
        currentUser.name = res.name;
        currentUser.about = res.about;
      })
      .finally(() => {
        closeAllPopups();
      })
  }

  // Отправка данных для изменения аватара
  function handleUpdateAvatar(avatar) {
    api.patchUserAvatar(avatar)
      .then(res => {
        currentUser.avatar = res.avatar;
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

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

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
