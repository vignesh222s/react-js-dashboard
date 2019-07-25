import React, { Component } from 'react'
import { CirclePicker } from "react-color";
// import './picker.js';
import './add.css';
import { Modal, Button } from 'antd';
import { Form, Icon, Input,Row,Col } from 'antd';
import Test from './form';
import BreadCrumb from '../../components/breadcrumb/breadcrumb'
const FormItem=Form.Item;
class denis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Expensecategoryname: '',
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
      imageColor: false
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
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    
  }
render(){
  console.log(this.state)
  const { getFieldDecorator } = this.props.form;
      return (
          <div className="content-wrapper">
                  <div className="container-fluid">
                      <BreadCrumb parentLink="#" parentTitle="Dashboard" leaf="My Dashboard" />
                      <div className="main-body">
                  
                      </div>
                      <div>
          <Button type="primary" onClick={this.showModal}>
            CLICK 
          </Button>
          <Modal width={800}
          header={[null]}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
            visible={this.state.visible}
            footer={[null]}
            
          >
  
  {this.state.visible? <Test name="EXPENSE" id="Expense Category Name:" ph="Enter Expense Category Name" lid="Category Icon:" msg=" expense category name!" modal={this.handleCancel}/>:null}
          </Modal>
       
       </div>
              </div>
             </div>
         );
     }
     }
            
  
    const WrappedNormalLoginForm = Form.create()(denis);

export default WrappedNormalLoginForm;
