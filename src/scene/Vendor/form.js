import React, { Component } from "react";
import {
  Form,
  Radio,
  Checkbox,
  Icon,
  Select,
  Input,
  Button,
  InputNumber,
  
} from "antd";
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const country=['india','japan'];
const citya={india:['tamilnadu','kerala'],japan:['honshu','shikoku']};

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}


class HorizontalLoginForm extends Component {
  constructor(){
    super();
this.state = {
value: 1,
country:''
}
};
  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
    //
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.Modalclose();
      }
    });
  };
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
    console.log(this.props)
  };

  countryChange =(e,setFieldsValue)=>{
    console.log(e)
    this.setState({
      country:e
    })
    setFieldsValue({state: ''});
  }
   

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,setFieldsValue
    } = this.props.form;

    let option = country.map(item=>{
      return(
      <Option value={item}>{item}</Option>
        )
    })
    let city ;
    let cityArray=this.state.country;
if(cityArray!==''){
  city =citya[cityArray].map(item=>{
      return(
      <Option value={item}>{item}</Option>
        )
    })
  }
    // Only show error after a field is touched.
    const userNameError =
      isFieldTouched("vendorName") && getFieldError("vendorName");
    const passwordError = isFieldTouched("mail") && getFieldError("mail");
    return (
      <div className="row">
        <Form onSubmit={this.handleSubmit} className="vendorform">
          <fieldset>
            <legend>Add vendor</legend>
            <div className="row">
              <div className="col-6">
                <FormItem>
                  {getFieldDecorator("vendorName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your vendorname!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Vendorname"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("contactNo", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your contact no!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="number"
                      placeholder="Contact no"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("country", {
                    rules: [
                      { required: true, message: "Please input your country!" }
                    ]
                    
                  })(
                    <Select onChange={e=>this.countryChange(e,setFieldsValue)}placeholder="select country"
                    >
                    
                      {option}
                    </Select >
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("state", {
                    rules: [
                      { required: true, message: "Please input your state!" }
                    ]
                  })(
                    <Select placeholder="select state">
  
    
    {city}
  </Select>
                  )}
                </FormItem>
                
                <FormItem>
                  {getFieldDecorator("address", {
                    rules: [
                      { required: true, message: "Please input your address!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Address"
                    />
                  )}
                </FormItem>
                
                <FormItem>
                  {getFieldDecorator("creditlimit", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your credit limit!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Credit limit"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("creditbalance", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your credit balance!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Credit balance"
                    />
                  )}
                </FormItem>
              </div>
              <div className="col-6">
                <FormItem>
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: "The input is not valid E-mail!"
                      },
                      { required: true, message: "Please input your mail!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="email"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="email"
                      placeholder="email"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("vendoridentityid", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your vendor identity id!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="mail"
                      placeholder="vendor identity id"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("totalnoofproducts", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your total no of products!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="number"
                      placeholder="total no of products"
                    />
                  )}
                </FormItem>
                <br />
                <FormItem>
                  {getFieldDecorator("Select", {
                    rules: [{ required: true, message: "please select" }]
                  })(
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      tokenSeparators={[","]}
                    >
                      <Option value="1">Black current_10gm</Option>
                      <Option value="2">Red velvet_10gm</Option>
                      <Option value="3">Black current_vennila__10gm</Option>
                      <Option value="4">Truffle small</Option>
                      <Option value="5">Black forest</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("Status", {
                    rules: [
                      { required: true, message: "please input your status" }
                    ]
                  })(
                    <RadioGroup
                      onChange={this.onChange}
                      value={this.state.value}
                    >
                      Status <br />
                      <Radio value={"Active"}>Active</Radio>
                      <Radio value={"Inactive"}>Inactive</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
              </div>
            </div>
            <div className="vendorsubmit">
              <FormItem>
                {/* {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>Remember me</Checkbox>
        )}
        <a className="login-form-forgot" href="">Forgot password</a> */}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Save
                </Button>
                <Button onClick={this.props.Modalclose}>Cancel</Button>
              </FormItem>
            </div>
          </fieldset>
        </Form>
      </div>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
export default WrappedHorizontalLoginForm;