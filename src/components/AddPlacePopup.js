function AddPlacePopup() {
  return (
    <PopupWithForm
      name="add-cards"
      title="Новое место"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <label className="form__label">
        <input
          type="text"
          name="form-title"
          id="name-input"
          className="form__input form__input_place"
          placeholder="Название"
          required
        />
        <span
          id="name-input-error"
          className="form__input-error form__input-error_name"
        >
          Необходимо заполнить данное поле
        </span>
      </label>
      <label className="form__label">
        <input
          type="url"
          name="form-subtitle"
          id="description-input"
          className="form__input form__input_url"
          placeholder="Ссылка на картинку"
          required
        />
        <span
          id="description-input-error"
          className="form__input-error form__input-error_job"
        >
          Необходимо заполнить данное поле
        </span>
      </label>
      <button type="submit" className="form__submit " disabled>
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
