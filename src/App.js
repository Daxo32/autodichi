
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./App.css"
import { Container, Row, Col, Alert, Nav, NavItem, NavLink } from "shards-react";
import RenderFormDichiarazione from './components/RenderFormDichiarazione'


function App() {
  return (
    <Container fluid>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col sm="12">
            <h1 className="text-center main-title">Genera la tua autodichiarazione </h1><br />
            <p className="lead text-center">
              Compila i campi seguenti per generare la tua autodichiarazione
            </p>
            <Alert theme="light">
              <b>⚠️  &nbsp; Attenzione!</b> Abbiamo aggiornato il modello all'<a href="https://www.interno.gov.it/it/notizie/aggiornato-modello-autodichiarazioni" target="_blank">ultima versione</a> rilasciata dal Ministero dell'Interno 🇮🇹
            </Alert>
          </Col>
        </Row>
        <RenderFormDichiarazione />
        <footer class="my-4 pt-4 text-muted text-center text-small">
          <p class="mb-1">
            &copy; 2020
            <a target="_blank" href="https://www.linkedin.com/in/davide-canci-638a77140/"> &nbsp;Davide Canci</a>
            &nbsp;-&nbsp;
            <a target="_blank" href="https://github.com/Daxo32/autodichi">Source Code</a>
          </p>
        </footer>
      </Container>
    </Container>
  );
}

export default App;
