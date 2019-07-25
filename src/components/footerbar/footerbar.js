import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterBar extends Component {
  render() {
    return (
      <div>
        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © AppShop</small>
            </div>
          </div>
        </footer>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fa fa-angle-up" />
        </a>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <Link className="btn btn-primary" to="/logout">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBar;
