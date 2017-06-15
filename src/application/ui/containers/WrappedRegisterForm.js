/**
 * Created by invictus on 6/14/17.
 */
import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {browserHistory} from 'react-router';

const FormItem = Form.Item;

class RegisterForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toLoginForm = this.toLoginForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
            }
        });
    }

    toLoginForm(e) {
        e.preventDefault();
        browserHistory.push("/auth");
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className="register-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h2>Sign up</h2>

                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{required: true, message: 'Please input your email!'}],
                        })(
                            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email"/>
                        )}
                    </FormItem>

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

                        <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                            Sign up
                        </Button>
                        Or <a href="" onClick={this.toLoginForm}>Log in now!</a>
                    </FormItem>

                </form>
            </div>
        )
    }
}

const WrappedRegisterForm = Form.create()(RegisterForm);
export default WrappedRegisterForm ;