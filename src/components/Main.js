import React from 'react';
import PopupWidthForm from './PopupWithForm.js';
import avatar from './../images/profile/__avatar/whale.jpg';
import './Main.css';

function Main() {
  
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-cards').classList.add('popup_opened');
  }

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar"> 
              <img
                className="profile__avatar-img"
                src={avatar}
                alt="Whale - lord of the ocean"
              />
              <div className="profile__overlay" onClick={handleEditAvatarClick}></div>
            </div>
            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">Whale</h1>
                <button type="submit" onClick={handleEditProfileClick} className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle">Lord of the ocean</p>
            </div>
          </div>
          <button type="submit" className="profile__add" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="grid">
          <ul className="elements">{/* block for template Cards */}</ul>
        </section>
      </main>

      <PopupWidthForm name="edit-avatar" title="Обновить аватар" children="" />
      <PopupWidthForm name="edit-profile" title="Редактировать профиль" children="" />
      <PopupWidthForm name="add-cards" title="Новое место" children="" />
      <PopupWidthForm name="img" title="Вы уверены?" children="" />
    </>
  );
}

export default Main;
