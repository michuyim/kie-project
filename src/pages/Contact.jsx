import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumbs from "../components/breadcrumbs/Breadcrumbs";
import { ContactUs } from "../components/contact/Contact";

function Contact() {
  return (
    <>
      <BreadCrumbs current="Contact Us" />
      <ContactUs />
    </>
  );
}

export default Contact;
