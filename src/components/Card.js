import {CurrentUserContext} from "../contexts/CurrentUserContext";
import React from "react";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const card = props.card;
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `element__button-delete ${!isOwn ? 'element__button-delete_inactive' : ''}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id); // true или false

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `element__button-like ${isLiked ? 'element__button-like_focus' : ''}`
  );

  function handleClick() {
    props.onCardClick(card);
  }

  function handleLikeClick() {
    props.onCardLike(card);
  }

  return (
    <>
      <div className="grid__elements">
        <li className="element">
          <figure className="element__figure">
            <div
              onClick={handleClick}
              className="element__img"
              style={{backgroundImage: `url(${props.src})`}}
              alt={props.title}
            />
            <button type="button" className={cardDeleteButtonClassName}></button>
          </figure>
          <figcaption className="element__group">
            <h2 className="element__title">{props.title}</h2>
            <div className="element__like">
              <button onClick={handleLikeClick} type="button" className={cardLikeButtonClassName}></button>
              <div className="element__number-like">{props.like.length}</div>
            </div>
          </figcaption>
        </li>
      </div>
    </>
  );
}

export default Card;
