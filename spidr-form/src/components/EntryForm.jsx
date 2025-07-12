import React from 'react'

export default function EntryForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
      <div className='form-page'>
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
                <div className='form-group'>
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label>Email Address</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className='input-field' />
                </div>

                <div className='form-group'>
                    <label>Guess the Air Fryer's Cost</label>
                    <input 
                        type="text"
                        name="airFryerCost"
                        placeholder="0.00"
                        required
                        className='input-field' />
                </div>

                <div className='form-group'>
                    <label>16-Digit PIN</label>
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
