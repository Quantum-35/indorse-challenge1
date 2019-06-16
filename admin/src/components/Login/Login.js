import React, { Component } from 'react';

class Login extends Component {
    render () {
        return (
            <div>
                <h1 style={{color: "#43B8B1"}}>Login</h1>
                <div className="row signup">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="username" type="text" name="username" className="validate" />
                            <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col s6">
                                    <button type="submit" className="reg-button">
                                        Login
                                    </button>
                                </div>
                                <div className="col s6">
                                    <button type="submit" className="login-button">
                                        Signup
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;