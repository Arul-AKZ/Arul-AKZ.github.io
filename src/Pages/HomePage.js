import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import ReactLoading from 'react-loading';
import Header from '../Components/Header';
import  sujud from "../image/android-chrome-192x192.png"

const HomePage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


useEffect(() => {
axios
.get("https://cors-proxy.fringe.zone/https://doa-doa-api-ahmadramadhan.fly.dev/api",
{
  headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
})
.then(response => {
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
    
    
          </div>
        </section>
      </main>
      )};
  <Footer />
  </>
   
    
    
  )
}

export default HomePage
