import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import ReactLoading from 'react-loading';
import Header from '../Components/Header';
import { Link } from "react-router-dom";
import  sujud from "../image/android-chrome-192x192.png"

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
    <Header title="HomePage"/>
    
    {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="spin" color="#718096" height={50} width={50}/>
          <h1 className='px-5 text-2xl font-bold text-gray-600'>Load data</h1>
        </div>
      ) : (
      <main>
        <section className='bg-white'>
    <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-10 text-center">
          Welcome to Du'as Guide 
          <h3 className="text-xl font-normal mb-4">Time Right Now: {currentTime}</h3>
        </h1>
        
    {/* bagian bawah */}
        
    <div className='py-8 px-60 '>
    <div className='flex justify-center items-center h-full w-full bg-black text-white py-5 px-2 rounded-3xl'>
    <div className='w-3/4'>
    <h2 className='text-3xl font-bold  leading-tight m-auto'>Have you prayer <br/> today?</h2>
    </div>
    <div className='w-1/6'> 
    <img src={sujud} alt="Person" className='h-32'/>
    </div>
    </div>
    </div>
    
    {/* bagian 1 */}

    <div class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className='mt-5 mb-20 flex flex-wrap px-56'>
    <div class="max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asmaul Time!!</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">See What inside of this card</p>
    <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <Link to={`/asmaul`} className="hover:text-gray-400" >Read More</Link>
    </a>
</div>


<div class="max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Du'as Time!!</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">See What inside of this card</p>
    <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <Link to={`/duas`} className="hover:text-gray-400" >Read More</Link>
    </a>
</div>
    </div>
  </div>
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
