import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import BreadCrumbs from "../components/breadcrumbs/Breadcrumbs";
import { VisaProgram } from "../components/visaPrograms/VisaPrograms";

function VisaPrograms() {
    return (
<>
<BreadCrumbs current="VISA Programs" />
<VisaProgram />
</>
    );
}

export default VisaPrograms;
