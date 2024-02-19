import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cards from './Components/Cards'
import Listings from './Components/Listings'
import Addpost from './Components/Addpost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar/>
     
    <Routes>
    <Route element={<Home/>}  path="/" />
    <Route element={<Listings/>}  path="/listings" />
    <Route path='/post' element={<Addpost/>}/>
    
     </Routes>

    </>
  )
}

export default App
