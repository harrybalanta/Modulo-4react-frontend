import React from 'react';
import './Home.css';
const Home = (props) => {

    const handleClick = () =>{
        props.setUser([])
        }
  return (
    <div>
        <h1>Home</h1>
        <h4>Nombre: {props.user}</h4>
        <h4>Password: {props.Password}</h4>
        <button onClick={handleClick}>
            Salir
        </button>
    </div>
  )
}

export default Home 