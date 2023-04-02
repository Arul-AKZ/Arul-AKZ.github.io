import ReactLoading from 'react-loading';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Asmaul from './Pages/Asmaul'
import HomePage from './Pages/HomePage'
import TimePrayer from './Pages/TimePrayer'
import Contact from './Pages/Contact';
import About from './Pages/About';
import Duas from './Pages/Duas';
import Favorite from './Pages/Favorite';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Page from './Pages/Page';

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (
    <>
    {loading ? (
      <div className='flex h-screen justify-center items-center bg-loading '>
        <ReactLoading type="spin" color="white" height={100} width={100} />
        <h1 className='mx-5 text-2xl text-white font-extrabold'>Wait a Second...</h1>
      </div>
    ) : (
      <BrowserRouter>
        <Routes>
          {/* header */}
          <Route path='/' exact element={<HomePage />} />
          <Route path='/duas' element={<Duas />} />
          <Route path='/timeprayer' element={<TimePrayer />} />
          <Route path='/asmaul' element={<Asmaul />} />

          {/* footer */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/profile' element={<Profile/>} />

          {/* auth */}
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />

          <Route path='/page' element={<Page/>} />



        </Routes>
      </BrowserRouter>
    )}
    </>
  )
}

export default App
