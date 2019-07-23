import * as singleSpa from "single-spa";
import { appNavigation } from "./apps/app-navigation";
import { appCra } from "./apps/app-cra";

appNavigation();
appCra();
singleSpa.start();
