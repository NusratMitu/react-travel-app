import React from 'react';
import './AboutAuthor.css';
import img from  '../../images/young-traveler 1.png'
import { NavLink } from 'react-router-dom';

const AboutAuthor = () => {
    return (
       <div>
          <div className='author my-5 py-5 row d-lg-flex align-items-center '>
          <div className='col-lg-6 col-md-12'>
        <img src={img} alt='traveler' className='w-75 rounded ' />
         </div>
         <div className='text-start col-lg-6 col-md-12'>
           <div className='p-3 me-5'>
           <h3 className='fw-bolder pt-3'>About Author</h3>
           <p className='fw-bold primaryColor'> Live with no excuses & travel with no regrets</p>
           <p style={{color: '#828282'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis</p>
 <NavLink className='primaryColor linkHover fw-bold text-decoration-none'
            to="aboutAuthor"   >
            Continue for reading
          </NavLink>
           </div>
         </div>
        </div>
       </div>
         );
};

export default AboutAuthor;