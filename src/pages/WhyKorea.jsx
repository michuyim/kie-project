import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumbs from "../components/breadcrumbs/Breadcrumbs";
import { WhyKoreaOne } from "../components/whyKorea/WhyKorea";

function WhyKorea() {
    return (
        <>
        <BreadCrumbs current="Why Korea?" />
        <WhyKoreaOne />
        </>
    );
}

export default WhyKorea;