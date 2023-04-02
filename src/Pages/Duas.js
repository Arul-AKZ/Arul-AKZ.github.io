import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Duas = () => {
  
  const [loading, setLoading] = useState(true)

  const [duas, setDuas] = useState([]);
  const [modalOpen, setModalOpen] = useState([]);

  const getDoaModal = async (id) => {
    const res = await axios.get(
      `https://cors.eu.org/https://doa-doa-api-ahmadramadhan.fly.dev/api/${id}`
    );

    console.log(res.data[0]);
    setTimeout(() => {
    setLoading(false);
    }, 1000);
    setLoading(true)
  };
  
   useEffect(() => {
    getDoaModal();
  }, []);

  useEffect(() => {
    axios.get("https://cors.eu.org/https://doa-doa-api-ahmadramadhan.fly.dev/api",
    // {
    //   headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
    // }
    )
    .then(response => {
    setDuas(response.data);
    console.log(response.data);
    })
    .catch(error => {
    console.log(error);
    });
    }, []);
  
  return (
    <>
    {loading ? (
          <div className="flex justify-center bg-dua items-center h-screen">
            <ReactLoading type="spin" color="white" height={50} width={50} />
            <h1 className='px-5 text-2xl font-bold text-white'>Load data</h1>
          </div>
        ) : (
          <>
          <Header/>
          <div>
      <h1 className="text-center bg-center font-medium text-3xl text-black pt-10">
            Du'as Guide
          </h1>

      <div className='grid grid-cols-3 gap-10 rounded-md card-shadow py-10 px-10'>
              {duas.map((m) => (
    
                <div className="flex flex-col justify-between rounded-xl bg-white shadow-lg dark:bg-neutral-700 p-5">
                  <div>
                      <h5 className="mb-8 text-lg font-medium text-neutral-800 dark:text-neutral-50">{m.id}. {m.doa}</h5>
                      
                      
                      {modalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="relative max-w-2xl md:h-auto">
      <div className="relative bg-white rounded-xl">
        <div className="flex items-start justify-between p-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {m.id}. {m.doa}
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {m.ayat}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {m.latin}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {m.artinya}
          </p>
        </div>
        
        <div className="p-3 bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
          <button
            type="button"
            className="ml-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>

          <button
            type="button"
            className="ml-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            onClick={async () => {
              await Swal.fire("Added to favorites!");
              setModalOpen(false);
            }}
          >
            Favorite
          </button>
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
    <Footer/>
          </>
      
      

    )}
    </>
  )
}

export default Duas
