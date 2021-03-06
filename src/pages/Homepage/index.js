import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Router, Route } from "react-router";
import styles from "./index.css";

// import "./AboveTheFold.css";
import HeadNavbar from "../../components/Navbar.js";
import ModalExample from "../../components/PopUpSignUp.js";
import MainJumbotron from "../../components/Jumbotron";
import InventionProcessDeck from "../../components/Decks";
import Pitch from "../../components/clientStories";
import kickstarterLogo from "../../images/kickstarter-logo.png";
import haizolLogo from "../../images/haizol-logo.png";
import sayee from "../../images/sayee.jpeg";
import omar from "../../images/omar.jpeg";
import HelloSign from "../../components/HelloSign";
import StateButton from "../../components/StateButton";
import MailChimpForm from "../../components/mailchimpForm"



// /Users/omar/Desktop/innovationDrive/innovation-drive/src/components/Form.js

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="backgroundContainer">
          {/* <HeadNavbar /> */}
          {/* NDA  */}
          {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vQAYdjs9PouC2hc4rLCHOoa9cYAuuXEnNAq5H0tQ1X94K4rtCQYKqmG62aVGdWZIHemwlEAzJ4beqDZ/pub?embedded=true" width="300px" height="400px" ></iframe> */}
          <Container>
            <MainJumbotron />
          </Container>
          {/* <MailChimpForm /> */}
          <Container>
            {/* <h1>Customer Journey</h1> */}
            {/* ADD BOOTSRAP CAROUSEL HERE */}
          </Container>
          <Container>
            <h3>The Invention Process</h3>
            {/* ADD BOOTSRAP CAROUSEL HERE */}
          </Container>
          <Container />
        </div>
        <Container>
          <Pitch />
        </Container>
        <br />
        <br />
        {/* <InventionProcessDeck /> */}
        {/* <Container className="YellowStyling">
          <Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Row>
        </Container> */}
        <br />
        <br />
        <ModalExample />
        <br />
        <br />
        <br />
        <Container className="Logos">
          <Row>
            {/* ADD LOGOS HERE */}
            <Col>
              <a href="https://www.kickstarter.com" target="_blank">
                {" "}
                <img
                  src={kickstarterLogo}
                  className="kickstarter-logo"
                  alt="logo"
                />
              </a>
            </Col>
            <Col>
              <a href="https://www.haizol.com" target="_blank">
                <img src={haizolLogo} className="haizol-logo" alt="logo" />
              </a>
            </Col>
          </Row>
          <Row />
        </Container>
        <br />
        <br />
        <br />

        {/* <StateButton /> */}
      </div>
    );
  }
}
