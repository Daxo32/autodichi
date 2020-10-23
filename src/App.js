
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Container, Row, Col, Alert } from "shards-react";
import RenderFormDichiarazione from './components/RenderFormDichiarazione'


function App() {
  return (
    <Container>
      <Row style={{ marginTop: "30px" }}>
        <Col sm="12">
          <h2 className="enroll-title">Genera la tua autodichiarazione</h2><br />
          <p class="lead">
            Compila i campi seguenti per generare la tua autodichiarazione per poter circolare!
          </p>
          <Alert theme="light">
            <b>Attenzione!</b> Abbiamo aggiornato il modello all'<a href="https://www.interno.gov.it/it/notizie/aggiornato-modello-autodichiarazioni" target="_blank">ultima versione</a> rilasciata dal Ministero dell'Interno
      </Alert>
        </Col>
      </Row>
      <RenderFormDichiarazione />
    </Container>

  );
}

export default App;
