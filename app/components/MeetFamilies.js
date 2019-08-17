import React, { Component } from 'react';
import Nav from './children/Nav'
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PCh7bjFAoGuUAceQAgVP-9U-dQ-c7hZi1bCY6ZE_fgIk33PA" title="image 2" className="card-img-top" className="thumb" data-index="2"className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"></p>

                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            Meet the Family
                                        </button>
                                    </div>
                                </div>
                                <div className="card text-white bg-light mb-3">
                                    <div className="card-header">Ortiz Family</div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-Vk_J0yFlWLQmieFJjejqHBiT-yUNRrpT9chExT8xkFpo9lRRA" title="image 2" className="card-img-top" className="thumb" data-index="2"className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"></p>

                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            Meet the Family
                                        </button>
                                    </div>
                                </div>
                                <div className="card text-white bg-light mb-3">
                                    <div className="card-header">Stine Family</div>
                                    <img src="data:image/jpeg;base64,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" title="image 3" className="card-img-top" className="thumb" data-index="3" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"></p>

                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            Meet the Family
                                        </button>
                                    </div>
                                </div>
                                <div className="card text-white bg-light mb-3">
                                    <div className="card-header">Manilow Family</div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHXARDL7rtOmsTGY27RRtHQ4wel1lbAqDz4rpuZMPPLX00q4F" title="image 4" className="card-img-top" className="thumb" data-index="4"className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"></p>

                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            Meet the Family
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="card text-white bg-light mb-3">
                                    <div className="card-header">Abanda Family</div>
                                    
                                    <img src="https://via.placeholder.com/200"  title="image 5" className="card-img-top" className="thumb" data-index="5" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"></p>

                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            Meet the Family
                                        </button>
                                    </div>
                                </div>
                                <div className="card text-white bg-light mb-3">
                                    <div className="card-header">Heick Family</div>
                                    
                                    <img src="https://via.placeholder.com/200"  title="image 6" className="card-img-top" className="thumb" data-index="6" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"></p>

                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            Meet the Family
                                            </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}





  {/* <!-- Modal --> */}

{/* <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="modal-title" id="exampleModalLongTitle">Family Name Should Pop Up Here</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id="modal-body">
                                <div id="modal-image"></div>
                                    <p id="modal-description">Blurb about the family should pop up here</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}