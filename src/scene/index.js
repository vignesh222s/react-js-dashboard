import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../style/sb_admin.min.css";
import "../style/sb_admin.css";
import "../style/bootstrap/css/bootstrap.min.css";
import "../style/font-awesome/css/font-awesome.min.css";
import "../style/datatables/dataTables.bootstrap4.css";
import 'antd/dist/antd.css';
import Home from "./home";
// import ConsultationReport from './ConsultationReport/consultationReport'
// import PharmaReport from './PharmaReport/pharmaReport'
// import ManageDoctor from './ManageDoctor/ManageDoctor'
// import Office from './Office/Office'
// import Schedule from './Schedule/Schedule'
import Charts from "./charts";
import Navbar from "./navbar";
// import Cards from "./cards";
import Vendor from './Vendor/vendor';

import Add from "./categories/product";
import Add2 from "./categories/brand";
import Add1 from "./categories/expense";
// import Form from "./form";
import TopNav from "../components/topnav/topnav";

import Addexpanse from './expanse/addexpanse';
import Login from './lform/login';
import Sales from './ns/sales';
// import PtProduct from './pt/product'



import Product from './products/log'


import Addcombo from './combo/addcombo'
// import Logout from "../scene/Auth/Logout/Logout";

class Layout extends Component {
  componentWillMount() {}

  render() {
    return (
      <TopNav>
        <Route exact path="/" component={Home} />
        {/* <Route path="/consultationreport" component={ConsultationReport} />
        <Route path="/pharmareport" component={PharmaReport} />
        <Route path="/ManageDoctor" component={ManageDoctor} />
        <Route path="/Office" component={Office} />
        <Route path="/Schedule" component={Schedule} /> */}
        <Route path="/charts" component={Charts} />
        <Route path="/navbar" component={Navbar} />
      
        <Route path="/addexpanse" component={Addexpanse} />
        <Route path="/login" component={Login} />
        <Route path="/vendor" component={Vendor} />
        <Route path="/sales" component={Sales} />
       
        
   
   
        <Route path="/product" component={Product} />
        {/* <Route path="/form" component={Form} /> */}
        <Route path="/add" component={Add} /> 
        <Route path="/add2" component={Add2} /> 
        <Route path="/add1" component={Add1} /> 
        <Route path="/addcombo" component={Addcombo} />
        {/* <Route path="/product_cat" component={Sample} /> */}
        
        {/* <Route path="/logout" component={Logout} /> */}
      </TopNav>
    );
  }
}

export default Layout;
