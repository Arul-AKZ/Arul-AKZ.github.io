import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const TimePrayer = () => {
  return (
    <>
<Header/>
<section>
{/* // bagian atas */}
    <div className='flex justify-center w-full text-slate-900 py-20 px-80'>
<div className='w-3/6'>
  <h2 className='text-3xl pt-12 font-extrabold'>Time Prayer</h2>
</div>
<div className='w-1/5'>
<img src="sholat.png" alt="Person"/>
</div>
</div>

{/* // bagian bawah */}
<div class="flex items-center gap-8 pb-10 px-28 rounded-md justify-center bg-white shadow-lg">
  <div class="w-1/2">
    <img src="shubuh.png" alt="Shubuh" class="w-full h-40 object-cover rounded-md shadow-md "/>
  </div>
  <div class="w-1/5">
    <h2 class="text-4xl font-bold text-gray-800 mb-6">Shubuh</h2>
    <p class="text-xl text-gray-700">04:00</p>
  </div>
</div>
<div class="flex items-center gap-8 pb-10 px-28 rounded-md justify-center bg-white shadow-lg">
  <div class="w-1/2">
    <img src="dzuhur.png" alt="Shubuh" class="w-full h-40 object-cover rounded-md shadow-md "/>
  </div>
  <div class="w-1/5">
    <h2 class="text-4xl font-bold text-gray-800 mb-6">Dzuhur</h2>
    <p class="text-xl text-gray-700">12:00</p>
  </div>
</div>
<div class="flex items-center gap-8 pb-10 px-28 rounded-md justify-center bg-white shadow-lg">
  <div class="w-1/2">
    <img src="ashar.png" alt="Shubuh" class="w-full h-40 object-cover rounded-md shadow-md "/>
  </div>
  <div class="w-1/5">
    <h2 class="text-4xl font-bold text-gray-800 mb-6">Ashar</h2>
    <p class="text-xl text-gray-700">15:00</p>
  </div>
</div>
<div class="flex items-center gap-8 pb-10 px-28 rounded-md justify-center bg-white shadow-lg">
  <div class="w-1/2">
    <img src="maghrib.png" alt="Shubuh" class="w-full h-40 object-cover rounded-md shadow-md "/>
  </div>
  <div class="w-1/5">
    <h2 class="text-4xl font-bold text-gray-800 mb-6">Magrib</h2>
    <p class="text-xl text-gray-700">18:00</p>
  </div>
</div>
<div class="flex items-center gap-8 pb-10 px-28 rounded-md justify-center bg-white shadow-lg">
  <div class="w-1/2">
    <img src="isya.png" alt="Shubuh" class="w-full h-40 object-cover rounded-md shadow-md "/>
  </div>
  <div class="w-1/5">
    <h2 class="text-4xl font-bold text-gray-800 mb-6">Isya</h2>
    <p class="text-xl text-gray-700">19:00</p>
  </div>
</div>
</section>
<Footer/>

    </>
    
  )
}

export default TimePrayer
