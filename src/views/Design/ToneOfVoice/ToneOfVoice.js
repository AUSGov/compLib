import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';
import PageHeader from '../../../components/PageHeader/';


class ToneOfVoice extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <PageHeader heading="Tone of Voice" date="19/02/2018" />
          </Col>
        </Row> 

        <Row>
          <Col>            
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default ToneOfVoice;
