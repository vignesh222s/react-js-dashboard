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
           <b>Open</b>
        </Button>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
             null
            
          ]}
         
        >
        
{this.state.visible  ? <Form Modalclose={this.handleCancel} />
:null}
        </Modal>
 
                    </div>
                </div>
            </div>
        );
    }
}

export default Home 

