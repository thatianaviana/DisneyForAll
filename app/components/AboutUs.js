import React, { Component } from 'react';
import Nav from './children/Nav'

require('./AboutUs.css');

export default class AboutUs extends Component {
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
<<<<<<< HEAD
                            <div className="col-md-12 mx-auto">
                                <div className= "card card-lg" className="aboutus">
                                        <h1 className="text-xxxl mb-sm mt-sm text-center">Our Mission</h1>
                                        <p className="text-sm mb-lg mt-sm text center">To provide deserving families one wonderful day at the Happiest Place on Earth!</p>
                        
                                        <br></br>
                                        <p>Id faucibus nisl tincidunt eget nullam non nisi est sit. Nunc sed velit dignissim sodales ut eu. Dui id ornare arcu odio ut sem. 
                                        Cras adipiscing enim eu turpis egestas pretium. Quis commodo odio aenean sed adipiscing diam. 
                                        Consequat interdum varius sit amet mattis vulputate. Varius morbi enim nunc faucibus a pellentesque sit. Cursus euismod quis viverra nibh. 
                                        Commodo quis imperdiet massa tincidunt nunc. Purus sit amet luctus venenatis.</p>
                                        <br></br>
                                        <p>Adipiscing diam donec adipiscing tristique. Elementum nisi quis eleifend quam adipiscing vitae. 
                                        Sodales ut eu sem integer vitae. Non enim praesent elementum facilisis leo vel. Consequat interdum varius sit amet mattis vulputate enim. 
                                        Urna condimentum mattis pellentesque id nibh tortor id aliquet. Habitasse platea dictumst vestibulum rhoncus. 
                                        Adipiscing elit duis tristique sollicitudin nibh sit. Mauris sit amet massa vitae. 
                                        Eget egestas purus viverra accumsan in nisl. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. 
                                        Blandit libero volutpat sed cras ornare arcu.</p>
=======
                            <div className="col-md-12 text-center">
                                <div className="panel panel-danger panel-pricing">
                                    <div className="panel-heading">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p><strong>$100 / Month</strong></p>
                                    </div>
                                    <ul className="list-group text-center">
                                        <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                        <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                        <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                    </ul>
                                    <div className="panel-footer">
                                        <a className="btn btn-lg btn-block btn-danger" href="#">BUY NOW!</a>
                                    </div>
>>>>>>> master
                                </div>
                                    

                            </div>
                        </div>
                    </div>
                </section>
<<<<<<< HEAD
                
=======
                <Footer />
>>>>>>> master
            </div>
        );
    }
}