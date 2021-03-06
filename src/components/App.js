import React from 'react';
import {useState, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Footer from './Footer.js';
import './../index.css';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = React.useState({
    avatar: '../images/spinner/loader.gif',
    name: 'Загрузка',
    about: 'Загрузка',
  });

  // получаем данные аватара и профиля с сервера
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // получаем массив объектов карточек с сервера
  useEffect(() => {
    setIsLoading(!isLoading);
    api
      .getDataCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  // Отправка данных для изменения данных профиля
  function handleUpdateUser({name, about}) {
    setIsLoading(!isLoading);
    api
      .patchUserInfo({
        name: name,
        about: about,
      })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  // Отправка данных для изменения аватара
  function handleUpdateAvatar(avatar) {
    setIsLoading(!isLoading);
    api
      .patchUserAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  // отправляем новую карточку на сервер
  function handleAddPlaceSubmit({name, link}) {
    setIsLoading(!isLoading);
    api
      .postDataCard({
        name: name,
        link: link
      })
      .then((data) => {
        setIsLoading(!isLoading);
        const newCard = data;
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('Ошибка отправки данных на сервер');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  // отправка данных для лайка карточки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));
  }

  // отправка данных для удаления карточки
  function handleCardDelete(card) {
    setIsLoading(!isLoading);
    api
      .deleteCard(card._id)
      .then((res) => {
        setIsLoading(!isLoading);
        const newCard = cards.filter((item) => item._id !== card._id);
        setCards(newCard);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* шапка сайта */}
      <Header/>

      {/* главный блок сайта */}
      <Main
        isLoading={isLoading}
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
        cards={cards}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
      />

      {/* подвал сайта */}
      <Footer/>

      {/* попап редактирования аватара */}
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      {/* попап с формой редактирования профиля */}
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      {/* попап с формой добавления карточки */}
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      {/* попап подтверждения удаления карточки */}
      <PopupWithForm name="delete-img" title="Вы уверены?">
        <button type="submit" className="submit submit-delete-card">
          Да
        </button>
      </PopupWithForm>

      {/* попап с картинкой и заголовком карточки */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
