import React from 'react';
import bg from '../../images/rm422-047 1.png';
import './ContactUs.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ContactUs = () => {
    return (
        <div className='position-relative contact'>
            <img className=' w-100' src={bg} alt="" />
          <div className=" contactText position-absolute top-0 start-50 translate-middle-x fw-bold">
          <h6 className='fw-bolder' style={{color:'#097340'}}>Subscribe to newsletter</h6>
        <h4 className='fw-bolder'>Get each & every new blogs through your e-mail</h4>
        <div className='position-absolute top-60 start-50 translate-middle-x inputWidth'>
        <form onSubmit={(e) => {e.preventDefault();
            alert('Email address has been listed successfully');
            }}> 
            <InputGroup className=''>
        <Form.Control required className='py-3 px-5 my-auto'
          placeholder="Your email address..."
          aria-label="Your email address..."
          aria-describedby="basic-addon2"
        />
        <Button type='submit' className='subscribeBtn fw-bold p-3' id="button-addon2">
        SUBSCRIBE
        </Button>
      </InputGroup>
        </form>
        </div>
        
        </div>
        </div>
    );
};

export default ContactUs;