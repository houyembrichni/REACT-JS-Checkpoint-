import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My first</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 style={{ color: " BLACK" }}> My First React Project </h1>
      <CardGroup style={{ marginTop: "30px" }}>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.tourmag.com/photo/art/grande/67984859-47943899.jpg?v=1665757294"
            style={{ width: "450px", height: "350px" }}
          />
          <Card.Body>
            <Card.Title>New York</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Cette région s'étend sur quatre États (New York, New Jersey,
              Connecticut, Pennsylvanie) et quelque 17 400 km2 . Sa population
              est de 18,8 millions d'habitants
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src=" https://a.cdn-hotels.com/gdcs/production96/d1779/f84ca55a-b42a-41d9-9f0f-e1a9f65bbadc.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            style={{ width: "450px", height: "350px" }}
          />
          <Card.Body>
            <Card.Title> Dubai</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Dubaï est une ville et un émirat des Émirats arabes unis réputé
              pour son shopping de luxe, son architecture ultramoderne et sa vie
              nocturne animée
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Factu.2Fdossiers-d-actualite.2Fsans-travail-en-france-elle-ouvre-un-hotel-a-bali-22277.2F13538709-1-fre-FR.2Fsans-travail-en-france-elle-part-a-bali-ouvrir-une-chambre-d-hotes.2Ejpg/1200x900/quality/80/crop-from/center/sans-travail-en-france-elle-part-a-bali-ouvrir-une-chambre-d-hotes.jpeg"
            style={{ width: "450px", height: "350px" }}
          />
          <Card.Body>
            <Card.Title> Bali</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Bali est une île indonésienne célèbre pour ses montagnes
              volcaniques boisées, ses rizières, ses plages et ses récifs
              coralliens. L’île abrite des sites religieux, comme le temple
              d’Uluwatu
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
