import React, { Component } from 'react';
import Nav from './children/Nav'

require('./MeetFamilies.css');

export default class MeetFamilies extends Component {
    render() {
        return (
            <div>
                <Nav
                    authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                />
                <section id="meetfamilies">
                    <div className="container">
                        <div className="row">
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                );
            }
}