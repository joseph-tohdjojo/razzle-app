import React from "react";
import { hydrate } from "react-dom";
import Homepage from "../components/Homepage/Homepage";

hydrate(<Homepage />, document.getElementById("react-mount-point"));

if (module.hot) {
  module.hot.accept();
}
