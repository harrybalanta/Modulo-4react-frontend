import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import CharacterPage from './Pages/CharacterPage';
import EpisodesPage from './Pages/EpisodesPage';
import Navbar from './components/Navbar/Navbar';
import PaginaNotFound from './Pages/PaginaNotFound';




function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<PaginaNotFound/>} />
          <Route path='/CharacterPage' element={<CharacterPage/>}></Route>
          <Route path='/EpisodesPage' element={<EpisodesPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    
  )
}



export default App
