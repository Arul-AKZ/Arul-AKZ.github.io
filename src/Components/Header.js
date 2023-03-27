import { useState } from "react";
import { Link } from "react-router-dom";
import  sujud from "../image/android-chrome-192x192.png"


const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <header class="bg-white text-slate-600 shadow-md px-5 py-3">
  <div class="flex items-center justify-between px-4 py-3">
    <div class="flex items-center">
      <img src={sujud} alt="Person" class="h-8 mr-2"/>
      <h1 class="font-bold text-lg">Du'as Guide</h1>
    </div>
    <div class="hidden md:flex items-center space-x-4">
      {/* <a href="#" class="hover:text-gray-400">Home</a> */}
      {/* <a href="#" class="hover:text-gray-400">Profile</a> */}
      {/* <a href="#" class="hover:text-gray-400">Time Prayer</a>
      <a href="#" class="hover:text-gray-400">Asmaul Husna</a> */}

        <Link to={`/`} className="hover:text-gray-400" >Home</Link>
        <Link to={`/profile`} className="hover:text-gray-400" >Profile</Link>
        <Link to={`/timeprayer`} className="hover:text-gray-400" >Time Prayer</Link>
        <Link to={`/asmaul`} className="hover:text-gray-400" >Asmaul Husna</Link>

      <div class="flex items-center justify-center">
  <div class="relative">
    <input type="text" placeholder="Search" class="border border-gray-400 rounded-md py-2 pl-4 pr-10"/>
    <button class="absolute right-0 top-0 mt-2 mr-3 focus:outline-none">
      <svg class="h-6 w-6 fill-current text-gray-400 hover:text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 1.5C5.7 1.5 3 4.2 3 7.5s2.7 6 6 6c1.3 0 2.5-.4 3.5-1l4.7 4.7c.2.2.5.3.8.3s.6-.1.8-.3c.4-.4.4-1 0-1.4l-4.7-4.7c.6-1 1-2.2 1-3.6 0-3.3-2.7-6-6-6zM9 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/></svg>
    </button>
  </div>
</div>


    </div>
    <div class="md:hidden">
    </div>
  </div>
</header>
  );
};

export default Header;
