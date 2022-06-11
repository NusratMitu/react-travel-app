import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/Vector.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Navbar className='navbar'>
        <Container className='d-flex justify-content-between'>
          <div className='logoTitle d-flex justify-content-between align-item-center'>
              <img src={logo} alt="" />
          <h5>Happy <br /> Travel
          </h5>
          </div>
         <div>
          <Nav >
          <Link className='linkStyle text-white' to="/">Home</Link>
          <Link className='linkStyle text-white' to="blog">Blog</Link>
          <Link className='linkStyle text-white' to="aboutAuthor">About Author</Link>
          <Link className='linkStyle text-white' to="contactUs">Contact Us</Link>
          </Nav>
         </div>
        </Container>
      </Navbar>
    );
};

export default Header;