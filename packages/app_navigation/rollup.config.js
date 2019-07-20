import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "../server/webroot/app-navigation.js",
    format: "umd"
  },
  plugins: [resolve()]
};
