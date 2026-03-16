import {Container, Row, Card, Col} from 'react-bootstrap';

import "./app-event.css"

const Events = () => {
  return (
    <Container>
        <Row>
    <Col sm style={{ textAlign: "center" }}>
    <Card>
    <Card.Img variant="top" src="https://st.depositphotos.com/1770836/1396/i/450/depositphotos_13962832-stock-photo-fireworks.jpg/100px180" />
    <Card.Body>
      <Card.Title>Festa</Card.Title>
      <Card.Text>
      28 Agosto: I Fuochi di Sant'Ermete 
      al Master-Chef
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col sm style={{ textAlign: "center" }}>
  <Card>
    <Card.Img variant="top" src="https://st4.depositphotos.com/1000389/28641/i/450/depositphotos_286414086-stock-photo-woman-holding-delicious-classic-iced.jpg/100px180" />
    <Card.Body>
      <Card.Title>Cena</Card.Title>
      <Card.Text>
      Aperitivo sulla spiaggia
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col sm style={{ textAlign: "center" }}>
  <Card>
    <Card.Img variant="top" src="https://st.depositphotos.com/1772227/4642/i/450/depositphotos_46422591-stock-photo-beach-wedding-ceremony.jpg/100px180" />
    <Card.Body>
      <Card.Title>Eventi Privati</Card.Title>
      <Card.Text>
      Da Master-Chef puoi organizzare il tuo indimenticabile party.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
</Row>
</Container>
  )
}
export default Events;