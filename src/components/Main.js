import React from 'react';
import {useState, useEffect} from 'react';
import Card from './Card.js';
import api from '../utils/api.js';
import Spinner from './Spinner.js';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);

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

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <div
                className="profile__avatar-img"
                style={{backgroundImage: `url(${currentUser.avatar})`}}
              />
              <div
                className="profile__overlay"
                onClick={props.onEditAvatar}
              />
            </div>

            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button
                  type="submit"
                  onClick={props.onEditProfile}
                  className="profile__edit-button"
                />
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="submit"
            className="profile__add"
            onClick={props.onAddPlace}
          />
        </section>

        {isLoading ? (
          <Spinner/>
        ) : (
          <section className="grid">
            <ul className="elements">
              {cards.map((item) => (
                <Card
                  onCardClick={props.onCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  card={item}
                  key={item._id}
                  src={item.link}
                  title={item.name}
                  like={item.likes}
                  owner={item.owner}
                />
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}

export default Main;