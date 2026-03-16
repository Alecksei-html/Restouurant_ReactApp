import {Form, Container, Row, Col, Toast} from 'react-bootstrap';

import './app-reviews-form.css';




const Reviews = () => {
    return (
      <Container>
        <Row>
          <Col md>
        <div className="review" style={{ fontFamily: "font-noto" }}>
           <h4>Condividi la tua opinione sul nostro ristorante</h4>
           <Form>
        <Form.Group className="mb-3" controlId="Form.ControlInput1">
          <Form.Label>Nome e Cognome</Form.Label>
          <Form.Control type="name" placeholder="Nome e Cognome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput2">
          <Form.Label>Celulare</Form.Label>
          <Form.Control type="phone" placeholder="+39 329-123-4567" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
          <Form.Label>Messagio</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <input type="submit" value="Inviare"/>
      </Form>
      </div>
      </Col>
      <Col md>
      <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Nome e Cognome</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Messaggio di testo</Toast.Body>
    </Toast>
      </Col>
      </Row>
      </Container>
    );
  }

export default Reviews;