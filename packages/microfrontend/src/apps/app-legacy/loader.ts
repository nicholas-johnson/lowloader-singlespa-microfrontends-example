import lowloader from "lowloader";

export const loader = () =>
  lowloader.import("http://localhost:9000/app-legacy/app.bundle.js");
