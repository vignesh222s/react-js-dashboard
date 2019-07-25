
import React, { Component } from 'react'
import { CirclePicker } from "react-color";
// import './picker.js';



import './log.css';
import { Form, Icon, Input,Row,Col,Button } from 'antd';
const FormItem=Form.Item;
class denis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Productcategoryname: '',
      data: [],
      tablevalue: {},
      color: "",
      imgsrc:'',
      modal:false,
      imageColor:false
    }
};
componentDidMount() {
}
change = e => {
    console.log(e);
    console.log(e.target);
    this.setState({
      tablevalue: this.state.data[e.target.value]
    });
  };
  handleChange = color => {
    console.log(color.hex);
    this.setState({
      color: color.hex,
      imageColor: false
    });
  };
  chooseImg = obj => {
    let src = URL.createObjectURL(obj.target.files[0]);

    this.setState({
      imgsrc: src,
      imageColor: false,
      img:true
    });
  };
toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  inputChange = (a) => {
    console.log(a.target.name, a.target.value)
    this.setState({ [a.target.name]: a.target.value })
  }
  Submit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          if((this.state.imgsrc=='')&&(this.state.color=='')){
              this.setState({
                 imageColor:true 
              })
          }else{
        console.log('Received values of form: ', values);
          }
      }
    });
  }
render(){
    console.log(this.state)
const { getFieldDecorator } = this.props.form;
    return (

      <div class="container">
      <Form onSubmit={this.Submit} className="login-form">
      <fieldset>      
      <legend className="bold">ADD PRODUCT CATEGORY</legend>
        <Row>
            <Col span={12}>
          <FormItem><label id="ip1">Product Category Name:</label>
          {getFieldDecorator('prod_name', {
            rules: [{ required: true, message: 'Please input your product category name!' }],
          })(
            <Input type="text" className="form-control ip2"placeholder="Enter product category name" />
          )}
        </FormItem>

        <Row>
          
          <label id="ip1">Category icon:</label><br/>
          <Col span={8}>
            <label>
              <input
                style={{ display: "none" }}
                name="userFiles"
                id="userFiles"
                type="file"
                onChange={this.chooseImg}
              />
             <i class="fa fa-picture-o" style={{fontSize:"80px"}}></i>
            </label>
        
        {this.state.img ? <img src={this.state.imgsrc}  height="100" width="100"/> : null}
        <p><font color="#DB5120"><b>From gallery</b></font></p>
        </Col><Col span={16}>
<CirclePicker pointer={this.state.color} onChange={this.handleChange} />
<p><font color="#DB5120"><b>Choose color</b></font></p>
        
        {/* <HuePicker onChange={this.handleChange} /> */}
        {this.state.color !== "" ? (
        
         <span
            style={{
                background: this.state.color,
                padding: "10px",
                borderRadius: "10%",
                float: "left",
                border: "1px solid"
            }}
          >
            {this.state.color}
          </span>
          
        ) :null }</Col>
        {this.state.imageColor ?<font color="red">please Select Image or color!</font> :null}
        </Row>
    
</Col>
      
    
<Col span={12}></Col></Row>
<br/><br/>
  <Row><Col span={6}></Col>
<Col span={6}>
<Button htmlType="submit" id="ip4">SAVE</Button></Col>
<Col span={6}>
<Button type="button" id="ip4" onClick={this.props.Sample}>CANCEL</Button></Col>
<Col span={6}></Col>
</Row>

        </fieldset>  
          </Form>
        
        </div>


        )
      }
    }
    const WrappedNormalLoginForm = Form.create()(denis);

export default WrappedNormalLoginForm;