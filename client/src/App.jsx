import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cards from './Components/Cards'
import Listings from './Components/Listings'
import Addpost from './Components/Addpost'
import Update from './Components/Update'
import Signup from './Components/signup'
import Signin from './Components/Signin'
import Filter from './Components/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar/>
     
    <Routes>
    <Route element={<Home/>}  path="/" />
    <Route element={<Listings/>}  path="/listings" />
    {/* <Route path='/filter' element={<Filter/>}/> */}
    <Route path='/post' element={<Addpost/>}/>
    <Route path='/update/:id' element={<Update/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/Signin' element={<Signin/>} />

    
     </Routes>

    </>
  )
}

export default App
