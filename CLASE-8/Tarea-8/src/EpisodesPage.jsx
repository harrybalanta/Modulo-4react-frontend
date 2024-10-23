import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';

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

export default EpisodesPage;

