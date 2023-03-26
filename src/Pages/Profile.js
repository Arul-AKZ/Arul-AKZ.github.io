import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })
  
  return (
    <>
    <Header title="Profile"/>
    {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ReactLoading type="spin" color="#718096" height={50} width={50} />
            <h1 className='px-5 text-2xl font-bold text-gray-600'>Load data</h1>
          </div>
        ) : (

    <section id='profile'>

  {/* bagian atas profile */}
    <div class="card border w-auto hover:shadow-none relative flex flex-col shadow-lg py-10 my-10 mx-40 rounded-xl">
  <img class="max-h-28 w-full opacity-80 absolute top-0 z-0 rounded-t-xl object-none" src="mob.jpg" alt="gambar panjang" />
  <div class="profile flex mt-10 mb-8 ml-10 text-white relative z-10">
    <img class="w-20 h-20 rounded-full" src="shigeo.png" alt="user"/>
    <div class="title mt-8 ml-5 flex flex-col">
      <div class="name text-lg text-slate-600">Shigeo Kageyama</div>
      <div class="add text-slate-700 text-xs">Esper</div>
      <div class="buttons flex absolute font-bold right-0 text-sm text-slate-700 space-x-0 my-3.5 mr-3">
    <div class="add border rounded-lg border-gray-300 p-1 px-5 cursor-pointer hover:bg-gray-700 hover:text-white">Edit</div>
  </div>
    </div>
  </div>
</div>

{/* bagian bawah profile */}
<h2 className='text-center bg-center py-10 text-3xl '>Favorite</h2>

<div className='px-5'>
{/* card untuk doa */}


{/* card untuk asmaul */}
      <h1>TabLayout UnderWorking</h1>
      
      
</div>

    </section>
    )}
    <Footer/>
    </>
  )
}

export default Profile
