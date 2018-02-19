import React, {Component} from 'react';

class PageHeader extends Component {
  render() {
    return (
        <div className="standard-header">
            <h1>{this.props.heading}</h1> 
            <div className="version"><span><i className="fa fa-clock-o fa-lg"></i> </span>Last update: {this.props.date}</div>
        </div>
    )
  }
}

export default PageHeader;
