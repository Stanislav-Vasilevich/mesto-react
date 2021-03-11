import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card.js';
import api from '../utils/Api.js';

function Main(props) {
  const [userName, setUserName] = useState('Whale');
  const [userDescription, setUserDescription] = useState('Lord of the ocean');
  const [userAvatar, setUserAvatar] = useState(
    'https://cdn.fishki.net/upload/post/201405/05/1266438/1_kit.jpg'
  );
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  useEffect(() => {
    api.getDataCards().then((data) => {
      // console.log(data);
      const cards = data.map((item) => {
        console.log(item);
        return {
          link: item.link,
          name: item.name,
          likes: item.likes,
          id: item._id,
        }
      })
      setCards(cards);
    })
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <div
                className="profile__avatar-img"
                style={{ backgroundImage: `url(${userAvatar})` }}
              ></div>

              <div
                className="profile__overlay"
                onClick={props.onEditAvatar}
              ></div>
            </div>

            <div className="profile__edit">
              <div className="profile__title-edit">
                <h1 className="profile__title">{userName}</h1>
                <button
                  type="submit"
                  onClick={props.onEditProfile}
                  className="profile__edit-button"
                ></button>
              </div>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button
            type="submit"
            className="profile__add"
            onClick={props.onAddPlace}
          ></button>
        </section>

        <section className="grid">
          <ul className="elements">
            {cards.map((item) => (
              <Card
                key={item.id}
                src={item.link}
                title={item.name}
                like={item.likes}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
