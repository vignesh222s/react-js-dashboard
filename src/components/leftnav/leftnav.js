import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LeftNav extends Component {
  render() {
    return (
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Dashboard"
        >
          <Link className="nav-link" to="/">
            <i className="fa fa-fw fa-dashboard" />
            <span className="nav-link-text">Dashboard</span>
          </Link>
        </li>

        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Charts"
        >
          <Link className="nav-link" to="charts">
            <i className="fa fa-fw fa-area-chart" />
            <span className="nav-link-text">Charts</span>
          </Link>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Vendor"
        >
          <Link className="nav-link" to="vendor">
            <i className="fa fa-fw fa-area-chart" />
            <span className="nav-link-text">Vendor</span>
          </Link>
        </li>

        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Office"
        >
          <a
            className="nav-link nav-link-collapse collapsed"
            data-toggle="collapse"
            href="#collapseMenu"
            data-parent="#exampleAccordion"
          >
            <i className="fa fa-fw fa-wrench" />
            <span className="nav-link-text">Add Menu</span>
          </a>
          <ul className="sidenav-second-level collapse" id="collapseMenu">
            <li>
              <Link className="nav-link" to="/cards">
                Menu Category
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/charts">
                Menu Item
              </Link>
            </li>
          </ul>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Add product"
        >
          <Link className="nav-link" to="/product">
            <i className="fa fa-fw fa-product" />
            <span className="nav-link-text">Add product</span>
          </Link>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="AddExapnse"
        >
          <Link className="nav-link" to="/addexpanse">
            <i className="fa fa-fw fa-expanse" />
            <span className="nav-link-text">Addexpanse</span>
            </Link>
            </li>
            <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Add"
        >
          <Link className="nav-link" to="/add">
            <i className="fa fa-fw fa-add" />
            <span className="nav-link-text">Add</span>
          </Link>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Login"
        >
          <Link className="nav-link" to="/login">
            <i className="fa fa-fw fa-lform" />
            <span className="nav-link-text">Login</span>
          </Link>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
       
          title="Add"
        >
          <Link className="nav-link" to="/add2">
            <i className="fa fa-fw fa-add" />
            <span className="nav-link-text">Add Brand</span>
          </Link>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Sales"
        >
          <Link className="nav-link" to="/sales">
            <i className="fa fa-fw fa-ns" />
            <span className="nav-link-text">Sales</span>
          </Link>
        </li>

       <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
      
          title="Add"
        >
          <Link className="nav-link" to="/add1">
            <i className="fa fa-fw fa-add" />
            <span className="nav-link-text">Add Expense Category</span>
            </Link>
            </li>
            <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Add combo">
          
          <Link className="nav-link" to="/addcombo">
            <i className="fa fa-fw fa-combo" />
            <span className="nav-link-text">Add combo</span>
          </Link>
         
        </li>
      </ul>
    );
  }
}
