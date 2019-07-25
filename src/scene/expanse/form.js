import React from 'react';
import { Form, Input,Select,DatePicker,InputNumber,Col,Row, Button, Checkbox } from 'antd';
import'./add.css';
const FormItem = Form.Item;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
function onChange(value) {
  console.log('changed', value);
  
}
class DynamicRule extends React.Component {
  state = {
    checkNick: false,
  };

 
  
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
      <div>
        
          
        
          <Form  onSubmit={this.handleSubmit} className="AddExpanseForm">
          <fieldset>
            <legend>addexpanse</legend>
        <FormItem label="Expanse date">
          {getFieldDecorator('Expanse date', {
            rules: [{
              required: true,
              message: 'Please select your date',
            }],
          })(
            <DatePicker placeholder="Enter date"  />
          )}
        </FormItem>
        
        <Row>
      
      <Col span={10}>  <FormItem label="Expanse category" >
        {getFieldDecorator('Select', {rules:[{required:true,message:'please select your category'}]
          
        })(
          <Select
 
    >
  
    <Option value="">select your category</Option>
    <Option value="2">Red velvet_10gm</Option>
    <Option value="3">Black current_vennila__10gm</Option>
    <Option value="4">Truffle small</Option>
    <Option value="5">Black forest</Option>
  </Select>
        )}
  </FormItem></Col>
      
  <Col span={1}>
        
      </Col>
      
      <Col span={2}><FormItem label ="Add" >  
        
        <button type="button" className="btn">+</button></FormItem></Col>
    </Row>
     
    <Row>
      
      <Col span={13}>
      <FormItem  label="Expanse name"  >
          {getFieldDecorator('Expanse name', {
            rules: [{
              required: true,
              message: 'Please enter your expane name',
            }],
          })(
            <Input placeholder="Enter category name"  />
          )}
        </FormItem>
      </Col>
    </Row>
      
    <Row>
      <Col span={13}>
      <FormItem  label="Expance amount">
          {getFieldDecorator('Expanse amount', {
            rules: [{
              required: true,
              message: 'Please enter your amount',
            }],
          })(
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} placeholder="Enter amount" />
          )}
        </FormItem>
      
      </Col>
     
    </Row>
    <br />
         <Row>
         <Col span={6}></Col>
         <Col span={6}></Col>
      <Col span={6}> <FormItem >
          <Button type="button" htmlType="submit" className="btn">
            <b>SAVE</b>
          </Button>
          </FormItem></Col>
      <Col span={6}><FormItem >
         
          
         <Button type="button" onClick={this.props.Modalclose} className="btn">
           <b>CANCEL</b>
         </Button>
       
       </FormItem></Col>
      
    </Row>
  </fieldset>
        
        </Form>
       
      </div>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);

export default WrappedDynamicRule;

