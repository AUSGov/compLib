import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';
import PageHeader from '../../../components/PageHeader/';

class Typography extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <PageHeader heading="Typography" date="19/02/2018" />
          </Col>
        </Row>
        
        <div className="card">
          <div className="card-header">
            Headings
          </div>
          <div className="card-body">
            <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Heading</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>
                  </td>
                  <td><span className="h1">h1. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>
                  </td>
                  <td><span className="h2">h2. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>
                  </td>
                  <td><span className="h3">h3. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>
                  </td>
                  <td><span className="h4">h4. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>
                  </td>
                  <td><span className="h5">h5. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>
                  </td>
                  <td><span className="h6">h6. Bootstrap heading</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Headings
          </div>
          <div className="card-body">
            <p><code className="highlighter-rouge">.h1</code> through <code className="highlighter-rouge">.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
            <div className="bd-example">
              <p className="h1">h1. Bootstrap heading</p>
              <p className="h2">h2. Bootstrap heading</p>
              <p className="h3">h3. Bootstrap heading</p>
              <p className="h4">h4. Bootstrap heading</p>
              <p className="h5">h5. Bootstrap heading</p>
              <p className="h6">h6. Bootstrap heading</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Display headings
          </div>
          <div className="card-body">
            <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
            <div className="bd-example bd-example-type">
              <table className="table">
                <tbody>
                  <tr>
                    <td><span className="display-1">Display 1</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-2">Display 2</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-3">Display 3</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-4">Display 4</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
              <hr></hr>



      </div>
    )
  }
}

export default Typography;
