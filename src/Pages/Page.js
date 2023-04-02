import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import "tw-elements";

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
     {loading ? (
          <div className="flex justify-center bg-dua items-center h-screen">
            <ReactLoading type="spin" color="white" height={50} width={50} />
            <h1 className='px-5 text-2xl font-bold text-white'>Load data</h1>
          </div>
        ) : (
          <>
     <Header />
          <section id="menu">
        <div className="bg-menu h-full flex flex-col items-center p-32">
          <div className="m-10 p-5 w-full h-full rounded-md flex flex-wrap gap-10 justify-center ">
            {/* Card */}
            {doa.map((m) => (
              <div className="w-1/5 rounded-md card-shadow shadow-lg h-auto bg-white">
                <div className="py-5 px-4">
                  <h4 className="text-lg mt-1">
                    {m.id}. {m.doa}
                  </h4>

                  <div className="btn-more mt-10 flex">
                    <button
                      type="button"
                      class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-toggle="modal"
                      data-te-target="#exampleModalXl"
                      value={modalDoa}
                      onClick={() => getModalDoa(m.id)}
                    >
                      Read More
                    </button>

                    <div
                      data-te-modal-init
                      class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                      id="exampleModalXl"
                      tabindex="-1"
                      aria-labelledby="exampleModalXlLabel"
                      aria-modal="true"
                      role="dialog"
                    >
                      <div
                        data-te-modal-dialog-ref
                        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
                      >
                        <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                          {/* Modal Header */}
                          <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                              class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                              id="exampleModalXlLabel"
                            >
                              {modalDoa.id}. {modalDoa.doa}
                            </h5>

                            <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              {modalDoa.ayat}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              {modalDoa.latin}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              {modalDoa.artinya}
                            </p>
                          </div>
                            <button
                              type="button"
                              class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                              data-te-modal-dismiss
                              aria-label="Close"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          {/* Modal Body */}
                          <div class="relative p-4">...</div>
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
      <Footer />
          </>
      

        )}
    </>
    )}


export default Duas
