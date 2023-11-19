import React from 'react'
import Form from '../components/Form'

function InterviewAvailability() {

    const formFields = [
        {name:'email', label:'1. Email', placeholder: 'Example - userid@gmail.com', required: true, },
        {name:'location', label:'2. Location',  placeholder: 'Search or enter your location'},
        {name:'interviewdate', label:'3. Interview Date', type: 'date', placeholder: 'DD/MM/YYYY'},
        {name: 'interviewtime', label: '4. Interview Time', type: 'time', placeholder: '12:00'},
        {
            name: 'timezone',
            label: 'Time Zone',
            type: 'select',
            options: [
              { value: 'uk', label: 'GMT (Greenwich, United Kingdom): Current Time' },
              { value: 'cet', label: 'GMT+1 (Central European Time - CET): Current Time' },
              { value: 'eet', label: 'GMT+2 (Eastern European Time - EET): Current Time' },
              { value: 'moscow', label: 'GMT+3 (Moscow Time): Current Time' },
              { value: 'azarbaijan', label: 'GMT+4 (Azerbaijan Time): Current Time' },
              { value: 'pst', label: 'GMT+5 (Pakistan Standard Time - PST): Current Time' },
              { value: 'india', label: 'GMT+5:30 (Indian Standard Time - IST): Current Time' },
              { value: 'kaza', label: 'GMT+6 (Kazakhstan Time): Current Time' },
              { value: 'ict', label: 'GMT+7 (Indochina Time - ICT): Current Time' },
              { value: 'cst', label: 'GMT+8 (China Standard Time - CST): Current Time' },
              { value: 'aest', label: 'GMT+10 (Australian Eastern Standard Time - AEST): Current Time' },
              { value: 'solomon', label: 'GMT+11 (Solomon Islands Time): Current Time' },
              { value: 'fiji', label: 'GMT+12 (Fiji Time): Current Time' },

            ],
            placeholder: 'Search or select a time zone from below',
            required: true,
          },
          {
            name: 'interviewmedium',
            label: 'Interview Medium',
            type: 'select',
            options: [
              { value: 'zoom', label: 'Zoom Call' },
              { value: 'meet', label: 'Google Meet' },
              { value: 'teams', label: 'Teams Meeting' },
            ],
            placeholder: 'Search or select medium of Interview from below',
            required: true,
          },
    ]
    const handleFormSubmit = (formData) => {
        console.log('Form submitted in DetailsCollection with data:', formData);
        
      }
    
  return (
    <div className='bg-gray-200 h-full w-full ml-32'>
        <div className='bg-blue-200 w-2/3 h-32 mt-10  mr-5'>
            <div className='ml-10'>
                <div className='font-semibold text-2xl pt-5'>Interview Availability</div>
                <div>Add Basic details for further collection</div>
                <div className='pt-4'>Provide the following information to process your application.</div>
            </div> 
        </div>
        <div className=' bg-white w-2/3 h-full rounded-b-lg shadow mb-10'>
            <div className='ml-10 pt-10 w-3/4'>
            <Form onSubmit={handleFormSubmit} fields={formFields} />
            </div>
            
        </div>
      
    </div>
  )
}

export default InterviewAvailability

