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
	<Carousel className='banner '>
		<Carousel.Item>
		<div className=' position-relative'>
		<img className="w-100" src={firstSlide} alt="first"
		/>
		</div>
		<Carousel.Caption className='text-start caption text-black m-5 ps-5 ms-5 position-absolute top-0 start-0'>
			<h3 className='fw-bolder w-75'>Live with no <span className='coloredCaption'> excuses & travel</span> <br /> with no regrets</h3>
			<p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magina aliqua. </p>
<NavLink className='primaryColor linkHover bannerLink text-decoration-none'
            to="aboutAuthor"   >
            Continue for reading
          </NavLink>
		</Carousel.Caption>
		</Carousel.Item> 
		{/* second slider */}
		<Carousel.Item>
		<div className=' position-relative'>
		<img className="w-100" src={firstSlide} alt="first"
		/>
		</div>
		<Carousel.Caption className='text-start caption text-black m-5 ps-5 ms-5 position-absolute top-0 start-0'>
			<h3 className='fw-bolder w-75'>Live with no <span className='coloredCaption'> excuses & travel</span> <br /> with no regrets</h3>
			<p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magina aliqua. </p>
<NavLink className='primaryColor linkHover bannerLink text-decoration-none'
            to="aboutAuthor"   >
            Continue for reading
          </NavLink>
		</Carousel.Caption>
		</Carousel.Item> 
	</Carousel>
	
	</div>
);
}


export default Banner;