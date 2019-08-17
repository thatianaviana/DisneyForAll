import React, { Component } from 'react';
import Nav from './children/Nav'
import Modal from './Modal';
import Footer from './Footer';

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

                <section className="meetfamilies">
                    <div className="container" >
                        <div className="row">
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Bywater Family</div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PCh7bjFAoGuUAceQAgVP-9U-dQ-c7hZi1bCY6ZE_fgIk33PA" title="image 2" className="card-img-top" className="thumb" data-index="2" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button> */}
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Ortiz Family</div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-Vk_J0yFlWLQmieFJjejqHBiT-yUNRrpT9chExT8xkFpo9lRRA" title="image 2" className="card-img-top" className="thumb" data-index="2" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button> */}
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Stine Family</div>
                                <img src="https://www.rosenwater.com/wp-content/uploads/2019/05/AdobeStock_104541395-200x200.jpeg" title="image 3" className="card-img-top" className="thumb" data-index="3" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button> */}
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Manilow Family</div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHXARDL7rtOmsTGY27RRtHQ4wel1lbAqDz4rpuZMPPLX00q4F" title="image 4" className="card-img-top" className="thumb" data-index="4" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button> */}
                                </div>
                            </div>

                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Abanda Family</div>

                                <img src="https://via.placeholder.com/200" title="image 5" className="card-img-top" className="thumb" data-index="5" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button> */}
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Heick Family</div>

                                <img src="https://via.placeholder.com/200" title="image 6" className="card-img-top" className="thumb" data-index="6" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal />
                </section>
                <Footer />
            </div>
        );
    }
}


