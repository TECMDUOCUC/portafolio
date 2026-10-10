import { Col, Card, Button } from "react-bootstrap";

export default function Project({ title, description, buttonName, buttonURI, imageSrc }) {
  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="project-card text-white">
        {imageSrc && (
          <div
            className="project-card-image"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        )}

        <Card.Body className="project-card-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="flex-grow-1">{description}</Card.Text>
          <div>
            <Button variant="outline-primary" href={buttonURI} target="_blank" rel="noopener noreferrer">
              {buttonName}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}