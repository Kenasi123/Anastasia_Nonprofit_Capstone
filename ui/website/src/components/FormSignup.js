import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  // state = {
  //   text: {
  //     recipient: '',
  //   }
  // }

  // const sendText = () => {
  //   const { text } = this.state;
  //   //pass text message GET variables via query string
  //   fetch(`http://127.0.0.1:3000/signup?recipient=${text.recipient}`)
  //   .catch(err => console.error(err))
  // }

  
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      
        <div className='form-inputs'>
          <label className='form-label'>First name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your first name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your last name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lasttname && <p>{errors.lastname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='text'
            name='phonenumber'
            placeholder='Please enter your phone number'
            value={values.phonenumber}
            onChange={handleChange} />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        {/* <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span> */}
      </form>
    </div>
  )
      
};

export default FormSignup;