import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import CircleImage from '/src/components/CircleImage';
import "/src/App.css";
import AboutMe from '/src/components/AboutMe';
import Header from '/src/components/Header';
import Project from '/src/components/Project';
import Footer from '/src/components/Footer';
import NewsSection from "/src/components/News";
import newsData from "/src/data/newsData.json";


export default function Index() {
  return (
    <>
      <Header/>
      <section className='py-5 w-100 marine2 text-white' id="home">
        <Container 
          className="my-4 text-center image-column"
        >
          <CircleImage
            path="/profile.png"
            text="Foto de perfil"
          />
          <h1 className="display-3 fw-bold">Tomás C.</h1>
          <p className="lead">Estudiante de DUOC UC.</p>
        </Container>
      </section>
      
      <Container id="projects" className="my-5 text-white">
        <h2 className="mb-4">Proyectos</h2>
        <Row>
          <Project
            title = "Portafolio"
            description="Un portafolio contruido en bootstrap, Node JS y Vite."
            buttonName="Github"
            buttonURI="https://github.com/TECMDUOCUC/portafolio"
            imageSrc="/portafolio.png"
          />

          <Project
            title = "PIECA"
            description="Una página web de e-commerce diseñada en HTML + CSS + JS para la venta de piedras."
            buttonName="Github"
            buttonURI="https://tecmduocuc.github.io/PIECA/"
            imageSrc="/PIECA.png"
          />

          <Project
            title = "Junta de Vecinos"
            description="Una app de Android diseñada para la gestión de una junta de vecinos."
            buttonName="Github"
            buttonURI="https://github.com/naa-chi/Android-Development-Project"
            imageSrc="/junta.png"
          />

          <Project
            title = "Beats Beats Purgatory"
            description="Un juego de ritmo hecho en Godot estilo beat-em-up"
            buttonName="Github"
            buttonURI="https://github.com/martinkuruzg-hue/Beats-Beats-Purgatory-v2"
            imageSrc="/bbp.png"
          />
        </Row>
      </Container>

      <Container id="about" className="my-5 text-white">
        <h2 className="mb-4 text-center">Acerca de mi.</h2>
        <AboutMe/>
      </Container>

      <Container id="news" className="my-5 text-white">
        <h2 className="mb-4 text-center">Noticias</h2>
        <NewsSection
          sectionTitle="Noticias Principales"
          items={newsData.principales}
        />
        <NewsSection
          sectionTitle="Innovación y Tecnología"
          items={newsData.tecnologia}
        />
      </Container>

      <Footer/>
    </>
  );
}
