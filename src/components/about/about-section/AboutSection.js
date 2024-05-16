import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./about-section.css";
import { Container, Row, Col } from 'react-bootstrap';

export const AboutSection = () => {
    return (
      <div id="about1">
        <Container fluid="lg">
          <Row>
            <Col sm={12}>
              <img
                src="/about-img.png"
                alt="about-img"
                className=" img-responsive rounded-1"
              />
            </Col>

            <Col sm={12}>
              <div className="p-md-2 ">
                <h2 className="fs-1 text-danger fw-bold">Who We Are</h2>
                <p className="text-secondary fw-medium">
                  Your Bridge to a new life in South Korea
                </p>
                <hr />
              </div>
              <div className="fw-normal m-1">
                <p>
                  Welcome to The Korean Immigration Express – K.I.E, where your
                  journey to South Korea begins with confidence and ease. At
                  K.I.E, we specialize in turning the complex process of
                  immigration into a smooth, clear path leading you straight to
                  the heart of Korea.
                </p>
                <p>
                  Founded by a team of seasoned immigration specialists and
                  enthusiasts for Korean culture, K.I.E represents the perfect
                  blend of professional expertise and personal passion for
                  Korea’s rich heritage and dynamic future. Our mission is to
                  provide tailored, efficient visa and immigration services,
                  ensuring that each client's experience is as unique and
                  vibrant as Korea itself.
                </p>
                <p>
                  With years of experience, a deep understanding of Korean
                  immigration laws, and a heart for the people we serve, K.I.E
                  stands not just as a consultancy, but as your trusted partner
                  in navigating the exciting journey to a new life in Korea.
                  Whether you’re a student, a professional, or looking to
                  reunite with family, our team is dedicated to making your
                  dream a reality.
                </p>
                <p>
                  At The Korean Immigration Express, we don’t just process
                  applications – we build bridges, we connect cultures, and we
                  create stories. Your Korean story starts here, with us.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}