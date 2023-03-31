import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReactLoading from 'react-loading';
import person from "../image/ahmad.png"


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
        <div className="flex justify-center bg-about items-center h-screen">
          <ReactLoading type="bars" color="white" />
        </div>
      ) : (
        <section class="px-10 h-screen flex items-center justify-center">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/3 px-10">
        <img src={person} alt="Profile Picture" class="rounded-xl"/>
      </div>
      <div class="w-full md:w-2/3 px-2">
        <h2 class="text-3xl font-bold mb-2">About Me</h2>
        <p class="text-gray-700 leading-relaxed">
        Making this website because I want to experience how difficult it is, I hope this website can be useful for myself or the community
        </p>
        <ul class="list-disc text-gray-700 mt-4">
          <li>Age: 17</li>
          <li>Location: Cikarang, Indonesia</li>
          <li>Email: ahmadkhairul2135@gmailcom</li>
        </ul>
      </div>
    </div>
</section>

      )}
      <Footer />
    </>
  );
};

export default About;
