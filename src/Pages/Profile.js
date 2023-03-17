import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Profile = () => {
  return (
    <>
    <Header/>

    <section id='profile'>

  {/* bagian atas profile */}
    <div class="card border w-auto hover:shadow-none relative flex flex-col shadow-lg py-10 my-10 mx-40 rounded-xl">
  <img class="max-h-28 w-full opacity-80 absolute top-0 z-0 rounded-t-xl object-none" src="mob.jpg" alt="gambar panjang" />
  <div class="profile flex mt-10 mb-8 ml-10 text-white relative z-10">
    <img class="w-20 h-20 rounded-full" src="shigeo.png" alt="user"/>
    <div class="title mt-8 ml-5 flex flex-col">
      <div class="name text-lg text-slate-600">Shigeo Kageyama</div>
      <div class="add text-slate-700 text-xs">Esper</div>
      <div class="buttons flex absolute font-bold right-0 text-sm text-slate-700 space-x-0 my-3.5 mr-3">
    <div class="add border rounded-lg border-gray-300 p-1 px-5 cursor-pointer hover:bg-gray-700 hover:text-white">Edit</div>
  </div>
    </div>
  </div>
</div>

{/* bagian bawah profile */}
<h2 className='text-center bg-center py-10 text-3xl '>Favorite</h2>

{/* card atas */}
<div className='px-5'>
<div className='flex justify-evenly'>
<div class="flex justify-center py-10">
  <div
    class="block max-w-sm rounded-xl bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-xl"
        src="mob.jpg"
        alt="datadummy" />
    </a>
    <div class="p-6">
      <h5
        class="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Du'as wake Up
      </h5>
      <button
        type="button"
        class="inline-block rounded-md bg-slate-600 px-4 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Read More
      </button>
    </div>
  </div>
</div>
<div class="flex justify-center py-10">
  <div
    class="block max-w-sm rounded-xl bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-xl"
        src="mob.jpg"
        alt="datadummy" />
    </a>
    <div class="p-6">
      <h5
        class="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Du'as wake Up
      </h5>
      <button
        type="button"
        class="inline-block rounded-md bg-slate-600 px-4 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Read More
      </button>
    </div>
  </div>
</div>
<div class="flex justify-center py-10">
  <div
    class="block max-w-sm rounded-xl bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-xl"
        src="mob.jpg"
        alt="datadummy" />
    </a>
    <div class="p-6">
      <h5
        class="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Du'as wake Up
      </h5>
      <button
        type="button"
        class="inline-block rounded-md bg-slate-600 px-4 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Read More
      </button>
    </div>
  </div>
</div>
</div>
{/* card bawah */}
<div className='flex justify-evenly'>
<div class="flex justify-center py-10">
  <div
    class="block max-w-sm rounded-xl bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-xl"
        src="mob.jpg"
        alt="datadummy" />
    </a>
    <div class="p-6">
      <h5
        class="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Ar rahman
      </h5>
      <button
        type="button"
        class="inline-block rounded-md bg-slate-600 px-4 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Read More
      </button>
    </div>
  </div>
</div>
<div class="flex justify-center py-10">
  <div
    class="block max-w-sm rounded-xl bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-xl"
        src="mob.jpg"
        alt="datadummy" />
    </a>
    <div class="p-6">
      <h5
        class="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        al qudus
      </h5>
      <button
        type="button"
        class="inline-block rounded-md bg-slate-600 px-4 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Read More
      </button>
    </div>
  </div>
</div>
<div class="flex justify-center py-10">
  <div
    class="block max-w-sm rounded-xl bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-xl"
        src="mob.jpg"
        alt="datadummy" />
    </a>
    <div class="p-6">
      <h5
        class="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        ar rahim
      </h5>
      <button
        type="button"
        class="inline-block rounded-md bg-slate-600 px-4 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Read More
      </button>
    </div>
  </div>
</div>
</div>
</div>

    </section>
    <Footer/>
    </>
  )
}

export default Profile
