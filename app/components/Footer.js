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
                        <p>Copyright &copy; Disney For All is a registered 501(c)3 non-profit organization. 100% of your donation is tax-deductible.</p>
                        <i className="fab fa-twitter fa-2x"></i>
                        <i className="fab fa-facebook fa-2x"></i>
                        <i className="fab fa-instagram fa-2x"></i>
                    </div>
                </footer>
            </div>
        );
    }
}
