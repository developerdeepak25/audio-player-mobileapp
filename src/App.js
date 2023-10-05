import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Logic from './Logic'
import Home from './Home'

const App = () => {
  return (
    <Routes>
      <Route path='/logic' element={<Logic/>}></Route>
      <Route path='/' element={<Home/>}></Route>

    </Routes>
  )
}

export default App
