import React from "react";
import Tab from "./tab";
import { Form, Input, Tooltip, Icon,DatePicker, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, InputNumber } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit} className="form">
      <center><b><h3>Sales:</h3></b></center>
  <FormItem
          {...formItemLayout}
          label={(
            <span>
              Name
              <Tooltip title="What do you want others to call you?">
                <Icon type="" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('Name', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Date
              <Tooltip title="What do you want others to call you?">
                <Icon type="" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('DatePicker', {
            rules: [{ required: true, message: 'Please input your Date!',}],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem>
          <Tab />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Subtotal
              <Tooltip title="What do you want others to call you?">
                <Icon type="" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('Subtotal', {
            rules: [{ required: true, message: 'Please input your subtotal!',}],
          })(
            <InputNumber />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Tax
              <Tooltip title="What do you want others to call you?">
                <Icon type="" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('Tax', {
            rules: [{ required: true, message: 'Please input your tax!',}],
          })(
            <InputNumber
            defaultValue={100}
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
             />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Grand total
              <Tooltip title="What do you want others to call you?">
                <Icon type="" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('Grand total', {
            rules: [{ required: true, message: 'Please input your Grand total!',}],
          })(
            <InputNumber />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Payment type
              <Tooltip title="What do you want others to call you?">
                <Icon type="" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('Payment type', {
            rules: [{ required: true, message: 'Please input your Payment type!',}],
          })(
            <Select placeholder="Select your payment type">
               <Option value="">Select your payment type</Option>
              <Option value="cash">Cash</Option>
              <Option value="credit card">credit card</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;



	
