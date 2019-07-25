(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    window["lowloader"] = window["lowloader"] || {};
    var Cache = /** @class */ (function () {
        function Cache() {
            var _this = this;
            this.store = {};
            /**
             * gets a promise from the cache
             * @param key
             */
            this.get = function (key) { return _this.store[key]; };
            /**
             * Test to see if a promise is in the cache
             * @param key
             */
            this.check = function (key) { return !!_this.get(key); };
        }
        /**
         * adds a promise to the cache under a URL
         * @param key
         * @param data
         */
        Cache.prototype.put = function (key, data) {
            this.store[key] = data;
        };
        /**
         * removes a promise from the cache
         * @param key
         */
        Cache.prototype.remove = function (key) {
            delete this.store[key];
        };
        /** Clears the whole cache */
        Cache.prototype.clear = function () {
            for (var key in this.store)
                this.remove(key);
        };
        return Cache;
    }());

    var Loader = /** @class */ (function () {
        function Loader() {
        }
        Loader.prototype.load = function (url) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                var el = document.createElement("script");
                el.async = false;
                el.onload = function () {
                    _this.handleOnLoad(url, resolve);
                };
                el.onerror = function (err) {
                    _this.handleOnError(err, url, reject);
                };
                el.src = url;
                document.head.appendChild(el);
            });
            return promise;
        };
        Loader.prototype.handleOnLoad = function (url, resolve) {
            var tempArtifact = window["lowloader"].tempArtifact || {
                message: "url: " + url + " was downloaded, but it did not lowloader.export anything. Use a global, or export something. See the README."
            };
            window["lowloader"].tempArtifact = null;
            resolve(tempArtifact);
        };
        Loader.prototype.handleOnError = function (evt, url, reject) {
            var message = "\n      Lowloader: could not load resource  \n      url: " + url;
            console.warn(message);
            console.warn(evt);
            window["lowloader"].tempArtifact = null;
            reject(message);
        };
        return Loader;
    }());

    window["lowloader"] = window["lowloader"] || {};
    var LowLoader = /** @class */ (function () {
        function LowLoader() {
            this.cache = new Cache();
        }
        LowLoader.prototype["import"] = function (url) {
            if (this.cache.check(url)) {
                return this.cache.get(url);
            }
            var loader = new Loader();
            var promise = loader.load(url);
            this.cache.put(url, promise);
            return promise;
        };
        LowLoader.prototype["export"] = function (data) {
            window["lowloader"].tempArtifact = data;
        };
        return LowLoader;
    }());

    window["lowloader"] = window["lowloader"] || {};
    var browserSingleton = {
        get: function () {
            if (!window["lowloader"].loader) {
                window["lowloader"].loader = new LowLoader();
            }
            return window["lowloader"].loader;
        }
    };

    window["lowloader"] = window["lowloader"] || {};
    var lowLoader = browserSingleton.get();

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

    lowLoader.export(app);

}));
