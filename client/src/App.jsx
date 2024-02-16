import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cards from './Components/Cards'
import Listings from './Components/Listings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     {/* <Cards/> */}
     <Listings />

    </>
  )
}

export default App
