import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const refInput = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: refInput.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText={'Сохранить'}
    >
      <label className="form__label">
        <input
          ref={refInput}
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
    </PopupWithForm>
  )
}

export default EditAvatarPopup;