import { Link } from "react-router-dom";
import React from 'react'

const Footer = () => {
  return (
    

<footer class="bg-slate-900 rounded-t-lg shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between px-5">
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://www.behance.net/ahmadkzahid" class="hover:underline">ZtudioAhmad™</a>. All Rights Reserved.</span>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                <Link to={`/profile`} className="mr-4 hover:underline md:mr-6">Profile</Link>
                </li>
                <li>
                <Link to={`/contact`} className="mr-4 hover:underline md:mr-6" >Contact me</Link>
                </li>
                <li>
                <Link to={`/favorite`} className="mr-4 hover:underline md:mr-6" >Favorite</Link>
                </li>
                <li>
                <Link to={`/about`} className="mr-4 hover:underline md:mr-6" >About me</Link>
                </li>
            </ul>
        </div>
    </div>
</footer>




  )
}

export default Footer