import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReactLoading from 'react-loading';
import axios from 'axios';


const TimePrayer = () => {
  const [loading, setLoading] = useState(true);
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [city, setCity] = useState('Jakarta');

  useEffect(() => {
    axios
      .get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=8`)
      .then(response => {
        setPrayerTimes(response.data.data.timings);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="spin" color="#718096" height={50} width={50} />
          <h1 className='px-5 text-2xl font-bold text-gray-400'>Loading data</h1>
        </div>
      ) : (
        <>
      <Header/>
        <div className="p-8 text-center mt-5 mb-10">
          <h3 className="text-3xl font-bold mb-4">Time Right Now: {currentTime}</h3>
          <div className="mb-5 flex flex-wrap">
            <label className="font-bold">City:</label>
            <select id="city" name="city" onChange={handleCityChange} value={city} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="Jakarta">Jakarta</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Bandung">Bandung</option>
              <option value="Semarang">Semarang</option>
              <option value="Medan">Medan</option>
              <option value="Makassar">Makassar</option>
              <option value="Palembang">Palembang</option>
              <option value="Depok">Depok</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Bekasi">Bekasi</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center pt-5">
            <div className="bg-white shadow-lg dark:bg-neutral-700 p-4 rounded-lg">
              <h3 className="text-slate-800 text-lg font-bold mb-2">Imsak</h3>
              <p className="text-slate-800 text-sm mb-2">{prayerTimes?.Fajr}</p>
            </div>
            <div className="bg-white shadow-lg dark:bg-neutral-700 p-4 rounded-lg">
              <h3 className="text-slate-800 text-lg font-bold mb-2">Shubuh</h3>
              <p className="text-slate-800 text-sm mb-2">{prayerTimes?.Sunrise}</p>
            </div>
            <div className="bg-white shadow-lg dark:bg-neutral-700 p-4 rounded-lg">
              <h3 className="text-slate-800 text-lg font-bold mb-2">Dzuhur</h3>
              <p className="text-slate-800 text-sm mb-2">{prayerTimes?.Dhuhr}</p>
            </div>
            <div className="bg-white shadow-lg dark:bg-neutral-700 p-4 rounded-lg">
              <h3 className="text-slate-800 text-lg font-bold mb-2">Ashar</h3>
              <p className="text-slate-800 text-sm mb-2">{prayerTimes?.Asr}</p>
            </div>
            <div className="bg-white shadow-lg dark:bg-neutral-700 p-4 rounded-lg">
              <h3 className="text-slate-800 text-lg font-bold mb-2">Maghrib</h3>
              <p className="text-slate-800 text-sm mb-2">{prayerTimes?.Maghrib}</p>
            </div>
            <div className="bg-white shadow-lg dark:bg-neutral-700 p-4 rounded-lg">
              <h3 className="text-slate-800 text-lg font-bold mb-2">Isya</h3>
              <p className="text-slate-800 text-sm mb-2">{prayerTimes?.Isha}</p>
            </div>
          </div>
        </div>
      <Footer />
        </>

        
      )}

    </>
  )
}

export default TimePrayer
