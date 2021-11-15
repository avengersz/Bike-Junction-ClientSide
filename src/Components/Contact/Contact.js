import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div class="text-left">
           <Row xs={1} md={2} className="g-5 py-5" style={{width: '80%', margin: '0 auto'}}>
            <Col style={{textAlign: 'left'}}>
                <h2 className="pb-2">Send Your Quires</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
            <Col style={{textAlign: 'left'}}>
                <h2 className="pb-2">Our Location</h2>
                <p>North Miami Beach, FL 33162
                <br/>Phone: 786-823-0009
                </p>
            </Col>
            
        </Row>
        </div>
    );
};

export default Contact;