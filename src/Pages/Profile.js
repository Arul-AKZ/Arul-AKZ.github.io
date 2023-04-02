import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faPhone, faTag, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Profile = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
{loading ? (
        <div className="flex justify-center items-center h-screen bg-profile">
          <ReactLoading type="bars" color="white" />
          <h1 className='px-5 text-2xl font-bold text-white'>Load Profile</h1>
        </div>
      ) : ( 
        <>
        <Header/>
        <div class="py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Profile Information
          </h3>
          <button class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </div>

        {/* bagian bawah */}
        <div class="border-t border-gray-200">
          <dl>

            {/* nama */}
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
              <FontAwesomeIcon icon={faTag} className="mr-2"/>
                Full name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Ahmad Khairul Zahid
              </dd>
            </div>

            {/* email */}
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
              <FontAwesomeIcon icon={faVoicemail} className="mr-2"/>
                Email address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Ahmadkhairulzahid@gmail.com
              </dd>
            </div>

            {/* instagram */}
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500"> 
              <FontAwesomeIcon icon={faInstagram} className="mr-2"/>
                Instagram
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> 
              <a href="https://www.instagram.com/ahmad_khairul_zahid/" class="hover:underline">@Ahmad_Khairul_Zahid</a>
              </dd>
            </div>

            {/* facebook */}
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
              <FontAwesomeIcon icon={faFacebook} className="mr-2"/>
                Facebook
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href="https://www.facebook.com/ahmad.khairul.56829446/" class="hover:underline">Ahmad Khairul</a>
              </dd>
            </div>

            {/* twitter */}
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
              <FontAwesomeIcon icon={faTwitter} className="mr-2"/>
                Twitter
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href="https://twitter.com/KahirulAhmad" class="hover:underline">@KahirulAhmad</a>
              </dd>
            </div>

            {/* nomor telepon */}
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
              <FontAwesomeIcon icon={faPhone} className="mr-2"/>
                Phone number
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                +62 9991-9888-7654
              </dd>
            </div>

            {/* alamat */}
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
              <FontAwesomeIcon icon={faAddressBook} className="mr-2"/>
                Address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Bekasi, sukaragam, Indonesia
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  </div>
  </div>
<Footer/>
        </>
    )}
    </>
  )
}

export default Profile
