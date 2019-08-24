import React, { Component } from 'react';
import Nav from './children/Nav'
import Modal from './Modal';
import Footer from './Footer';
import FamilyCard from './FamilyCard';
// import families from './families.js';
import axios from 'axios'

require('./MeetFamilies.css');

export default class MeetFamilies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            families: [],
            modal: {
                famName: '',
                famDescription: '',
                famDescriptionTwo: ''

            }
        }

        this.handleClick = this.handleClick.bind(this)
    }


    componentDidMount() {
        axios.get("/apis/meetfamilies")
            .then(data => {

                console.log(data.data)
                this.setState({
                    families: data.data

                })

            }).catch(function (err) {
                console.log(err);

            })

    }

    handleClick(fullName, aboutFamily) {

        this.setState({ modal: { famName: fullName, famaboutFamily: aboutFamily } });

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

                            {this.state.families.map(family => (
                                <FamilyCard
                                    handleClick={this.handleClick}
                                    id={family._id}
                                    key={family._id}
                                    // image={family.image}
                                    fullName={family.fullName}
                                    houseHoldIncome={family.houseHoldIncome}
                                    aboutFamily={family.aboutFamily}
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


