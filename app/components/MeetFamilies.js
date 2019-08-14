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
<<<<<<< HEAD
                <section id="meetfamilies">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">BLACK FRIDAY DEAL</div>
                                    <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style="width:100%" alt="Image" /></div>
                                    <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="panel panel-danger">
                                    <div className="panel-heading">BLACK FRIDAY DEAL</div>
                                    <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style="width:100%" alt="Image" /></div>
                                    <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="panel panel-success">
                                    <div className="panel-heading">BLACK FRIDAY DEAL</div>
                                    <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style="width:100%" alt="Image" /></div>
                                    <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
=======
                <section id="plans">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="panel panel-danger panel-pricing">
                                    <div className="panel-heading">
                                        <h3>Meet the Families</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p><strong>These families are amazing families</strong></p>
                                    </div>
                                    <ul className="list-group text-center">
                                        <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                        <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                        <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                    </ul>
                                    <div className="panel-footer">
                                        <a className="btn btn-lg btn-block btn-danger" href="#">BUY NOW!</a>
                                    </div>
>>>>>>> master
                                </div>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">BLACK FRIDAY DEAL</div>
                                        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style="width:100%" alt="Image" /></div>
                                        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">BLACK FRIDAY DEAL</div>
                                        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style="width:100%" alt="Image" /></div>
                                        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">BLACK FRIDAY DEAL</div>
                                        <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style="width:100%" alt="Image" /></div>
                                        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
=======
>>>>>>> master
                </section>
            </div>
        );
    }
}