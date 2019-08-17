// Include React
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Auth from './utils/Auth';
import Nav from './children/Nav'

require('./Apply.css');

export default class Apply extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			fullName: '',
			houseHoldIncome: '',
			// houseHoldIncomeRepeat: '',
			aboutFamily: '',
			// aboutFamilyRepeat: ''
		};

		this.handlefullNameValidation = this.handlefullNameValidation.bind(this);
		this.handlehouseHoldIncomeValidation = this.handlehouseHoldIncomeValidation.bind(this);
		// this.handlehouseHoldIncomeRepeat = this.handlehouseHoldIncomeRepeat.bind(this);
		this.handleaboutFamilyValidation = this.handleaboutFamilyValidation.bind(this);
		// this.handleaboutFamilyRepeat = this.handleaboutFamilyRepeat.bind(this);
		// this.signUpUser = this.signUpUser.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handlefullNameValidation(event) {
		// fullName is passed in
		const fullNameVal = this.refs.fullName.value,
			fullNameForm = this.refs.fullNameForm,
			fullNameFeedback = this.refs.fullNameFeedback;
		// fullName is updated in state
		this.setState({
			'fullName': fullNameVal
		});

		// fullName is checked to see if it matches certain length. If not, the screen will indicate it as such.
		if (fullNameVal.length < 6) {
			fullNameForm.classList.remove("has-success");
			fullNameForm.classList.add("has-error");
			fullNameFeedback.textContent = "fullName must be at least 6 characters long";
		} else {
			fullNameForm.classList.remove("has-error");

			fullNameForm.classList.add("has-success");
			fullNameFeedback.textContent = "fullName valid!";
		}
	}

	handlehouseHoldIncomeValidation(event) {

		// houseHoldIncome is passed in
		const houseHoldIncomeVal = this.refs.houseHoldIncome.value;
		const houseHoldIncomeForm = this.refs.houseHoldIncomeForm;
		const houseHoldIncomeFeedback = this.refs.houseHoldIncomeFeedback;

		this.setState({
			'houseHoldIncome': houseHoldIncomeVal
		});

		const houseHoldIncomeRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
		if (!houseHoldIncomeRegEx.test(houseHoldIncomeVal)) {
			houseHoldIncomeForm.classList.remove("has-success");
			houseHoldIncomeForm.classList.add("has-error");
			houseHoldIncomeFeedback.textContent = "houseHoldIncome must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.";
		} else {
			houseHoldIncomeForm.classList.remove("has-error");

			houseHoldIncomeForm.classList.add("has-success");
			houseHoldIncomeFeedback.textContent = "houseHoldIncome set correctly!";
		}
	}

	handlehouseHoldIncomeRepeat(event) {
		const houseHoldIncomeVal = this.state.houseHoldIncome;
		const houseHoldIncomeRepeat = this.refs.repeathouseHoldIncome.value;
		const repeathouseHoldIncomeForm = this.refs.repeathouseHoldIncomeForm;
		const repeathouseHoldIncomeFeedback = this.refs.repeathouseHoldIncomeFeedback;

		this.setState({
			'houseHoldIncomeRepeat': houseHoldIncomeRepeat
		});

		if (houseHoldIncomeVal !== houseHoldIncomeRepeat) {
			repeathouseHoldIncomeForm.classList.remove("has-success");

			repeathouseHoldIncomeForm.classList.add("has-error");
			repeathouseHoldIncomeFeedback.textContent = "houseHoldIncomes Don't Match";
		} else {
			repeathouseHoldIncomeForm.classList.remove("has-error");

			repeathouseHoldIncomeForm.classList.add("has-success");
			repeathouseHoldIncomeFeedback.textContent = "houseHoldIncomes Match!";
		}
	}

	handleaboutFamilyValidation(event) {

		const aboutFamilyVal = this.refs.aboutFamily.value;
		const aboutFamilyForm = this.refs.aboutFamilyForm;
		const aboutFamilyFeedback = this.refs.aboutFamilyFeedback;
		const aboutFamilyAdditionalFeedback = this.refs.aboutFamilyAdditionalFeedback;
		const aboutFamilyRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		this.setState({
			'aboutFamily': aboutFamilyVal
		});

		if (!aboutFamilyRegEx.test(aboutFamilyVal)) {
			aboutFamilyForm.classList.remove("has-success");

			aboutFamilyForm.classList.add("has-error");
			aboutFamilyFeedback.textContent = "Invalid aboutFamily";
			aboutFamilyAdditionalFeedback.textContent = "Ex: someone@example.com";

		} else {
			aboutFamilyForm.classList.remove("has-error");

			aboutFamilyForm.classList.add("has-success");
			aboutFamilyFeedback.textContent = "Valid aboutFamily!";
			aboutFamilyAdditionalFeedback.textContent = "";
		}
	}

	handleaboutFamilyRepeat(event) {

		const aboutFamilyVal = this.refs.aboutFamilyRepeat.value;
		const aboutFamilyForm = this.refs.aboutFamilyRepeatForm;
		const aboutFamilyFeedback = this.refs.aboutFamilyRepeatFeedback;
		const aboutFamilyRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		this.setState({
			'aboutFamilyRepeat': aboutFamilyVal
		});

		if (!aboutFamilyRegEx.test(aboutFamilyVal)) {
			aboutFamilyForm.classList.remove("has-success");

			aboutFamilyForm.classList.add("has-error");
			aboutFamilyFeedback.textContent = "aboutFamilys Don't Match";

		} else {
			aboutFamilyForm.classList.remove("has-error");

			aboutFamilyForm.classList.add("has-success");
			aboutFamilyFeedback.textContent = "aboutFamilys Match!";
		}
	}

	signUpUser(userData) {
		axios.post("/apis/users/signup", {
			fullName: userData.fullName,
			aboutFamily: userData.email,
			houseHoldIncome: userData.houseHoldIncome
		}).then(function (data) {
			console.log("data stuff", data.data);
			if (data.duplicateUser) {
				// Replace with Modal
				alert("Sorry, that fullName has been taken");
			} else if (data.data.success) {
				console.log("yay!")
				this.props.authenticate();
				this.setState({
					redirectToReferrer: true
				});
			}
		}.bind(this)).catch(function (err) {
			console.log(err);
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const fullName = this.state.fullName;
		const email = this.state.email;
		const houseHoldIncome = this.state.houseHoldIncome;

		let userData = {
			fullName: fullName,
			email: email,
			houseHoldIncome: houseHoldIncome
		};

		if (!userData.fullName || !userData.email || !userData.houseHoldIncome) {
			return alert("Please don't leave fields blank");
		}

		// If we have an email and houseHoldIncome, run the signUpUser function
		this.signUpUser(userData);

		this.setState({
			value: '',
			fullName: '',
			houseHoldIncome: '',
			houseHoldIncomeRepeat: '',
			email: '',
			emailRepeat: '',
			redirectToReferrer: false
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } };
		const { redirectToReferrer } = this.state;

		if (redirectToReferrer) {
			return (
				<Redirect to={from} />
			)
		}

		return (
			<div>
				<Nav
					authenticated={this.props.authenticated}
					authenticate={this.props.authenticate}
					deAuthenticate={this.props.deAuthenticate}
					logout={this.props.logout}
				/>
				<div id="registration-container" className="container-fluid">
					<section className="container">
						<div className="container-page">
							<form onSubmit={this.handleSubmit.bind(this)}>
								<div className="col-md-6">
									<h3 className="dark-grey">Registration</h3>

									{/* <div id="fullName-form" ref="fullNameForm" className="form-group col-lg-12">
										<label>fullName</label>
										<input type="" name="" ref="fullName" className="form-control" id="fullName-input" value={this.state.fullName} onChange={this.handlefullNameValidation} />
										<small id="fullName-feedback" ref="fullNameFeedback" className=""></small>
									</div> */}
									<div id="email-form" className="form-group col-lg-12" ref="emailForm">
										<label>Email Address</label>
										<input type="email" name="" ref="email" className="form-control" id="email-input" value={this.state.email} onChange={this.handleEmailValidation} />

										<p id="email-feedback" className="" ref="emailFeedback"></p>
										<small id="email-additional-feedback" ref="emailAdditionalFeedback" className="form-text text-muted"></small>
									</div>

									<div id="email-repeat-form" className="form-group col-lg-12" ref="emailRepeatForm">
										<label>Repeat Email Address</label>
										<input type="email" name="" ref="emailRepeat" className="form-control" id="repeat-email-input" value={this.state.emailRepeat} onChange={this.handleEmailRepeat} />
										<small id="email-repeat-feedback" className="" ref="emailRepeatFeedback"></small>
									</div>
									
									<div id="houseHoldIncome-form" className="form-group col-lg-12" ref="houseHoldIncomeForm">
										<label>houseHoldIncome</label>
										<input type="houseHoldIncome" name="" ref="houseHoldIncome" className="form-control" id="houseHoldIncome-input" value={this.state.houseHoldIncome} onChange={this.handlehouseHoldIncomeValidation} />
										<small id="houseHoldIncome-feedback" ref="houseHoldIncomeFeedback" className=""></small>
									</div>

									<div id="repeat-houseHoldIncome-form" className="form-group col-lg-12" ref="repeathouseHoldIncomeForm">
										<label>Repeat houseHoldIncome</label>
										<input type="houseHoldIncome" name="" ref="repeathouseHoldIncome" className="form-control" id="repeat-houseHoldIncome-input" value={this.state.houseHoldIncomeRepeat} onChange={this.handlehouseHoldIncomeRepeat} />
										<small id="repeat-houseHoldIncome-feedback" className="" ref="repeathouseHoldIncomeFeedback"></small>
									</div>

									<div className="col-md-6">
										<button type="submit" className="btn btn-primary signup">Register</button>
									</div>

								</div>
								
							</form>
						</div>
					</section>
				</div>
			</div>
		)
	}
}