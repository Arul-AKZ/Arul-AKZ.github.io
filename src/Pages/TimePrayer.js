import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReactLoading from 'react-loading';
import axios from 'axios';

const TimePrayer = () => {
  const [loading, setLoading] = useState(true);
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    axios
      .get("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=8")
      .then(response => {
        setPrayerTimes(response.data.data.timings);
        setDate(response.data.data.date.readable);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header title={`Jadwal Sholat - ${date}`} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="spin" color="#718096" height={50} width={50} />
          <h1 className='px-5 text-2xl font-bold text-gray-400'>Loading data</h1>
        </div>
      ) : (
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">Jadwal Sholat Hari Ini - {date}</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-500 p-4 rounded-lg">
              <h3 className="text-white text-lg font-bold mb-2">Imsak</h3>
              <p className="text-white text-sm mb-2">{prayerTimes?.Fajr}</p>
            </div>
            <div className="bg-slate-500 p-4 rounded-lg">
              <h3 className="text-white text-lg font-bold mb-2">Subuh</h3>
              <p className="text-white text-sm mb-2">{prayerTimes?.Sunrise}</p>
            </div>
            <div className="bg-slate-500 p-4 rounded-lg">
              <h3 className="text-white text-lg font-bold mb-2">Dzuhur</h3>
              <p className="text-white text-sm mb-2">{prayerTimes?.Dhuhr}</p>
            </div>
            <div className="bg-slate-500 p-4 rounded-lg">
              <h3 className="text-white text-lg font-bold mb-2">Ashar</h3>
              <p className="text-white text-sm mb-2">{prayerTimes?.Asr}</p>
            </div>
            <div className="bg-slate-500 p-4 rounded-lg">
              <h3 className="text-white text-lg font-bold mb-2">Maghrib</h3>
              <p className="text-white text-sm mb-2">{prayerTimes?.Maghrib}</p>
            </div>
            <div className="bg-slate-500 p-4 rounded-lg">
              <h3 className="text-white text-lg font-bold mb-2">Isya</h3>
              <p className="text-white text-sm mb-2">{prayerTimes?.Isha}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />

    </>
  )
}

export default TimePrayer
