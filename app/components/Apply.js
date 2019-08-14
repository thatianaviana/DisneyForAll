import React, { Component } from 'react';
import Nav from './children/Nav'

require('./Apply.css');

export default class Apply extends Component {
  render() {
    return (
        <div>
            <Nav
            authenticated={this.props.authenticated}
            authenticate={this.props.authenticate}
            deAuthenticate={this.props.deAuthenticate}
            logout={this.props.logout}
            />  

            <section id="plans">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="panel panel-danger panel-pricing">
                                <div className="panel-heading">
                                    <h3>Apply</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>Please Fill Out All Information</strong></p>
                                </div>

                                <div className="form-group col-lg-6"  ref="firstName">
									<a>First Name</a>
									<input type="" name="" ref="firstName" className="form-control" id="firstName-input" />
									<small id="firstName-feedback" ref="firstNameFeedback" className=""></small>
								</div>
                                <div className="form-group col-lg-6"  ref="lastName">
									<a>Last Name</a>
									<input type="" name="" ref="lastName" className="form-control" id="lastName-input" />
									<small id="lastName-feedback" ref="lastNameFeedback" className=""></small>
								</div>

                                <div className="form-group col-lg-6"  ref="aboutFamily">
									<a>Tell Us About Your Family</a>
                                    <textarea lassName="form-group col-lg-6"></textarea>
								</div>
								
                               
                                <div className="add-file">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <a>Upload your bank statements</a>
                                            <input type="file" />
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-success" href="#">Submit!</a>
                                </div>

                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}