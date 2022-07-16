import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Details from "./components/Details/Details.jsx";
import Socials from "./components/Social/Socials.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <Header />
          <Details />
          <Socials />
      </div>
    </div>
  )
}

export default App
