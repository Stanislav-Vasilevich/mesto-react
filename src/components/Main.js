import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card.js';
import api from '../utils/api.js';
import Spinner from './Spinner.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const cards = props.cards;
  const isLoading = props.isLoading;
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <div
                className="profile__avatar-img"
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
              />
              <div className="profile__overlay" onClick={props.onEditAvatar} />
            </div>

            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">{currentUser.name}</h1>
                {/* Кнопка октрытия popup редактирования профиля */}
                <button
                  onClick={props.onEditProfile}
                  className="profile__edit-button"
                />
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          {/* Кнопка открытия popup для добавления карточки */}
          <button
            type="submit"
            className="profile__add"
            onClick={props.onAddPlace}
          />
        </section>

        {isLoading ? (
          <Spinner />
        ) : (
          <section className="grid">
            <ul className="elements">
              {cards.map((item) => (
                <Card
                  onCardClick={props.onCardClick}
                  onCardLike={props.handleCardLike}
                  onCardDelete={props.handleCardDelete}
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
