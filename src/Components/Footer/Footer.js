import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div>
              <div className="bg-dark my-5 text-white"id="contact">
        <Container>
<Row md={4} xs={12}>
<Col className="ms-5 my-5">
   <h3>Bike Junctions</h3>
   <h3 className="my-3">Our Contacts</h3>
   <h6><i class="fas fa-map-marker-alt"></i>North Miami Beach, FL 33162</h6>
   <h6><i class="far fa-envelope"></i> bikejunctions@email.com</h6>
   <h6><i class="fas fa-phone"></i> + 786-823-0009</h6>
   </Col>
<Col className="ms-5 my-5" xs={3}>
   <h3>Quick Links</h3>
   <Stack direction="vertical" gap={2}>
 <NavLink className="navlink"
to="/home"
activeStyle={activeStyle}>
Home
</NavLink>
 <NavLink className="navlink"
to="/About"
activeStyle={activeStyle}>
About Us
</NavLink>
 
 <NavLink className="navlink"
to="/contact"
activeStyle={activeStyle}>
Contact Us
</NavLink>

</Stack>
   </Col>
<Col xs={3} className="my-5">
 
   <img className="ms-3" src="https://i.ibb.co/KjyX3tJ/ssl-commerce-1d268dce.png"></img>
   </Col>
</Row>
<footer className="text-center mb-5">Copyright © 2021 bikejunctions.com</footer>
</Container>
   </div>
        </div>
    );
};

export default Footer;