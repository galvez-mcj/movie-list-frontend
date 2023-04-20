// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": "#F57B09", "fontWeight": "bold"}}>
                <img src={logo} alt="brand logo" style={{"width": "30px", "height": "30px", "marginRight": "10px"}}/>
                The Watch
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className="me-auto my-2 my-lg-o"
                    style={{maxHeight: '100px'}}
                    navbarScroll>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchlist">Watch List</NavLink>
                </Nav>
                {/* No functionalities yet */}
                <Button variant="outline-danger" className="me-2">Login</Button>
                <Button variant="outline-danger">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
