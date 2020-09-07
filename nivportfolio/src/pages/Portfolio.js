import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import WeatherDashboard from "../images/WeatherDashboard.png";
import Cook from "../images/CookWhatYouHave.png";
import Work from "../images/WorkDayScheduler.png";
import Med from "../images/Medhandoff.png";
import Fitness from "../images/Workout.png";
import Eat from "../images/Eatdaburger.png";

export default function Portfolio() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={Cook} />
            <Card.Body>
              <Card.Title>Cook What You Have</Card.Title>
              <Card.Link href="https://haphan64.github.io/CookWhatYouHave/">
                App Link
              </Card.Link>
              <Card.Link href="https://github.com/haphan64/CookWhatYouHave">
                GitRepo
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WeatherDashboard} />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Link href="https://nivolving.github.io/WeatherDashboard/">
                App Link
              </Card.Link>
              <Card.Link href="https://github.com/Nivolving/WeatherDashboard">
                GitRepo
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={Work} />
            <Card.Body>
              <Card.Title>Work Day Scheduler</Card.Title>
              <Card.Link href="https://nivolving.github.io/Work-Day-Scheduler/Develop/index.html">
                App Link
              </Card.Link>
              <Card.Link href="https://github.com/Nivolving/Work-Day-Scheduler">
                GitRepo
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={Med} />
            <Card.Body>
              <Card.Title>Medhandoff</Card.Title>
              <Card.Link href="https://uwproject2bootcamp.herokuapp.com/">
                App Link
              </Card.Link>
              <Card.Link href="https://github.com/chrisjm093/med-handoff">
                GitRepo
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={Eat} />
            <Card.Body>
              <Card.Title>Eat Da Burger</Card.Title>
              <Card.Link href="https://polar-river-03883.herokuapp.com/">
                App Link
              </Card.Link>
              <Card.Link href="https://github.com/Nivolving/Eat-Da-Burger">
                GitRepo
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={Fitness} />
            <Card.Body>
              <Card.Title>Workout Tracker</Card.Title>
              <Card.Link href="https://stormy-coast-26963.herokuapp.com/stats">
                App Link
              </Card.Link>
              <Card.Link href="https://github.com/Nivolving/Workout-Tracker">
                GitRepo
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
