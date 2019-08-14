import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

require('./nav.css');

export default class Nav extends Component {
  render() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink to="/" className="navbar-brand">Disney For All</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/meetfamilies" className="nav-link">Meet the Families</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/donate">Donate</a>
                </li>
                {this.props.authenticated ? (
                  <li className="nav-item">
                    <NavLink to="#" onClick={this.props.logout} className="nav-link" ><div className="page-scroll nav-left-text" data-toggle="modal">Logout</div></NavLink>
                  </li>
                ) : (
                    <li className="nav-item">
                      <NavLink to={"/login"} className="nav-link"><div className="page-scroll nav-left-text" data-toggle="modal">Login</div></NavLink>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


