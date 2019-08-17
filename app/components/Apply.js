import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav from './children/Nav'

require('./Apply.css');

export default class Apply extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fullName: '',
          income: '',
          aboutFamily: '',
          message:''
        };
    
        this.handleOnClick = this.handleOnClick.bind(this);
      }
// state = {
//     message: ""
// }

handleOnClick() {

    let fullName = $("#fullName").val();
    let familyIncome = $("#income").val();
    let aboutFamily = $("#aboutFamily").val();
    console.log("onclick", fullName, familyIncome, aboutFamily)

    let object = {
        fullName: fullName,
        income: familyIncome,
        aboutFamily: aboutFamily
    }

    axios.post('/apply/new', object)
    .then(function (data) {
      console.log(data);
    //   if (data.data.success) {
    //     this.props.authenticate();
    //     this.setState({
    //       redirectToReferrer: true
    //     });
    //   } else {
    //     alert(data.data.message);
      })
    }
//     // axios call
//     //("/apply/new", object, function (data) {
//     //    console.log(data)
//     // })
//     // need to build object to send Ajax call to database
//     // ajax call for update database in apply routes file = /api/apply/new
//     // what to do when come back


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
                                        <input type="amount" className="form-control" id="income" />
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
                                        <input type="file" id="familyPicture" />
                                    </div>

                                </form>

                                <br></br>
                                <div className="panel-footer">
                                    <a onclick={this.handleOnClick()} className="btn btn-lg btn-block btn-success" id="submit" href="#">Submit!</a>
                                </div>
                                {/* onclick={this.handleOnClick()} */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
}