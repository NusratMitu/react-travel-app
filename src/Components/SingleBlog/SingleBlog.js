import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './SingleBlog.css';

const SingleBlog = (props) => {
    const { date, title, img, description, post} = props.blog;
    return (
        <div className="card-container my-5">
      <Col>
      <Card className='border-0 w-100' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={img} style={{height:"250px"}} className="card-img rounded mx-auto d-block w-75" />
      <div className='mx-3'>
      <Card.Body>
      <Card.Text style={{ color:'#828282'}}>{date}
        </Card.Text>
        <Card.Title className='fw-bolder fs-4'>{title}</Card.Title>
        <Card.Text className='fs-6 lh-sm'>{description}
        </Card.Text>
        <Card.Text className='fw-bold primaryColor'>{post} Post
        </Card.Text>
      </Card.Body>
      </div>
    </Card>
    </Col>
        </div>
    );
};

export default SingleBlog;