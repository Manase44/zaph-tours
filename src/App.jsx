import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destinations' element={<Home/>}/>
      <Route path='/trips' element={<Home/>}/>
      <Route path='/contact' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
