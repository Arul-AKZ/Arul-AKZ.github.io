import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReactLoading from 'react-loading';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Header title="About" />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="bars" color="#718096" />
        </div>
      ) : (
        <section className="bg-white py-10 px-10">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-4xl font-bold mb-4">About This Website</h2>
                <p className="text-gray-600 mb-5">
                  This website is aimed at reminding people to pray and providing information about Islamic prayers, asmaul husna, and prayer times.
                </p>
                <p className="text-gray-600">
                  The available features on this website are prayer times, asmaul husna, and prayer reminders.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-6 px-10 flex justify-center items-center">
                <img
                  className="w-96 h-auto object-cover rounded-2xl"
                  src="ahmad.png"
                  alt="Ahmad"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default About;
