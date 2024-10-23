import React from 'react';

const EpisodeCard = ({ nombre, fecha, numero }) => {
  return (
    <div className="episode-card">
      <h1>{nombre}</h1>
      <h2>Número: {numero}</h2>
      <h2>Fecha de lanzamiento: {fecha}</h2>
    </div>
  );
};

export default EpisodeCard;
