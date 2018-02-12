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
              <div className="version"><span><i className="fa fa-clock-o fa-lg"></i> </span>Last update: 09/02/2018</div>
            </div>
          </Col>
        </Row> 

        <Row>
          <Col>            
            <div className="content">
              <p>Buttons communicate the action that will occur when the user touches them. Use buttons to trigger actions. Buttons can contain a combination of a clear label and an <a href="/icons">icon</a>. There are different types of buttons for different types of actions and it is important to use the correct one for the action.</p>
              <h2>Button types</h2>
              <p>There are three main types of buttons...</p>
              <Button color="primary">primary</Button>{' '}
            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default Buttons;
