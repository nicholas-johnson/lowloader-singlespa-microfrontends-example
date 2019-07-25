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
    display:inline-block;
    text-decoration:none;
    color:black;
    padding:10px;
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
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/cra">Create React App</a>
    </li>
    <li>
      <a href="/legacy">Legacy AngularJS App</a>
    </li>
  </ul>
`;

const app = {
  bootstrap: () => Promise.resolve(),
  mount: () => {
    el.innerHTML = template;
    Array.from(el.getElementsByTagName("a")).forEach(a => {
      a.onclick = evt => {
        history.pushState({}, null, a.href);
        console.log("navigating to ", a.href);
        evt.preventDefault();
      };
    });
    return Promise.resolve();
  },
  unmount: () => {
    el.innerHTML = "";
    return Promise.resolve();
  }
};

lowloader.export(app);
