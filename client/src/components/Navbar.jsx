import react from "react";
import {Navbar, Nav, Container , NavDropdown} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="lg" className=""    style={{ backgroundColor: 'green' }}>
        <Container>
            <Navbar.Brand href="/" className="heading">loveFood</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
            <Nav.Link href="/">Homes</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            <Nav.Link href="/SignUp">SignUp</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <NavDropdown.Item href="/">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <div className="display flex gap-9">
            <div  id="basic-navbar-nav" className=" text-white font-bold ">
            <Nav.Link href="/ChatbootUI">ChatBot</Nav.Link>
            </div>
            <div  id="basic-navbar-nav" className=" text-white font-bold ">
            <Nav.Link href="/SignIn">Login</Nav.Link>
            </div>
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;