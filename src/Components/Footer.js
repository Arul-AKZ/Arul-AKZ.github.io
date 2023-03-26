import { Link } from "react-router-dom";
import React from 'react'

const Footer = () => {
  return (
    
<footer class=" bg-slate-900 rounded-lg shadow m-4 dark:bg-gray-300">
    <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://www.behance.net/ahmadkzahid" class="hover:underline">ZtudioAhmad™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <Link to={`/about`} className="hover:text-gray-400 px-5" >About Me</Link>
        <Link to={`/contact`} className="hover:text-gray-400" >Contact</Link>
    </ul>
    </div>
</footer>


  )
}

export default Footer