
import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.change("otp");
      }
    });
  }




  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
    
    <FormItem
          
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input placeholder="Enter your e-mail" />
          )}
        </FormItem>
       
        <FormItem>
                   <Button type="primary"  htmlType="submit" className="login-form-button">
            Next
          </Button> 
         
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;