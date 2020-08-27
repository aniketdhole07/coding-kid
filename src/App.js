import React from 'react';
import Main from './ide/comps/main'
import Sidebar from './ide/comps/sidebar'
import './ide/styles/main.scss'

import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <Container id="app" fluid>
        <Row>
          
            <Main />
            <Sidebar />
          
        </Row>
      </Container>
  );
}

export default App;
