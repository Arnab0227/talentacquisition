import React from 'react'
import Form from '../components/Form'

function DocumentCollection() {

    const formFields = [
        { name: 'marksheet', label: '1. 10th Marksheet', type: 'file', placeholder: 'Attach file upto 5kb', required: true },
        { name: 'marksheet', label: '2. 12th Marksheet', type: 'file', placeholder: 'Attach file upto 5kb', required: true },
        { name: 'marksheet', label: '3. Graduation Marksheet', type: 'file', placeholder: 'Attach file upto 5kb', required: true },
        { name: 'marksheet', label: '4. Post Graduation Marksheet', type: 'file', placeholder: 'Attach file upto 5kb', },
        { name: 'offerletter', label: '5. Offer Letter', type: 'file', placeholder: 'Attach file upto 5kb', required: true },
        { name: 'salaryslip', label: '6. Salary Slips', type: 'file', placeholder: 'Attach file upto 5kb', required: true },
        { name: 'bankstatement', label: '7. Bank Statement', type: 'file', placeholder: 'Attach file upto 5kb', required: true },
        { name: 'incrementletter', label: '8. Increment Letter (if any)', placeholder: 'Attach file upto 5kb', type: 'file', },
        { name: 'others', label: '9. Others (if any)', type: 'file', placeholder: 'Attach file upto 5kb', },
    ]
    const handleFormSubmit = (formData) => {
        console.log('Form submitted in DetailsCollection with data:', formData);
        
      }
    
  return (
    <div className='bg-gray-200 min-h-screen w-full ml-32'>
        <div className='bg-blue-200 w-2/3 h-32 mt-10  mr-5'>
            <div className='ml-10'>
                <div className='font-semibold text-2xl pt-5'>Document Collection</div>
                <div>Add Basic details for further collection</div>
                <div className='pt-4'>Provide the following information to process your application.</div>
            </div> 
        </div>
        <div className=' bg-white w-2/3 h-full rounded-b-lg shadow'>
            <div className='ml-10 pt-10 w-3/4'>
            <Form onSubmit={handleFormSubmit} fields={formFields} />
            </div>
            
        </div>
      
    </div>
  )
}

export default DocumentCollection

