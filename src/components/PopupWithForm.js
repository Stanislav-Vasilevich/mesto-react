function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} popup_delete ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay"></div>
      <div className={`popup__container popup__container_form popup__container_${props.name}`}>
        <button onClick={props.onClose} type="button" className="popup__close-icon"></button>
        <h3 className="popup__title">{props.title}</h3>
        <form action="#" className="form" id={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className="form__submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;