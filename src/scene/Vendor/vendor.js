import React, { Component } from "react";
import { Modal, Button } from "antd";
import Vendorform from "./form";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import './vendor.css'

class New extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="container-fluid">
          <BreadCrumb parentLink="/" parentTitle="Dashboard" leaf="Charts" />
          <div className="main-body">
            <Button type="primary" onClick={this.showModal}>
              Add Vendor
            </Button>
            <Modal
              visible={this.state.visible}
              //   onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[null, null]}
            >
              {this.state.visible ? (
                <Vendorform Modalclose={this.handleCancel} />
              ) : null}
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
