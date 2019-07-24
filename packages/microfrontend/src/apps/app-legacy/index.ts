import * as singleSpa from "single-spa";
import { appName } from "./app_name";
import { loader } from "./loader";
import { router } from "./router";

export const appLegacy = () =>
  singleSpa.registerApplication(appName, loader, router);
