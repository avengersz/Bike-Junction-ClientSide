import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Reviewss from './../Reviewss/Reviewss';

const Reviews = () => {
    const [course, setCourse] = useState ([]);
    useEffect (()=> {

fetch ('https://gentle-oasis-77041.herokuapp.com/reviews')
.then (res => res.json ())
.then (data => setCourse(data))
    }, [] )
    return (
        <div>
        <br /> <br /> <br />
        <div className='container mx-auto text-center mb-5'>
          <h1 className="fs-1 ps-3 mb-5 text-dark">Our Customer Feedback</h1>
              <div className="row text-center">
              <div className="col-md-12">
          
              <div className="row g-4 row-cols-1 row-cols-md-4 ms-2 row-solve">
                    
              {course.map ( sub => <Reviewss key= {sub._id} sub={sub}></Reviewss>)}
                    
              </div>
              </div>
              </div>
      
              
          </div>
        </div>
    );
};

export default Reviews;