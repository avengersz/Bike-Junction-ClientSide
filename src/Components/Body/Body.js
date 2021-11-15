import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {

    const history = useHistory();
 
    return (
        
        <div className='header'>
            <section className='mx-auto pb-5'>
            <div  className="container">
            <div className="row">
           <div className="col-12 col-md-6 mt-5 "> 
           <h1 className="fs-1"> 
            <span className="text-color fs-1"> <b> Looking For Racing Bike? </b></span> <br />
                <span className="fs-5 text-white"> CheckOut Our Bike Offer </span><br /> 
                <button onClick={() => history.push('/explore')} className="btn btn-color text-center mt-5"> EXPLORE MORE</button>
            </h1>
            </div>
            </div>
            </div>
            </section>
            </div> );
             };

export default Body;