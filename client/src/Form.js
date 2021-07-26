import React, { useState } from 'react';
import './components/auth/Form.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

//import FormSignup from './FormSignup';
//import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
   
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="just-forms">
        <div className='form-container'>
          
          <div className='form-content-left'>
            <img className='form-img' src='img/img-2.svg' alt='spaceship' />
          </div>
          <Register />
          
          {/*!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )*/}
          
        </div>
      </div>
    </>
  );
};

export default Form;