import React from 'react';

function ImagePopup(props) {
  return (
    <>
      <div className={`popup popup_type_img popup_delete ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__overlay"></div>
        <div className="popup__container-img">
          <div className="popup__wrapper">
            <figure className="popup__figure">
              <button onClick={props.closeAllPopups} type="button" className="popup__close-icon"></button>
              <img className="popup__img" src={props.src} alt="шаблон" />
            </figure>
            <figcaption className="popup__figcaption">
              <h2 className="popup__title-img"></h2>
            </figcaption>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
