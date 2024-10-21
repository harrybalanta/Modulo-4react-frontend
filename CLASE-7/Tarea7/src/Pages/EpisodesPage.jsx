import React, { useEffect, useState } from 'react';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then(response => response.json())
      .then(data => setEpisodes(data.results));
  }, [page]);

  return (
    <div>
      <h1>Listado de Episodios</h1>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>
            {episode.name} (Aired: {episode.air_date})
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={() => setPage(prev => prev + 1)}>
        Siguiente
      </button>
    </div>
  );
}

export default EpisodesPage;
