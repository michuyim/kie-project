import React from "react";
import "./breadcrumbs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BreadCrumbs = ({current}) => {
    const navigate = useNavigate();
    
    return (
        <div id="breadcrumb" className="mb-2">
            <Container fluid="md" className="breadcrumbs">
                <h2 className="text-center fw-medium fs-1 text-white">{current}</h2>
                <i className="text-black btn shadow-sm text-center bg-warning btn-sm fs-6 fw-bold" onClick={() => navigate(-1)}><BiArrowBack className="align-middle"/><span> Go Back</span></i>
            </Container>
        </div>
    );
}

export default BreadCrumbs;