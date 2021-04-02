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

  // console.log(currentUser)

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
            id: item._id,
            owner: item.owner
          };
        });
        setCards(cards);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(isLoading));
  }, []);

  function handleCardLike(card) {
    //console.log(card) // данные карточки на которую кликнул
    //console.log(card.likes);

    // card.likes.forEach(item => {
    //   console.log(item)
    // })

    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item => {
      console.log(item)
      return item => item._id === currentUser._id
    });

    // console.log(isLiked) // true или false


    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .putLikeCard(card._id, !isLiked) /* card._id - я уже передал значения карточки */
      .then((newCard) => {
        console.log('newCard: ', newCard);
        setCards(state => {
          console.log('state: ', state)
          return state.map((c) => {
            console.log('c: ', c);
            return c._id === card._id ? newCard : c;
          });
        });
      })
      .catch((err) => console.log(err));
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
              ></div>

              <div
                className="profile__overlay"
                onClick={props.onEditAvatar}
              ></div>
            </div>

            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button
                  type="submit"
                  onClick={props.onEditProfile}
                  className="profile__edit-button"
                ></button>
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="submit"
            className="profile__add"
            onClick={props.onAddPlace}
          ></button>
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
                  card={item}
                  key={item.id}
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