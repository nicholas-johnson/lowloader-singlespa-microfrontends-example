import * as singleSpa from "single-spa";

import { appNavigation } from "./apps/app-navigation";

appNavigation();
singleSpa.start();
