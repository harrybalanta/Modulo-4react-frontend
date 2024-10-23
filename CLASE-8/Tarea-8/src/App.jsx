import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import CharacterCard from './CharacterCard/CharacterCard';
import EpisodeCard from './EpisodeCard';
import Buscador from './buscador';

function CharactersPage() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setCharactersList(data.results);
      } catch (error) {
        console.error("Error en el fetch", error);
      }
    };
    fetchCharacters();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        <button onClick={handlePrevPage} disabled={currentPage === 1}>{"<<"}</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>{">>"}</button>
      </div>
    </div>
  );
}
function EpisodesPage() {
  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const url = "https://rickandmortyapi.com/api/episode";

      try {
        const res = await fetch(url);
        const data = await res.json();
        setEpisodesList(data.results);
      } catch (error) {
        console.error("Error en el fetch", error);
      }
    };
    fetchEpisodes();
  }, []);

  return (
    <div className="episode-grid">
      {episodesList.map((item) => (
        <EpisodeCard
          key={item.id}
          nombre={item.name}
          fecha={item.air_date}
          numero={item.episode}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/" element={<CharactersPage />} />
        <Route path="/buscador" element={<Buscador />} />
      </Routes>
    </Router>
  );
}

export default App;
