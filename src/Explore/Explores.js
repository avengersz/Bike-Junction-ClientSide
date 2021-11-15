import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Explores = ({sub,course,setCourse}) => {
  const { user} = useAuth();
  const {name, description, price,url} = sub;
  const [admins, setAdmins]= useState([]);
  useEffect (() => {
    fetch('https://gentle-oasis-77041.herokuapp.com/makeAdmin')
     .then(res => res.json())
     .then(data => setAdmins(data))
  },[]);
  const handleDelete = id => {
    const url1 = `https://gentle-oasis-77041.herokuapp.com/explore/${id}`;
    fetch(url1, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {
                alert('Are you sure to delete?');

                const remainingProduct = course.filter(product => product._id !== id);
                setCourse(remainingProduct);

            };

        });
};
  const history = useHistory();
  return (
    <div>
      <div className='col'>
                <div className='card text-center bg-secondary bg-gradient'>

            
  <Card >
    <Card.Img className='card-img-top h-100' variant="top" src={url} />
    <Card.Body>
      <Card.Title><small> {name} </small> </Card.Title>
      <Card.Text>
     <p className="fs-8"> <small> {description}</small> </p>
       </Card.Text>
      <Card.Text>
     Price : ${price}
      </Card.Text>
    </Card.Body>
    <Card.Footer >
    {admins.map(admin => admin.email === user.email && <button className='btn btn-danger' onClick={() => handleDelete(sub._id)}>Delete</button>)}
    </Card.Footer>
    <Card.Footer >
    <button onClick={() => history.push('/orders')}  className='btn w-100 btn-primary'> <i class="fas fa-shopping-cart"></i> <b>Buy Now</b> </button>
    
    </Card.Footer>
  </Card>
                </div>
                
            </div>
            
    </div>
  );
};

export default Explores;

