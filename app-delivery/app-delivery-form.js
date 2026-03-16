import {Form, Container, Row} from 'react-bootstrap';

import './app-delivery-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// const info = {
//         textAlign: "center",
        
//     }

const AppDelivery = () => {
    return (
      <Container>
        <Row>
        <div className="info" style={{ fontFamily: "font-noto" }}>
             <h4>Consegna dei cibi dal ristorante presenti nel menu, nonché cene e pranzi di lavoro</h4>
            <h5>Consegna menù da 50 euro nel raggio di 10 km gratuita.</h5>
            <h5>Puoi anche ordinare da noi cene complesse e pranzi di lavoro.</h5>
            <h5>In caso di domande, il nostro amministratore ti consulterà.</h5>
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
      </Row>
      </Container>
    );
    // const forms = document.querySelectorAll('Form');

    // function postData (Form) {
    //     Form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         const request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');

    //         const formData = new FormData(Form)
    //     });
    // }
  }

export default AppDelivery;