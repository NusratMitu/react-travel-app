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
         <Row xs={2} md={4} className="mx-5 g-1">
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