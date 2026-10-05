import { Container, Navbar, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div>
      {/* Bootstrap Navbar Component */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="mt-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <h1>Welcome to My Portfolio</h1>
          <p className="lead">Built with React, Vite, and Bootstrap.</p>
          <Button variant="primary">Contact Me</Button>
        </div>

        {/* Bootstrap Cards */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>A cool project built with JavaScript and React.</Card.Text>
                <Button variant="outline-primary">View Project</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;