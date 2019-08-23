import React, { Component } from 'react';
import Nav from './children/Nav';
import Footer from "./Footer"
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Auth from './utils/Auth';
import Families from "./FamilyTable";


require('./Admin.css');



export default class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      families: []
    }
  }

  componentDidMount() {
    axios.get("/apis/admin")
      .then(data=> {
        console.log('Data that is sent =', data.data);
        // console.log(data.data[5].fullName);
        // console.log(data.data[5].houseHoldIncome);
        // console.log(data.data[5].aboutFamily);

        this.setState({
          families: data.data

        })
          .catch(function (err) {
            console.log(err);
          })

      })

  }

  render() {
    
    return (
      <div>
       

        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />

        <section id="familyTable">
          <table className="table">
            <thead className="thead-light">

              <tr>

                <th scope="col">Name</th>
                <th scope="col">Income</th>
                <th scope="col">About Family</th>
                <th scope="col">Post</th>
                {/* <th scope="col">Family Picture</th> */}
              </tr>
            </thead>
            <tbody>

          <tr>
              {/* <td>{this.familiesList()}</td> */}
          </tr>
              {this.state.families.map(family =>
                         
                            <Families id={family._id} key={family._id} fullName={family.fullName} houseHoldIncome={family.houseHoldIncome} aboutFamily={family.aboutFamily}/>
                        
                        )}
            </tbody>
          </table>
        </section>
        <Footer />
      </div>
    )
  }
}

