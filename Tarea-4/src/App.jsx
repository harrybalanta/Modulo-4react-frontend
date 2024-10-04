
import './App.css'
import CharacterCard from './components/CharacterCard/CharacterCard'
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard'



function App() {

  return (
    <div>
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={3}/>
      <RickAndMortyCharacterCard id={10}/>
      
    </div>
    
    
  )
 
  
}

export default App
