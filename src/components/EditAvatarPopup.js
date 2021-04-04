import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {useRef} from "react/cjs/react.production.min";

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState('');
  const refAvatar = React.useRef(null);

  //console.log(refAvatar)

  function handleChangeAvatar(e) {
    setAvatar(e.target.src);
  }

  function handleSubmit(e) {
    console.log('нажал на кнопку сохранить в Avatar')
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: refAvatar.current,
    });
  }

  console.log('data: ', refAvatar.current);

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
          onChange={handleChangeAvatar}
          src={avatar}
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
      <button type="submit" className="form__submit">
        Сохранить
      </button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;