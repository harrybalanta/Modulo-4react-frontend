import React, { useEffect, useState } from 'react';

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, [page]);

  return (
    <div>
      <h1>Listado de Personajes</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.name}
   
            <Link to={`/characters/${character.id}`}>Ver detalles</Link>
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

export default CharacterPage;
