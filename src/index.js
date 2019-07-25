import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-day-picker/lib/style.css";
import "spicy-datatable/src/sample-styles.css";
import "./components/leftnav/leftNav.css";
import 'antd/dist/antd.css'
import "./index.css";

const app = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
