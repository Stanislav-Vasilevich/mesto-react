import {CurrentUserContext} from "../contexts/CurrentUserContext";
import React from "react";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    console.log(currentUser);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `...`;

    function handleClick() {
        props.onCardClick(props.card);
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
                        <button type="button" className="element__button-delete"></button>
                    </figure>
                    <figcaption className="element__group">
                        <h2 className="element__title">{props.title}</h2>
                        <div className="element__like">
                            <button type="button" className="element__button-like"></button>
                            <div className="element__number-like">{props.like.length}</div>
                        </div>
                    </figcaption>
                </li>
            </div>
        </>
    );
}

export default Card;
