import {CurrentUserContext} from "../contexts/CurrentUserContext";
import React from "react";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    // console.log(props.card); // данные карточки(id, likes, link, name, owner)
    //console.log(currentUser._id); // мой id
    // console.log(props.card.id); //


    // Определяем, являемся ли мы владельцем текущей карточки
    const card = props.card;
    // console.log(card)
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
      `${isOwn ? '' : 'element__button-delete'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `...`;

    function handleClick() {
        props.onCardClick(card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
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
                            <button onClick={handleLikeClick} type="button" className="element__button-like"></button>
                            <div className="element__number-like">{props.like.length}</div>
                        </div>
                    </figcaption>
                </li>
            </div>
        </>
    );
}

export default Card;
