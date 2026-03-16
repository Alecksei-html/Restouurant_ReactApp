import Logo from '../app-header/Logo.png';
import './app-header.css';
import {Container, Nav, Stack, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import AppDelivery from '../app-delivery/app-delivery-form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Stack from 'react-bootstrap/Stack';

import 'bootstrap/dist/css/bootstrap.min.css';


const AppHeader = () => {
    return (
                  <Container>
                    
          <Stack direction="horizontal" gap={3}>
          <img src={Logo} alt="Master-Chef - Armonia di gusto" className="png"/>
                {/* <div className="font-noto">
                    <Nav.Link href="www.facebook.com"><b>FaceBook</b></Nav.Link>
                    </div> */}
                <div className="p-2 ms-auto"></div>
                {/* <div className="vr" /> */}
                <div className="font-noto"><b>Forte Dei Marmi, viale Italico xxx, +39(xхх)ххх-хх-хх</b></div>
    </Stack>
    
    <Navbar collapseOnSelect expand="lg" className="header">
          <Navbar.Brand  title="Master-Chef - Armonia di gusto"><img src={Logo} alt="Master-Chef - Armonia di gusto" className="png"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                 <ul className="navbar-nav">
                     <li className="nav-item">
                         <Link className="nav-link" to="/"><b>Home</b></Link>
                     </li> 
                     {/* <li className="nav-item">
                         <a className="nav-link" href="about_us.html">Consegna</a>
                     </li>  */}
                     <li className="nav-item">
                         <Link className="nav-link" to="/Menu"><b>Menu</b></Link>
                     </li> 
                     <li className="nav-item">
                         <Link className="nav-link" to="/Ordine"><b>Ordine</b></Link>
                     </li> 
                     <li className="nav-item">
                         <Link className="nav-link" to="/Contacts"><b>Contacts</b></Link>
                     </li> 
                     <li className="nav-item">
                         <Link className="nav-link" to="/Recensioni"><b>Recensioni</b></Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/Eventi"><b>Eventi</b></Link>
                     </li>
                 </ul>
                </Nav>
             </Navbar.Collapse>

             <Stack direction="horizontal" gap={3}>
                <div className="p-2"></div>
                <div className="p-2 ms-auto">
                    <Nav.Link href="#"><img width="16" height="16" src="https://img.icons8.com/fluency/48/italy-circular.png" alt="italy-circular"/></Nav.Link></div>
                    <div className="p-2">
                        <Nav.Link href="#"><img width="16" height="16" src="https://img.icons8.com/fluency/32/ukraine-circular.png" alt="ukraine-circular"/></Nav.Link></div>
                    <div className="p-2">
                        <Nav.Link href="#"><img width="16" height="16" src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="great-britain-circular"/></Nav.Link></div>
             </Stack>

            </Navbar>
            
          </Container>
        
    )
}

export default AppHeader;