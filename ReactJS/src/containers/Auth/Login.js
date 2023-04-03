import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService'

class Login extends Component {
    //khai bao cac state trong ham nay
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }
    handleOnChangeInput = (e) => {
        this.setState({ username: e.target.value });
    }
    handleOnchangePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            console.log(this.state.username, this.state.password);
            let data = await handleLoginApi(this.state.username, this.state.password);
            console.log(data);
            if (data && data.errorCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            } if (data && data.errorCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('login successful');
            }
        } catch (e) {
            console.log('catch');
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }
    }
    handleShowHiddenPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 from-group login-input row'>
                            <label>Email</label>
                            <input type="text" value={this.state.username}
                                onChange={(e) => this.handleOnChangeInput(e)}
                                name="email" placeholder='Enter your email'
                                className='form-control' />
                        </div>
                        <div className='col-12 from-group login-input row'>
                            <label>Password</label>
                            <input
                                type={this.state.isShowPassword ? 'text' : 'password'}
                                onChange={(e) => this.handleOnchangePassword(e)}
                                name='password'
                                placeholder='Enter your password'
                                className='form-control'
                            />
                            <span onClick={() => this.handleShowHiddenPassword()}>
                                <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                            </span>
                        </div>
                        <div className='col-12 errMessage' style={{ color: 'red' }}>
                            <span>{this.state.errMessage}</span>
                        </div>
                        <div id="button" className="row btn-login-container">
                            <button onClick={() => this.handleLogin()}
                                className='btn-login'>Log in</button>
                        </div>
                        <div className='col-12 forgot-passwork'>
                            <span>Forgot your password?</span>
                        </div>
                        <div id="alternativeLogin">
                            <label>Or sign in with:</label>
                            <div id="iconGroup">
                                <i className="fab fab-icon fa-google-plus-g"></i>
                                <i className="fab fab-icon fa-facebook-f"></i>
                                <i className="fab fab-icon fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//redux
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};
//redux
const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
