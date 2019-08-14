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
                                <h3>To Apply Please Fill Out All The Information Below</h3>
                                </div>

                                <form>
                                <div className="form-group col-md-6 text-left">
                                    <p>Full Name</p>
                                    <input type="name" className="form-control" id="fullName" />
                                </div>
                                <div className="form-group col-md-6 text-left">
                                    <p>Annual Household Income</p>
                                    <input type="name" className="form-control" id="income" />
                                </div>

                                {/* <div class="input-group mb-3 text-left"/>
                                    <div class="input-group-prepend">
                                        <p>Annual Income</p>
                                        <span class="input-group-text">$</span>
                                </div>
 */}

                                <div className="form-group col-md-10 text-left">
                                    <p>About My Family</p>
                                    <textarea className="form-control" id="aboutFamily" rows="3"></textarea>
                                </div>

                                <div className="add-file col-md-6 text-left">
                                            <p>Share a picture of your family</p>
                                            <input type="file" />
                                </div>

                                </form>
                               
                              

                            <br></br>
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