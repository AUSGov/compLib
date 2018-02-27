import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';
import PageHeader from '../../components/PageHeader/';
import Iframe from 'react-iframe';

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <PageHeader heading="Dashboard" date="27/02/2018" />
          </Col>
        </Row> 

        <Row>
          <Col>            
            <div className="content">
              <Iframe url="https://datastudio.google.com/embed/reporting/1apszVs23uDxlLJiL6uwTDpFA3nq5EyIN/page/5VVI"
              width="890px"
              height="1600px"
              display="initial"
              position="relative"
              allowFullScreen/>
              
            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default Dashboard;