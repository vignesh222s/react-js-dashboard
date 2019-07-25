import React, { Component } from 'react' 
import BreadCrumb from '../../components/breadcrumb/breadcrumb'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Loginfor from "./loginfor";
import Forgetpassword from "./forgetpassword";
import Changepassword from "./changepassword";
import OTP from "./otp";
import Newpass from "./newpass"
class Home extends Component { 
   state={
       show:"Login"
   }

   change = (obj) =>{this.setState({show:obj})}
    render() {
        let data ;
        if (this.state.show=="Login"){
    
            data=<Loginfor change={this.change}/>
        }
        else if(this.state.show=="forget"){
            data= <Forgetpassword change={this.change} />
        }
        else if(this.state.show=="otp"){
            data= <OTP change={this.change}/>
        }
        else if(this.state.show=="newpass"){
            data=<Newpass change={this.change} />
        }
        else if(this.state.show=="change"){
            data= <Changepassword change={this.change}/>
        }
        

        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <BreadCrumb parentLink="#" parentTitle="Dashboard" leaf="My Dashboard" />
                    <div className="main-body">
                        <h2></h2>
                       {data}
                     
                 
                    </div>
                </div>
            </div>
        );
    }
}

export default Home 

