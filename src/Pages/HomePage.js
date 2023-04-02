import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import ReactLoading from 'react-loading';
import Header from '../Components/Header';
import { Link } from "react-router-dom";
import  sujud from "../image/android-chrome-192x192.png"
import  dua from "../image/3.png"
import  asmaul from "../image/2.png"


const HomePage = () => {

  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    axios
      .get("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=8")
      .then(response => {
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
    {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="spin" color="#718096" height={50} width={50}/>
          <h1 className='px-5 text-2xl font-bold text-gray-600'>Load data</h1>
        </div>
      ) : (
        <>
    <Header title="HomePage"/>
        <section className='bg-white'>
    <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-10 text-center">
          Welcome to Du'as Guide 
          <h3 className="text-xl font-normal mb-4">Time Right Now: {currentTime}</h3>
        </h1>
        
    {/* bagian bawah */}
        
    <div className='py-8 px-60'>
  <div className='flex justify-center items-center h-full w-full bg-black text-white py-5 px-2 rounded-3xl'>
    <div className='w-3/4 text-center'>
      <h2 className='text-4xl font-bold leading-tight'>Have you prayed today?</h2>
      <p className='mt-4 text-lg'>Take a Dua and asmaul husna to connect with god.</p>
    </div>
    <div className='w-1/4 flex justify-center items-center'>
      <img src={sujud} alt="Person" className='h-40'/>
    </div>
  </div>
</div>

    
    {/* bagian 1 */}
      <div class="flex flex-wrap gap-8 mb-10 mt-4 justify-center">

      <Link to={`/asmaul`} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={asmaul} alt="asmaul"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">99 names <strong>Allah</strong></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A humble expression of hope & solidarity, as we stand with humanity in these times.</p>
    </div>
    </Link>

<Link to={`/duas`} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={dua} alt="dua"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">Du'as <strong>Daily</strong></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Authentic, short and easy-to-memorise Duas fo all occasions. Highly recommended for young children and new Muslims.</p>
    </div>
</Link>
</div>

          </div>
        </section>
  <Footer />
        </>
      )};
  </>
   
    
    
  )
}

export default HomePage
