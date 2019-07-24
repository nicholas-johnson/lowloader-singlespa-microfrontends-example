import angular from "angular";
import lowloader from "lowloader";
import singleSpaAngularJS from "single-spa-angularjs";

import "../style/app.css";

const domElementGetter = () => document.getElementById("app-legacy");

class AppCtrl {
  constructor() {
    this.url = "https://github.com/preboot/angular-webpack";
  }
}

const MODULE_NAME = "app";

angular
  .module(MODULE_NAME, [])
  .directive("app", () => {
    return {
      template: require("./app.html"),
      controller: "AppCtrl",
      controllerAs: "app"
    };
  })
  .controller("AppCtrl", AppCtrl);

export default MODULE_NAME;

const app = singleSpaAngularJS({
  angular,
  domElementGetter,
  mainAngularModule: "app",
  preserveGlobal: true,
  template: "<app />"
});

lowloader.export(app);
