import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutSection } from "../components/about/about-section/AboutSection";
import { Why } from "../components/about/why-section/Why";
import BreadCrumbs from "../components/breadcrumbs/Breadcrumbs";

function About() {
    return (<>
        <BreadCrumbs current="About Us" />
        <AboutSection />
        <hr />
        <Why />
       
    </>
    );
}

export default About;