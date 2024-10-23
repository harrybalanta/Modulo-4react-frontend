import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from './buscador'; // Importa el componente Buscador

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '15px' }}>
          <Link to="/characters">Personajes</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/episodes">Episodios</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/buscador"></Link>
        </li>
        <li>
          <Buscador /> {/* Agrega el componente Buscador aquí */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
