import { Radio, Form, Input, InputNumber, Row, Col,Select } from 'antd';
import React from 'react'
import BreadCrumb from '../../components/breadcrumb/breadcrumb';
import "./add.css";
import axios from "axios";
import { CirclePicker } from "react-color";
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,

      modal: false,
      data: [],
      tablevalue: {},
      color: "",
      price: "",
      imageColor:false,
      imgsrc:''
    }
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
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
      imageColor:false,
      img: true
    });
  };
  onChange = (e) => {
    console.log(e.target.value, e.target.name)
    this.setState({
      [e.target.name]: e.target.value
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
    const { getFieldDecorator } = this.props.form;
    return (
   

        <Form onSubmit={this.handleSubmit} className="AddCombo">
   <fieldset>
          <legend>addcombo</legend>
          <div class="row">

            <div class="col-md-5">


              <FormItem>
                <label id="ip1">Menu item name:</label>
                {getFieldDecorator('menuitem Name', {
                  rules: [{ required: true, message: 'Please input your menu item name!' }],
                })(
                  <Input type="text" className="form-control ip2" placeholder="Enter menu item name" />
                )}
              </FormItem>
              <FormItem>

                <label id="ip1">Menu item short name:</label>
                {getFieldDecorator('menu item ShortName', {
                  rules: [{ required: true, message: 'Please input your menu item short name!' }],
                })(
                  <Input type="text" className="form-control ip2" placeholder="Enter menu item short name" />
                )}
              </FormItem>
              <FormItem>

                <label id="ip1">No of items in combo:</label>
                {getFieldDecorator('No of items in combo', {
                  rules: [{ required: true, message: 'Please input your menu No of items in combo name!' }],
                })(
                  <Input type="text" className="form-control ip2" placeholder="Enter No of items in combo" />
                )}
              </FormItem>
              <div class="row">
                <div class="col-md-8">
                  <FormItem>
                    <label id="ip1">Item category:</label>
                    {getFieldDecorator('itemCategory', {
                      rules: [{ required: true, message: 'Please input your Item category!' }],
                    })(
                      <Select className="form-control ip2">
                        <option value="">select item category</option>
                        <option value="veg">veg </option>
                        <option value="nonveg">non veg</option>
                      </Select>)}</FormItem></div>

                <div class="col-md-4">
                  <FormItem>
                    <label id="ip1">Add</label>

                    <button type="submit" className="btn">+</button></FormItem>
                </div></div> 
              <FormItem>
                {getFieldDecorator('taxInclusive', {
                  rules: [{ required: true, message: 'Please input your Tax inclusive!' }],
                })(
                  <div class="row">
                    <div class="col-md-10">

                      <label id="ip1">Tax inclusive:</label><br />
                      <div class="row">
                        <div class="col-md-6">
                          <input type="radio" name="gender" />Yes</div>
                        <div class="col-md-6">
                          <input type="radio" name="gender" />No</div>
           </div> </div> </div>)}</FormItem>
              <div class="row">
                <div class="col-md-8">
                  <FormItem>
                    <label id="ip1">Tax:</label>
                    {getFieldDecorator('tax', {
                      rules: [{ required: true, message: 'Please input your tax!' }],
                    })(
                      <Select className="form-control ip2">
                        <option value="">select item category</option>
                        <option value="veg">veg </option>
                        <option value="nonveg">non veg</option>
                      </Select>)}</FormItem></div>


                <div class="col-md-4">
                  <FormItem>
                    <label id="ip1">Add</label>

                    <button type="submit" className="btn">+</button></FormItem>
                </div></div>  
              <div class="row">
                <div class="col-md-8">
                  <FormItem>
                    <label id="ip1">Brand:</label>
                    {getFieldDecorator('brand', {
                      rules: [{ required: true, message: 'Please input your brand!' }],
                    })(
                      <Select className="form-control ip2">
                        <option value="">select item category</option>
                        <option value="veg">veg </option>
                        <option value="nonveg">non veg</option>
                      </Select>)}</FormItem></div>


                <div class="col-md-4">
                  <FormItem>
                    <label id="ip1">Add</label>

                    <button type="submit" className="btn">+</button></FormItem>
                </div></div>  
              <FormItem>
                <div class="row">


                  <div class="col-md-4">
                    <div class="file_input_div ">
                      <div class="file_input">
                        {/* <label class="form-label p_img">Upload Product Images</label> */}
                        <label>
                          <input
                            style={{ display: "none" }}
                            name="userFiles"
                            id="userFiles"
                            type="file"
                            onChange={this.chooseImg}
                          />
                          <i class="fa fa-picture-o" style={{ fontSize: "80px" }}></i>
                        </label>
                      </div>
                    </div>
                    {this.state.img ? <img src={this.state.imgsrc} /> : null}
                    <h6><b>Photo gallery</b></h6>
                  </div>
                  <div class="col-md-4">
                    <CirclePicker pointer={this.state.color} onChange={this.handleChange} />
                    <h6><b>choose color</b></h6>
                  </div> <div class="col-md-4">
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
<br/>
                    {this.state.imageColor ?<font color="red">Please Select Image or color</font> :null}
                
                  </div>

                </div>

              </FormItem>
              <div class="row">
                <div class="col-md-8">
                  <FormItem>
                    <label id="ip1">Unit:</label>
                    {getFieldDecorator('unit', {
                      rules: [{ required: true, message: 'Please input your unit!' }],
                    })(
                      <Select className="form-control ip2">
                        <option value="">select unit</option>
                        <option value="veg">veg </option>
                        <option value="nonveg">non veg</option>
                      </Select>)}</FormItem></div>


                <div class="col-md-4">
                  <FormItem>
                    <label id="ip1">Add</label>

                    <button type="submit" className="btn">+</button></FormItem>
                </div></div>  


            </div>


            <div class="col-md-2"></div>
            <div class="col-md-4">
            <FormItem>
            <label id="ip1">add combo item</label>
        {getFieldDecorator('Select', {rules:[{required:true,message:'please select'}]
          
        })(
          <Select
     mode="multiple"
    style={{ width: '100%' ,}}
     onChange={handleChange}
     tokenSeparators={[',']}
    >
  
    <Option value="1">paneer butter masala</Option>
    <Option value="2">nan</Option>
    <Option value="3">chicken gravy</Option>
    <Option value="4">fried rice</Option>
 
  </Select>
        )}
      </FormItem>
              <FormItem>
                <label id="ip1">Item price:</label>
                {getFieldDecorator('productSellingPrice', {
                  rules: [{ required: true, message: 'Please input your item price & it must be a number!' }],
                })(
                  <InputNumber min={1} className="form-control ip2" placeholder="Enter item price" />)}
              </FormItem>

              <FormItem>
                <label id="ip1">Stock:</label><br />
                {getFieldDecorator('stock', {
                  rules: [{ required: true, message: 'Please input select radio!' }],
                })(
                  <RadioGroup name="sun" onChange={this.onChange.bind(this)}>

                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>

                  </RadioGroup>)}
              </FormItem>
              {this.state.sun == 1
                ? <FormItem>
                  {getFieldDecorator('stock value', {
                    rules: [{ required: true, message: 'Please input select radioValue!' }],
                  })(
                    <Input type="text" className="form-control ip2" placeholder="Enter physical stock" defaultChecked={false} disabled={false} />

                  )}

                </FormItem>
                : <FormItem>

                  <Input type="text" className="form-control ip2" placeholder="Enter physical stock" defaultChecked={false} disabled={true} />
                </FormItem>}

              <FormItem>
                <label id="ip1">Bar code:</label><br />
                {getFieldDecorator('bar_code', {
                  rules: [{ required: true, message: 'Please input select radio!' }],
                })(
                  <RadioGroup name="sat" onChange={this.onChange.bind(this)}>

                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>

                  </RadioGroup>)}
              </FormItem>
              {this.state.sat == 1
                ? <FormItem>
                  {getFieldDecorator('barcode', {
                    rules: [{ required: true, message: 'Please input select radioValue!' }],
                  })(
                    <Input type="text" className="form-control ip2" placeholder="Enter barcode" defaultChecked={false} disabled={false} />

                  )}

                </FormItem>
                : <FormItem>

                  <Input type="text" className="form-control ip2" placeholder="Enter barcode" defaultChecked={false} disabled={true} />


                </FormItem>}
              <FormItem>


                <label id="ip1">Item available for discount:</label><br />


                {getFieldDecorator('item_disc', {
                  rules: [{ required: true, message: 'Please input select radio!' }],
                })(
                  <RadioGroup name="mon" onChange={this.onChange.bind(this)}>

                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>

                  </RadioGroup>)}
              </FormItem>
              {this.state.mon == 1
                ? <FormItem>
                  {getFieldDecorator('item discount value', {
                    rules: [{ required: true, message: 'Please input select radioValue!' }],
                  })(
                    <Input type="text" className="form-control ip2" placeholder="Enter max discount %" defaultChecked={false} disabled={false} />

                  )}

                </FormItem>
                : <FormItem>

                  <Input type="text" className="form-control ip2" placeholder="Enter max discount %" defaultChecked={false} disabled={true} />


                </FormItem>}
              <FormItem>


                <label id="ip1">Optimum stock level:</label><br />


                {getFieldDecorator('optimumStock', {
                  rules: [{ required: true, message: 'Please input select radio!' }],
                })(
                  <RadioGroup name="tue" onChange={this.onChange.bind(this)}>

                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>

                  </RadioGroup>)}
              </FormItem>
              {this.state.tue == 1
                ? <FormItem>
                  {getFieldDecorator('optimumstock value', {
                    rules: [{ required: true, message: 'Please input select radioValue!' }],
                  })(
                    <Input type="text" className="form-control ip2" placeholder="Enter minimum stock value" defaultChecked={false} disabled={false} />

                  )}

                </FormItem>
                : <FormItem>

                  <Input type="text" className="form-control ip2" placeholder="Enter minimum stock value" defaultChecked={false} disabled={true} />


                </FormItem>}
              <label class="checkbox-inline" id="ip1">
                <input type="checkbox" name="accept" />Notify me when reach optimum level</label>
              <FormItem>
                {getFieldDecorator('taxInclusive', {
                  rules: [{ required: true, message: 'Please input your Tax inclusive!' }],
                })(
                  <div class="row">
                    <div class="col-md-12">
                      <label id="ip1">Product status:</label><br />
                      <div class="row">
                        <div class="col-md-6">
                          <input type="radio" name="gender" />Active</div>
                        <div class="col-md-6">
                          <input type="radio" name="gender" />Inactive
  </div>
                        <div class="col-md-6">
                        </div> </div>   </div> </div>)}</FormItem>


            </div>
          </div>


          <div>
            <Row>
              <center>
              <Col span={12}><button type="submit" id="ip4">Save</button></Col>
              <Col span={12}><button onClick={this.props.name} id="ip4">Cancel</button></Col>
              </center>
            </Row>

          </div>


      </fieldset>
        </Form>

    );
  }
}

const Sample = Form.create()(Charts)
export default Sample;
