import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/twitter.svg";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://github.com/vinjan23"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://twitter.com/vjanwil" target="_blank"><img src={navIcon3} alt="Twitter" /></a>
            </div>
            <p>Made with ❤️ Vinjan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
