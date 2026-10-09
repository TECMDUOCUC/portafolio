import {Navbar, Container, Nav} from "react-bootstrap";

export default function Header() {
    return (
    <Navbar bg="black" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Mi portafolio.</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#projects">Mis proyectos.</Nav.Link>
            <Nav.Link href="#about">Acerca de mi.</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
);
}