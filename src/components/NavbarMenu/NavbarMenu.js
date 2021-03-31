import React, { useContext } from 'react';
import { Container, Nav, Navbar, button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const NavbarMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div>
                <Container className="py-5">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/" >Safe Travels</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="collapse navbar-collapse flex-row-reverse ">
                                <h3>{loggedInUser.name}</h3>
                                <Link to="/login"><button style={{ margin: "5px", backgroundColor: "green", color: "white" }} variant="success">Log In</button></Link>
                                <Nav.Link href="/">Home</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
};

export default NavbarMenu;