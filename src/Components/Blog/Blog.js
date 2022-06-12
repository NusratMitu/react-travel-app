import React from 'react';
import { Row } from 'react-bootstrap';
import useBlog from '../../Hooks/useBlog';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const blogs = useBlog();

    return (
        <div className='my-5 '>
         <div className='row'>
           <div className='col-lg-4 col-md-12'>
           <h4>Blogs that have less than 10 post</h4>
          {blogs.filter(blog => blog.post <= 10).map(filteredBlog => (
    <li>
      {filteredBlog.title}: {filteredBlog.post} posts
    </li>
  ))}
           </div>
           <div className='col-lg-4 col-md-12'>
           <h4>Blogs that have less than 20 post</h4>
          {blogs.filter(blog => blog.post>11 && blog.post<= 20).map(filteredBlog => (
    <li>
      {filteredBlog.title}: {filteredBlog.post} posts
    </li>
  ))}
           </div>
           <div className='col-lg-4 col-md-12'>
           <h4>Blogs that have more than 20 post</h4>
          {blogs.filter(blog => blog.post > 20).map(filteredBlog => (
    <li>
      {filteredBlog.title}: {filteredBlog.post} posts
    </li>
  ))}
           </div>

         </div>
        <Row xs={1} md={1} lg={3} className='g-1 mx-5'>
        {
          blogs.map( blog => <SingleBlog key= {blog.id} blog= {blog} ></SingleBlog> )
          
        }
        </Row>
        </div>
    );
};

export default Blog;