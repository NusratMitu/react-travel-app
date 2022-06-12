import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './Banner.css';
import firstSlide from '../../../images/side-view-traveling-woman-taking-photograph 1.png';
import secondSlide from '../../../images/side-view-traveling-woman-taking-photograph 1 (1).png';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (

	<div className=''>
	<Carousel className='banner'>
		<Carousel.Item >
		<div className='fisrtSlider'>
		<img className="w-100" src={firstSlide} alt="first"
		/>
		</div>
		<Carousel.Caption className='text-start caption text-black py-5 fw-bold'>
			<h3 className='fw-bolder fs-lg-1'>Live with no <span className='coloredCaption'> excuses & travel</span> <br /> with no regrets</h3>
			<p className='fw-light lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magina aliqua. </p>
<NavLink className='primaryColor linkHover bannerlink text-decoration-none'
            to="aboutAuthor"   >
            Continue for reading
          </NavLink>
		</Carousel.Caption>
		</Carousel.Item> 
		{/* second slider */}
		<Carousel.Item >
			<div className='secondSlider py-5 m-5 d-flex justify-content-center align-items-center ' >
			<div className='w-50 '>
			<Carousel.Caption className='text-start caption fw-bold'>
			<h3 className='fw-bolder'>Live with no <span className='coloredCaption'> excuses & travel</span> <br /> with no regrets</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magina aliqua.</p>
<NavLink className='primaryColor bannerLink linkHover text-decoration-none'
            to="aboutAuthor"   >
            Continue for reading
          </NavLink>
		</Carousel.Caption>

			</div>
			<div className='w-50 ps-5' >
				<img src={secondSlide} alt='traveler' className='h-100 w-100 rounded' />
			</div>
			</div>
		
		</Carousel.Item>
	</Carousel>
	
	</div>
);
}


export default Banner;