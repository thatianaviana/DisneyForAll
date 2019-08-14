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
<<<<<<< HEAD
                  <li>
                      <a className="page-scroll nav-left-text" href="/meetfamilies"><p>MEET THE FAMILIES</p></a>
                  </li>
                   <li>
                      <a className="page-scroll nav-right-text" href="/donate">
                        <img className="navigation-icons" src={require("../../img/shapes/Profile.png")} />
                        <p>DONATE</p>
                      </a>
                  </li>
            


=======
                ) : (
                    <li className="nav-item">
                      <NavLink to={"/login"} className="nav-link"><div className="page-scroll nav-left-text" data-toggle="modal">Login</div></NavLink>
                    </li>
                  )}
>>>>>>> master
              </ul>
            </div>
          </div>
<<<<<<< HEAD
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li>
                      <a className="page-scroll nav-left-text" href="/"><p>HOME</p></a>
                  </li>
                  {this.props.authenticated ? (
                    <li>
                      <a href="#" onClick={this.props.logout} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                    </li>
                  ) : (
                    <li>
                      <Link to={"/login"} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGIN</p></div></Link>
                    </li>
                  )}
                  {this.props.authenticated ? (
                  <li>
                      <a className="page-scroll nav-right-text" href="/users/sign-out" data-toggle="modal">
                        <img className="navigation-icons" src={require("../../img/shapes/search.png")} />
                        <p>ADMIN</p>
                      </a>
                  </li>
                  ) : ""}
                
              </ul>
          </div>
          {/* <Link to={"/"} ><img className="icon-middle-nav-desktop" src={require("../../img/shapes/shape.png")} /></Link> */}
        </div>
      </nav>
=======
        </nav>
      </div>
>>>>>>> master
    );
  }
}


