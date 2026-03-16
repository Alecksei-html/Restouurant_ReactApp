import {Container, Row, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-fotter/app-fotter.css'


const AppFooter = () => {
    
        return (
            <Container>
                <Row>
            <div className='Footer'>
            <Nav className="justify-content-center" activeKey="/home" style={{height: '50px'}}>
        <Nav.Item>
        <Link className="nav-link" to="/" style={{color: 'white'}}><b>Home</b></Link>
        </Nav.Item>
        <div className="vr" style={{height: '50px', color: 'white'}}/>
        <Nav.Item>
          <Link className="nav-link" to="/Menu" style={{color: 'white'}}>Menu</Link>
        </Nav.Item>
        <div className="vr" style={{height: '50px', color: 'white'}}/>
        <Nav.Item>
        <Link className="nav-link" to="/Ordine" style={{color: 'white'}}>Ordine</Link>
        </Nav.Item>
        <div className="vr" style={{height: '50px', color: 'white'}}/>
        <Nav.Item>
          <Link className="nav-link" to="/Contacts" style={{color: 'white'}}>Contacts</Link>
        </Nav.Item>
        <div className="vr" style={{height: '50px', color: 'white'}}/>
        <Nav.Item>
          <Link className="nav-link" to="/Recensioni" style={{color: 'white'}}>Recensioni</Link>
        </Nav.Item>
        <div className="vr" style={{height: '50px', color: 'white'}}/>
        <Nav.Item>
          <Link className="nav-link" to="/Eventi" style={{color: 'white'}}>Eventi</Link>
        </Nav.Item>
      </Nav>
                <h6 style={{color: 'white', position: 'absolute', top:'60%'}}><b>&copy; 2023 "Master-Chef.it" - Armonia di gusto. Forte Dei Marmi, viale Italico xxx. +39(xхх)ххх-хх-хх</b></h6>
             </div>
            </Row>
            </Container>
    // <Container>
    //     <Row style={{ textAlign: "center", marginTop:"10px", fontFamily: "font-noto"}}>
    //           <p><b>&copy; 2023 "Master-Chef.it" - Armonia di gusto. Forte Dei Marmi, viale Italico xxx. +39(xхх)ххх-хх-хх</b></p>
    //     </Row>
    // </Container>
    );
}
                            

export default AppFooter;
