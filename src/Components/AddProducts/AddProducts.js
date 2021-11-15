import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const AddProducts = () => {
  const { user } = useAuth();
  const [admins, setAdmins] = useState([]);

 
  const {
    register,
    reset,
    handleSubmit
  } = useForm();
  useEffect(() => {
    fetch('https://gentle-oasis-77041.herokuapp.com/makeAdmin')
    .then(res => res.json ())
    .then(data => setAdmins(data))
  }, []);


  const onSubmit = data => {
     console.log(data);
     const url =  'https://gentle-oasis-77041.herokuapp.com/products';
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.price) {
                alert('Added Successfully');
                reset()
            }
        });

};
  return (
    <div className="container">
    <Container>
      <Row className="w-100 py-5">
        {
          admins.map(admin => user.email === admin.email && (
            <Col md={6} className="border-start border-2 ">
          <div className="add-booking-container container">
            <h2 className="text-center text-primary">Add Product</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-3 form-wrapper"
            >
              <input
                {...register("name", { required: true })}
                placeholder=" Products name"
                className="border-0 field"
              />
 
              <input
              
                {...register("url", { required: true })}
                placeholder=" Img url"
                className="border-0 field"
              />
              <input
                type="text"
                className="border-0 field"
                placeholder="description"
                {...register("description", { required: true })}
              />
 
              <input
                {...register("price", { required: true })}
                placeholder="Price"
                className="border-0 field"
              />
            
              <input
                className="border-0 field bg-info"
                type="submit"
                value="Add Product"
              />
            </form>
          </div>
        </Col>
          ))
        }
      </Row>
    </Container>
    </div>
  );
};
 
export default AddProducts;
