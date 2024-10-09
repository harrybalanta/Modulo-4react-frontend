import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './CharacterCard/CharacterCard';

function App() {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    const charactersList = async () => {
      const url = "https://rickandmortyapi.com/api/character/?page=1";

      try {
        const res = await fetch(url);
        const data = await res.json();
        const dataapi = data.results;

        setCharactersList(dataapi);
        console.log(data.results, "data <----");
      } catch (error) {
        console.error(error, "Error en el fetch");
      }
    };
    charactersList();
  }, []);

  return (
    <div className="character-grid">
      {charactersList.map((item) => (
        <CharacterCard
          key={item.id}
          nombre={item.name}
          imagen={item.image}
          gender={item.gender}
          status={item.status}
        />
      ))}
      <div className="paginacion">
        <button>{"<<"}</button>
        <button>{">>"}</button>
      </div>
    </div>
  );
}

export default App;
