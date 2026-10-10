import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-5 pb-4 mt-auto border-top border-dark">
      <Container>
        <Row className="gy-4 align-items-center">
            <Col md={4} className="text-center">
                <h5 className="fw-bold m-0">Mi portafolio.</h5>
            </Col>
    
          <Col xs={6} md={4} className="d-flex flex-column">
            <h6 className="text-uppercase text-secondary fw-semibold mb-3">
              Navegación
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a href="#home" className="footer-link">Inicio</a>
              </li>
              <li>
                <a href="#projects" className="footer-link">Mis proyectos.</a>
              </li>
              <li>
                <a href="#about" className="footer-link">Acerca de mí.</a>
              </li>
              <li>
                <a href="#news" className="footer-link">Noticias.</a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={4} className="d-flex flex-column">
            <h6 className="text-uppercase text-secondary fw-semibold mb-3">
              Contacto
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=to.cornejom@duocuc.cl&su=Contacto+Formal&body=Hola,+vi+tu+portafolio+y..." 
                  className="footer-link"
                >
                  to.cornejom@duocuc.cl.
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/TECMDUOCUC" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  GitHub.
                </a>
              </li>
              <li>
                <Link to="/linkedin" className="footer-link">
                  LinkedIn.
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider my-4" />

        <Row className="align-items-center small text-secondary">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            © {currentYear} Mi Portafolio. Todos los derechos reservados.
          </Col>
          <Col md={6} className="text-center text-md-end">
            Construido con React, Vite y Bootstrap.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}