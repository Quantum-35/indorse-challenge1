import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { login } from './actions';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        const { target: {name, value} } = e;
        this.setState({
            [name]: value
        })
    }

    submitHandler = async(e) => {
        e.preventDefault();
        const { username, password } = this.state;
        const { userLogin, history } = this.props;
        try {
                const data = { username, password, history };
                await userLogin(data);
        } catch (error) {
            throw error;
        }
    }

    render () {
        return (
            <div>
                <h1 style={{color: "#43B8B1"}}>Login</h1>
                <div className="row signup">
                    <form className="col s12" onSubmit={this.submitHandler}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="username" type="text" name="username" required className="validate" onChange={this.handleChange} />
                            <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="password" type="password"  required name="password" className="validate" onChange={this.handleChange} />
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
                                        <Link to={'/'}>Signup</Link>
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
    userLogin: login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);