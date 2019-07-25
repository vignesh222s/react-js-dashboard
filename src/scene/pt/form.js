import React from 'react'
import { Radio,Form,Input,Button,Row,Col,Select,Modal} from 'antd';
import Category from './category';
import Brand from './brand';
import BreadCrumb from '../../components/breadcrumb/breadcrumb';
import './log.css';
import axios from "axios";
import { CirclePicker } from "react-color";
import { ItemCategory,Tax,Brands,Unit } from '../../constants/constants';
const RadioGroup=Radio.Group;

const FormItem=Form.Item;
const Option = Select.Option;


class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          disabled: true,
          imageColor:false,
          imgsrc:'',
          data: [],
          tablevalue: {},
          visible: false,
          category:false,
          color: ""
        }
        };
        showModal = () => {
          this.setState({
            visible: true,
          });
        }
        show = () => {
          this.setState({
            category: true,
          });
        }
       handleCancel = (e) => {
          console.log(e);
          this.setState({
            visible: false,
          });
        }
        cancel = (e) => {
          console.log(e);
          this.setState({
            category: false,
          });
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
      img: false
    });
  };
  chooseImg = obj => {
    let src = URL.createObjectURL(obj.target.files[0]);

    this.setState({
      imgsrc: src,
      img: true
    });
  };



  
        onChange = (e) => {
          console.log(e.target.value,e.target.name)
          this.setState({
            [e.target.name]:e.target.value
          });
        }
        handleSubmit = (e) => {
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
    render() {
      console.log(ItemCategory)
      let test=ItemCategory.map((item,i)=>{

        return(
          <Option key={i} value={item.value}> {item.value}</Option>
        )
      });
      
      let tax=Tax.map((item,i)=>{

        return(
          <Option key={i} value={item.value}> {item.value}</Option>
        )
      });
      let brand=Brands.map((item,i)=>{

        return(
          <Option key={i} value={item.value}> {item.value}</Option>
        )
      });
      let unit=Unit.map((item,i)=>{

        return(
          <Option key={i} value={item.value}> {item.value}</Option>
        )
      });
        const { getFieldDecorator } = this.props.form;
        return (
          
          
<Form onSubmit={this.handleSubmit} className="AddProductForm">
       <fieldset>      
      <legend className="bold">ADD PRODUCTS</legend>
 <div class="container">
    <div class="row">
        <div class="col-md-5">
          <FormItem>
               <label  id="ip1">Product name:</label>
               {getFieldDecorator('productName', {
            rules: [{ required: true, message: 'Please input your Product name!' }],
            })(
          <Input type="text"   className="form-control ip2"     placeholder="Enter product name"/>
          )}
    </FormItem>
    <FormItem>
          <label  id="ip1">Product short name:</label>
           {getFieldDecorator('productShortName', {
            rules: [{ required: true, message: 'Please input your Product short name!' }],
          })(
            <Input type="text" className="form-control ip2"    placeholder="Enter product short name"/>
          )}
    </FormItem>
    <Row>
         <label id="ip1">Item Category: </label> 
          <Col span={20}>
        
        <FormItem>
       
        {getFieldDecorator('ItemCategory', {
            rules: [{ required: true, message: 'Please input your item category!' }],
          })(
 <Select >
          {test}
          
          </Select>)}</FormItem></Col>
          <Col span={1}></Col>
          <Col span={3}>
       <FormItem> 
      
        
        <Button type="button" className="btn"  onClick={this.show}>+</Button></FormItem></Col>
        <Modal
           header={[null]}
          
          visible={this.state.category}
          width={900}
          onOk={this.handleOk}
          onCancel={this.cancel}
          footer={[null]} >
            {this.state.category? <Category Sample={this.cancel}/>:null}
       </Modal>
     </Row>
  <FormItem>
          <label  id="ip1">Tax inclusive:</label><br/>
           {getFieldDecorator('taxInclusive', {
            rules: [{ required: true, message: 'Please input your Tax inclusive!' }],
          })(
           <RadioGroup>
           <Radio value="true">Yes</Radio>
             <Radio value="false">No</Radio>
          </RadioGroup>
          )}</FormItem>
           <Row>
         <label id="ip1">Tax: </label> 
          <Col span={20}>
         <FormItem>
        {getFieldDecorator('tax', {
            rules: [{ required: true, message: 'Please input your tax!' }],
          })(
           <Select className="form-control ip2" >
                        {tax}
           </Select>)}</FormItem></Col>
          <Col span={1}></Col>
          <Col span={3}>
       <FormItem> 
       <Button type="button" className="btn">+</Button></FormItem></Col>
       </Row>
         
       <Row>
         <label id="ip1">Brand: </label> 
          <Col span={20}>
         <FormItem>
            {getFieldDecorator('brand',
             {
            rules: [{ required: true, message: 'Please input your tax!' }],
             })(
            <Select className="form-control ip2" >
           {brand}
           </Select>)}</FormItem></Col>
            <Col span={1}></Col>
            <Col span={3}>
                  <FormItem> 
                  <Button type="button" className="btn"  onClick={this.showModal}>+</Button></FormItem></Col>
        <Modal
           header={[null]}
          
          visible={this.state.visible}
          width={900}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[null]} >
             {this.state.visible? <Brand Sample={this.handleCancel}/>:null}
       </Modal>
       </Row>
  
   <FormItem>
          <Row>
            <label id="ip1">Category icon:</label>
      <Col span={6}>
        <label>
           <Input
            style={{ display: "none" }}
            name="userFiles"
            id="userFiles"
            type="file"
            onChange={this.chooseImg}
          />
         <i class="fa fa-picture-o" style={{fontSize:"80px"}}></i>
        </label>
      
    {this.state.img ? <img src={this.state.imgsrc} /> : null}
    <p><font color="#DB5120"><b>gallery</b></font></p>
    </Col>
    <Col span={2}></Col>
    <Col span={16}>
    <CirclePicker  pointer={this.state.color}  onChange={this.handleChange}  />
    <p><font color="#DB5120"><b>choose color</b></font></p>
    
    {/* <HuePicker style={{marginTop:"90px"}} onChange={this.handleChange}  /><br/><br/> */}
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
         ) : null}
         {this.state.imageColor ?<font color="red">Please Select Image or color</font> :null} </Col>
  </Row>
  </FormItem>
  
  <Row>
         <label id="ip1">Unit: </label> 
          <Col span={20}>
        
        <FormItem>
       
        {getFieldDecorator('usnit', {
            rules: [{ required: true, message: 'Please input your tax!' }],
          })(
 <Select className="form-control ip2" >
          {unit}
          </Select>)}</FormItem></Col>
          <Col span={1}></Col>
          <Col span={3}>
       <FormItem> 
      
        
        <Button type="button" className="btn">+</Button></FormItem></Col>
       </Row>
  </div> 

   
    <div class="col-md-2"></div>
    <div class="col-md-5">
    <FormItem>
     <label  id="ip1">Hsn code:</label>
     {getFieldDecorator('hsnCode', {
            rules: [{ required: true, message: 'Please input your Hsn code!' }],
          })(
     <Input type="text" className="form-control ip2"    placeholder="Enter Product HSN code"/>
           )} </FormItem>
    <FormItem>
    <label  id="ip1">Product MRP:</label>
    {getFieldDecorator('productMRP', {
            rules: [{ required: true, message: 'Please input your Product MRP!' }],
          })(
     <Input type="text" className="form-control ip2"    placeholder="Enter product MRP"/>)}
    </FormItem>
    <FormItem>
      
    <label id="ip1">Product selling price:</label>
    {getFieldDecorator('productSellingPrice', {
            rules: [{ required: true, message: 'Please input your Product selling price!' }],
          })(
     <Input type="text" className="form-control ip2"    placeholder="Enter product selling price"/>)}
    </FormItem>
    
    <Row>
    <label id="ip1">Stock:</label><br/>
    <Col span={12}>
    <FormItem>

  {getFieldDecorator('stock', {
          rules: [{ required: true, message: 'Please input select stock!' }],
        })(
         
<RadioGroup name="stock" onChange={this.onChange.bind(this)}>
  
  <Radio value={true}>Yes</Radio>
   <Radio value={false}>No</Radio>
   
      </RadioGroup> 
         )}
      </FormItem>
      </Col>  
      <Col span={12}>
    
{this.state.stock==1 
  ? <FormItem>
    
     {getFieldDecorator('radioValu', {
          rules: [{ required: true, message: 'Please input stockValue!' }],
        })(
       <Input type="text" className="form-control ip2"   placeholder="Enter physical stock" defaultChecked={false} disabled={false} />
      
     )}       
               
  </FormItem> 
        : <FormItem>
       
        <Input type="text" className="form-control ip2"   placeholder="Enter physical stock" defaultChecked={false} disabled={true} />
    
         </FormItem>}</Col>
         </Row>
        
  <Row>
  <label id="ip1">Bar code:</label><br/>
  <Col span={12}>
    <FormItem>
    {getFieldDecorator('bar_code', {
            rules: [{ required: true, message: 'Please input select barcode!' }],
          })(
            
  <RadioGroup name="barcode" onChange={this.onChange.bind(this)}>
    <Radio value={true}>Yes</Radio>
   <Radio value={false}>No</Radio>
     </RadioGroup>        )}
        </FormItem></Col>
        <Col span={12}>
  {this.state.barcode==1 
    ? <FormItem>
       {getFieldDecorator('radioValu', {
            rules: [{ required: true, message: 'Please input barcode value!' }],
          })(
          <Input type="text" className="form-control ip2"   placeholder="Enter barcode" defaultChecked={false} disabled={false} />
        
       )}       
                   
    </FormItem> 
          : <FormItem>
         
          <Input type="text" className="form-control ip2"   placeholder="Enter barcode" defaultChecked={false} disabled={true} />
      
       
      </FormItem>}</Col>
      </Row>
      <Row>
      <label id="ip1">Item available for discount:</label><br/>
      <Col span={12}>
      <FormItem>
    {getFieldDecorator('item_disc', {
            rules: [{ required: true, message: 'Please input select discount!' }],
          })(
  <RadioGroup name="item" onChange={this.onChange.bind(this)}>
    
    <Radio value={true}>Yes</Radio>
     <Radio value={false}>No</Radio>
     
        </RadioGroup>        )}
        </FormItem></Col>
        <Col span={12}>
  {this.state.item==1 
    ? <FormItem>
       {getFieldDecorator('radioValu', {
            rules: [{ required: true, message: 'Please input max discount!' }],
          })(
          <Input type="text" className="form-control ip2"   placeholder="Enter max discount %" defaultChecked={false} disabled={false} />
        
       )}       
                   
    </FormItem> 
          : <FormItem>
         
          <Input type="text" className="form-control ip2"   placeholder="Enter max discount %" defaultChecked={false} disabled={true} />
      
       
      </FormItem>}</Col></Row>
      <Row>
      <label id="ip1">Optimum stock level:</label><br/>
      <Col span={12}>
      <FormItem>
    {getFieldDecorator('optimumStock', {
            rules: [{ required: true, message: 'Please input select radio!' }],
          })(
  <RadioGroup name="optimumstocklevel" onChange={this.onChange.bind(this)}>
    
    <Radio value={true}>Yes</Radio>
     <Radio value={false}>No</Radio>
     
        </RadioGroup>        )}
        </FormItem></Col>
        <Col span={12}>
  {this.state.optimumstocklevel==1 
    ? <FormItem>
       {getFieldDecorator('radioValu', {
            rules: [{ required: true, message: 'Please input minimum stockValue!' }],
          })(
          <Input type="text" className="form-control ip2"   placeholder="Enter minimum stock value" defaultChecked={false} disabled={false} />
        
       )}       
                   
    </FormItem> 
          : <FormItem>
         
          <Input type="text" className="form-control ip2"   placeholder="Enter minimum stock value" defaultChecked={false} disabled={true} />
      
       
      </FormItem>}</Col></Row>

    <label class="checkbox-inline"  id="ip1">
       <Input type="checkbox" name="accept" />Notify me when reach optimum level</label>
      <FormItem>
      <label id="ip1">Product status:</label><br/>
  {getFieldDecorator('taxInclusive', {
            rules: [{ required: true, message: 'Please input your Tax inclusive!' }],
          })(
              <RadioGroup>
                  <Radio value="active">Active</Radio>
                  <Radio value="inactive">Inactive</Radio>


              </RadioGroup>
 
  )}</FormItem>

    
    </div>
  </div>

 <Row><Col span={6}></Col>
<Col span={6}>
<Button htmlType="submit" id="ip4">Submit</Button></Col>
<Col span={6}>
<Button type="button" id="ip4" onClick={this.props.Sample}>cancel</Button></Col>
<Col span={6}></Col>
</Row>

</div>


	</fieldset>
  	
</Form>   
     
        );
    }
}

const Sample=Form.create()(Charts)
export default Sample;