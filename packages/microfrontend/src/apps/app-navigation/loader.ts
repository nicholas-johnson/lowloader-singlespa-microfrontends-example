import lowloader from "lowloader";

export const loader = () =>
  lowloader.import("http://localhost:9000/app-navigation.js");
