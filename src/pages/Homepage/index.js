import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styles from "./index.css";

// import "./AboveTheFold.css";
import HeadNavbar from "../../components/Navbar.js";
import ModalExample from "../../components/PopUpSignUp.js";
import MainJumbotron from "../../components/Jumbotron";
import InventionProcessDeck from "../../components/Decks";
import ClientStories from "../../components/clientStories";

// /Users/omar/Desktop/innovationDrive/innovation-drive/src/components/Form.js

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="backgroundContainer">
          <HeadNavbar />
          <Container>
            <MainJumbotron />
          </Container>

          <Container>
            <h1>Customer Journey</h1>
            {/* ADD BOOTSRAP CAROUSEL HERE */}
          </Container>
          <Container>
            <h3>The Invention Process</h3>
            {/* ADD BOOTSRAP CAROUSEL HERE */}
          </Container>
          <Container />
        </div>
        <Container>
          <ClientStories />
        </Container>
       <br/>
       <br/>
        <InventionProcessDeck />
        <Container className="YellowStyling">
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
        </Container>
      </div>
    );
  }
}
