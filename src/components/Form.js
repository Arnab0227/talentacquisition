import React, { useState } from 'react'

function Form({onSubmit, fields, isStatement ,resetForm}) {
    const [formData, setFormData]= useState({})
    const handleChange= (e) =>{
        const {name, value} = e.target
        setFormData((prevdata) => ({...prevdata, [name]: value}))
    }
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevdata) => ({ ...prevdata, [name]: files[0] }));
      }

    const handleSubmit= (e) => {
        e.preventDefault()
        onSubmit(formData);
    }
    resetForm = () =>{
        setFormData({});
    }

  return (
    <form onSubmit={handleSubmit} >
      {fields.map((field) => (
        <div key={field.name} className="mb-8">
            <div className='mb-2'>
            <label htmlFor={field.name}>
            {field.label}
            {field.required && <span className='red-300'>*</span>}
          </label>
            </div>
          
          <div>
          {field.type === 'file' ? (
            
              <label className="flex items-center  w-64 bg-white py-1 px-3 border mb-5 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <span className="text-gray-500">Upload files up to 5KB</span>
              <input
                type="file"
                id={field.name}
                name={field.name}
                onChange={handleFileChange}
                required={field.required}
                className="ml-2 mb-4 hidden"
              />
            </label>
            
            ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="form-select mt-1 block w-96 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
            
          ) : field.type === 'number' ? (
            
            <input
              type="number"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder || ''}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              required={field.required}
              className="form-input mt-1 mb-10 w-96  bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            ) : field.type === 'date' ? (
                <label className="flex items-center mt-1 w-64 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    
                    <input
                        type="date"
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        className="ml-2 "
                    />
                </label>
          ) : (
            <>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder || ''}
              required={field.required}
              rows={isStatement ? 10 : 6}
              className={`${isStatement ? 'w-11/12 h-20' : 'w-96'} form-input mt-1  bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
            />
            {isStatement && (
                <div className="absolute left-2/4 ml-48 text-gray-500 text-xs">
                  Answer under 300 words
                </div>
              )}
            </>
          )}
        </div>
        </div>
      ))}
    </form>
  )
}

export default Form
