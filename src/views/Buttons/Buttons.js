import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';
import PageHeader from '../../components/PageHeader/';

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <PageHeader heading="Buttons" date="15/02/2018" />
          </Col>
        </Row> 

        <Row>
          <Col>            
            <div className="content">
              <p className="intro">A wide range of button styles are used across the website. Appropriate button styles are to be used based on context and level of importance.</p>

              <h2>Primary button styles</h2>
              <p>Use of primary buttons is reserved for for the primary action on the page. For example, a page that encourages users to give feedback would reserve the primary button for a ‘Message us’ action.</p>
              
              <div className="demo-block">
                <Button className="bga-btn btn-primary">Find out more</Button>{' '}
              </div>
              <hr></hr>
              <h3>Variations</h3>
              <div className="demo-block">
                  <Button className="bga-btn btn-primary">Primary with icon <i className="fa fa-star"></i>{'\u00A0'}</Button>
              </div>
            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default Buttons;

