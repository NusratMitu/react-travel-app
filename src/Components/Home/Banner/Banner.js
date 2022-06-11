import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './Banner.css';
import firstSlide from '../../../images/side-view-traveling-woman-taking-photograph 1.png';
import secondSlide from '../../../images/side-view-traveling-woman-taking-photograph 1 (1).png';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (

	<div className='banner'>
	<Carousel>
		<Carousel.Item interval={2500}>
		<img className="d-block w-100" src={firstSlide} alt="first"
		/>
		<Carousel.Caption className='text-start caption fw-bold'>
			<h3 className='fw-bolder'>Live with no <span className='coloredCaption'> excuses & travel</span> <br /> with no regrets</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan 
lacus vel facilisis</p>
<NavLink className='primaryColor linkHover fw-bold text-decoration-none'
            to="aboutAuthor"   >
            Continue for reading
          </NavLink>
		</Carousel.Caption>
		</Carousel.Item>
		{/* second slider */}
		<Carousel.Item interval={500} >
			<div className='secondSlider p-5 m-5 d-flex justify-content-center ' >
			<div className='w-50 '>
			<Carousel.Caption className='text-start caption fw-bold'>
			<h3 className='fw-bolder'>Live with no <span className='coloredCaption'> excuses & travel</span> <br /> with no regrets</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan 
lacus vel facilisis</p>
<NavLink className='primaryColor linkHover fw-bold text-decoration-none'
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