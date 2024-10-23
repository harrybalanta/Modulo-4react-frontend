import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (query) {
      navigate(`/characters?name=${query}`); // Navega a la ruta con el query
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="search"
        id="default-search"
        className="block p-2 border border-gray-300 rounded-lg"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Captura el valor del input
        required
      />
      <button
        type="submit"
        className="ml-2 bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-800"
      >
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
