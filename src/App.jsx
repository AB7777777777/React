import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import StateBasics from './Components/StateBasics'
import Count from './Components/Count'
import Name from './Components/Name'
import Api from './Components/Api'
import Pokemon from './Components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome React</h1>
      
   
      <Navbar />
      <Routes>
        <Route path='Signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='State' element={<StateBasics />} />
        <Route path='Count' element={<Count />} />
        <Route path='Name' element={<Name />} />
        <Route path='Api' element={<Api />} />
        <Route path='Pokemon' element={<Pokemon/>}/>
      </Routes>
    </>
  )
}

export default App
