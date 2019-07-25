
import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
 

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input  placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input  type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
         
        </FormItem>
        <a className="login-form-forgot" href="#" onClick={()=>this.props.change("forget")}>Forgot password?</a>
        <br/>
        <a className="login-form-forgot" href="#" onClick={()=>this.props.change("change")}>Change password?</a>
      </Form>
      
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

