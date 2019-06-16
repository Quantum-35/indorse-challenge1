import React, { Component } from 'react';

class Signup extends Component {
    render () {
        return (
            <div>
                <h1 style={{color: "#43B8B1"}}>Signup</h1>
                <div className="row signup">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                            <input  id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="username" type="text" name="username" className="validate" />
                            <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
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
                                        Signup
                                    </button>
                                </div>
                                <div className="col s6">
                                    <button type="submit" className="login-button">
                                        Login
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;