import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [about, setAbout] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText={'Сохранить'}
    >
      <label className="form__label">
        <input
          onChange={handleChangeName}
          value={name}
          type="text"
          name="form-title"
          id="title-input"
          className="form__input form__input_name"
          placeholder="Имя"
          required
        />
        <span
          id="title-input-error"
          className="form__input-error form__input-error_name"
        >
            Необходимо заполнить данное поле
          </span>
      </label>
      <label className="form__label">
        <input
          onChange={handleChangeAbout}
          value={about}
          type="text"
          name="form-subtitle"
          id="subtitle-input"
          className="form__input form__input_job"
          placeholder="О себе"
          required
        />
        <span
          id="subtitle-input-error"
          className="form__input-error form__input-error_job"
        >
            Необходимо заполнить данное поле
          </span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;