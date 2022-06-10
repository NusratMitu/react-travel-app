import React from 'react';
import bg from '../../images/rm422-047 1.png';
import './ContactUs.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ContactUs = () => {
    return (
        <div className='contact'>
            <img className='img-fluid' src={bg} alt="" />
          <div class="first-txt fw-bold">
          <h6 style={{color:'#097340'}}>Subscribe to newsletter</h6>
        <h4 className='fw-bolder'>Get each & every new blogs through your e-mail</h4>
        </div>
          
        {/* <h3 class="second-txt">
            A computer science portal
        </h3> */}
        <InputGroup className='inputForm w-50'>
        <Form.Control className='py-3 px-5'
          placeholder="Your email address..."
          aria-label="Your email address..."
          aria-describedby="basic-addon2"
        />
        <Button className='subscribeBtn fw-bold' id="button-addon2">
        SUBSCRIBE
        </Button>
      </InputGroup>
        </div>
    );
};

export default ContactUs;