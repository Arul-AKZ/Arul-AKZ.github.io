import { Link } from "react-router-dom";
import React from 'react'

const Footer = () => {
  return (
    


<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.behance.net/ahmadkzahid" class="hover:underline">ZtudioAhmad™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li class="mr-4 hover:underline md:mr-6">
        <Link to={`/about`} className="hover:text-gray-400" >About me</Link>
        </li>
        <li class="mr-4 hover:underline md:mr-6">
        <Link to={`/contact`} className="hover:text-gray-400" >Contact Me</Link>
        </li>
        <li class="mr-4 hover:underline md:mr-6">
        <Link to={`/favorite`} className="hover:text-gray-400" >Favorite</Link>
        </li>
        <li class="mr-4 hover:underline md:mr-6">
        <Link to={`/profile`} className="hover:text-gray-400" >Profile</Link>
        </li>
    </ul>
</footer>


  )
}

export default Footer