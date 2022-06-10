import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './Banner.css';
import firstSlide from '../../../images/side-view-traveling-woman-taking-photograph 1.png';
import secondSlide from '../../../images/flying-plane-blue-sky-banner-background-tropical-leaves-toy-hand-flies-to-travel-summer-vacation-relaxation-tours-222613249.jpg';

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
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img className="d-block w-100" src={secondSlide} alt="second"
		/>
		<Carousel.Caption className='text-start caption fw-bold'>
			<h3 className='fw-bolder'>Live with no <span className='coloredCaption'> excuses & travel</span> <br /> with no regrets</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan 
lacus vel facilisis</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}


export default Banner;