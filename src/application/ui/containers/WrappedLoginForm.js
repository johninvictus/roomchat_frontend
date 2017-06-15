/**
 * Created by invictus on 6/14/17.
 */
import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {browserHistory} from 'react-router';

const FormItem = Form.Item;

class LoginForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toRegisterForm = this.toRegisterForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    toRegisterForm(e) {
        e.preventDefault();
        browserHistory.push("/auth/register");
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h2>Sign in</h2>

                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
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
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="" onClick={this.toRegisterForm}>register now!</a>
                    </FormItem>
                </form>
            </div>
        )
    }
}

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm ;