import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import './Orders.css';
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router";
const Orders = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [resorts, setResorts] = useState({});
  const {url, name, description,price} = resorts;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // useEffect(() => {
  //     fetch(`https://gentle-oasis-77041.herokuapp.com/products`)
  //     .then(res => res.json())
  //     .then(data => setResorts(data))
      
  // }, [id]);

  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "Pending"
    axios
      .post("https://gentle-oasis-77041.herokuapp.com/orders", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Successfully Bike Ordered");
          reset();
        }
      });
  };
  return (
    <div className="container">
    <Container>
      <Row className="w-100 py-5">
        {/* <Col md={6} className=" ">
          <div className="booking-image-div">
            <img className="img-fluid" src={url} alt="" />
          </div>
          <div>
            <h2 className="text-primary my-3"> {name} </h2>
            <h6 className="text-primary my-3"> {price} </h6>
            <p className="text-secondary booking-desc mt-3">
              {description}
            </p>
          </div>
        </Col> */}
        <Col md={6} className="border-start border-2 ">
          <div className="add-booking-container container">
            <h2 className="text-center text-primary"> Order Your Bike</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-3 form-wrapper"
            >
              <input
                {...register("name", { required: true })}
                placeholder=" your name"
                className="border-0 field"
              />
 
              <input
                type="number"
                {...register("email", { required: true })}
                placeholder=" your phone number "
                className="border-0 field"
              />
              <input
                type="date"
                className="border-0 field"
                {...register("date", { required: true })}
              />
 
              <input
                {...register("package", { required: true })}
                placeholder=" add bike model"
                className="border-0 field"
              />
              {errors.exampleRequired && <span>This field is required</span>}
 
              <input
                className="border-0 field bg-info"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
 
export default Orders;
