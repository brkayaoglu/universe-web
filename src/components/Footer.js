import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo11 from "../assets/img/logo11.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={18} sm={6}>
            <img src={logo11} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/universeapptr" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/universeapptr/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="textinfo">info@universe.com</p>
          
            <p className="textinfo2">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
