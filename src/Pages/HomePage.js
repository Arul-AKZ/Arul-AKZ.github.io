import React from 'react'
import Header from '../Components/Header'

const HomePage = () => {
  return (
    <><Header/>
     <main>
    <section>
<div className="container mx-auto">
    <h1 className="text-4xl font-bold mt-8 mb-6 text-center">
      Welcome to Du'as Guide
    </h1>
    
{/* bagian bawah */}
    {/* <div
id="carouselDarkVariant"
class="relative px-40 mb-16 rounded-md"
data-te-carousel-init
data-te-carousel-slide>
<div
  class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
  data-te-carousel-indicators>
  <button
    data-te-target="#carouselDarkVariant"
    data-te-slide-to="0"
    data-te-carousel-active
    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-slate-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    aria-current="true"
    aria-label="Slide 1"></button>
  <button
    data-te-target="#carouselDarkVariant"
    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-slate-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    data-te-slide-to="1"
    aria-label="Slide 1"></button>
</div>
<div
  class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-xl">
  <div
    class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
    data-te-carousel-fade
    data-te-carousel-item
    data-te-carousel-active>
    <img
      src="https://img.freepik.com/free-photo/teenage-girl-with-praying-peace-hope-dreams-concept_1150-9114.jpg?w=826&t=st=1678862379~exp=1678862979~hmac=7d98446cb99358acb69610a50bd5001f04b50ed5d000dc6281d5453e3a38ea07"
      class="block w-full"
      alt="Motorbike Smoke" />
    <div
      class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      <h5 class="text-xl">Have You Prayed Today?</h5>
      <p>
      Make Life meaningful by praying.
      </p>
    </div>
  </div>
  <div
    class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
    data-te-carousel-fade
    data-te-carousel-item>
    <img
      src="https://img.freepik.com/free-photo/quran-being-held-hands-close-up_23-2148444089.jpg?w=826&t=st=1678862449~exp=1678863049~hmac=2713a176b7c1c859e080721f698807643b5afe51b15f856a7cd7aabda9fd02a1"
      class="block w-full"
      alt="Mountaintop" />
    <div
      class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      <h5 class="text-xl">Do you Read Quran right Know?</h5>
      <p>
      increase the reward and goodness
      </p>
    </div>
  </div>
</div>
</div> */}

<div className='py-10 px-60 '>
<div className='flex justify-center w-full bg-black text-white py-10 px-2 rounded-3xl'>
<div className='w-3/4'>
<h2 className='text-3xl pt-5 font-bold  leading-tight'>Sudah Berdo'a <br/> Hari Ini?</h2>
</div>
<div className='w-1/6'>
<img src="sholat.png" alt="Person"/>
</div>
</div>
</div>

{/* bagian 1 */}
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

{/* bagian 2 */}
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
  </div>
  </section>
  </main></>
   
    
    
  )
}

export default HomePage
