import React, { Component } from 'react';

export default class Main extends Component {
    state = {
        msg: 'Oi',
    }

    render() {
        return (
            <div class="container-fluid py-5">
                <div class="row">
                    <div class="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-0 justify-content-center">

                    <div id="login-wrapper" className="bg-light shadow-lg mt-5 bg-success">
                        <div class="form-wrapper">
                        <div class="wrapper">
                            <div class="login">
                                <form>
                                    <h2 class="mb-2">Enter</h2>
                                    <br/>
                                    <div class="form-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            placeholder="e-mail"
                                            formControlName="email"
                                            id="email"
                                            class="form-control p-4 login-email"
                                            autocomplete="off"
                                            />
                                            <small class="text-left invalid-feedback">
                                                Invalid e-mail.
                                            </small>
                                    </div>
                                    <div class="form-group mb-5">
                                        <input
                                            required
                                            type="password"
                                            placeholder="password"
                                            formControlName="password"
                                            id="password"
                                            class="form-control p-4 login-password"
                                            autocomplete="off"
                                            />
                                            <small class="text-left invalid-feedback">
                                                Invalid password.
                                            </small>
                                    </div>
                                    <p>
                                        <a href="#">Password recover?</a>
                                    </p>
                                    <br/>
                                    <button class="btn btn-lg mb-5">
                                        Enter
                                    </button>
                                    <br/>
                                    <small class="my-0 py-0">
                                        This site is protected by reCAPTCHA and Google.
                                    </small>
                                    <br/>
                                    <small class="my-0 py-0">
                                    <a href="#">Privacy terms</a> and
                                    <a href="#">Service terms</a>.
                                    </small>
                                </form>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="recover">
                                <form>
                                    <h2 class="mb-3">Forgot password</h2>
                                    <br/>
                                    <p class="mb-3">
                                    Type your e-mail and we'll send you an e-mail telling
                                    you how to recover it.
                                    </p>
                                    <div class="form-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            placeholder="e-mail"
                                            formControlName="email"
                                            id="recoverEmail"
                                            class="form-control p-4 login-email"
                                            autocomplete="off"
                                            />
                                            <small class="text-left invalid-feedback">
                                                Invalid e-mail.
                                            </small>
                                    </div>
                                    <p class="my-3">
                                        Remembered your password?
                                        <a href="#">Enter</a>
                                    </p>
                                    <br/>
                                    <button class="btn btn-lg my-5">
                                        Recover password
                                    </button>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div class="message-wrapper">
                        <div class="wrapper">
                            <div class="welcome">
                            <h2>Hey, friend</h2>
                            <p>Fill up your e-mail and password to enter the website.</p>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="recover">
                            <h2>Smooth,</h2>
                            <p>
                                We'll help you. Fill up required data to recover your password.
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