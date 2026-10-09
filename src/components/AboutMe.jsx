import {Row, Col, Badge, Button } from 'react-bootstrap';

export default function AboutMe() {
  const skills = [
    "React", "Vite", "Bootstrap", "AWS", "Luau",
    "Blender", "Proteus 8", "Android Studio", "Godot",
    "Python", "Arduino", "Linux", "HTML", "CSS", "JavaScript",
    "Audacity", "Oracle SQL", "Java", "Kotlin", "Springboot",
    "Oracle Cloud Infrastructure"
  ];

  return (
        <Row className="justify-content-center g-5">
          <Col md={7}>
            <p className="lead text-light">
              Soy un desarollador Fullstack, me especializo en
              crear interfaces limpias y fáciles de usar, junto
              con código eficiente y limpio. Actualmente estudio
              en DUOC UC, sin embargo, previamente habia estudiado
              electrónica en mi liceo, por lo que también tengo
              conocimientos de robótica, desarrollo de placas,
              modelaje en 3d y soldaduras de componentes eletrónicos.
              Llevo programando desde el año 2024, sin embargo, todos
              los días aprendo algo nuevo.
            </p>

            <div className="my-4">
              <h6 className="text-uppercase text-secondary fw-semibold mb-2">
                Habilidades que poseo
              </h6>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    bg="secondary" 
                    className="px-3 py-2 fw-normal fs-6 text-light"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="d-flex gap-3 pt-2 justify-content-center">
              <Button variant="primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=to.cornejom@duocuc.cl&su=Contacto+Formal&body=Hola,+vi+tu+portafolio+y...">
                  Póngase en contacto conmigo.
              </Button>
            </div>
          </Col>
        </Row>
  );
}