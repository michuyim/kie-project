import React from "react";
import "./whyUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { BiBadgeCheck, BiShieldX, BiSupport } from "react-icons/bi";
export const WhyUs = () => {
  return (
    <div id="why-us" className="py-5" style={{
      backgroundImage: "url('/image.png')"}}>
      <Container fluid="md">
        <Row className="g-4">
          <Col lg={4}>
            <Card className="h-100 shadow">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-danger text-center mb-4 fs-4 fw-bold">
                    Why South Korea?
                    <hr />
                  </Card.Title>
                  <Card.Text className="text-secondary">
                  South Korea stands out as a premier destination, uniquely characterized by its remarkable fusion of rapid technological advancement and deep cultural heritage. As a nation renowned for its robust economy, South Korea is home to leading-edge technology companies and dynamic industrial sectors, making it an ideal environment for professionals seeking career growth in a highly innovative market. Alongside its economic prowess, the country is celebrated for its vibrant culture that seamlessly blends ancient traditions with contemporary lifestyles. From bustling city streets lined with historical architecture to serene rural landscapes steeped in time-honored practices, South Korea offers a rich tapestry of experiences. The blend of old and new is not just visible in its physical landscape but also in the everyday lives of its people, who embrace modernity while respecting traditional values. This dynamic interplay of history and progress makes South Korea a fascinating place to live, work, and explore, offering endless opportunities for personal and professional development.
                  </Card.Text>
                </div>
                <Button variant="danger" href="/why-korea" className="mt-3 align-self-center">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Row className="g-3">
              <Col lg={4}>
              <Card className="shadow-sm" style={{ borderRadius: "10px" }}>
  <Card.Header className="bg-primary text-white text-center">
    <BiSupport /><br />
    Seamless Services
  </Card.Header>
  <Card.Body>
    <Card.Text>
      Navigating the complexities of relocating to a new country can be daunting, but with our expertise, your transition to Korea will be smooth and stress-free. We offer comprehensive guidance on every aspect of settling in, from navigating legal documentation and finding housing to understanding local customs and securing educational opportunities for your children. Our goal is to ensure that you and your family not only acclimate quickly but also start enjoying your new life in Korea with all the support you need to feel at home.
    </Card.Text>
  </Card.Body>
</Card>

              </Col>
              <Col lg={4}>
              <Card className="shadow-sm bg-opacity-10" style={{ borderRadius: "10px" }}>
  <Card.Header className="bg-primary text-white text-center">
    <BiBadgeCheck /><br />
    Unmatched Convenience
  </Card.Header>
  <Card.Body>
    <Card.Text>
      At the core of our service offering is a promise of unmatched convenience, tailored specifically to meet the unique challenges of international relocation. Our comprehensive range of services includes everything from streamlined visa processing and residency arrangements to family reunification support. We take a personalized approach to each client's needs, ensuring that every aspect of your transition is managed efficiently. Whether you're moving alone or with family, our expert team is here to facilitate every step of the process, guaranteeing a smooth and hassle-free experience as you settle into your new life in South Korea.
    </Card.Text>
  </Card.Body>
</Card>

              </Col>
              <Col lg={4}>
              <Card className="shadow-sm" style={{ borderRadius: "10px" }}>
  <Card.Header className="bg-primary text-white text-center">
    <BiShieldX /><br />
    Total Dedication
  </Card.Header>
  <Card.Body>
    <Card.Text>
      Our commitment goes beyond mere services; we are dedicated to providing you with unparalleled opportunities to live, study, and work in South Korea. With a deep understanding of the complexities involved in moving to a new country, our team works tirelessly to ensure that every client receives personalized guidance and support tailored to their specific aspirations and needs. From securing employment opportunities to finding the best schools, we strive to make every aspect of your transition seamless and successful. Our goal is to empower you to make the most of what South Korea has to offer, ensuring a fulfilling and enriching experience.
    </Card.Text>
  </Card.Body>
</Card>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
