import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./clock.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Accepting timezone as a prop */}
          <Container>
            <Row>
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <Row>
              <Col>Asia/singapore</Col>
              <Col>
                <Clock lang="en-GB" timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row>
              <Col>Africa/Cairo</Col>
              <Col>
                <Clock lang="ja-JP" timeZone="Africa/Cairo" />
              </Col>
            </Row>
            <Row>
              <Col>Indian/Chagos</Col>
              <Col>
                <Clock lang="nl-BE" timeZone="Indian/Chagos" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
