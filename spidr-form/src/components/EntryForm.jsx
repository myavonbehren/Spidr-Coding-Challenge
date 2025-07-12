import React from 'react'
import '../styles/EntryForm.css'

export default function EntryForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
      <div className='form-page'>
        <div className='form-container'>
            <h1>Interest Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='label'>First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name"
                        value={formData.firstName}
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label className='label'>Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label className='label'>Phone Number</label>
                    <input
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label className='label'>Email Address</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className='input-field' />
                </div>

                <div className='form-group'>
                    <label className='label'>Guess the Air Fryer's Cost</label>
                    <input 
                        type="text"
                        name="airFryerCost"
                        placeholder="0.00"
                        required
                        className='input-field' />
                </div>

                <div className='form-group'>
                    <label className='label'>16-Digit PIN</label>
                    <input
                        type="password"
                        name="pin"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        required
                        className='input-field' />
                </div>

                <button 
                    type="submit" 
                    className='submit-button'>
                    Submit
                </button>
            </form>
        </div>
      </div>
    );
  }
