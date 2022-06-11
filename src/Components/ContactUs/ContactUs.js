import React from 'react';
import bg from '../../images/rm422-047 1.png';
import './ContactUs.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ContactUs = () => {
    return (
        <div className='contact'>
            <img className='h-100' src={bg} alt="" />
          <div class="first-txt fw-bold">
          <h6 className='fw-bolder' style={{color:'#097340'}}>Subscribe to newsletter</h6>
        <h4 className='fw-bolder'>Get each & every new blogs through your e-mail</h4>
        </div>
       <div className='mb-0 pb-0'>
       <form onSubmit={(e) => {e.preventDefault();
            alert('Email address has been listed successfully');
            }}> 
            <InputGroup className='inputForm w-50'>
        <Form.Control required className='py-2 px-5'
          placeholder="Your email address..."
          aria-label="Your email address..."
          aria-describedby="basic-addon2"
        />
        <Button type='submit' className='subscribeBtn fw-bold' id="button-addon2">
        SUBSCRIBE
        </Button>
      </InputGroup>
        </form>
       </div>
        
        </div>
    );
};

export default ContactUs;