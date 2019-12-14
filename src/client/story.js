import React from "react";
import { hydrate } from "react-dom";
import Story from "../components/Story/Story";

hydrate(<Story />, document.getElementById("react-mount-point"));

if (module.hot) {
  module.hot.accept();
}
