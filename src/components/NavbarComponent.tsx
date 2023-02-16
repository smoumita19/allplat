import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" variant="light" className="custom-nav">
        <Container>
          <Navbar.Brand href="#home">ALLPLAT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link to="/one">About</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/one">Products and Services</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/one">Team</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/one">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />

    </>
  );
}

export default NavbarComponent;