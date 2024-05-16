import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./counter.css";
import { Col, Container, Row } from "react-bootstrap";

export const CounterSection = () => {
     function Counter({ start, end, duration, label }) {
       const [count, setCount] = useState(start);
       const counterElement = useRef(null);
       const hasStarted = useRef(false);

       useEffect(() => {
         const observer = new IntersectionObserver(
           (entries) => {
             entries.forEach((entry) => {
               if (entry.isIntersecting && !hasStarted.current) {
                 hasStarted.current = true;
                 let frameRate = 2000 / 60; // 30 fps
                 let totalFrames = Math.round((duration * 1000) / frameRate);
                 let increment = (end - start) / totalFrames;
                 let frame = 0;
                 const counter = setInterval(() => {
                   frame++;
                   const currentCount = Math.min(
                     end,
                     start + increment * frame
                   );
                   setCount(currentCount);
                   if (frame === totalFrames) {
                     clearInterval(counter);
                   }
                 }, frameRate);
               }
             });
           },
           {
             threshold: 0.5, // Trigger when 50% of the element is visible
           }
         );

         if (counterElement.current) {
           observer.observe(counterElement.current);
         }

         return () => {
           if (counterElement.current) {
             observer.unobserve(counterElement.current);
           }
         };
       }, [start, end, duration]);
       return (
         <Col
           md={3}
           className="text-center text-white fw-bold fs-4"
           ref={counterElement}
         >
           <hr />
           <p>{Math.floor(count)}</p>
           <p>{label}</p>
           <hr />
         </Col>
       );
     }

  return (
    <div id="counter">
      <Container fluid="lg" className="d-block p-4">
        <Row>
          <Counter start={0} end={1232} duration={1} label="VISA'S Issued" />
          <Counter start={0} end={64} duration={1} label="Rejections" />
          <Counter
            start={0}
            end={42}
            duration={1}
            label="Current Streak(weeks)"
          />
          <Counter start={0} end={15} duration={1} label="Active Years" />
        </Row>
      </Container>
    </div>
  );
};
