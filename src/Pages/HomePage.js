import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import ReactLoading from 'react-loading';
import Header from '../Components/Header';
import Swal from 'sweetalert2';

const HomePage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [duas, setDuas] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

useEffect(() => {
axios
.get("https://cors-proxy.fringe.zone/https://doa-doa-api-ahmadramadhan.fly.dev/api",
{
  headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
})
.then(response => {
setDuas(response.data);
})
.catch(error => {
console.log(error);
});
}, []);

  return (
    <>
    <Header title="HomePage"/>
    
    {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="spin" color="#718096" height={50} width={50}/>
          <h1 className='px-5 text-2xl font-bold text-gray-600'>Load data</h1>
        </div>
      ) : (
      <main>
        <section id='bg-loading' className='bg-loading'>
    <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-10 text-center">
          Welcome to Du'as Guide
        </h1>
        
    {/* bagian bawah */}
        
    <div className='py-10 px-60 '>
    <div className='flex justify-center items-center h-full w-full bg-black text-white py-10 px-2 rounded-3xl'>
    <div className='w-3/4'>
    <h2 className='text-5xl font-bold  leading-tight m-auto'>Have you prayed <br/> today?</h2>
    </div>
    <div className='w-1/6'>
    <img src="sholat.png" alt="Person"/>
    </div>
    </div>
    </div>
    
    {/* bagian 1 */}
    <div className='flex flex-wrap justify-center rounded-md card-shadow'> 
              {duas.map((dua) => (
    
                <div className="flex py-5 px-5 w-56">
                  <div className="rounded-xl bg-white shadow-lg dark:bg-neutral-700 p-5">
                      <h5 className="mb-8 text-lg font-medium text-neutral-800 dark:text-neutral-50">{dua.id}. {dua.doa}</h5>
                      
                      
                      {modalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">

                  <div className="relative max-w-2xl md:h-auto">

                  <div className="relative bg-white rounded-xl">

                    {/* bagian judul sampai isian */}
                  <div class="flex items-start justify-between p-4">
                <h3 class="text-xl font-semibold text-gray-900">
                {dua.id}. {dua.doa}
                </h3>
            </div>
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {dua.ayat}
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {dua.latin}
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {dua.artinya}
                </p>
            </div>

                  <div className="p-3 bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
                    {/* tombol buat nutup */}
                    <button type="button" class="ml-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={() => setModalOpen(false)}>Close</button>
                    <button 
                    type="button" 
                    class="ml-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    onClick={() => { Swal.fire('Added to favorites!'); setModalOpen(false);
                    }} >Favorite</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Tombol buat open */}
          <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={() => setModalOpen(true)}>Read More</button>
          {/* onClick={() => setModalOpen(false)} */}
          
          
                  </div>
                </div>
              ))}
            </div>
    
          </div>
        </section>
      </main>
      )};
  <Footer />
  </>
   
    
    
  )
}

export default HomePage
