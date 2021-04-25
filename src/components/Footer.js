
import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card} from '@themesberg/react-bootstrap';

const Footer = (props) => {
  const currentYear = moment().get("year");

  return (
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left text-gray ">
              Copyright © {`${currentYear} `}
              <Card.Link href="https://www.darwinex.com/es/" target="_blank" className="text-white text-decoration-none fw-normal">
                Darwinex
            </Card.Link>
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0 text-gray ">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://www.darwinex.com/es/" target="_blank">
                  About
              </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://www.darwinex.com/es/" target="_blank">
                  Contact
              </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
  );
};
 export default Footer; 