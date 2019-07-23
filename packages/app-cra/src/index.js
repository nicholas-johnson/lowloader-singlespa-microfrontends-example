import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import lowloader from "lowloader";
import singleSpaReact, { SingleSpaContext } from "single-spa-react";

const el = document.getElementById("app-cra-standalone");
if (el) {
  ReactDOM.render(<App />, el);
}

const domElementGetter = () => {
  var el = document.getElementById("app-cra");
  if (!el) {
    el = document.createElement("div");
    el.id = "app-cra";
    document.body.appendChild(el);
  }
  return el;
};

const app = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: domElementGetter,
  rootComponent: App,
  App
});

lowloader.export(app);

// const appSecondaryNav = singleSpaReact({
//     React,
//     ReactDOM,
//     domElementGetter: domElementGetter,
//     rootComponent: AppSecondaryNav,
// });

// export function bootstrap(props) {
//     return appSecondaryNav.bootstrap(props);
// }

// export function mount(props) {
//     return appSecondaryNav.mount(props);
// }

// export function unmount(props) {
//     return appSecondaryNav.unmount(props);
// }

// window.bmr = window.bmr || {};
// window.bmr.appSecondaryNav = appSecondaryNav;
