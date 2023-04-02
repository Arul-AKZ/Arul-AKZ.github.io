import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "tw-elements";

const Duas = () => {
  
  const [doa, setDoa] = useState([]);

  const [modalDoa, setModalDoa] = useState([]);
  const [loading, setLoading] = useState(true)

  const getModalDoa = async (id) => {
    const res = await axios.get(
      `https://cors-proxy.fringe.zone/https://doa-doa-api-ahmadramadhan.fly.dev/api/${id}`
    );

    

    setTimeout(() => {
      setModalDoa(res.data[0])
      console.log(res.data[0]);
      setLoading(false)
    }, 2000);

    setLoading(true)
   };

  // Data Makanan
  const getDoa = async () => {
    const res = await axios.get("https://cors-proxy.fringe.zone/https://doa-doa-api-ahmadramadhan.fly.dev/api",
    {
      // headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
    });
    setDoa(res.data);
  };

  useEffect(() => {
    getDoa();
    getModalDoa();
  }, []);


  return (
    <>
    <Header/>
    <section id="menu">
      <div className="bg-menu h-full flex flex-col items-center p-32">
        
        <div className="m-10 p-5 w-full h-full rounded-md flex flex-wrap gap-10 justify-center ">
          {/* Card */}
          {doa.map((m) => (
            <div className="w-1/5 rounded-md card-shadow shadow-lg h-auto bg-white">

              <div className="py-5 px-4">
                
                <h4 className="text-lg mt-1">{m.id}. {m.doa}</h4>

                <div className="btn-more mt-10 flex">
                  <button
                    className="uppercase ml-auto text-xs relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-indigo-400                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300" 
                    data-bs-toggle="modal"
                    data-bs-target="#doaModal"
                    type="button"
                    value={modalDoa} 
                    onClick={(e) => getModalDoa(m.id)}
                  >
                    Baca Selanjutnya
                  </button>

                  <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="doaModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalXlLabel"
                    aria-modal="true"
                    role="dialog"
                  >
                    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        {loading ? (
                          <>
                          <div className="flex h-screen justify-center stroke-black items-center "> 
                          <h3 className="mr-3"> <strong>Tunggu Bentar Ya....</strong> </h3>
                            <ReactLoading 
                            type="spin"
                            width={64}
                            height={64}
                            color="white"/>
                          </div>
                          </>
                        ) : (
                          <>
                          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            class="text-xl font-medium leading-normal text-gray-800 h-full"
                            id="exampleModalXlLabel">
                            {modalDoa.id} - {modalDoa.doa}
                          </h5>
                          <button
                            type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body relative p-4 flex justify-center">
                        </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
    <Footer/>
    </>
    )}


export default Duas
