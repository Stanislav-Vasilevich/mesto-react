import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState('');
<<<<<<< HEAD
  const refInput = React.useRef();
=======
  const refAvatar = React.useRef();
>>>>>>> f97a02c5301c2792364aeacbb1713679b454bf09

  function handleChangeAvatar(event) {
    setAvatar(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
<<<<<<< HEAD
      avatar: refInput.current.value,
    });
  }

=======
      // avatar: refAvatar.current,
    });
  }

  console.log(refAvatar.current);

>>>>>>> f97a02c5301c2792364aeacbb1713679b454bf09
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
          ref={refInput}
          onChange={handleChangeAvatar}
          value={avatar}
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