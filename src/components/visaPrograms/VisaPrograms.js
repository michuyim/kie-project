import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./visa-programs.css";
import { Card, Col, Row, Container } from "react-bootstrap";

const CardPrograms = ({ title, img, subtitle, text, listItems, textTwo }) => (
  <Col lg={6}>
    <Card style={{ minHeight: "900px" }} className=" my-2 shadow-sm text-black rounded-1 border-2 border-black p-2">
      <Card.Header className="border-0 bg-transparent">
        <Card.Img
          src={img}
          alt={`Image for ${title}`}
          className="rounded-1 card-img"
        />
      </Card.Header>
     <div className="text-center mt-2  text-decoration-none">
        <h2 className="fs-3 fw-bold">{title}</h2>
        <p className="text-secondary text-center">{subtitle}</p>
        <hr /> 
        </div>
        <div className="fs-6 ">
        <p>{text}</p>
        <p>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
        <p>{textTwo}</p>
 </div>
    </Card>
  </Col>
);


export const VisaProgram = () => {
  return (
    <div id="visa-programs" className="mb-3">
      <Container fluid="md">
        <h1 className="text-danger fw-bold fs-1">Available VISA Programs</h1>
        <p className="text-secondary">
          A basic list of the VISA services available and the various basic
          requirements.
        </p>
        <hr />
        <Row className="row">
          <CardPrograms
            title="Tourist Visa (B-2)"
            subtitle="Short-term Travel"
            img="/tourist.png"
            text="The B-2 visa is designed for tourists visiting South Korea for a short period. This visa allows travelers to explore the country's rich cultural heritage and vibrant modern cities."
            listItems={[
              "Valid for up to 90 days.",
              "Applicants must show proof of accommodation and return ticket.",
            ]}
            textTwo="Suitable for vacationers and short-term explorers who do not intend to work or study during their stay."
          />
          <CardPrograms
            title="Study Visa (D-2)"
            subtitle="Higher Education"
            img="/study.png"
            text="The D-2 visa caters to international students enrolled in advanced educational programs at South Korean universities. This visa is crucial for accessing South Korea's renowned educational institutions."
            listItems={[
              "Requires university acceptance letter.",
              "Proof of financial sustainability.",
            ]}
            textTwo="Enables students to pursue full-time studies and participate in part-time employment with restrictions."
          />

          <CardPrograms
            title="Work Visa (E-1 to E-7)"
            subtitle="Employment"
            img="/work.png" // Replace with actual path to the image
            text="The E-series visas are for foreign nationals employed in various professional fields in South Korea. These include teaching, research, and specialized professions."
            listItems={[
              "Requires a job offer from a Korean company.",
              "Varies by specific job type and qualifications.",
            ]}
            textTwo="Applicants must meet strict eligibility criteria including relevant qualifications and experience."
          />
          <CardPrograms
            title="Working Holiday Visa (H-1)"
            subtitle="Cultural Exchange"
            img="/holiday.png" // Replace with actual path to the image
            text="The H-1 visa allows young people (usually between 18-30 years) to travel and work in South Korea for up to one year. It promotes cultural exchange and mutual understanding through a work-travel experience."
            listItems={[
              "Applicant must be from a country with a bilateral holiday agreement with South Korea.",
              "Limited to certain nationalities.",
            ]}
            textTwo="Provides an opportunity to explore South Korea's culture while working part-time to support the stay."
          />

          <CardPrograms
            title="Family Reunion Visa (F-1)"
            subtitle="Family Stay"
            img="/reunion.png" // Replace with actual path to the image
            text="The F-1 visa is intended for foreigners who are visiting their family members residing in South Korea. This visa is suitable for extended family visits and participation in family events."
            listItems={[
              "Requires proof of relationship to a resident in South Korea.",
              "May require financial proof to support the stay.",
            ]}
            textTwo="Facilitates family connections and allows for extended stays with relatives in South Korea."
          />

          <CardPrograms
            title="Permanent Resident Visa (F-5)"
            subtitle="Permanent Residency"
            img="/permanent.png" // Replace with actual path to the image
            text="The F-5 visa grants permanent residency to foreigners who have shown good conduct and have financially contributed to South Korea over many years. It is the final step for expats to fully integrate into Korean society."
            listItems={[
              "Requires a minimum residency period usually 5 years.",
              "Applicants must pass a language and culture test.",
            ]}
            textTwo="Offers full integration into South Korean society, allowing for unrestricted employment and participation in all civic duties."
          />
        </Row>
      </Container>
    </div>
  );
};
