import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

require('./nav.css');

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
              <i className="fa fa-bars"></i>
            </button>
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target=".navbar-main-collapse1">
              <i className="glyphicon glyphicon-plus"></i>
            </button>
            {/* <Link to={"/"} ><img className="icon-middle-nav-mobile" src={require("../../img/shapes/shape.png")} /></Link> */}
          </div>

          <div className="collapse navbar-collapse navbar-left navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              <li>
                <NavLink to="/aboutus">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/meetfamilies">MEET THE FAMILIES</NavLink>
              </li>

              {this.props.authenticated ? (
                <li>
                  <a href="#" onClick={this.props.logout} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                </li>
              ) : (
                  <li>
                    <NavLink to={"/login"} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGIN</p></div></NavLink>
                  </li>
                )}
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              <li>
                <NavLink to="/donate">DONATE</NavLink>
              </li>
              {/* <li>
                      <a className="page-scroll nav-right-text" href="/trips">
                        <img className="navigation-icons" src={require("../../img/shapes/offline.png")} />
                        <p>OFFLINE MODE</p>
                      </a>
                  </li> */}
              {this.props.authenticated ? (
                <li>
                  <a className="page-scroll nav-right-text" href="/users/sign-out" data-toggle="modal">
                    <img className="navigation-icons" src={require("../../img/shapes/search.png")} />
                    <p>ADMIN</p>
                  </a>
                </li>
              ) : ""}
              {/* <li>
                      <a className="page-scroll nav-right-text" data-toggle="modal" data-target="#login-modal">
                        <img className="navigation-icons" src={require("../../img/shapes/itinerary.png")} />
                        <p>ITINERARY</p>
                      </a>
                  </li> */}
            </ul>
          </div>
          {/* <Link to={"/"} ><img className="icon-middle-nav-desktop" src={require("../../img/shapes/shape.png")} /></Link> */}
        </div>
      </nav>
    );
  }
}