import React, { Component } from 'react';
import Nav from './children/Nav'

require('./Admin.css');

export default class Admin extends Component {
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
            <table class="table">
            <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Income</th>
                    <th scope="col">About Family</th>
                    {/* <th scope="col">Family Picture</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    {/* <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td> */}
                    </tr>
                </tbody>
                </table>
            </section>
        </div>
    );
  }
}