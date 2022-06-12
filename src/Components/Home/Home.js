import React from 'react';
import { Row } from 'react-bootstrap';
import useBlog from '../../Hooks/useBlog';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import ContactUs from '../ContactUs/ContactUs';
import SingleBlog from '../SingleBlog/SingleBlog';
import Banner from './Banner/Banner';

const Home = () => {
    const blogs = useBlog();
    return (
        <div>
            <Banner></Banner>
            {/* blog */}
         <Row md={2} lg={3} className="mx-5 g-1">
        {
          blogs.slice(0,4).map( blog => <SingleBlog key= {blog.id} blog= {blog} ></SingleBlog> )
          
        }
        </Row>
        <AboutAuthor></AboutAuthor>
        <ContactUs></ContactUs>  
        </div>
    );
};

export default Home;