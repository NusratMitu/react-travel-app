import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/Vector.png';

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
            <Nav.Link className='linkStyle text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='linkStyle text-white' href="#blog">Blog</Nav.Link>
            <Nav.Link className='linkStyle text-white' href="#aboutAuthor">About Author</Nav.Link>
            <Nav.Link className='linkStyle text-white' href="#contactUs">Contact Us</Nav.Link>
          </Nav>
         </div>
        </Container>
      </Navbar>
    );
};

export default Header;