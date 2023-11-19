import React, { useState } from 'react'
import Navigationbar from "./pages/Navbar";
import DetailsCollection from "./pages/DetailsCollection";
import Footer from "./pages/Footer";
import DocumentCollection from "./pages/DocumentCollection";
import StatementOfPurpose from "./pages/StatementOfPurpose";
import InterviewAvailability from "./pages/InterviewAvailability";
import { RxBox } from "react-icons/rx";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = () => {
    setCurrentPage((prevPage) => prevPage < 4 ? prevPage + 1 : 1);
  };
  const resetForm = () => {
    
    console.log('Form reset logic goes here');
  };
  const CurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <DetailsCollection resetForm={resetForm}/>;
      case 2:
        return <DocumentCollection resetForm={resetForm}/>;
      case 3:
        return <StatementOfPurpose resetForm={resetForm}/>;
      case 4:
        return <InterviewAvailability resetForm={resetForm}/>;
      default:
        return null;
    }
  };


  return (
    <div >
      <Navigationbar />
      <div className='flex min-h-screen'>
      <div className="w-96  pl-8 pr-8">
      <div className="mb-4 mt-10">
          <button
            onClick={() => {setCurrentPage(1)
              resetForm()
            }}
            className={`${
              currentPage === 1 ? 'bg-blue-100 border-blue-400 shadow-md' : 'bg-white'
            } py-2 px-4 w-80 h-24 border-2 rounded-md`}
          >
            <div className='flex items-center space-x-2'>
              <div className={`${
              currentPage === 1 ? 'text-blue-200' : 'text-gray-200'
            } text-6xl `}>
              <RxBox />
              </div>
              <div className='items-start'>
                <p>New Form</p>
                <p className='text-xs'>Start creating a new form with the wide <br /> options of fields available</p>
              </div>
            </div>
          </button>
        </div>
        <h2 className="text-xl mb-4">Explore the following Templetes:</h2>
        <div className="mb-4">
          <button
            onClick={() => setCurrentPage(1)}
            className={`${
              currentPage === 1 ? 'bg-blue-100 border-blue-400 shadow-md' : 'bg-white'
            } py-2 px-4 w-80 h-24 border-2 rounded-md`}
          >
            <div className='flex items-center space-x-2'>
              <div className={`${
              currentPage === 1 ? 'text-blue-200' : 'text-gray-200'
            } text-6xl `}>
              <RxBox />
              </div>
              <div className='items-start'>
                <p>Details Collection</p>
                <p className='text-xs'>Collect information from Candidates on<br />their education, work experience,  <br/> contact no, etc</p>
              </div>
            </div>
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={() => setCurrentPage(2)}
            className={`${
              currentPage === 2 ? 'bg-blue-100 border-blue-400 shadow-md' : 'bg-white'
            } py-2 px-4 w-80 h-24 border-2 rounded-md `}
          >
            <div className='flex items-center space-x-2'>
              <div className={`${
              currentPage === 2 ? 'text-blue-200' : 'text-gray-200'
            } text-6xl `}>
              <RxBox />
              </div>
              <div className='items-start'>
                <p>Document Collection</p>
                <p className='text-xs'>Save time and efforts: Explore this <br /> templete to find a set of questions <br/> required for document collection</p>
              </div>
            </div>
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={() => setCurrentPage(3)}
            className={`${
              currentPage === 3 ? 'bg-blue-100 border-blue-400 shadow-md' : 'bg-white'
            } py-2 px-4 w-80 h-24 border-2 rounded-md`}
          >
            <div className='flex items-center space-x-2'>
              <div className={`${
              currentPage === 3 ? 'text-blue-200' : 'text-gray-200'
            } text-6xl `}>
              <RxBox />
              </div>
              <div className='items-start'>
                <p>Statement of Purpose</p>
                <p className='text-xs'>Start creating a new form with the wide <br /> options of fields available</p>
              </div>
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => setCurrentPage(4)}
            className={`${
              currentPage === 4 ? 'bg-blue-100 border-blue-400 shadow-md' : 'bg-white'
            } py-2 px-4 w-80 h-24 border-2 rounded-md`}
          >
            <div className='flex items-center space-x-2'>
              <div className={`${
              currentPage === 4 ? 'text-blue-200' : 'text-gray-200'
            } text-6xl `}>
              <RxBox />
              </div>
              <div className='items-start'>
                <p>Interview Availability</p>
                <p className='text-xs'>Start creating a new form with the wide <br /> options of fields available</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className='min-h-screen bg-gray-200 w-full  '>
      <div className=" p-4">{CurrentPage()}</div>
      </div>
      </div>
      <Footer onNextPage={handlePageChange} />  
    </div>
  );
}

export default App;
