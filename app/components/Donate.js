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
                            <h1>Disney For All</h1>
                            <h3>Because Every Child Deserves A Day In The Happiest Place On Earth</h3>
                            <h4>Even the smallest donation will make a difference. Give the gift of giving. Contribute to changing someone's life.</h4>
                            <div id="paypal-button-container">
                                <h3>Make a donation</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}