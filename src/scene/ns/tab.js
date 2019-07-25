import React,{Component} from 'react';
import { InputNumber,Select,Option } from 'antd';
import'./sale.css';
const country=[{name:'electronics',electronics:['mobile','laptop','tv',]},{name:'wears',wears:['men','women','children']},,{name:'home',home:['kitchen','furniture',"home storage"]}];
const citya={electronics:['mobile','laptop','tv'],wears:['men','women',"children"],home:['kitchen','furniture','home storage']};
class Form extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        
      };
      this.state.filterText = "";
      this.state.products = [
      {
        
        product:"akash"
      },
      {
        
        product:"priya"
      }, {
        
        product:"abi"
      },{
        
        product:"sowmiya"
      },
      {
        
        product:"suji"
      },
      ];
  
    }
 
    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };
    handleRowDel(product) {
      var index = this.state.products.indexOf(product);
      this.state.products.splice(index, 1);
      this.setState(this.state.products);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var product = {
        id: id,
        name: "",
        category:"",
        subcategory:"",
        product:"",
        qty:"",
        price:"",
        tax:"",
        total:""
      }
      this.state.products.push(product);
      this.setState(this.state.products);
  
    }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        product: evt.target.product,
        value: evt.target.value
      };
  var products = this.state.products.slice();
    var newProducts = products.map(function(product) {
  
      for (var key in product) {
        if (key == item.product && product.id == item.id) {
          product[key] = item.value;
  
        }
      }
      return product;
    });
      this.setState({products:newProducts});
    //  console.log(this.state.products);
    };
    render() {
     
      return (
        <div>
          <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
        </div>
      );
  
    }
  
  }
  class SearchBar extends React.Component {
    handleChange() {
      this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
      return (
        <div>
  
          <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
  
        </div>
  
      );
    }
  
  }
  
  class ProductTable extends React.Component {
  
    render() {
      var onProductTableUpdate = this.props.onProductTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var product = this.props.products.map(function(product) {
        if (product.product.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
      });
      return (
        <div>
  
  
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add More</button>
          <table className="customers">
            <thead>
              <tr>
               
                <th>category</th>
                <th>subcategory</th>
                <th>product</th>
                <th>qty</th>
                <th>price</th>
                <th>tax%</th>
                <th>total</th>
                <th>Delete</th>
              </tr>
            </thead>
  
            <tbody>
              {product}
  
            </tbody>
  
          </table>
        </div>
      );
  
    }
  
  }
  
  class ProductRow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        country:'electronics'
      }
    }
    onDelEvent() {
      this.props.onDelEvent(this.props.product);
  
    }
       
 countryChange =(e)=>{
  console.log(e.target.value)
  this.setState({
    country:e.target.value
  })
}
    render() {
      
      console.log(city)
      let option = country.map(item=>{
        return(
        <option value={item.name}>{item.name}</option>
          )
      })
      let cityArray=this.state.country;
       let city =citya[cityArray].map(item=>{
        return(
        <option value={item}>{item}</option>
          )
      })
      return (
        <tr className="eachRow">
         
           <td>
           <select value={this.state.country} onChange={this.countryChange}>
       <option value="">choose</option>
       {option}
 </select>
           </td>
          <td>
          <select >
       <option value="">choose</option>
       {city}
 </select>
          </td>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "product",
            value: this.props.product.product,
            id: this.props.product.id
          }}/>
          <td>
            <InputNumber 
             defaultValue={1} />
          </td>
         <td>
         <InputNumber 
          defaultValue={0}/>
         </td>
        <td>
        <InputNumber
            defaultValue={0}
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
             />
        </td>
        <td>
        <InputNumber
            defaultValue={0}
            min={0}
            max={100}
       
           
             />
        </td>
          
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
        </tr>
      );
  
    }
  
  }
  class EditableCell extends React.Component {
  
    render() {
      return (
        <td>
          <input type='text' product={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
        </td>
      );
  
    }
  
  }
  export default Form

