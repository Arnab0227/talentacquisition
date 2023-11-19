import React from 'react'
import Form from '../components/Form'


function DetailsCollection() {

    const formFields = [
        {name:'name', label:'1. Name', placeholder: 'Enter your name', required: true,},
        {name:'email', label:'2. Email', placeholder: 'Example - userid@gmail.com', required: true, },
        {name:'dob', label:'3. Date of Birth', type: 'date', placeholder: 'DD/MM/YYYY'},
        {name:'contact', label:'4. Contact no', type: 'number', placeholder: 'Enter your 10 digit contact no'},
    ]
    const handleFormSubmit = (formData) => {
        console.log('Form submitted in DetailsCollection with data:', formData);
        
      }
    
  return (
    <div className='bg-gray-200 h-full w-full ml-32 '>
        <div className='bg-blue-200 w-2/3 h-32 mt-10  mr-5'>
            <div className='ml-10'>
                <div className='font-semibold text-2xl pt-5'>Details Collection</div>
                <div>Add Basic details for further collection</div>
                <div className='pt-4'>Provide the following information to process your application.</div>
            </div> 
        </div>
        <div className=' bg-white w-2/3 h-3/4 rounded-b-lg shadow'>
            <div className='ml-10 pt-10 w-3/4'>
            <Form onSubmit={handleFormSubmit} fields={formFields} />
            </div>
            
        </div>
      
    </div>
  )
}

export default DetailsCollection

