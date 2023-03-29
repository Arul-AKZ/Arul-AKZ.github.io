import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Favorite = () => {

  
  return (
    <>
    <Header/>
    <h1>Example For Favorite</h1>
    <div className='flex mt-32 justify-center'>

    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-10">
    </div>
    <div class="flex flex-col items-center pb-10">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">1. Doa Sebelum Tidur</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Bissmikallahuma Amutu Waahya</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Trash</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Remove</a>
        </div>
    </div>
</div>


    </div>
    <Footer/>
    </>
  )
}

export default Favorite
