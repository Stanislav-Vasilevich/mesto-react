import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangePlace(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name,
      link
    })

    setName('');
    setLink('');
  }
  
  return (
    <PopupWithForm
      name="add-cards"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleAddPlaceClick={props.isAddPlacePopupOpen}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        <input
          onChange={handleChangePlace}
          value={name}
          type="text"
          name="form-title"
          id="name-input"
          className="form__input form__input_place"
          placeholder="Название"
          required
        />
        <span
          id="name-input-error"
          className="form__input-error form__input-error_name"
        >
          Необходимо заполнить данное поле
        </span>
      </label>
      <label className="form__label">
        <input
          onChange={handleChangeLink}
          value={link}
          type="url"
          name="form-subtitle"
          id="description-input"
          className="form__input form__input_url"
          placeholder="Ссылка на картинку"
          required
        />
        <span
          id="description-input-error"
          className="form__input-error form__input-error_job"
        >
          Необходимо заполнить данное поле
        </span>
      </label>
      <button type="submit" className="form__submit">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
