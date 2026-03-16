import React from "react";
// import GoogleMapReact from 'google-map-react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import MyComponent from "./my-map";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app-contacts-form.css';


const AppContacts = () => {
     return (
    <Container>
            <Row>
              <Col sm={4}>
              <div className="facebook">
                    <Nav.Link href="www.facebook.com"><b>FaceBook</b></Nav.Link>
                    </div>
              <div className="addres"><b>Forte Dei Marmi, viale Italico xxx, +39(xхх)ххх-хх-хх</b>
              </div>
              </Col>
              <Col sm={8}>
              <MyComponent/>
              </Col>
              </Row>
              </Container>
    )
}

export default AppContacts;