import lowloader from "lowloader";

console.log("hello, this is the navigation!");

const el = document.getElementById("app-navigation");

const style = `
  ul#app-navigation-container {
    display:flex;
    margin:0;
    padding:0;
  }
  ul#app-navigation-container li {
    list-style:none;
    margin:0;
    padding:0;
  }
  ul#app-navigation-container a {
    
  }
`;
const title =
  "Hello This is the app-navigation. I am written in plain ES6, built with rollup, and dynamically loaded by lowloader.";

const template = `
  <style>${style}</style>
  <ul 
    id="app-navigation-container" 
    title="${title}">
    <li>
      <a href="/#app-one">App One</a>
    </li>
    <li>
      <a href="/#app-two">App Two</a>
    </li>
  </ul>
`;

const app = {
  bootstrap: () => Promise.resolve(),
  mount: () => {
    el.innerHTML = template;
    return Promise.resolve();
  },
  unmount: () => {
    el.innerHTML = "";
    return Promise.resolve();
  }
};

lowloader.export(app);
