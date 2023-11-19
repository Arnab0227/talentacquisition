import React from 'react'
import Form from '../components/Form'

function StatementOfPurpose() {

    const formFields = [
        {name:'question1', label:(
            <>
              1. Tell me about a time you were asked to do something you had never 
              <br />
              done before. How did you react? What did you learn?
            </>
          ), placeholder: 'Enter a description for the long answer', required: true,},
          {name:'question2', label:(
            <>
              2. Tell me about the last time something significant didn't go according 
              <br />
              to plan at work. What was your role? what was the outcome?
            </>
          ), placeholder: 'Enter a description for the long answer', required: true,},
          {name:'question3', label:(
            <>
              3. What are the three things that are most important to you in a job?
            </>
          ), placeholder: 'Enter a description for the long answer', required: true,},
    ]
    const handleFormSubmit = (formData) => {
        console.log('Form submitted in DetailsCollection with data:', formData);
        
      }
    
  return (
    <div className='h-full'>
        <div className='bg-gray-200 h-full w-full ml-32'>
        <div className='bg-blue-200 w-2/3 h-32 mt-10  mr-5'>
            <div className='ml-10'>
                <div className='font-semibold text-2xl pt-5'>Statement Of Purpose</div>
                <div>Add Basic details for further collection</div>
                <div className='pt-4'>Provide the following information to process your application.</div>
            </div> 
        </div>
        <div className=' bg-white w-2/3 h-140 rounded-b-lg shadow'>
            <div className='ml-10 pt-10 w-3/4'>
            <Form onSubmit={handleFormSubmit} fields={formFields} isStatement/>
            </div>
            
        </div>
      
    </div>
    </div>
    
  )
}

export default StatementOfPurpose

