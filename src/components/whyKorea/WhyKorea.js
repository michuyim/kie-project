import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./why-korea.css";
import { Col, Container, Row, Button } from "react-bootstrap";

export const WhyKoreaOne = () => {

    const WhySection = ({ text, img, isImageFirst, alt, index, title }) => (
        <Row className="my-5">
          {isImageFirst && (
            <Col md={6}>
              <img src={img} className="w-100 rounded-1" alt={alt} />
            </Col>
          )}
          <Col md={6}>
            <p className="fs-5 text-primary fw-bold">{index}. {title}</p>
            <p>{text}</p>
          </Col>
          {!isImageFirst && (
            <Col md={6}>
              <img src={img} className="w-100 rounded-1" alt={alt} />
            </Col>
          )}
        </Row>
      );
    return (
        <div id="why-korea-1">
            <Container fluid="lg">
                <h1 className="fs-1 fw-bold text-danger">Why South Korea?</h1>
                        <p className="text-secondary">Because...</p>
                        <hr />  
                      <Row>
                      <WhySection 
  text="South Korea boasts one of the most robust economies in Asia, known for its rapid growth and technological innovation. Home to global conglomerates such as Samsung, Hyundai, and LG, the country offers abundant career opportunities in various fields including technology, automotive, and consumer electronics. Furthermore, South Korea’s focus on research and development across industries makes it an appealing destination for professionals looking to advance in high-tech roles and engage in cutting-edge projects."
  img="/image1.png" 
  alt="Economic Opportunities" 
  title="Economic Opportunities" 
  index="1"
  isImageFirst={true}
/>

<WhySection 
  text="South Korea places a high premium on education with a world-class system that ranks consistently high globally. For families considering immigration, the prospect of high-quality education is a significant draw. The country is home to prestigious universities like Seoul National University, KAIST, and Yonsei University, which offer a wide range of undergraduate and postgraduate programs in English, catering to international students."
  img="/image2.png" 
  alt="Educational Excellence" 
  title="Educational Excellence" 
  index="2"
/>

<WhySection 
  text="South Korea’s healthcare system is renowned for its efficiency and the high standard of care provided. The country has one of the world’s leading healthcare infrastructures, with advanced medical technology and highly trained professionals. Health services are relatively affordable due to the national health insurance system, which covers both nationals and expatriates, ensuring comprehensive access to medical treatments and preventive care."
  img="/image3.png" 
  alt="Healthcare Infrastructure" 
  title="Healthcare Infrastructure" 
  index="3"
  isImageFirst={true}
/>

<WhySection 
  text="Living in South Korea offers a unique opportunity to immerse oneself in a deep and vibrant culture. The country’s rich history is reflected in its many palaces, temples, and historical sites, while its contemporary culture is vividly displayed through music, art, and festivals. Beyond the global phenomenon of K-pop, the cultural fabric of South Korea is a colorful tapestry of traditions and modernity, providing a stimulating environment for all residents."
  img="/image4.png" 
  alt="Cultural Richness" 
  title="Cultural Richness" 
  index="4"
/>

<WhySection 
  text="As a hub of technological innovation, South Korea is an exciting place for tech enthusiasts and professionals. The nation leads in areas such as robotics, digital currencies, and smart infrastructure, making it an attractive destination for tech talent and entrepreneurs. Cities like Seoul offer a dynamic blend of technology and lifestyle, with smart homes, efficient public transport, and ubiquitous connectivity."
  img="/image5.png" 
  alt="Technological Advancement" 
  title="Technological Advancement" 
  index="5"
  isImageFirst={true}
/>

<WhySection 
  text="Despite its technological facade, South Korea is a country of immense natural beauty, featuring mountains, forests, and islands that offer peaceful retreats from urban life. The four distinct seasons provide a scenic backdrop year-round, with lush springs, vibrant autumns, snowy winters, and warm summers. Activities like hiking, skiing, and beach holidays are popular among locals and expatriates alike."
  img="/image6.png" 
  alt="Natural Beauty and Geography" 
  title="Natural Beauty and Geography" 
  index="6"
/>

<WhySection 
  text="South Korea is known for its low crime rates, making it one of the safest countries in the world. The sense of security is complemented by a stable political environment and a disciplined approach to law and order. This stability is a crucial factor for individuals and families considering a move, especially those seeking a safe environment for raising children."
  img="/image7.png" 
  alt="Social Stability and Safety" 
  title="Social Stability and Safety" 
  index="7"
  isImageFirst={true}
/>

                </Row>
                <Row className="my-5">
  <Col>
    <p>
      Join us at The Korean Immigration Express as we guide you through the fascinating journey of making South Korea your new home. Discover why this remarkable country is a magnet for talent, creativity, and dreams. Whether you are looking to advance your career, benefit from a top-tier education system, or simply enjoy a rich cultural experience in one of the world's most vibrant societies, South Korea offers a unique blend of opportunities and experiences that are second to none. Embrace a future where tradition and innovation intersect in the most harmonious ways, and where your potential can truly flourish. Let South Korea be the place where your ambitions take flight.
    </p>
    <Button variant="danger" href="/visa-application-form.pdf" target="_blank">Get Your Visa</Button>
  </Col>
</Row>

            </Container>
        </div> 
    )
}
