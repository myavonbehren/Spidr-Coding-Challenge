import React from 'react'

export default function EntryForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
      <div className='main-container'>
        <div className='form-container'>
            <h1>Spidr Air Fryer</h1>
            <h2>Interest Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        required 
                        className='input-field' />
                </div>
            </form>

        </div>
        
      </div>
    );
  }
