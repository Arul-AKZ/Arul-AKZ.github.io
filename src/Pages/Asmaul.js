import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import ReactLoading from 'react-loading';
import Header from '../Components/Header';
import Swal from 'sweetalert2';


const Asmaul = () => {
  const [asmaulList, setAsmaulList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/mikqi/dzikir-counter/master/www/asmaul-husna.json')
      .then((response) => {
        setAsmaulList(response.data.slice(0, 99));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header title="Asmaul" />
      {loading ? (
        <div className="flex justify-center items-center bg-di h-screen ">
          <ReactLoading type="spin" color="white" height={50} width={50} />
          <h1 className="px-5 text-2xl font-bold text-white">Load data</h1>
        </div>
      ) : (
        <div className="py-16 bg-white">

          <h1 className="text-center bg-center font-medium text-3xl text-black">
            99 Asmaul Husna
          </h1>

          {/* Bagian bawah */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pt-10 rounded-md card-shadow h-auto pb-10">
            {asmaulList.map((asmaul) => (
              <div className="bg-white rounded-lg shadow-lg">
                <div className="px-4 py-6">
                  <h2 className="text-xl font-bold mb-4">
                    {asmaul.urutan}. {asmaul.latin}
                  </h2>
                  <p className="text-gray-700 text-3xl mb-2 text-center">{asmaul.arab}</p>
                  <p className="text-sm text-gray-700 pt-2 text-center">"{asmaul.arti}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Asmaul;
