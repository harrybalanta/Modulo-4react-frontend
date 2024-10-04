
import { useState } from 'react'
import './App.css'
import FormtComponent from './Formt/FormtComponent'
import Home from './Page/Home'

function App() {

  const [user, setUser] = useState([])
  return (
    <div>
      {
      !user.length > 0
        ? <FormtComponent setUser={setUser}/>
        : <Home user={user} setUser={setUser}/>
      }
        </div>
  )
}

export default App
