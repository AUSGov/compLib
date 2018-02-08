import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <div className="standard-header">
              <h1>Buttons</h1>
              <div className="version">Last update: 07/02/2018</div>
            </div>
          </Col>
        </Row> 
        <Row>
          <Col>            
            <div className="bodyText">
              <p>Use buttons and links to trigger actions. Buttons can contain a combination of a clear label and an <a href="/icons">icon</a> while links are always text.</p>
              <h2>Button types</h2>
              <h3>Primary button</h3>
              <Button color="primary">primary</Button>{' '}
            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default Buttons;
