import React, { useState } from 'react';
import './FormtComponent.css';
import Home from '../Page/Home';

const FormtComponent = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    console.log(name, "name", password, "password");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || password === '') {
            setError(true);
        } else {
            setError(false);
            props.setUser([name]);
        }
    };

    return (
        <div className='Formt'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={e => setName(e.target.value)} 
                    type="text" 
                    value={name} 
                    placeholder='nombre usuario' 
                />
                <input 
                    type="password" 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder='contrasena' 
                    value={password} 
                />
                <button type="submit">Iniciar Sesion</button>
                {error && <p className='error'>campos obligatorios, ingrese nombre de usuario y contraseña</p>}
            </form>
        </div>
    );
};

export default FormtComponent;
