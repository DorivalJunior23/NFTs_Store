import React from "react";
import './Footer.css'

import { Container, Row, Col,  ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const MY__ACCOUNT = [
    {
      display: "Author Profile",
      url: "/seller-profile",
    },
    {
      display: "Create Item",
      url: "/create",
    },
    {
      display: "Collection",
      url: "/market",
    },
    {
      display: "Edit Profile",
      url: "/edit-profile",
    },
  ];
  
  const RESOURCES = [
    {
      display: "Help Center",
      url: "#",
    },
    {
      display: "Partner",
      url: "#",
    },
    {
      display: "Community",
      url: "#",
    },
    {
      display: "Activity",
      url: "#",
    },
  ];
  
  const COMPANY = [
    {
      display: "About",
      url: "https://dorivaljunior.surge.sh/",
    },
    {
      display: "Career",
      url: "https://www.linkedin.com/in/dorival-soares-da-silva-junior-174228220/",
    },
    {
      display: "Ranking",
      url: "#",
    },
    {
      display: "Contact Us",
      url: "/contact",
    },
  ];

const Footer = () => {
    return  <footer className="footer">
    <Container>
      <Row>
        <Col lg="3" md="6" sm="6" className="mb-4">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                <i class="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
            <p className="pt-4">
            This website was created <br/> 
            as a personal project.
            </p>
             
          </div>
        </Col>

        <Col lg="2" md="3" sm="6" className="mb-4">
          <h5>My Account</h5>
          <ListGroup className="list__group">
            {MY__ACCOUNT.map((item, index) => (
              <ListGroupItem key={index} className="list__item">
                <Link to={item.url}> {item.display} </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        <Col lg="2" md="3" sm="6" className="mb-4">
          <h5>Resources</h5>
          <ListGroup className="list__group">
            {RESOURCES.map((item, index) => (
              <ListGroupItem key={index} className="list__item">
                <Link to={item.url}> {item.display} </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        <Col lg="2" md="3" sm="6" className="mb-4">
          <h5>Company</h5>
          <ListGroup className="list__group">
            {COMPANY.map((item, index) => (
              <ListGroupItem key={index} className="list__item">
                <Link to={item.url}> {item.display} </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        <Col lg="3" md="6" sm="6" className="mb-4">
          <h5>Newsletter</h5>
          <input type="text" className="newsletter" placeholder="Email" />
          <div className="social__links d-flex gap-3 align-items-center ">
            <span>
              <Link to="https://github.com/DorivalJunior23">
              <i class="ri-github-fill"></i>
              </Link>
            </span>
            <span>
              <Link to="https://www.linkedin.com/in/dorival-soares-da-silva-junior-174228220/">
              <i class="ri-linkedin-box-fill"></i>
              </Link>
            </span>
            <span>
              <Link to="https://dorivaljunior.surge.sh/">
              <i class="ri-global-line"></i>
              </Link>
            </span>
            <span>
              <Link to="https://twitter.com/Dorival_jr_">
              <i class="ri-twitter-x-fill"></i>
              </Link>
            </span>
            <span>
              <Link to="mailto:dorivaljunior23@outlook.com">
              <i class="ri-mail-line"></i>
              </Link>
            </span>
          </div>
        </Col>

        <Col lg="12" className=" mt-4 text-center">
          <p className="copyright">
            {" "}
            Copyrights 2023, Developed by Dorival Junior. @DorivalJunior23 All Rights Reserved.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
}
export default Footer;