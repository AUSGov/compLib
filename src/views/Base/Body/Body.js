import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import PageHeader from '../../../components/PageHeader/';

class Body extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <PageHeader heading="Body" date="28/04/2018" />
          </Col>
        </Row> 
        <Row>
          <Col>            
            <div className="content">
              <p className="intro">Body is a collection of styles that apply to common content elements, these styles help users read page body content more easily.</p>

{/* -- Body Paragraph -- */}
              <h3>Paragraph styles</h3>
              <p>Example paragraph. <a href="#" >Internal link</a> and an <a href="#" className="external-link">external link<i className="fa fa-external-link" aria-hidden="true"></i></a>.</p>
              <p>Royal as to was written due was of it contribution steadily people towards check to up we've the are to in read. Be in <a href="#" >few average</a> who impasse. To trying sleep were himself the months get feel table he the tag the their arrive woman's have and her time not.</p>
            </div>
          </Col>
        </Row>  

 
      </div>
    )
  }
}

export default Body;