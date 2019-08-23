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
            families,
            modal: {
                famName: '',
                famDescription: '',
                famDescriptionTwo: ''
                
            }
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick (name, description, descriptionTwo){

        this.setState({modal : {famName: name, famDescription: description, famDescriptionTwo: descriptionTwo}});

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
                                handleClick={this.handleClick}
                                id={family.id}
                                key={family.id}
                                image={family.image}
                                name={family.name}
                                description={family.description}
                                descriptionTwo={family.descriptionTwo}
                            />

                            ))}
                        
                        </div>
                    </div>
                    <Modal 
                    modalInfo={this.state.modal}
                    />
                </section>
                <Footer />
            </div>
        );
    }
}


