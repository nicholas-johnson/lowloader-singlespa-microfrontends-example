import copy from "rollup-plugin-copy";
import typescript from "rollup-plugin-typescript";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "../server/webroot/microfrontend.js",
    format: "umd"
  },
  plugins: [
    typescript(),
    resolve(),
    copy({
      targets: [{ src: "src/index.html", dest: "../server/webroot" }]
    })
  ]
};
