import React, { Component } from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Connect from './components/Connect';
import Finish from './components/Finish';
import VerifyEmail from './components/verifyEmail';

/* 
    * verify Email
    * new user - signup  
    * old user - login //Todo:  get userdata and preferances
    * check preferances //Todo:  set/update userdata and preferances 
*/

export default class Onboarding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            email: '',
            passwordOne: '',
            passwordTwo: '',
            isVerified: false,
            isLoading: false,
        }
    }
    previousStep = () => {
        //Todo: Clear passwords and wait for user to reverify email
        this.setState({ passwordOne: '', passwordTwo: '', isVerified: false, step: 0 })
    }
    verifyEmail = (e) => {
        //Todo: reverify email of user from realtime-database api // serverless function call
        e.preventDefault();
        this.setState({ isVerified: true, step: 1 });
    }
    loginUser = (e) => {
        //Todo: verify firebase auth and get preferances from firestore
        this.setState({ step: 2 });
        e.preventDefault();
    }
    signUpUser = (e) => {
        //Todo: verify firebase auth create user and set user/preferances to firestore and add email to real-time db
        this.setState({ step: 4 });
        e.preventDefault();
    }
    GoogleConnect = (e) => {
        /*
            * get/create labels in gmail 
            * get threads by labels - messsages 
            * get contacts 
            * get signatures
        */
        this.setState({ step: 5 });
        e.preventDefault();
    }
    finishSetup = () => {
        //TODO : show the intro view explaining the app
        // this.props.history.push('/home')
    }

    onChange = ({ target }) => {
        let { name, value } = target
        this.setState({ [name]: value })
    }
    render() {
        let { step, isLoading, email, passwordOne, passwordTwo } = this.state;
        return (
            <div>
                {step === 0 && <VerifyEmail
                    email={email}
                    isLoading={isLoading}
                    onChange={this.onChange}
                    verify={this.verifyEmail}
                />}
                {step === 1 && <Login
                    email={email}
                    passwordOne={passwordOne}
                    isLoading={isLoading}
                    onChange={this.onChange}
                    verify={this.loginUser}
                    back={this.previousStep}
                />}
                {step === 2 && <Signup
                    email={email}
                    passwordOne={passwordOne}
                    passwordTwo={passwordTwo}
                    isLoading={isLoading}
                    onChange={this.onChange}
                    verify={this.signUpUser}
                    back={this.previousStep}
                />}
                {/* {step === 3 && <Preferances
                    email={email}
                    isLoading={isLoading}
                    onChange={this.onChange}
                    verify={this.verifyEmail}
                />} */}
                {step === 4 && <Connect
                    email={email}
                    isLoading={isLoading}
                    onChange={this.onChange}
                    verify={this.GoogleConnect}
                />}
                {step === 5 && <Finish
                    email={email}
                    isLoading={isLoading}
                    onChange={this.onChange}
                    verify={this.finishSetup}
                />}
            </div>
        )
    }
}
