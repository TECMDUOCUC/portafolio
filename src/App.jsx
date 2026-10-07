import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import CircleImage from './components/CircleImage';
import "/src/App.css";

function App() {
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Mi portafolio</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#about">Mis proyectos</Nav.Link>
            <Nav.Link href="#projects">Acerca de mi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <section className='py-5 w-100 marine2 text-white'>
        <Container 
          className="my-4 text-center image-column"
        >
          <CircleImage
            path="/public/profile.png"
            text="Foto de perfil"
          />
          <h1 className="display-3 fw-bold">Tomás C.</h1>
          <p className="lead">Estudiante de DUOC UC</p>
        </Container>
      </section>
      

      <Container id="projects" className="my-5 text-white">
        <h2 className="mb-4">Projects</h2>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <Card className='card text-white'>
              <Card.Body>
                <Card.Title>Portafolio</Card.Title>
                <Card.Text>Un portafolio contruido en bootstrap, Node JS y Vite</Card.Text>
                <Button variant="outline-primary" href="https://github.com/TECMDUOCUC/portafolio" target="_blank">
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      
    </>
  );
}

export default App;