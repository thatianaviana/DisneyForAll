// Include React
import React, { Component } from 'react';
import Nav from './children/Nav';
import Footer from './Footer';

require('./main.css');

// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");
// var History = require("./children/History");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends Component {
    render() {
        return (
            <div>
                <Nav
                    authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                />
                <header className="intro">
                    <div className="intro-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="brand-heading">Disney For All</h1>
                                    <h3 className="intro-text">Because Every Child Deserves A Day In The Happiest Place On Earth</h3>

                                    <a href="#about" className="btn btn-circle page-scroll">
                                        {/* <i className="fa down-arrow animated">
                                   <img className="down-arrow" src={require("../img/shapes/HomeDown.png")} alt="Down Arrow" />
                                </i> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

<<<<<<< HEAD
=======

                
>>>>>>> master

                <Footer />
            </div>
        );
    }
}
