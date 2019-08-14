import React, { Component } from 'react';
import Nav from './children/Nav'
require('./Donate.css');
import Footer from './Footer'

export default class Donate extends Component {
    render() {
        return (
            <div>
                <Nav
                    authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                />
                <div className="donation">
                    <div className="row">
                        <div className="col-md-12 text-center">
<<<<<<< HEAD
                            <div className="panel panel-danger panel-pricing">
                                <div className="panel-heading">
                                    <h3>Donate YO</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>$100 / Month</strong></p>
                                </div>
                                <ul className="list-group text-center">
                                    <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                </ul>
                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-danger" href="#">BUY NOW!</a>
                                </div>
=======
                            <h1>Disney For All</h1>
                            <h3>Because Every Child Deserves A Day In The Happiest Place On Earth</h3>
                            <div id="paypal-button-container">
                                <h3>Make a donation</h3>
>>>>>>> master
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}