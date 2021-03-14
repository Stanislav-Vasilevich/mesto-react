import React from 'react';

function Card(props) {
  console.log(props.card);

  function handleClick() {
    // console.log(props.onCardClick);
    // props.onCardClick(props.card);
  }

  return (
    <>
      <div className="grid__elements">
        <li className="element">
          <figure className="element__figure">
            <div
              onClick={handleClick}
              className="element__img"
              style={{ backgroundImage: `url(${props.src})` }}
              alt={props.title}
            />
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
      </div>
    </>
  );
}

export default Card;
