import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    /**
     * Callback invoked when
     * login form is submitted
     */
    handleEnter = () => {
        console.log('Enter the website');
    }

    /**
     * Callback invoked when Password
     * recovery form is submitted
     */
    handleRecoverPasswd = () => {
        console.log('Recover your password');
    }

    /**
     * Updates document's title
     */
    updateTitle() {
        document.title = !this.recover ? 'Login' : 'Password recovery';
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

    /**
     * Renders actual page
     */
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-0 justify-content-center">
                        <div id="login-wrapper" className={ 'bg-light shadow-lg mt-5 bg-success' + (this.recover ? ' recover' : null) }>
                            <div className="form-wrapper">
                                <div className="wrapper">
                                    <div className="login">
                                        <form onSubmit={this.handleEnter}>
                                            <h2 className="mb-2">Enter</h2>
                                            <br/>
                                            <div className="form-group mb-3">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="e-mail"
                                                    id="email"
                                                    className="form-control p-4 login-email"
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
                                                    className="form-control p-4 login-password"
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
                                            <button className="btn btn-lg mb-5">
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
                                        <form onSubmit={this.handleRecoverPasswd}>
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
                                                    className="form-control p-4 login-email"
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
                                            <button className="btn btn-lg my-5">
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