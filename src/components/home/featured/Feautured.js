import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./feautured.css";
import { Container, Row, Col } from "react-bootstrap";

export const Featured = () => {
  return (
    <div id="main" className="p-4">
      <Container fluid="md">
        <Row className="g-auto">
          <Col
            md={6}
            className="align-items-center"
          >
            <div>
              <h2 className="text-center fs-2">
                Sign Up For Your VISA Today
              </h2>
              <iframe
                src="https://forms.office.com/r/A3KNQ5n1Fm?embed=true"
                style={{
                  width: "100%", // Adjusted for responsive design
                  height: "480px",
                  frameBorder: "0",
                  border: "none",
                  marginHeight: "0",
                  marginWidth: "0",
                  maxHeight: "100vh",
                }}
                className="rounded shadow-sm"
                
              ></iframe>
            </div>
          </Col>
          <Col md={6}>
            <div >
              <h2 className="fs-2">About Our Work</h2>
              <p className="text-secondary">
                Enjoy an Amazing life in South Korea
              </p>
              <hr />
            </div>

            <div className="p-auto">
              <p className="fs-6 fw-bold">Our Mission</p>
              <p>
                At Korea Immigration Express, we specialize in providing
                personalized immigration solutions. Our mission is to simplify
                the intricate process of moving to South Korea, ensuring a
                seamless experience from application to arrival.
              </p>
            </div>

            <div className="p-auto">
              <p className="fs-6 fw-bold">Services We Offer</p>
              <ul>
                <li>Expert Guidance on Korean Visa Programs.</li>
                <li>Comprehensive Immigration Services.</li>
                <li>
                  Tailored Solutions for Students, Professionals, and Families.
                </li>
                <li>Up-to-Date Information on Korean Immigration Policies.</li>
                <li>Hassle-Free, Efficient Processing of Applications.</li>
              </ul>
            </div>

            <div className="p-auto">
              <p className="fs-6 fw-bold">Why Choose Us?</p>
              <ul>
                <li>Proven Track Record of Successful Visa Approvals</li>
                <li>In-depth Knowledge of South Korean Immigration Law</li>
                <li>Personalized Attention to Each Client's Unique Needs</li>
                <li>Fast, Reliable, and Transparent Services</li>
              </ul>
            </div>

            <p className="fs-4 m-2 text-danger-emphasis">
              Your Adventure Begins Here!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
