import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
        <div >
          <Link to={this.props.path.toLowerCase().replace(' ','-')}>
            <div className="SubNav-item">
                <img src={this.props.src} alt=""/>
              <p>
                {this.props.name}
              </p>
            </div>
          </Link>      
      </div>
    );
  }
}
