import React from 'react';
import './PopupWidthForm.css';

function PopupWidthForm(props) {
  return (
    <>
    {/* test */}
    <div className={`popup popup_type_${props.name} popup_delete`}>
        <div className="popup__overlay"></div>
        <div className="popup__container popup__container_form popup__container_form-edit">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">{props.title}</h3>
          <form action="#" className="form" name={props.name}>
            <label className="form__label">
              <input
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
            <button type="submit" className="form__submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWidthForm;

// {/* <!-- popup Edit Avatar --> */}
// <div className="popup popup_type_edit-avatar popup_delete">
// <div className="popup__overlay"></div>
// <div className="popup__container popup__container_form popup__container_form-edit-avatar">
//   <button type="button" className="popup__close-icon"></button>
//   <h3 className="popup__title">Обновить аватар</h3>
//   <form action="#" className="form">
//     <label className="form__label">
//       <input
//         type="url"
//         name="form-avatar"
//         id="description-input-avatar"
//         className="form__input form__input_url-avatar"
//         placeholder="Ссылка на картинку"
//         required
//       />
//       <span
//         id="description-input-avatar-error"
//         className="form__input-error form__input-error_avatar"
//       >
//         Необходимо заполнить данное поле
//       </span>
//     </label>
//     <button type="submit" className="form__submit" disabled>
//       Сохранить
//     </button>
//   </form>
// </div>
// </div>

// {/* <!-- popup Edit --> */}
// <div className="popup popup_type_edit-profile popup_delete">
// <div className="popup__overlay"></div>
// <div className="popup__container popup__container_form popup__container_form-edit">
//   <button type="button" className="popup__close-icon"></button>
//   <h3 className="popup__title">Редактировать профиль</h3>
//   <form action="#" className="form">
//     <label className="form__label">
//       <input
//         type="text"
//         name="form-title"
//         id="title-input"
//         className="form__input form__input_name"
//         placeholder="Имя"
//         required
//       />
//       <span
//         id="title-input-error"
//         className="form__input-error form__input-error_name"
//       >
//         Необходимо заполнить данное поле
//       </span>
//     </label>
//     <label className="form__label">
//       <input
//         type="text"
//         name="form-subtitle"
//         id="subtitle-input"
//         className="form__input form__input_job"
//         placeholder="О себе"
//         required
//       />
//       <span
//         id="subtitle-input-error"
//         className="form__input-error form__input-error_job"
//       >
//         Необходимо заполнить данное поле
//       </span>
//     </label>
//     <button type="submit" className="form__submit">
//       Сохранить
//     </button>
//   </form>
// </div>
// </div>

// {/* <!-- popup Add --> */}
// <div className="popup popup_type_add-cards popup_delete">
// <div className="popup__overlay"></div>
// <div className="popup__container popup__container_form popup__container_form-add">
//   <button type="button" className="popup__close-icon"></button>
//   <h3 className="popup__title">Новое место</h3>
//   <form action="#" className="form">
//     <label className="form__label">
//       <input
//         type="text"
//         name="form-title"
//         id="name-input"
//         className="form__input form__input_place"
//         placeholder="Название"
//         required
//       />
//       <span
//         id="name-input-error"
//         className="form__input-error form__input-error_name"
//       >
//         Необходимо заполнить данное поле
//       </span>
//     </label>
//     <label className="form__label">
//       <input
//         type="url"
//         name="form-subtitle"
//         id="description-input"
//         className="form__input form__input_url"
//         placeholder="Ссылка на картинку"
//         required
//       />
//       <span
//         id="description-input-error"
//         className="form__input-error form__input-error_job"
//       >
//         Необходимо заполнить данное поле
//       </span>
//     </label>
//     <button type="submit" className="form__submit " disabled>
//       Создать
//     </button>
//   </form>
// </div>
// </div>

// {/* <!-- popup img --> */}
// <div className="popup popup_type_img popup_delete">
// <div className="popup__overlay"></div>
// <div className="popup__container-img">
//   <div className="popup__wrapper">
//     <figure className="popup__figure">
//       <button type="button" className="popup__close-icon"></button>
//       <img className="popup__img" src="#" alt="шаблон" />
//     </figure>
//     <figcaption className="popup__figcaption">
//       <h2 className="popup__title-img"></h2>
//     </figcaption>
//   </div>
// </div>
// </div>