import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import CircleImage from './components/CircleImage';
import "/src/App.css";
import AboutMe from './components/AboutMe';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header/>

      <section className='py-5 w-100 marine2 text-white' id="home">
        <Container 
          className="my-4 text-center image-column"
        >
          <CircleImage
            path="/public/profile.png"
            text="Foto de perfil"
          />
          <h1 className="display-3 fw-bold">Tomás C.</h1>
          <p className="lead">Estudiante de DUOC UC.</p>
        </Container>
      </section>
      
      {/* TODO: Move this to it's own component */}
      <Container id="projects" className="my-5 text-white">
        <h2 className="mb-4">Proyectos</h2>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <Card className='card text-white'>
              <Card.Body>
                <Card.Title>Portafolio</Card.Title>
                <Card.Text>Un portafolio contruido en bootstrap, Node JS y Vite.</Card.Text>
                <Button variant="outline-primary" href="https://github.com/TECMDUOCUC/portafolio" target="_blank">
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>


          <Col md={6} lg={4} className="mb-4">
            <Card className='card text-white'>
              <Card.Body>
                <Card.Title>PIECA</Card.Title>
                <Card.Text>Una página web de e-commerce diseñada en HTML + CSS + JS para la venta de piedras.</Card.Text>
                <Button variant="outline-primary" href="https://tecmduocuc.github.io/PIECA/" target="_blank">
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
          


          <Col md={6} lg={4} className="mb-4">
            <Card className='card text-white'>
              <Card.Body>
                <Card.Title>Junta de Vecinos</Card.Title>
                <Card.Text>Una app de Android diseñada para la gestión de una junta de vecinos.</Card.Text>
                <Button variant="outline-primary" href="https://github.com/naa-chi/Android-Development-Project" target="_blank">
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>


          <Col md={6} lg={4} className="mb-4">
            <Card className='card text-white'>
              <Card.Body>
                <Card.Title>Beats Beats Purgatory</Card.Title>
                <Card.Text>Un juego de ritmo hecho en Godot estilo beat-em-up.</Card.Text>
                <Button variant="outline-primary" href="https://github.com/martinkuruzg-hue/Beats-Beats-Purgatory-v2" target="_blank">
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>

      <Container id="about" className="my-5 text-white">
        <h2 className="mb-4 text-center">Acerca de mi.</h2>
        <AboutMe/>
      </Container>
    </>
  );
}

export default App;