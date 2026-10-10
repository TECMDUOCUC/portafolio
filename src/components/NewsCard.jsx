import { Col, Card } from "react-bootstrap";

export default function NewsCard({ titulo, fecha, contenido }) {
  return (
    <Col md={6} className="mb-4">
      <Card className="text-white">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-light small">
            {fecha}
          </Card.Subtitle>
          <Card.Title className="h5 mb-3">{titulo}</Card.Title>
          <Card.Text className="flex-grow-1 text-light">
            {contenido}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}