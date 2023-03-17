import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Asmaul from './Pages/Asmaul'
import HomePage from './Pages/HomePage'
import Profile from './Pages/Profile'
import TimePrayer from './Pages/TimePrayer'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' exact element={<HomePage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/timeprayer' element={<TimePrayer/>}/>
      <Route path='/asmaul' element={<Asmaul/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
