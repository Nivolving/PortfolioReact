import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myImage from "../images/myImage.jpeg"


export default function Home() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="mt-4">
        <Col xs={8} md={4}>
        <img src={myImage} alt="Niv Swamy" className="rounded img-thumbnail" />
        </Col>
        <Col xs={4} md={8}>
          <h4>About.</h4>
          Born and raised in India, pursued Bachelors in Computer Science and
          Engineering, Anna University. Worked in Infosys as Senior systems
          Engineer for 4 years. I have worked in couple of projects. First
          project with Astrazeneca, UK based pharma, worked as Citrix tool
          Admin. Second project was with Bank of America as Risk and compliance
          analyst. Moved to the states in 2016 after marriage.
          <h4>Life in States.</h4>
          My first city was Atlanta,GA. Definietly a stranger land but started
          exploring the place i lived in. Adopted a sweet four legged boy and
          named him Jon. Made a handful of good friends. Rescused couple of dogs
          and found them forever home. Passionate about dog sitting. I have
          worked in Publix and Albertsons as bakery clerk and deli clerk. From
          the Deli to the bakery from Cooking chicken to baking cookies i have
          been everywhere.
          <h4>Profession & Passion.</h4>
          At present I am working as a Azure cloud computing engineer with
          Mindtree LTD, Bellevue. Great team and Engaging job. But my career was
          Definietly missing the flavor. I strongly believe that anyone with
          good resource and great passion can go miles, coming from computer
          science background never had a chance to work in developement side of
          computers also never had good hands on experience with developement,
          thats the reason i joined this bootcamp with University of Washington.
        </Col>
      </Row>
    </Container>
  );
}
