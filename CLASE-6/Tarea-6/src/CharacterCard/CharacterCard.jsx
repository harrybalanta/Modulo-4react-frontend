import React from 'react';

const CharacterCard = (props) => {
  return (
    <div className="character-card"> 
      <h1>{props.nombre}</h1>
      <img src={props.imagen} alt={props.nombre} />
      <h2>{props.gender}</h2>
      <h2>{props.status}</h2>
    </div>
  );
};

export default CharacterCard;
