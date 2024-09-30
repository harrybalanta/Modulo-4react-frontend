import './App.css'
import Details from './components/Details'
import Imagen from './components/Imagen'
import Titulo from './components/Titulo'

function App() {

  return (
    <div>
      <Titulo Titulo="Escudo America de Cali"/>
      <Imagen Ruta="./america.jpg"></Imagen>
      <Details Genero="Masculino" Estado="15 títulos del fútbol colombiano"></Details>
    </div>
  )
}

export default App
