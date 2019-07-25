
import React, { Component } from "react";
import { Modal, Button } from 'antd';
import Ant from './ant';

class App extends Component{
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
    render(){
        return(
         <div>
          <Button type="primary" onClick={this.showModal}>
           <b>Open</b>
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Ant />

        </Modal>
 
            </div>
        )
    }
}
export default App;