import React from 'react';

function Card(props) {
  return (
    <>
      <template className="grid__elements">
        <li className="element">
          <figure className="element__figure">
            <img className="element__img" src={props.src} alt="шаблон" />
            <button type="button" className="element__button-delete"></button>
          </figure>
          <figcaption className="element__group">
            <h2 className="element__title">{props.title}</h2>
            <div className="element__like">
              <button type="button" className="element__button-like"></button>
              <div className="element__number-like">{props.like.length}</div>
            </div>
          </figcaption>
        </li>
      </template>
    </>
  );
}

export default Card;
