import React from 'react';
import './PopupWidthForm.css';

function PopupWidthForm(props) {
  return (
    <>
      <div className={`popup popup_type_${props.name} popup_delete`}>
        <div className="popup__overlay"></div>
        <div className={`popup__container popup__container_form popup__container_${props.form}`}>
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">{props.title}</h3>
          <form action="#" className="form" name={props.name}>
            {props.children}
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWidthForm;

// {
//   /* <!-- popup delete img --> */ пока не удаляю, нужно проверить правильно ли открывается попап удаления картинки
// }
// <div class="popup popup_type_delete-img popup_delete">
//   <div class="popup__overlay"></div>
//   <div class="popup__container popup__container_delete-img popup__container_form-add">
//     <button type="button" class="popup__close-icon"></button>
//     <h3 class="popup__title">Вы уверены?</h3>
//     <button type="submit" class="submit submit-delete-card">
//       Да
//     </button>
//   </div>
// </div>;
