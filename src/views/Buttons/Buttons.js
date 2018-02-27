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

{/* -- Primary buttons -- */}
              <h2>Primary button styles</h2>
              <p>Use of primary buttons is reserved for for the primary action on the page. For example, a page that encourages users to give feedback would reserve the primary button for a ‘Message us’ action.</p>
              
              <div className="demo-block">
                <Button className="bga-btn btn-primary">Find out more</Button>{' '}
              </div>
              <hr></hr>

              <h3>Variations</h3>
              <div className="demo-block">
                  <Button className="bga-btn btn-primary">Primary with icon <i className="fa fa-star"></i>{'\u00A0'}</Button>
                  <Button aria-disabled="true" className="bga-btn btn-primary" disabled>Disabled state</Button>
                  <br/>
                  <Button className="bga-btn btn-primary btn-lg btn-block">Full width button</Button>
              </div>
              <hr></hr>

{/* -- Default buttons -- */}
              <h2>Default button styles</h2>
              <p>Default button styles are used for strong call to actions but sit on a level below primary button styles in terms of importance.</p>

              <div className="demo-block">
                <Button className="bga-btn btn-default">Find out more</Button>{' '}
              </div>
              <hr></hr>
              
              <h3>Variations</h3>
              <div className="demo-block">
                  <Button className="bga-btn btn-default">Find out more</Button>{' '}
                  <Button className="bga-btn btn-default">Download <i className="fa fa-download"></i></Button>
                  <Button aria-disabled="true" className="bga-btn btn-default" disabled>Disabled state</Button>
                  <br/>
                  <Button className="bga-btn btn-default btn-lg btn-block">Full width button</Button>
              </div>
              <hr></hr>

{/* -- Tertiary buttons -- */}
              <h2>Tertiary button styles</h2>
              <p>Tertiary buttons have a lower level of importance than default button styles and are also ideal for when longer lines of copy are needed.</p>

              <div className="demo-block">
                <Button className="bga-btn btn-tertiary"><i class="fa fa-arrow-right left"></i>Find out more</Button>{' '}
              </div>

              <hr></hr>
              
              <h3>Variations</h3>
              <div className="demo-block">
                  <Button className="bga-btn btn-tertiary"><i class="fa fa-arrow-right left"></i>Find out more</Button>{' '}
              </div>
              <hr></hr>


            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default Buttons;

