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
        selectedFile: "",
        // new
        // selectedFile: "",
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
        [name]: target.value,
        // new
        // selectedFile: event.target.file[0]
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
        aboutFamily: this.state.aboutFamily,
        selectedFile: this.state.selectedFile,
      }).then(function (data) {
        console.log('hello we sent data');
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  
    // fileSelectedHandler(event) {
    //   this.setState({
    //     selectedFile: event.target.files[0]
    //     })
    //   }
    // // new
    //   fileUploadHandler (){
    //     const fd = new FormData();
    //     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    //     axios.post("/apis/apply/apply", fd)
    //     .then (function (res) {
    //       console.log(res)
    //     });
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
          <textarea 
          name ="aboutFamily"
          type = "string"
          value={this.state.aboutFamily} 
          onChange={this.handleInputChange} />
        </label>
        <br/>
        <label className="applicationInputs">
          Upload Family Photo:
          <br/>
          <input 
          name= "selectedFile"
          type = "string"
          value={this.state.selectedFile}
          id="inputPicture" 
          type="file"
          onChange={this.handleInputChange} />
        </label>
          {/* new */}
        {/* <input 
        name= "selectedFile"
        value={this.state.selectedFile}
        style={{display: 'none'}} 
        type="file" 
        onChange={this.handleInputChange}
        ref={fileInput => this.fileInput = fileInput}/>
        <button id="uploadPhoto" onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={this.fileUploadHandler}>Upload</button>  */}
        <br/>
          <button id="submitButton" className="modalButton" type="button" className="btn btn-info" type="submit" onClick= {this.createApply}>Submit</button>
          
          <br/>
          </div>
        </form>
        <Footer />
    </div>
      );
    }
    
  }