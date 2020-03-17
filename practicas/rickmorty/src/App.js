import React, {Fragment, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Enlace from './componentes/Enlace';
import Formulario from './componentes/Formulario';

function App() {
  //State
  const [totalPerfiles, traerTotal] = useState(0);
  return (
    <Fragment>
      <div className="bg-dark color-white text-center py-1">
      <Container>
        <Row>
          <Col xs="12" md="4" className="p-3">
            <Enlace 
              texto = "Comenzar"
              link = "#"
            />
          </Col>
          <Col xs="12" md="4" className="p-3">
            <Enlace 
              texto = "Local"
              link = "#"
            />
          </Col>
          <Col xs="12" md="4" className="p-3">
            <Enlace 
              texto = "DataBase"
              link = "#"
            />
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <div className="py-3">
        <Formulario
          totalPerfiles = {totalPerfiles}
          traerTotal = {traerTotal}
        />

      </div>
      El total de datos es: {totalPerfiles}
    </Container>

    </Fragment>
  );
}

export default App;
