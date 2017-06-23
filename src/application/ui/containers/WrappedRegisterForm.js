/**
 * Created by invictus on 6/14/17.
 */
import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as authActions from '../../actions/authActions';

const FormItem = Form.Item;

class RegisterForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: false,
            userNameStatus: {validateStatus: '', help: ''},
            emailStatus: {validateStatus: '', help: ''},
            user: {
                username: '',
                email: '',
                password: ''
            }
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.toLoginForm = this.toLoginForm.bind(this);
        this.validateUserName = this.validateUserName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.waitCheckForStates = this.waitCheckForStates.bind(this);
    }

    waitCheckForStates() {
        if (this.state.emailStatus.validateStatus === 'success'
            && this.state.userNameStatus.validateStatus === 'success') {
            console.log("called ... inside");
            this.setState({
                loading: true
            })

            let user = {
                user: this.state.user
            }

            this.props.actions.signup(user)
                .then(() => {
                    browserHistory.push('/');
                })
                .catch((error) => {
                    console.log(error);

                    this.setState({
                        loading: false
                    })
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.validateUserName(nextProps.userAvailable);
        this.validateEmail(nextProps.emailAvailable);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {

                let username = {
                    username: values.username
                }
                this.setState({
                    userNameStatus: {validateStatus: 'validating', help: 'checking the username'}
                })

                // make internet call to validate username
                this.props.actions.validateUserName(username).then(()=> this.waitCheckForStates());

                let email = {
                    email: values.email
                }

                this.setState({
                    emailStatus: {validateStatus: 'validating', help: 'checking the username'}
                })

                // make internet call to validate email
                this.props.actions.validateEmailAddress(email).then(()=> this.waitCheckForStates());


                this.setState({
                    user: {
                        username: values.username,
                        email: values.email,
                        password: values.password
                    }
                })


            }
        });
    }

    toLoginForm(e) {
        e.preventDefault();
        browserHistory.push("/auth");
    }

    validateUserName(userAvailable) {
        if (userAvailable && userAvailable !== '') {
            this.setState({
                userNameStatus: {validateStatus: 'error', help: 'That name is already taken'}
            });
        } else if (!userAvailable && userAvailable !== '') {
            this.setState({
                userNameStatus: {validateStatus: 'success', help: ''}
            });
        }
    }

    validateEmail(emailAvailable) {
        if (emailAvailable && emailAvailable !== '') {
            this.setState({
                emailStatus: {validateStatus: 'error', help: 'That name is already taken'}
            });
        } else if (!emailAvailable && emailAvailable !== '') {
            this.setState({
                emailStatus: {validateStatus: 'success', help: ''}
            });
        }
    }


    render() {
        const {getFieldDecorator} = this.props.form;

        let userField = null;
        if (this.state.userNameStatus.validateStatus) {
            userField = <FormItem
                hasFeedback
                validateStatus={this.state.userNameStatus.validateStatus}
                help={this.state.userNameStatus.help}>
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
                )}
            </FormItem>
        } else {
            userField = <FormItem>
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
                )}
            </FormItem>
        }

        let emailField = null;

        if (this.state.emailStatus.validateStatus) {
            emailField = <FormItem
                hasFeedback
                validateStatus={this.state.emailStatus.validateStatus}
                help={this.state.emailStatus.help}>
                {getFieldDecorator('email', {
                    rules: [
                        {required: true, message: 'Please input your email!'},
                        {type: 'email', message: 'Must be a valid email'}
                    ],
                })(
                    <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email"/>
                )}
            </FormItem>
        } else {
            emailField = <FormItem>
                {getFieldDecorator('email', {
                    rules: [
                        {required: true, message: 'Please input your email!'},
                        {type: 'email', message: 'Must be a valid email'}
                    ],
                })(
                    <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email"/>
                )}
            </FormItem>
        }


        return (
            <div className="register-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h2>Sign up</h2>

                    {userField}

                    {emailField}

                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                {required: true, message: 'Please input your Password!'},
                                {min: 6, message: 'Password Should be more than 6 letters'}
                            ],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>

                        {getFieldDecorator('agree', {
                            valuePropName: 'checked',
                            initialValue: false
                        })(
                            <Checkbox>Agree with terms</Checkbox>
                        )}

                        <Button type="primary" htmlType="submit" className="login-form-button"
                                loading={this.state.loading}>
                            Sign up
                        </Button>
                        Or <a href="" onClick={this.toLoginForm}>Log in now!</a>
                    </FormItem>

                </form>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth,
        userAvailable: state.validate.usernameAvailable,
        emailAvailable: state.validate.emailAvailable
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

const WrappedRegisterForm = Form.create()(RegisterForm);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegisterForm);