import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="">
        <Container className="text-center text-md-start mt-5">
          {/* Grid row */}
          <Row className="mt-3">
            {/* Grid columns for company info, products, useful links, and contact */}
          </Row>
          {/* Grid row */}
        </Container>
      </section>
      <section className="">
        <Container className="text-center text-md-start mt-5">
          {/* Grid row */}
          <Row className="mt-3">
            {/* Grid column */}
            <Col md={3} lg={4} xl={3} mx-auto mb-4>
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>NORTH FORBERRY
              </h6>

              <p>
                123 Helwan St.Any City,ST 12345
                <br />
                <abbr title="Phone">P:0227156103</abbr>
                <br />
                <abbr title="Email">E: None@reallygreatsite.com</abbr>

                
               
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={2} lg={2} xl={2} mx-auto mb-4>
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="https://www.w3schools.com/html/" className="text-reset" target='_blank'>HTML</a>
              </p>
              <p>  
                <a href="https://www.w3schools.com/css/default.asp" className="text-reset"target='_blank'>CSS</a>
              </p>
              <p>
                <a href="https://www.w3schools.com/js/default.asp" className="text-reset" target='_blank'>JS</a>
              </p>
              <p>
                <a href="https://www.w3schools.com/react/default.asp" className="text-reset"target='_blank'>React</a>
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={3} lg={2} xl={2} mx-auto mb-4>
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">CLUB HOURS</h6>
              <h6> Monday to Saturday 6:00 am to 10:pm </h6>
              <br>
              
              </br>
              <h6> Sunday Closed </h6>

             
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={4} lg={3} xl={3} mx-auto mb-md-0 mb-4>
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </Col>
            {/* Grid column */}
          </Row>
          {/* Grid row */}
        </Container>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MusclesMiki</a>
      </div>
      {/* Copyright */}
      <FontAwesomeIcon icon={faCoffee} />

    </footer>
  );
};

export default Footer;
