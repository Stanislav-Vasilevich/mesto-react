import React from 'react';
import avatar from './../images/profile/__avatar/whale.jpg';
import './Main.css';

function Main() {
  return (
    <main className="main">

        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <img className="profile__avatar-img" src={avatar} alt="Whale - lord of the ocean" />
              <div className="profile__overlay">
              </div>
            </div>
            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">Whale</h1>
                <button type="submit" className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle">Lord of the ocean</p>
            </div>
          </div>
          <button type="submit" className="profile__add"></button>
        </section>

        <section className="grid">
          <ul className="elements">
            {/* block for template Cards */}
          </ul>
        </section>

      </main>
  );
}

export default Main;