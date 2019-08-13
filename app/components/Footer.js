// Include React
import React, { Component } from 'react';

require('./footer.css');

// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");
// var History = require("./children/History");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container text-center">
                        <p>Copyright &copy; Disney for all 2019</p>
                    </div>
                </footer>
            </div>
        );
    }
}
