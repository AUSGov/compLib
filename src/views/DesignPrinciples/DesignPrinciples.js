import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';
import PageHeader from '../../components/PageHeader/';


class DesignPrinciples extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <PageHeader heading="Design principles" date="19/02/2018" />
          </Col>
        </Row> 

        <Row>
          <Col>            
            <div className="content">
              <p>We designed the BGA GEL Web Design System to help you create better experiences for the Australian public. Here’s how using the Design System can help you:</p>
            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default DesignPrinciples;
