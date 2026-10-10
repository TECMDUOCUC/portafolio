import { Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";

export default function NewsSection({ sectionTitle, items }) {
  return (
    <section className="my-5">
      <Container>
        <h3 className="border-bottom border-secondary pb-2 mb-4 text-white">
          {sectionTitle}
        </h3>
        <Row>
          {items.map((item) => (
            <NewsCard
              key={item.id}
              titulo={item.titulo}
              fecha={item.fecha}
              contenido={item.contenido}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}