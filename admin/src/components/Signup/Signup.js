import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { signup } from './actions';

class Signup extends Component {

    state = {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        color: ''
    }

    handleChange = (e) => {
        const { target: {name, value} } = e;
        this.setState({
            [name]: value
        })
    }

    submitHandler = async(e) => {
        e.preventDefault();
        const { username, firstName, lastName, email, password, confirmPassword } = this.state;
        const { userSignup, history } = this.props;
        try {
            if (password === confirmPassword){
                const data = {username, firstName, lastName, email, password, history, confirmPassword};
                await userSignup(data);
            } else {
                this.setState({color: 'red'});
                return { message: "Invalid user input." }
            }
        } catch (error) {
            throw error;
        }
    }

    render () {
        const { color } = this.state;
        return (
            <div>
                <h1 style={{color: "#43B8B1"}}>Signup</h1>
                <div className="row signup">
                    <form className="col s12" onSubmit={this.submitHandler}>
                        <div className="row">
                            <div className="input-field col s6">
                            <input  id="first_name" name="firstName" type="text" required className="validate" onChange={this.handleChange} />
                            <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                            <input id="last_name" type="text" name="lastName" required className="validate" onChange={this.handleChange} />
                            <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="username" type="text" name="username" required className="validate" onChange={this.handleChange} />
                            <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" required  name="email" className="validate" onChange={this.handleChange} />
                            <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input id="password" type="password"  required name="password" className="validate" onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                            </div>

                            <div className="input-field col s6">
                            <input id="confirmPassword" type="password" style={{borderColor: `${color}`}} required name="confirmPassword" className="validate" onChange={this.handleChange} />
                            <label htmlFor="confirmPassword">Confirm Password</label>
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
                                        <Link to={'/login'}>Login</Link>
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({data: state});
const mapDispatchToProps = dispatch => bindActionCreators({
    userSignup: signup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);