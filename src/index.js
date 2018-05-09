import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Routes from "./Routes";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
