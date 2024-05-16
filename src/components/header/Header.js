import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Container, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Navlink = ({to, text}) => {
    return (
    <NavLink
  to={to}
  className={({ isActive }) => isActive ? 'nav-link fw-bold m-1 active-nav-link' : 'nav-link fw-bold m-1'}
  onClick={handleClose}
>{text}</NavLink>
    )
  }

  return (
    <div id="header" className="fixed-top">
      <Navbar bg="white" expand="lg" className="shadow-sm mb-3">
        <Container fluid="lg">
          <Navbar.Brand as={NavLink} to="/">
            <img src="/logo.webp" alt="logo" className="img-fluid w-50" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} className="border-0" aria-controls="offcanvasNavbar" />
          
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Navlink to="/" text="Home" />
                <Navlink to="/about" text="About" />
                <Navlink to="/why-korea" text="Why Korea?" />
                <Navlink to="/visa-programs" text="Visa Programs" />
                <Navlink to="/contact" text="Contact Us" />
              </Nav>
              <Button
                variant="primary"
                size="lg"
                className="m-1 shadow-sm rounded-5 fw-bold"
                href="/visa-application-form.pdf"
              >
                Apply now
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
