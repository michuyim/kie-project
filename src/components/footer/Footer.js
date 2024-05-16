import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHome,
  FaBook,
  FaQuestion,
  FaCcVisa,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-subtle bottom border-top border-1 border-black text-dark pt-4 pb-2">
      <Container fluid="md">
        <Row className="align-items-center">
                <Col md={4} className="text-center align-content-center">
                <img src="/logo.webp" alt="Logo-img" className="w-25 m-2"/>  
          </Col>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">  
      
            <p className="mb-2">
              &copy; {currentYear} <strong>K.I.E KOREA</strong>. All Rights
              Reserved.
            </p>
            <p className="mb-0">
              Want a VISA?{" "}
              <a href="/visa-application-form.pdf" className="text-primary">
                APPLY TODAY
              </a>
            </p> 
        
          </Col>
    
          <Col
            md={4}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <nav>
              <a href="/" className="text-black mx-2" aria-label="Home">
                <FaHome />
              </a>
              <a href="/about" className="text-black mx-2" aria-label="About">
                <FaBook />
              </a>
              <a href="/why-korea" className="text-black mx-2" aria-label="Why Korea?">
                <FaQuestion />
              </a>
              <a href="/visa-programs" className="text-black mx-2" aria-label="Visa Programs">
                <FaCcVisa />
              </a>
              <a href="/contact" className="text-black mx-2" aria-label="Contact">
                <FaPhone />
              </a>
            </nav>
           
          </Col>
        </Row>
      </Container>
   
    </footer>
  );
};

export default Footer;
