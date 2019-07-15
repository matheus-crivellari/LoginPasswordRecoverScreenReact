import React, { Component } from 'react';

export default class Main extends Component {
    state = {
        msg: 'Oi',
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 p-0">

                            <div id="login-wrapper"
                                    className="bg-light shadow-lg mt-5 bg-success">
                                <div className="form-wrapper">
                                    <div class="wrapper">
                                        <div className="login">
                                            <h2>Enter</h2>
                                            <br/>
                                            <input type="text" name="email"
                                                id="email" className="login-email" />
                                            <input type="password" name=""
                                                id="" className="login-password" />
                                            <a href="#">Password recover</a>
                                            <br/>
                                            <button>Enter</button>
                                            <br/>
                                            <small>
                                                This site is protected by
                                                reCAPTCHA and Google.
                                                </small>
                                            <small>
                                                <a href="#">Privacy terms</a> and
                                                <a href="#">Service terms</a>.
                                            </small>
                                        </div>
                                    </div>
                                    <div className="wrapper">
                                        <div className="recover">
                                            <h2>Forgot password</h2>
                                            <br/>
                                            <p>
                                                Type your e-mail and we'll send
                                                you an e-mail telling
                                                you how to recover it.
                                            </p>
                                            <input type="text" name="email"
                                                id="email" className="recover-email" />
                                            <p>
                                                Remembered your password?
                                                <a href="#">Enter</a>
                                            </p>
                                            <br/>
                                            <button>Recover password</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="message-wrapper">
                                    <div className="wrapper">
                                        <div className="welcome">
                                            <h2>Hey, friend</h2>
                                            <p>
                                                Fill up your e-mail and password
                                                to enter the website.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="wrapper">
                                        <div className="recover">
                                            <h2>Smooth,</h2>
                                            <p>
                                                We'll help you. Fill up required
                                                data to recover your password.
                                            </p>
                                        </div>
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