import React from 'react';
import { Row } from 'react-bootstrap';
import useBlog from '../../Hooks/useBlog';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const blogs = useBlog();
    return (
        <div className='my-5 '>
        <Row xs={1} md={2} lg={4} className='g-1 mx-5'>
        {
          blogs.map( blog => <SingleBlog key= {blog.id} blog= {blog} ></SingleBlog> )
          
        }
        </Row>
        </div>
    );
};

export default Blog;