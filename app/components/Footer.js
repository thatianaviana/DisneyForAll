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
                <footer className="sticky-bottom">
                    <div className="container text-center">
                        <p>Copyright &copy; Disney for all 2019</p>
                        <p>Disney For All is a registered 501(c)3 non-profit organization. 100% of your donation is tax-deductible.</p>
                        <a href="https://twitter.com/?lang=en"> <i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                    </div>
                </footer>
            </div>
        );
    }
}
