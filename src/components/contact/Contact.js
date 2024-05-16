import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaLocationArrow, FaPhone, FaMailBulk } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div id="contact" className="p-3">
      <Container fluid="lg">
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <div className="card-body">
                <h5>
                  <FaLocationArrow className="icon-style" /> Location
                </h5>{" "}
              </div>
              <Card.Body>
                <p>Gangnam-Gu, Seoul. South Korea</p>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <div className="card-body">
                <h5>
                  <FaMailBulk className="icon-style" /> Our Email
                </h5>
              </div>
              <Card.Body>
                <p>
                  <a className="text-decoration-none text-danger" href="mailto:contact@govtkoreaimmigration.com?subject=I Have A Question&body=Hello, my name is ...">
                    contact@govtkoreaimmigration.com
                  </a>
                </p>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <div className="card-body">
                <FaPhone className="icon-style" />
                <h5>Call Us</h5>
              </div>
              <Card.Body>
                <p>+1 209-259-1354</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h2>Contact Us</h2>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Question/Complaints/Enquiries"
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
        <div className="mt-5 rounded-1 bg-tertiary-subtle w-50 p-3">
          <h4>Subscribe To Our Newsletter</h4>
          <p>Strictly For communication. WE DO NOT SELL YOUR INFO.</p>
          <Form inline>
            <Form.Control
              type="email"
              placeholder="Your email"
              className="mr-sm-2 w-75 mb-2"
            />
            <Button variant="outline-danger" type="submit">
              Subscribe
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};
