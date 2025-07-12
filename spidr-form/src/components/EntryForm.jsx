import React, { useState } from 'react'
import '../styles/EntryForm.css'
import CurrencyInput from 'react-currency-input-field';


export default function EntryForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        airFryerCost: '',
        pin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted: ', formData);
    };

    const currencyInputStyle = {
        paddingLeft: '28px'
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
                        onChange={handleChange}
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label className='label'>Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label className='label'>Phone Number</label>
                    <input
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className='input-field' />
                </div>
                <div className='form-group'>
                    <label className='label'>Email Address</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='input-field' />
                </div>

                <div className='form-group'>
                    <label className='label'>Guess the Air Fryer's Cost</label>
                    <div className='currency-container'>
                        <span className='dollar-sign'>$</span>
                        <CurrencyInput
                            className='input-field'
                            id="input-field"
                            name="airFryerCost"
                            placeholder="0.00"
                            defaultValue={10.00}
                            decimalsLimit={2}
                            required
                            style={currencyInputStyle}
                            onValueChange={(value, name, values) => console.log(value, name, values)}
                            />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='label'>16-Digit PIN</label>
                    <input
                        type="password"
                        name="pin"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        value={formData.pin}
                        onChange={handleChange}
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
