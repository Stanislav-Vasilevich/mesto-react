function ImagePopup(props) {
  return (
    <div className={`popup popup_type_img popup_delete ${props.card.link ? 'popup_opened' : ''}`}>
      <div className="popup__overlay"></div>
      <div className="popup__container-img">
        <div className="popup__wrapper">
          <figure className="popup__figure">
            <button onClick={props.onClose} type="button" className="popup__close-icon"></button>
            <img className="popup__img" src ={props.card ? props.card.link : ''} alt={props.card.name} />
          </figure>
          <figcaption className="popup__figcaption">
            <h2 className="popup__title-img">{props.card.name}</h2>
          </figcaption>
        </div>
      </div>
    </div>
  )
}

export default ImagePopup;