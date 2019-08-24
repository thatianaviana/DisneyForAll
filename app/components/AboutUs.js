import React, { Component } from 'react';
import Nav from './children/Nav';
import Footer from './Footer';

require('./AboutUs.css');

export default class AboutUs extends Component {
    render() {
        return (
            <div className="newAbout">
                <Nav
                    authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                />
                {/* <Carousel /> */}
                <section id="about" className="newAbout">
                    <div className="container">
                        <h3 className="text-xxxl mb-sm mt-sm text-center">Our Team</h3>
                        <div className="row" >
                            <div className="col-md-4 sm-12">
                                <div className="card border-0 shadow">
                                    <img src="./assets/img/t2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Founder & CEO</h5>
                                        <div className="card-text text-black-50">Thatiana Viana-Stine</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 sm-12">
                                <div className="card border-0 shadow">
                                    <img src="./assets/img/p1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Founder & CFO</h5>
                                        <div className="card-text text-black-50">Paula Villegas</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 sm-12">
                                <div className="card border-0 shadow">
                                    <img src="./assets/img/a1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Technology Chief</h5>
                                        <div className="card-text text-black-50">Aizhan Omarbekova </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xxxl mb-sm mt-sm text-center">Our Mission</h3>
                        <div className="col-md-12 mx-auto">
                            <div className="card card-lg" className="aboutus">
                                {/* <img src="./assets/img/logo copy.png" alt="..." /> */}
                                <p className="text-sm mb-lg mt-sm text center" className="mission">To provide deserving families one wonderful day at the Happiest Place on Earth!</p>

                                <br></br>
                                <p>Disney For All was created for the sole purpose of gifting deserving families with
                                   the chance to take their family to Disneyland.
                                    </p>
                                <br></br>
                                <p>We fully understand that mutliple families that live here in Southern California do not have
                                        the means to take their kids to Disney. The cost of the entrance alone is enough to burden many families.</p>
                                <br></br>

                                <p>We are hoping that with your generosity, we will be able to provide them with one fun day in the Happiest Place on Earth!
                                    We'll provide the family with entrance tickets, parking fee, food and hopefully we'll have extra money
                                        so that the kids can walk away with a little souvenir to remind them of that special day.</p>
                                <br></br>

                                <p>100% of the the money will go towards that and we'll provide you with a receipt that can be used for tax purposes.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}






{/* <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <div className="card card-lg" className="aboutus">
                                    <h3 className="text-xxxl mb-sm mt-sm text-center">Our Mission</h3>
                                    <img src="./assets/img/logo copy.png" title="image 5" className="card-img-top" className="thumb" data-index="5" className="card-img-top" alt="..." />
                                    <p className="text-sm mb-lg mt-sm text center" className="mission">To provide deserving families one wonderful day at the Happiest Place on Earth!</p>

                                    <br></br>
                                    <p>Disney For All was created for the sole purpose of gifting deserving families with
                                       the chance to take their family to Disneyland.
                                    </p>
                                    <br></br>
                                    <p>We fully understand that mutliple families that live here in Southern California does not have
                                        the means to take their kids to Disney. The cost of the entrance alone is enough to burden many families.</p>
                                    <br></br>

                                    <p>We are hoping that with your generosity, we will be able to provide them with one fun day in the Happiest Place on Earth!
                                        We'll provide the family with entrance tickets, parking fee, food and hopefully we'll have extra money
                                        so that the kids can walk away with a little souvenir to remind them of that special day.</p>
                                    <br></br>

                                    <p>100% of the the money will go towards that and we'll provide you with a receipt that can be used for tax purposes.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}