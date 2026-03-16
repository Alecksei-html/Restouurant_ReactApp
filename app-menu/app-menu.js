import {Container, Row, Card} from 'react-bootstrap';

const Menu = () => {
  return (
    <Container>
      <Row>
        {/* <Col xs style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
          <Image src="https://img.freepik.com/free-vector/digital-restaurant-menu-template_52683-45916.jpg?size=626&ext=jpg&uid=R35925002&ga=GA1.2.117691762.1694351884&semt=ais/400x400" thumbnail />
        </Col>
        <Col xs style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
          <Image src="https://img.freepik.com/free-vector/watercolor-wines-menu_23-2147510874.jpg?1&w=740&t=st=1695564903~exp=1695565503~hmac=c0e97c805b60f9945c671768fb34e02759477fff0d44590c2cd48863d430c125/400x400" thumbnail />
        </Col> */}
        <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", marginRight:"30px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/digital-restaurant-menu-template_52683-45916.jpg?size=626&ext=jpg&uid=R35925002&ga=GA1.2.117691762.1694351884&semt=ais/400x400"/>
      {/* <Card.Body>
        <Card.Title>Festa</Card.Title>
        <Card.Text>
        28 Agosto: I Fuochi di Sant'Ermete 
        al Master-Chef
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body> */}
    </Card>
    <Card style={{ width: 'auto', textAlign: "center", marginBottom:"10px", fontFamily: "font-noto"}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-drawn-wine-menu_23-2149482161.jpg?w=740&t=st=1695574595~exp=1695575195~hmac=e8cfc49bd137d12b961730d96ffc9eb98e26d15e3a774a64b19463581e4e5455/400x200"/>
      {/* <Card.Body>
        <Card.Title>Festa</Card.Title>
        <Card.Text>
        28 Agosto: I Fuochi di Sant'Ermete 
        al Master-Chef
        </Card.Text>
        <Button href="#" variant="primary">Scopri di pui</Button>
      </Card.Body> */}
    </Card>
        {/* <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="holder.js/171x180" rounded />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" roundedCircle />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" thumbnail />
      </Col> */}
      </Row>
    </Container>
  );
}

export default Menu;