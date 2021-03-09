import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './../index.css';

function App() {
  function handleEditAvatarClick() {
    document
      .querySelector('.popup_type_edit-avatar')
      .classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document
      .querySelector('.popup_type_edit-profile')
      .classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document
      .querySelector('.popup_type_add-cards')
      .classList.add('popup_opened');
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
