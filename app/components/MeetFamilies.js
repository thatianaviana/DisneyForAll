import React, { Component } from 'react';
import Nav from './children/Nav'
import Modal from './Modal';
import Footer from './Footer';
import FamilyCard from './FamilyCard';
import families from './families.js';

require('./MeetFamilies.css');

export default class MeetFamilies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            families
        };

    }
    render() {
        console.log(this.state.families);
        return (
            <div>
                <Nav
                    authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                />

                <section className="meetfamilies">
                    <div className="container" >
                        <div className="row">

                            {this.state.families.map (family => (
                            <FamilyCard
                                //handleClick={this.handleClick}
                                id={family.id}
                                key={family.id}
                                image={family.image}
                                name={family.name}
                                description={family.description}
                            />

                            ))}
                        
                        
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Bywater Family</div>
                                <img src="./assets/img/fam1.jpg" title="image 2" className="card-img-top" className="thumb" data-index="2" className="card-img-top" alt="..." />
                                
                                <div className="card-body">
                                    <p className="card-text"></p>
{/* 
                                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button> */} */}
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Ortiz Family</div>
                                <img src="./assets/img/fam2.jpg" title="image 2" className="card-img-top" className="thumb" data-index="2" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button>
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Stine Family</div>
                                <img src="./assets/img/fam3.jpg" title="image 3" className="card-img-top" className="thumb" data-index="3" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button>
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Manilow Family</div>
                                <img src="./assets/img/fam4.jpg" title="image 4" className="card-img-top" className="thumb" data-index="4" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button>
                                </div>
                            </div>

                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Abanda Family</div>

                                <img src="./assets/img/fam5.jpg" title="image 5" className="card-img-top" className="thumb" data-index="5" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                        </button>
                                </div>
                            </div>
                            <div className="card text-white bg-light mb-3">
                                <div className="card-header">Heick Family</div>

                                <img src="./assets/img/fam6.jpg" title="image 6" className="card-img-top" className="thumb" data-index="6" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"></p>

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Meet the Family
                                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal />
                </section>
                <Footer />
            </div>
        );
    }
}


