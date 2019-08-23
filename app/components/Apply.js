import React, { Component } from 'react';
import Nav from './children/Nav';
import Footer from './Footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Auth from './utils/Auth';

require('./Apply.css');


 export default class Apply extends Component {

    constructor(props) {
      super(props);
      this.state = {
        fullName: "",
        houseHoldIncome: "",
        aboutFamily: "",
        photo: "",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.createApply = this.createApply.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);

    }
  
    handleInputChange(event) {
      const target = event.target;
      // const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({ 
        [name]: target.value
      });
    }

    createApply() {
      event.preventDefault();
      console.log("hello");
      console.log(this.state);
      // debugger;
      axios.post("/apis/apply/apply", {
        // username: userData.username,
        fullName: this.state.fullName,
        houseHoldIncome: this.state.houseHoldIncome,
        aboutFamily: this.state.aboutFamily

      }).then(function (data) {
        console.log('hello we sent data');
        // debugger;
        // this.setState({
        //   redirectToReferrer: true
        
        // });
      })
      .catch(function (err) {
        console.log(err);
      });
      // debugger;
    }
  
    // handleSubmit(event) {
    //   event.preventDefault();
    //   // debugger;
    //   // const username = this.state.username;
    //   const fullName = this.state.fullName;
    //   const houseHoldIncome = this.state.houseHoldIncome;
    //   const aboutFamily = this.state.aboutFamily;

      // let applyData = {
      //   // username: username,
      //   fullName: fullName,
      //   houseHoldIncome: houseHoldIncome,
      //   aboutFamily: aboutFamily,

      // };
  
  
      // If we have an email and password, run the signUpUser function
      // this.createApply(applyData);
  
      // this.setState({
      //   value: '',
      //   // username: '',
      //   fullName: '',
      //   houseHoldIncome: '',
      //   aboutFamily: '',
      // });
    // }

    render() {
      return (
        <div>
        <Nav
            authenticated={this.props.authenticated}
            authenticate={this.props.authenticate}
            deAuthenticate={this.props.deAuthenticate}
            logout={this.props.logout}
        />
      
     
        
        <form className="applicationForm">
          <div className="appContainer">
          <label className="applicationInputs">
            Full Name:
            <br/>
            <input
              name="fullName"
              type="text"
              checked={this.state.fullName}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label className="applicationInputs">
            Household Income:
            <br/>
            <input
              name="houseHoldIncome"
              type="number"
              value={this.state.houseHoldIncome}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label className="applicationInputs">
          About your Family:
          <br/>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <input id="inputPicture" type="file" />
        <br/>
        <br/>

          <button id="submitButton" type="submit" onClick= {this.createApply}>Submit</button>
          
          <br/>

          </div>
        </form>
        <Footer />
    </div>
      );
    }
    
  }
  
