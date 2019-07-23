import * as singleSpa from "single-spa";
import { appNavigation } from "./apps/app-navigation";
import { reactAppOne } from "./apps/react-app-one";

appNavigation();
reactAppOne();
singleSpa.start();
