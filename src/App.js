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
      <div className='flex h-screen justify-center items-center bg-gradient-to-r '>
        <ReactLoading type="spin" color="slate" height={100} width={100} />
        <h1 className='mx-5 text-2xl text-slate-700 font-extrabold'>Wait a Second...</h1>
      </div>
    ) : (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/duas' element={<Duas />} />
          <Route path='/timeprayer' element={<TimePrayer />} />
          <Route path='/asmaul' element={<Asmaul />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    )}
    </>
  )
}

export default App
