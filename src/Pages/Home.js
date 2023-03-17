import Header from './Components/Header';
import Footer from './Components/Footer';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { useState } from 'react';
import Profile from './Pages/Profile';



function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (
    <>
      {loading ? (
        <div className='flex h-screen justify-center items-center stroke-black text-xl' ><strong>Tunggu Cuy...</strong> 
        <ReactLoading type='spin' color='white' width={64} height={64} className="m-2 "/>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Profile/>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}

export default App;
