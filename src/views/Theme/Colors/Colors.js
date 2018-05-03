import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';
import PageHeader from '../../../components/PageHeader/';

class Colors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <PageHeader heading="Colour" date="03/05/2018" />
          </Col>
        </Row> 

        <Row>
          <Col>            
            <div className="content">
              <p className="intro">We are committed to complying with WCAG AA standard contrast ratios. To do this, we choose primary, secondary and extended colours that support usability. This ensures sufficient colour contrast between elements so that users with low vision can see and use our products.</p>

              <h3>Primary Colour Palette</h3>
              <p>Our primary palette uses bright colours to bring a boldness to our brand, and is used in logical ways throughout product and marketing to guide the eye and highlight the important bits. We pepper warmer, secondary palette colours throughout to soften the experience and to impart confidence and optimism.</p>
              <div className="demo-block">
                <Row>
                  <div className="col-md-6">
                    <h5>BGA Primary</h5>
                    <div className="p-3 bg-bga-primary">bga-primary <span className="float-right">#254f90</span></div>
                    <div className="p-3 bg-bga-primary-interactive">bga-primary-interactive <span className="float-right">#4569A0</span></div>
                    <div className="p-3 bg-bga-primary-tint1">bga-primary-tint1 <span className="float-right">#b3c2d8</span></div>
                    <div className="p-3 bg-bga-primary-tint2">bga-primary-tint2 <span className="float-right">#eff4fb</span></div>                    
                  </div>

                  <div className="col-md-6">
                    <h5>BGA Secondary</h5>
                    <div className="p-3 bg-bga-secondary">bga-secondary <span className="float-right">#e8bd4f</span></div>
                    <div className="p-3 bg-bga-secondary-interactive">bga-secondary-interactive <span className="float-right">#edca72</span></div>
                    <div className="p-3 bg-bga-secondary-tint1">bga-secondary-tint1 <span className="float-right">#f3dea7</span></div>
                    <div className="p-3 bg-bga-secondary-tint2">bga-secondary-tint2 <span className="float-right">#fcf4e3</span></div>                   
                  </div>
                </Row>
              </div>

              <hr></hr>

              <h3>Category Colour Palette</h3>
              <p>Our category palette contains a variety of colours to keep things fresh and interesting. We use these colours to differentiate and associate topics and categories. When used in conjunction with our primary palette, these colours makes every moment feel on-brand.</p>
              <div className="demo-block">
                <Row>
                  <div className="col-md-6">
                    <h5>Teal</h5>
                    <div className="p-3 bg-bga-teal">teal-primary <span className="float-right">#29A0A0</span></div>
                    <div className="p-3 bg-bga-teal-interactive">teal-interactive <span className="float-right">#54B3B3</span></div>
                    <div className="p-3 bg-bga-teal-tint1">teal-tint1 <span className="float-right">#A9D9D9</span></div>
                    <div className="p-3 bg-bga-teal-tint2">teal-tint2 <span className="float-right">#DFF1F1</span></div>
                  </div>

                  <div className="col-md-6">
                    <h5>Blue</h5>
                    <div className="p-3 bg-bga-blue">blue <span className="float-right">#3E96FF</span></div>
                    <div className="p-3 bg-bga-blue-interactive">blue-interactive <span className="float-right">#5BA6FF</span></div>
                    <div className="p-3 bg-bga-blue-tint1">blue-tint1 <span className="float-right">#BEDCFF</span></div>
                    <div className="p-3 bg-bga-blue-tint2">blue-tint2 <span className="float-right">#eff4fb</span></div> 
                  </div>
                </Row>
              </div>

              <div className="demo-block">
                <Row>
                  <div className="col-md-6">
                    <h5>Orange</h5>
                    <div className="p-3 bg-bga-orange">teal <span className="float-right">#FF4B23</span></div>
                    <div className="p-3 bg-bga-orange-interactive">teal-interactive <span className="float-right">#FF6F4F</span></div>
                    <div className="p-3 bg-bga-orange-tint1">teal-tint1 <span className="float-right">#FFB7A7</span></div>
                    <div className="p-3 bg-bga-orange-tint2">teal-tint2 <span className="float-right">#FFE4DE</span></div>
                  </div>

                  <div className="col-md-6">
                    <h5>Slate</h5>
                    <div className="p-3 bg-slate">slate-primary <span className="float-right">#293F5C</span></div>
                    <div className="p-3 bg-slate-interactive">slate-interactive <span className="float-right">#495C74</span></div>
                    <div className="p-3 bg-slate-tint1">slate-tint1 <span className="float-right">#AAB2C3</span></div>
                    <div className="p-3 bg-slate-tint2">slate-tint2 <span className="float-right">#DFE2EE</span></div>
                  </div>
                </Row>
              </div>

              <div className="demo-block">
                <Row>
                  <div className="col-md-6">
                    <h5>Purple</h5>
                    <div className="p-3 bg-bga-purple">purple-primary <span className="float-right">#5B43D0</span></div>
                    <div className="p-3 bg-bga-purple-interactive">purple-interactive <span className="float-right">#735FD7</span></div>
                    <div className="p-3 bg-bga-purple-tint1">purple-tint1 <span className="float-right">#BDB4EC</span></div>
                    <div className="p-3 bg-bga-purple-tint2">purple-tint2 <span className="float-right">#F1EEFA</span></div>
                  </div>

                  <div className="col-md-6">
                    <h5>Magenta</h5>
                    <div className="p-3 bg-magenta">magenta <span className="float-right">#A42079</span></div>
                    <div className="p-3 bg-magenta-interactive">magenta-interactive <span className="float-right">#B64D94</span></div>
                    <div className="p-3 bg-magenta-tint1">magenta-tint1 <span className="float-right">#DFB1D0</span></div>
                    <div className="p-3 bg-magenta-tint2">magenta-tint2 <span className="float-right">#FFECF3</span></div>
                  </div>
                </Row>
              </div>
              <hr></hr>

              <h3>Neutrals</h3>
              <p>Our neutral palette is used for adding texture, depth and for highlighting elements.</p>
              <div className="demo-block">
                <Row>
                  <div className="col-md-6">
                    <h5>Dark Neutrals</h5>
                    <div className="p-3 bg-black">black <span className="float-right">#000000</span></div>
                    <div className="p-3 bg-darkest-grey">darkest grey <span className="float-right">#505050</span></div>
                    <div className="p-3 bg-darker-grey">darker grey <span className="float-right">#7D7D7D</span></div>
                    <div className="p-3 bg-dark-grey">dark grey <span className="float-right">#A7A7A7</span></div>
                  </div>

                  <div className="col-md-6">
                    <h5>Light Neutrals</h5>
                    <div className="p-3 bg-light-grey">light-grey <span className="float-right">#C7C7C7</span></div>
                    <div className="p-3 bg-lighter-grey">lighter-grey <span className="float-right">#D8D8D8</span></div>
                    <div className="p-3 bg-lightest-grey">lightest-grey <span className="float-right">#EBEBEB</span></div>
                    <div className="p-3 bg-background-grey">background-grey <span className="float-right">#F5F5F5</span></div>
                  </div>
                </Row>
              </div>
              <hr></hr>

              <h3>Alerts</h3>
              <div className="demo-block">
                <Row>
                  <div className="col-md-6">
                    <h5>Positive Alerts</h5>
                    <div className="p-3 bg-bga-green">positive-primary <span className="float-right">#368635</span></div>
                    <div className="p-3 bg-green-interactive">positive-interactive <span className="float-right">#219520</span></div>
                    <div className="p-3 bg-green-tint1">positive-tint1 <span className="float-right">#A6D5A6</span></div>
                    <div className="p-3 bg-green-tint2">positive-tint2 <span className="float-right">#E8F4E8</span></div>
                  </div>

                  <div className="col-md-6">
                    <h5>Negative Alerts</h5>
                    <div className="p-3 bg-bga-red">negative-primary <span className="float-right">#E22C2A</span></div>
                    <div className="p-3 bg-red-interactive">negative-interactive <span className="float-right">#E75755</span></div>
                    <div className="p-3 bg-red-tint1">negative-tint1 <span className="float-right">#F5B5B5</span></div>
                    <div className="p-3 bg-red-tint2">negative-tint2 <span className="float-right">#FCE9E9</span></div>
                  </div>
                </Row>
              </div>
            </div>
          </Col>
        </Row>          
      </div>
    )
  }
}

export default Colors;

