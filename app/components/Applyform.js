import React, { Component } from "react";
import "./Apply.css";

class Applyform extends Component { 
      state = {
        firstName: "",
        lastName: ""
  
}
  handleChange = (e) => {
    // Getting the value and name of the input which triggered the change
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
 

  render() {
    return (
      <div className="container">
        <form onSubmit= {this.handleSubmit}>
          <h5 className = "grey-text text darken-3">Please Fill out Application</h5>
          <div className="input-field">
            <label htmlFor="input-field">Full Name</label>
            <inout type="text" id="fullName" onChange={this.handleChange}/>
          </div>
          
          {/* <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button> */}
        </form>
      </div>
    )
  }
}

export default Applyform
