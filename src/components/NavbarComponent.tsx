import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" variant="light" className="custom-nav" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ALLPLAT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/about-us">About</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/products">Products</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/team">Team</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/contact-us">Contact Us</Link>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />

    </>
  );
}

export default NavbarComponent;