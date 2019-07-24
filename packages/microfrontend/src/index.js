import * as singleSpa from "single-spa";
import { appNavigation } from "./apps/app-navigation";
import { appCra } from "./apps/app-cra";

import { appLegacy } from "./apps/app-legacy";

appNavigation();
appCra();
appLegacy();
singleSpa.start();
