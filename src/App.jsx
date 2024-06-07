import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Destinations from './pages/Destinations/Destinations'
import Trips from './pages/Trip-Types/Trips'
import Contact from './pages/Contact/Contact'
import Notfound from './pages/NotFound/Notfound'
import Header from './components/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destinations' element={<Destinations/>}/>
      <Route path='/trips' element={<Trips/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
