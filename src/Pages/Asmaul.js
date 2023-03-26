import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import ReactLoading from 'react-loading';
import Header from '../Components/Header';
import Swal from 'sweetalert2';

const Asmaul = () => {
  const [asmaulList, setAsmaulList] = useState([]);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/mikqi/dzikir-counter/master/www/asmaul-husna.json')
      .then((response) => {
        setAsmaulList(response.data.slice(0, 99));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header title="Asmaul"/>
      {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ReactLoading type="spin" color="#718096" height={50} width={50} />
            <h1 className='px-5 text-2xl font-bold text-gray-600'>Load data</h1>
          </div>
        ) : (
      <div className='py-16'>
        <h1 className='text-center bg-center font-medium text-3xl text-black'>99 Asmaul Husna</h1>
        
          {/* bagian bawah */}
          <div className='flex flex-wrap gap-16 px-14 justify-center text-center pt-10 rounded-md card-shadow h-auto'>
            {asmaulList.map((asmaul) => (
              <div className='bg-white rounded-lg shadow-lg p-4'>
                <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-xl flex font-bold '>
                  {asmaul.urutan}. {asmaul.latin}  
                  </h2>
                </div>
                <p className='text-gray-700 mb-2 text-3xl'>{asmaul.arab}</p>
                <p className='text-sm text-gray-700 pt-3'>"{asmaul.arti}"</p>
                <button 
                    type="button" 
                    class="mt-5 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    onClick={() => { Swal.fire('Added to favorites!');
                    }} >Favorite</button>
              </div>
            ))}
          </div>
      </div>
      )}
      <Footer />
    </>
  );
  
};

export default Asmaul;
