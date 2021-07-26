import React from 'react';
//import './Form.css';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const FormSuccess = () => {

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
      
      <Button>
        <Link style={{color:'white'}} to="/main" className="btn btn-outline-warning float-right">
          Main Page
        </Link>
      </Button>
    </div>
  );
};

export default FormSuccess;