import React from 'react';

function Footer({ onNextPage }) {
  return (
    <div className='w-full h-20 flex-shrink-0 flex justify-end border-t-2 shadow-lg'>
      <div className='flex justify-end items-center mr-16'>
        <div className='w-32 h-10 rounded-md bg-blue-400 text-center flex items-center justify-center text-white' onClick={onNextPage}>
          NEXT
        </div>
      </div>
    </div>
  );
}
export default Footer;