import {Container, Row, Carousel, Col, Card, Button,} from 'react-bootstrap';

// import './app-slider.css'


// const style = {
//   textAlign: "center"
// }

const HomePage = () => {
  return (
    <Container>
            <Row>
              <Col sm={8}>           
    <Carousel data-bs-theme="dark"  style={{marginTop:"40px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st2.depositphotos.com/1518767/10329/i/600/depositphotos_103297746-stock-photo-chef-garnishing-meal-on-counter.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>Il nostro Chef usa la sua conoscenza e il suo talento per creare menù unici basati sulle eccellenze gastronomiche</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st2.depositphotos.com/23527078/43100/i/600/depositphotos_431009462-stock-photo-food-delivery-courier-driving-order.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1899403/2198/i/600/depositphotos_21980375-stock-photo-indoor-wedding-reception-hall-with.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4>Descrizione del ristorante</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Col>
  <Col sm={4} style={{ textAlign: "center", marginTop:"40px" }}>
    <Card style={{ textAlign: "center", fontFamily: "font-noto" }}>
    <Card.Body>
    <Card.Title><h4>Chi siamo</h4></Card.Title>
    <h5>Pesto è un ristorante italiano a conduzione familiare che offre una combinazione di ingredienti freschi e autentica cucina italiana.</h5>
    <h5>Faremo in modo che ti vengano serviti i piatti italiani più autentici e freschi, offrendo al contempo il miglior servizio clienti. La nostra cucina si impegna a fornire ai nostri ospiti la migliore cucina italiana.</h5>
   <Card.Img variant="top"
          src="https://st3.depositphotos.com/9881890/17718/i/600/depositphotos_177186116-stock-photo-chef-holding-plate-fried-vegetables.jpg/100px180"/>
 </Card.Body>
 </Card>
 </Col>
    </Row>
    <Row>
      <h2 style={{ textAlign: "center",marginTop:"20px", fontFamily: "font-noto" }}>Eventi</h2>
       <Col sm style={{ textAlign: "center" }}>
      <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://st.depositphotos.com/1770836/1396/i/450/depositphotos_13962832-stock-photo-fireworks.jpg/100px180" />
      <Card.Body>
        <Card.Title>Festa</Card.Title>
        <Card.Text>
        28 Agosto: I Fuochi di Sant'Ermete 
        al Master-Chef
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://st4.depositphotos.com/1000389/28641/i/450/depositphotos_286414086-stock-photo-woman-holding-delicious-classic-iced.jpg/100px180" />
      <Card.Body>
        <Card.Title>Cena</Card.Title>
        <Card.Text>
        Aperitivo sulla spiaggia
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://st.depositphotos.com/1772227/4642/i/450/depositphotos_46422591-stock-photo-beach-wedding-ceremony.jpg/100px180" />
      <Card.Body>
        <Card.Title>Eventi Privati</Card.Title>
        <Card.Text>
        Da Master-Chef puoi organizzare il tuo indimenticabile party.
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
      <h2 style={{ textAlign: "center",marginTop:"20px", fontFamily: "font-noto" }}>Piatti popolari</h2>
       <Col sm style={{ textAlign: "center" }}>
      <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://st.depositphotos.com/1770836/1396/i/450/depositphotos_13962832-stock-photo-fireworks.jpg/100px180" />
      <Card.Body>
        <Card.Title>Festa</Card.Title>
        <Card.Text>
        28 Agosto: I Fuochi di Sant'Ermete 
        al Master-Chef
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://st4.depositphotos.com/1000389/28641/i/450/depositphotos_286414086-stock-photo-woman-holding-delicious-classic-iced.jpg/100px180" />
      <Card.Body>
        <Card.Title>Cena</Card.Title>
        <Card.Text>
        Aperitivo sulla spiaggia
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://st.depositphotos.com/1772227/4642/i/450/depositphotos_46422591-stock-photo-beach-wedding-ceremony.jpg/100px180" />
      <Card.Body>
        <Card.Title>Eventi Privati</Card.Title>
        <Card.Text>
        Da Master-Chef puoi organizzare il tuo indimenticabile party.
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body>
    </Card>
  </Col>
  </Row>
    </Container>
  );
}
    
export default HomePage;