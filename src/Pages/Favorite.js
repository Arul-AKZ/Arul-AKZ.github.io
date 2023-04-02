import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Favorite = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
  return (
    <>
    {loading ? (
        <div className="flex justify-center bg-favorite items-center h-screen bg-profile">
          <ReactLoading type="bars" color="white" />
          <h1 className='px-5 text-2xl font-bold text-white'>Load Favorite</h1>
        </div>
      ) : ( 
        <>
    <Header/>
          <div class="py-10 mb-10">
          <h1 className='text-xl text-center'>Favorite</h1>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <ul class="mt-6">
      <li class=" flex-col text-center bg-white rounded-lg shadow">
        <div class="flex flex-col p-8">
          <h3 class="text-gray-900 text-base font-medium">1. Doa Sebelum Tidur</h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dd class="text-gray-500 text-sm">Bismikallah humaamutu waahya</dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <button class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-500 font-medium border border-gray-200 rounded-br-lg hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <ul class="mt-6">
      <li class=" flex-col text-center bg-white rounded-lg shadow">
        <div class="flex flex-col p-8">
          <h3 class="text-gray-900 text-base font-medium">1. Doa Sebelum Tidur</h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dd class="text-gray-500 text-sm">Bismikallah humaamutu waahya</dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <button class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-500 font-medium border border-gray-200 rounded-br-lg hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <ul class="mt-6">
      <li class=" flex-col text-center bg-white rounded-lg shadow">
        <div class="flex flex-col p-8">
          <h3 class="text-gray-900 text-base font-medium">1. Doa Sebelum Tidur</h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dd class="text-gray-500 text-sm">Bismikallah humaamutu waahya</dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <button class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-500 font-medium border border-gray-200 rounded-br-lg hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <ul class="mt-6">
      <li class=" flex-col text-center bg-white rounded-lg shadow">
        <div class="flex flex-col p-8">
          <h3 class="text-gray-900 text-base font-medium">1. Doa Sebelum Tidur</h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dd class="text-gray-500 text-sm">Bismikallah humaamutu waahya</dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <button class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-500 font-medium border border-gray-200 rounded-br-lg hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
    <Footer/>
        </>
      )}
    </>
  )
}

export default Favorite
