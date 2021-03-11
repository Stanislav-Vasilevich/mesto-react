import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import avatar from './../images/profile/__avatar/whale.jpg';

function Main(props) {
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

              <div
                className="profile__overlay"
                onClick={props.onEditAvatar}
              ></div>
            </div>

            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">Whale</h1>
                <button
                  type="submit"
                  onClick={props.onEditProfile}
                  className="profile__edit-button"
                ></button>
              </div>
              <p className="profile__subtitle">Lord of the ocean</p>
            </div>
          </div>
          <button
            type="submit"
            className="profile__add"
            onClick={props.onAddPlace}
          ></button>
        </section>

        <section className="grid">
          <ul className="elements">{/* block for template Cards */}</ul>
        </section>
      </main>
    </>
  );
}

export default Main;
