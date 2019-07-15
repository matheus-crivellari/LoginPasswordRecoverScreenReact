import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        email: {
            value: '',
            invalid: false,
            valid: false,
        },

        password: {
            value: '',
            invalid: false,
            valid: false,
        },

        recoverPassword: {
            value: '',
            invalid: false,
            valid: false,
        },
    };

    /**
     * Callback invoked when
     * login form is submitted
     */
    handleEnter = e => {
        e.preventDefault();
        console.log('Enter the website');
    }

    /**
     * Callback invoked when Password
     * recovery form is submitted
     */
    handleRecoverPasswd = e => {
        e.preventDefault();
        console.log('Recover your password');
    }

    /**
     * Updates document's title
     */
    updateTitle() {
        document.title = !this.recover ? 'Login' : 'Password recovery';
    }

    /**
     * Event fired when typing in
     * login form email input
     */
    handleUpdateEmail = e => {
        const email = e.target.value;

        this.setState({
            ...this.state,
            email: {
                value: email,
                invalid: this.validateEmail(email),
                valid: !this.validateEmail(email),
            },
        });
    }

    /**
     * Event fired when typing in
     * login form password input
     */
    handleUpdatePassword = e => {
        const password = e.target.value;

        this.setState({
            ...this.state,
            password: {
                value: password,
                invalid: this.validatePassword(password),
                valid: !this.validatePassword(password),
            },
        });
    }

    /**
     * Event fired when typing in password
     * recoery form email input
     */
    handleUpdateRecoverEmail = e => {
        const email = e.target.value;

        this.setState({
            ...this.state,
            recoverPassword: {
                value: email,
                invalid: this.validateEmail(email),
                valid: !this.validateEmail(email),
            },
        });
    }

    /**
     * Checks if email is a valid email address
     * @param {string} email Email string
     */
    validateEmail(email) {

        const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            .test(email);

        let invalid = false;

        if(email === '')
            invalid = true;

        if(!validEmail)
            invalid = true;

        if(email.length < 10)
            invalid = true;

        return invalid;
    }

    /**
     * Checks if password is valid
     * @param {string} pass Password string
     */
    validatePassword(pass) {

        let invalid = false;

        if(pass === '')
            invalid = true;

        if(pass.length < 6)
            invalid = true;

        return invalid;
    }

    /**
     * Event handler fired when
     * component finishes setting up
     */
    componentDidMount() {
        this.updateTitle();
    }

    /**
     * Event handler fired when something
     * triggers dom re-rendering
     */
    componentDidUpdate() {
        this.updateTitle();
    }

    /**
     * Returns current route for using in view
     * Also changes document title
     */
    get recover() {
        return this.props.match.params.passwd === 'password-recover';
    }

    get loginFormValid() {
        return this.state.email.invalid || this.state.email.value === '' || this.state.password.invalid || this.state.password.value === '';
    }

    get passRecoverFormValid() {
        return this.state.recoverPassword.invalid || this.state.recoverPassword.value === '';
    }

    /**
     * Renders actual page
     */
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-0 justify-content-center">
                        <div id="login-wrapper" className={ 'bg-light shadow-lg mt-5 bg-success' + (this.recover ? ' recover' : '') }>
                            <div className="form-wrapper">
                                <div className="wrapper">
                                    <div className="login">
                                        <form noValidate={true} onSubmit={this.handleEnter}>
                                            <h2 className="mb-2">Enter</h2>
                                            <br/>
                                            <div className="form-group mb-3">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="e-mail"
                                                    id="email"
                                                    className={ 'form-control p-4 login-email' + (this.state.email.invalid ? ' is-invalid' : '') + (this.state.email.valid ? ' is-valid' : '')}
                                                    onChange={this.handleUpdateEmail}
                                                    value={this.state.email.value}
                                                    autoComplete="off"
                                                    />
                                                    <small className="text-left invalid-feedback">
                                                        Invalid e-mail.
                                                    </small>
                                            </div>
                                            <div className="form-group mb-5">
                                                <input
                                                    required
                                                    type="password"
                                                    placeholder="password"
                                                    id="password"
                                                    className={ 'form-control p-4 login-password' + (this.state.password.invalid ? ' is-invalid' : '') + (this.state.password.valid ? ' is-valid' : '')}
                                                    onChange={this.handleUpdatePassword}
                                                    value={this.state.password.value}
                                                    autoComplete="off"
                                                    />
                                                    <small className="text-left invalid-feedback">
                                                        Invalid password.
                                                    </small>
                                            </div>
                                            <p>
                                                <Link to="/password-recover">
                                                    Password recover?
                                                </Link>
                                            </p>
                                            <br/>
                                            <button
                                                disabled={this.loginFormValid}
                                                className="btn btn-lg mb-5"
                                                >
                                                Enter
                                            </button>
                                            <br/>
                                            <small className="my-0 py-0">
                                                This site is protected by
                                                reCAPTCHA and Google.
                                            </small>
                                            <br/>
                                            <small className="my-0 py-0">
                                                <Link to="/">Privacy terms</Link> and
                                                <Link to="/"> Service terms</Link>.
                                            </small>
                                        </form>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <div className="recover">
                                        <form noValidate={true} onSubmit={this.handleRecoverPasswd}>
                                            <h2 className="mb-3">Forgot password</h2>
                                            <br/>
                                            <p className="mb-3">
                                            Type your e-mail and we'll
                                            send you an e-mail telling
                                            you how to recover it.
                                            </p>
                                            <div className="form-group mb-3">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="e-mail"
                                                    id="recoverEmail"
                                                    className={ 'form-control p-4 login-email' + (this.state.recoverPassword.invalid ? ' is-invalid' : '') + (this.state.recoverPassword.valid ? ' is-valid' : '')}
                                                    onChange={this.handleUpdateRecoverEmail}
                                                    autoComplete="off"
                                                    />
                                                    <small className="text-left invalid-feedback">
                                                        Invalid e-mail.
                                                    </small>
                                            </div>
                                            <p className="my-3">
                                                Remembered your password?
                                                <Link to="/"> Enter</Link>
                                            </p>
                                            <br/>
                                            <button
                                                disabled={this.passRecoverFormValid}
                                                className="btn btn-lg my-5"
                                                >
                                                Recover password
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="message-wrapper">
                                <div className="wrapper">
                                    <div className="welcome">
                                    <h2>Hey, friend</h2>
                                    <p>Fill up your e-mail and password
                                        to enter the website.
                                    </p>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <div className="recover">
                                    <h2>Smooth,</h2>
                                    <p>
                                        We'll help you. Fill up required data
                                        to recover your password.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}