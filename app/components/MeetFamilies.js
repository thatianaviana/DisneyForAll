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
                                </div>
                            </div>
                        </div>
                    </div>

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
                </section>
            </div>
        );
    }
}