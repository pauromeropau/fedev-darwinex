
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Nav, Image, Navbar, Dropdown, Container, ListGroup} from '@themesberg/react-bootstrap';

import NOTIFICATIONS_DATA from "../data/notifications";
import Profile from "../assets/img/team/profile-picture.jpeg";


const NavBar = (props) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };


  const Notification = (props) => {
    const { link, title, time, number, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="ps-2  ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{title}</h4>
              </div>
              <div className="text-end">
              <p className="font-bolder mt-1 mb-0">{number}</p>
              </div>
            </div>
            <small className={readClassName}>{time}</small>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-end w-100 mb-2">
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
              <Dropdown.Toggle as={Nav.Link} className="text-white icon-notifications me-lg-3">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faBell} className="bell-shake" />
                  {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                  </Nav.Link>
                  {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}
                  <Dropdown.Item className="text-center text-primary fw-bold py-3">
                    Go to user profile
                  </Dropdown.Item>
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image src={Profile} className="user-avatar md-avatar rounded-circle" />
                  <div className="media-body ms-2 text-white align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">Paula Romero</span>
                  </div>
                </div>
              </Dropdown.Toggle>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavBar; 