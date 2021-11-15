import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Product = ({sub}) => {
    const {name, url, description, price} = sub;
    
    const history = useHistory();


    return (
   

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
    <button onClick={() => history.push('/orders')}  className='btn w-100 btn-primary'> <i class="fas fa-shopping-cart"></i> <b>Buy Now</b> </button>
    </Card.Footer>
  </Card>
                </div>

            </div>

     



    ); 

}
    
export default Product;