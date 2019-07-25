import React, { Component } from 'react' 
import Ant from './ant';

import BreadCrumb from '../../components/breadcrumb/breadcrumb';
class Home extends Component { 

    render() {
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <BreadCrumb parentLink="#" parentTitle="Dashboard" leaf="My Dashboard" />
                    <div className="main-body">
                        <h2></h2>
                        <Ant />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home 