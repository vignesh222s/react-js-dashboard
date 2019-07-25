import React, { Component } from 'react' 
import BreadCrumb from '../../components/breadcrumb/breadcrumb'

import { Modal, Button } from 'antd';
import Form from './form';

class Home extends Component { 
  state = { visible: false }

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

    render() {
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <BreadCrumb parentLink="#" parentTitle="Dashboard" leaf="My Dashboard" />
                    <div className="main-body">
                    <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        
                    <Modal
                    header={[null]}
          title="Basic Modal" 
          visible={this.state.visible}
          style={{ top: 0 ,zIndex:99999}}
          width={700}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
           footer={[null]}

        >
       
       
         {this.state.visible?
         <Form name={this.handleCancel}/>:null}
     
        </Modal>
      
                    </div>
                </div>
            </div>
        );
    }
}

export default Home 