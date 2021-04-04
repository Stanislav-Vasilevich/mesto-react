import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {useRef} from "react/cjs/react.production.min";

function EditAvatarPopup(props) {

  const refAvatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      //avatar: /* Значение инпута, полученное с помощью рефа */,
      // avatar: avatar
    });
  }

  console.log('refAvatar: ', refAvatar.current);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        <input
          ref={refAvatar}
          type="url"
          name="form-avatar"
          id="description-input-avatar"
          className="form__input form__input_url-avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span
          id="description-input-avatar-error"
          className="form__input-error form__input-error_avatar"
        >
            Необходимо заполнить данное поле
          </span>
      </label>
      <button type="submit" className="form__submit" disabled>
        Сохранить
      </button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;