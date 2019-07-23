(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    var t=Object.freeze({get start(){return Ct},get ensureJQuerySupport(){return lt},get setBootstrapMaxTime(){return D},get setMountMaxTime(){return U},get setUnmountMaxTime(){return C},get setUnloadMaxTime(){return I},get registerApplication(){return Pt},get getMountedApps(){return wt},get getAppStatus(){return bt},get unloadApplication(){return Nt},get checkActivityFunctions(){return Ot},get getAppNames(){return yt},get declareChildApplication(){return Et},get unloadChildApplication(){return At},get navigateToUrl(){return nt},get triggerAppChange(){return _t},get addErrorHandler(){return c},get removeErrorHandler(){return s},get mountRootParcel(){return Q},get NOT_LOADED(){return l},get LOADING_SOURCE_CODE(){return p},get NOT_BOOTSTRAPPED(){return m},get BOOTSTRAPPING(){return d},get NOT_MOUNTED(){return h},get MOUNTING(){return v},get UPDATING(){return w},get MOUNTED(){return g},get UNMOUNTING(){return y},get SKIP_BECAUSE_BROKEN(){return E}}),n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).CustomEvent;var e=function(){try{var t=new n("cat",{detail:{foo:"bar"}});return "cat"===t.type&&"bar"===t.detail.foo}catch(t){}return !1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e};function r(t){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){o(t,n,e[n]);});}return t}var a=[];function u(t,n){var e=f(t,n);a.length?a.forEach(function(t){return t(e)}):setTimeout(function(){throw e});}function c(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");a.push(t);}function s(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");var n=!1;return a=a.filter(function(e){var r=e===t;return n=n||r,!r}),n}function f(t,n){var e,r=n.unmountThisParcel?"Parcel":"Application",o="".concat(r," '").concat(n.name,"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message;}catch(t){}e=t;}else{console.warn("While ".concat(n.status,", '").concat(n.name,"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate."));try{e=Error(o+JSON.stringify(t));}catch(n){e=t;}}e.appName=n.name,e.appOrParcelName=n.name;try{e.name=n.name;}catch(t){}return e}var l="NOT_LOADED",p="LOADING_SOURCE_CODE",m="NOT_BOOTSTRAPPED",d="BOOTSTRAPPING",h="NOT_MOUNTED",v="MOUNTING",g="MOUNTED",w="UPDATING",y="UNMOUNTING",b="UNLOADING",E="SKIP_BECAUSE_BROKEN";function P(t){return t.status===g}function O(t){return !P(t)}function T(t){return t.status!==l&&t.status!==p}function A(t){return !T(t)}function N(t){try{return t.activeWhen(window.location)}catch(n){u(n,t),t.status=E;}}function S(t){try{return !t.activeWhen(window.location)}catch(n){u(n,t),t.status=E;}}function j(t){return t!==E&&(!t||t.status!==E)}function x(t){return t.name}var _={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}};function D(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("bootstrap max time must be a positive integer number of milliseconds");_.bootstrap={millis:t,dieOnTimeout:n};}function U(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("mount max time must be a positive integer number of milliseconds");_.mount={millis:t,dieOnTimeout:n};}function C(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unmount max time must be a positive integer number of milliseconds");_.unmount={millis:t,dieOnTimeout:n};}function I(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unload max time must be a positive integer number of milliseconds");_.unload={millis:t,dieOnTimeout:n};}function L(t,n,e){var r=1e3;return new Promise(function(o,i){var a=!1,u=!1;function c(t){if(!a)if(!0===t)u=!0,e.dieOnTimeout?i("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds")):console.error("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds -- we're no longer going to warn you about it."));else if(!u){var o=t,s=o*r;console.warn("".concat(n," did not resolve or reject within ").concat(s," milliseconds")),s+r<e.millis&&setTimeout(function(){return c(o+1)},r);}}t.then(function(t){a=!0,o(t);}).catch(function(t){a=!0,i(t);}),setTimeout(function(){return c(1)},r),setTimeout(function(){return c(!0)},e.millis);})}function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({},_,t)}function B(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function G(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!B(n,function(t){return "function"!=typeof t})));var n;}function R(t,n){return 0===(t=Array.isArray(t)?t:[t]).length&&(t=[function(){return Promise.resolve()}]),function(e){return new Promise(function(r,o){!function i(a){var u=t[a](e);k(u)?u.then(function(){a===t.length-1?r():i(a+1);}).catch(o):o("".concat(n," at index ").concat(a," did not return a promise"));}(0);})}}function k(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function q(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==m?t:(t.status=d,L(t.bootstrap(X(t)),"Bootstrapping appOrParcel '".concat(t.name,"'"),t.timeouts.bootstrap).then(function(){return t.status=h,t}).catch(function(e){if(t.status=E,n)throw f(e,t);return u(e,t),t}))})}function W(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){if(t.status!==g)return t;t.status=y;var e=Object.keys(t.parcels).map(function(n){return t.parcels[n].unmountThisParcel()});return Promise.all(e).then(r,function(e){return r().then(function(){var r=Error(e.message);if(n){var o=f(r,t);throw t.status=E,o}u(r,t),t.status=E;})}).then(function(){return t});function r(){return L(t.unmount(X(t)),"Unmounting application ".concat(t.name,"'"),t.timeouts.unmount).then(function(){t.status=h;}).catch(function(e){if(n){var r=f(e,t);throw t.status=E,r}u(e,t),t.status=E;})}})}var F=!1,K=!1;function $(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==h?t:(F||(window.dispatchEvent(new e("single-spa:before-first-mount")),F=!0),L(t.mount(X(t)),"Mounting application '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=g,K||(window.dispatchEvent(new e("single-spa:first-mount")),K=!0),t}).catch(function(e){return t.status=g,W(t).then(r,r);function r(){if(n){var r=f(e,t);throw t.status=E,r}return u(e,t),t.status=E,t}}))})}var H=0,J={parcels:{}};function Q(){return V.apply(J,arguments)}function V(t,n){var e=this;if(!t||"object"!==r(t)&&"function"!=typeof t)throw Error("Cannot mount parcel without a config object or config loading function");if(t.name&&"string"!=typeof t.name)throw Error("Parcel name must be a string, if provided");if("object"!==r(n))throw Error("Parcel ".concat(name," has invalid customProps -- must be an object"));if(!n.domElement)throw Error("Parcel ".concat(name," cannot be mounted without a domElement provided as a prop"));var o,i=H++,a="function"==typeof t,u=a?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:a?p:m,customProps:n,parentName:e.name,unmountThisParcel:function(){if(c.status!==g)throw Error("Cannot unmount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return W(c,!0).then(function(t){return c.parentName&&delete e.parcels[c.id],t}).then(function(t){return l(t),t}).catch(function(t){throw c.status=E,d(t),t})}};e.parcels[i]=c;var s=u();if(!s||"function"!=typeof s.then)throw Error("When mounting a parcel, the config loading function must return a promise that resolves with the parcel config");var l,d,v=(s=s.then(function(t){if(!t)throw Error("When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config");var n=t.name||"parcel-".concat(i);if(!G(t.bootstrap))throw Error("Parcel ".concat(n," must have a valid bootstrap function"));if(!G(t.mount))throw Error("Parcel ".concat(n," must have a valid mount function"));if(!G(t.unmount))throw Error("Parcel ".concat(n," must have a valid unmount function"));if(t.update&&!G(t.update))throw Error("Parcel ".concat(n," provided an invalid update function"));var e=R(t.bootstrap),r=R(t.mount),a=R(t.unmount);c.status=m,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=a,c.timeouts=M(t.timeouts),t.update&&(c.update=R(t.update),o.update=function(t){return c.customProps=t,z(function(t){return Promise.resolve().then(function(){if(t.status!==g)throw Error("Cannot update parcel '".concat(t.name,"' because it is not mounted"));return t.status=w,L(t.update(X(t)),"Updating parcel '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=g,t}).catch(function(n){var e=f(n,t);throw t.status=E,e})})}(c))});})).then(function(){return q(c,!0)}),y=v.then(function(){return $(c,!0)}),b=new Promise(function(t,n){l=t,d=n;});return o={mount:function(){return z(Promise.resolve().then(function(){if(c.status!==h)throw Error("Cannot mount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return e.parcels[i]=c,$(c)}))},unmount:function(){return z(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:z(s),bootstrapPromise:z(v),mountPromise:z(y),unmountPromise:z(b)}}function z(t){return t.then(function(){return null})}function X(n){var e=i({},n.customProps,{name:n.name,mountParcel:V.bind(n),singleSpa:t});return n.unmountThisParcel&&(e.unmountSelf=n.unmountThisParcel),e}function Y(t){return Promise.resolve().then(function(){return t.status!==l?t:(t.status=p,Promise.resolve().then(function(){var e=t.loadImpl(X(t));if(!k(e))throw Error("single-spa loading function did not return a promise. Check the second argument to registerApplication('".concat(t.name,"', loadingFunction, activityFunction)"));return e.then(function(e){var o;return "object"!==r(n=e)&&(o="does not export anything"),G(n.bootstrap)||(o="does not export a bootstrap function or array of functions"),G(n.mount)||(o="does not export a mount function or array of functions"),G(n.unmount)||(o="does not export an unmount function or array of functions"),o?(u(o,t),t.status=E,t):(n.devtools&&n.devtools.overlays&&(t.devtools.overlays=i({},t.devtools.overlays,n.devtools.overlays)),t.status=m,t.bootstrap=R(n.bootstrap,"App '".concat(t.name,"' bootstrap function")),t.mount=R(n.mount,"App '".concat(t.name,"' mount function")),t.unmount=R(n.unmount,"App '".concat(t.name,"' unmount function")),t.unload=R(n.unload||[],"App '".concat(t.name,"' unload function")),t.timeouts=M(n.timeouts),t)})}).catch(function(n){return u(n,t),t.status=E,t}));var n;})}var Z={hashchange:[],popstate:[]},tt=["hashchange","popstate"];function nt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error("singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag");n=t.currentTarget.href,t.preventDefault();}var r=st(window.location.href),o=st(n);if(0===n.indexOf("#"))window.location.hash="#"+o.anchor;else if(r.host!==o.host&&o.host){if(e.isTestingEnv)return {wouldHaveReloadedThePage:!0};window.location.href=n;}else!function(t,n){return n===t||n==="/"+t}(o.path,r.path)?window.history.pushState(null,null,n):window.location.hash="#"+o.anchor;}function et(t){var n=this;if(t){var e=t[0].type;tt.indexOf(e)>=0&&Z[e].forEach(function(e){e.apply(n,t);});}}function rt(){Dt([],arguments);}window.addEventListener("hashchange",rt),window.addEventListener("popstate",rt);var ot=window.addEventListener,it=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&tt.indexOf(t)>=0)||B(Z[t],function(t){return t===n}))return ot.apply(this,arguments);Z[t].push(n);},window.removeEventListener=function(t,n){if(!("function"==typeof n&&tt.indexOf(t)>=0))return it.apply(this,arguments);Z[t]=Z[t].filter(function(t){return t!==n});};var at=window.history.pushState;window.history.pushState=function(t){var n=at.apply(this,arguments);return rt(ct(t)),n};var ut=window.history.replaceState;function ct(t){try{return new PopStateEvent("popstate",{state:t})}catch(e){var n=document.createEvent("PopStateEvent");return n.initPopStateEvent("popstate",!1,!1,t),n}}function st(t){for(var n={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},e=n.parser.strict.exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,function(t,e,o){e&&(r[n.q.name][e]=o);}),r}window.history.replaceState=function(t){var n=ut.apply(this,arguments);return rt(ct(t)),n},window.singleSpaNavigate=nt;var ft=!1;function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return pt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return pt.call(this,e,window.removeEventListener,t,n,arguments)},ft=!0;}}function pt(t,n,e,r,o){return "string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach(function(t){tt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""));}),""===e.trim()?this:t.apply(this,o))}var mt={};function dt(t){return Promise.resolve().then(function(){var n=mt[t.name];return n?t.status===l?(ht(t,n),t):t.status===b?n.promise.then(function(){return t}):t.status!==h?t:(t.status=b,L(t.unload(X(t)),"Unloading application '".concat(t.name,"'"),t.timeouts.unload).then(function(){return ht(t,n),t}).catch(function(e){return function(t,n,e){delete mt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,u(e,t),t.status=E,n.reject(e);}(t,n,e),t})):t})}function ht(t,n){delete mt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=l,n.resolve();}function vt(t,n,e,r){mt[t.name]={app:t,resolve:e,reject:r},Object.defineProperty(mt[t.name],"promise",{get:n});}var gt=[];function wt(){return gt.filter(P).map(x)}function yt(){return gt.map(x)}function bt(t){var n=B(gt,function(n){return n.name===t});return n?n.status:null}function Et(t,n,e){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead'),Pt(t,n,e)}function Pt(t,n,e){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof t||0===t.length)throw Error("The first argument must be a non-empty string 'appName'");if(-1!==yt().indexOf(t))throw Error("There is already an app declared with name ".concat(t));if("object"!==r(i)||Array.isArray(i))throw Error("customProps must be an object");if(!n)throw Error("The application or loading function is required");if(o="function"!=typeof n?function(){return Promise.resolve(n)}:n,"function"!=typeof e)throw Error("The activeWhen argument must be a function");gt.push({name:t,loadImpl:o,activeWhen:e,status:l,parcels:{},devtools:{overlays:{options:{},selectors:[]}},customProps:i}),lt(),Dt();}function Ot(t){for(var n=[],e=0;e<gt.length;e++)gt[e].activeWhen(t)&&n.push(gt[e].name);return n}function Tt(){return gt.filter(j).filter(A).filter(N)}function At(t,n){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead'),Nt(t,n)}function Nt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error("unloadApplication requires a string 'appName'");var e=B(gt,function(n){return n.name===t});if(!e)throw Error("Could not unload application '".concat(t,"' because no such application has been registered"));var r,o=function(t){return mt[t]}(e.name);if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise(function(t,n){vt(e,function(){return i},t,n);});return i}return o?(r=o.promise,St(e,o.resolve,o.reject)):r=new Promise(function(t,n){vt(e,function(){return r},t,n),St(e,t,n);}),r}function St(t,n,e){W(t).then(dt).then(function(){n(),setTimeout(function(){Dt();});}).catch(e);}var jt=!1,xt=[];function _t(){return Dt()}function Dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(jt)return new Promise(function(t,e){xt.push({resolve:t,reject:e,eventArguments:n});});jt=!0;var r=!0;return Ut?Promise.resolve().then(function(){window.dispatchEvent(new e("single-spa:before-routing-event",a()));var n=Object.keys(mt).map(function(t){return mt[t].app}).filter(O).map(dt),u=gt.filter(j).filter(P).filter(S).map(W).map(function(t){return t.then(dt)}),c=u.concat(n);c.length>0&&(r=!1);var s=Promise.all(c),f=Tt(),l=f.map(function(t){return Y(t).then(q).then(function(t){return s.then(function(){return $(t)})})});l.length>0&&(r=!1);var p=gt.filter(j).filter(O).filter(T).filter(N).filter(function(t){return f.indexOf(t)<0}).map(function(t){return q(t).then(function(){return s}).then(function(){return $(t)})});return p.length>0&&(r=!1),s.catch(function(t){throw i(),t}).then(function(){return i(),Promise.all(l.concat(p)).catch(function(n){throw t.forEach(function(t){return t.reject(n)}),n}).then(function(){return o(!1)})})}):Promise.resolve().then(function(){var t=Tt().map(Y);return t.length>0&&(r=!1),Promise.all(t).then(o).catch(function(t){throw i(),t})});function o(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=wt();n&&i(),t.forEach(function(t){return t.resolve(o)});try{var u=r?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new e(u,a())),window.dispatchEvent(new e("single-spa:routing-event",a()));}catch(t){setTimeout(function(){throw t});}if(jt=!1,xt.length>0){var c=xt;xt=[],Dt(c);}return o}function i(){t.forEach(function(t){et(t.eventArguments);}),et(n);}function a(){var t={detail:{}};return n&&n[0]&&(t.detail.originalEvent=n[0]),t}}var Ut=!1;function Ct(){Ut=!0,Dt();}setTimeout(function(){Ut||console.warn("singleSpa.start() has not been called, ".concat(5e3,"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start"));},5e3);var It={getRawAppData:function(){return [].concat(gt)},reroute:Dt,NOT_LOADED:l,toLoadPromise:Y,toBootstrapPromise:q,unregisterApplication:function(t){if(!gt.find(function(n){return n.name===t}))throw Error("Cannot unregister application '".concat(t,"' because no such application has been registered"));return Nt(t).then(function(){var n=gt.findIndex(function(n){return n.name===t});gt.splice(n,1);})}};window&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=It);//# sourceMappingURL=single-spa.min.js.map

    var appName = "appNavigation";
    //# sourceMappingURL=app_name.js.map

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

    var loader = function () {
        return lowLoader["import"]("http://localhost:9000/app-navigation.js");
    };
    //# sourceMappingURL=loader.js.map

    var router = function (location) { return true; };
    //# sourceMappingURL=router.js.map

    var appNavigation = function () {
        return Pt(appName, loader, router);
    };
    //# sourceMappingURL=index.js.map

    var appName$1 = "appCra";
    //# sourceMappingURL=app_name.js.map

    var bundle = "http://localhost:9000/app-cra/js/bundle.js";
    var mainChunk = "http://localhost:9000/app-cra/js/main.chunk.js";
    var loader$1 = function () {
        return lowLoader["import"](bundle)
            .then(function (b) {
            console.log("b", b);
            return lowLoader["import"](mainChunk);
        })
            .then(function (c) {
            console.log("c", c);
            return c;
        });
    };
    // <script src="js/bundle.js"></script><script src="js/1.chunk.js"></script><script src="js/main.chunk.js"></script>
    //# sourceMappingURL=loader.js.map

    var router$1 = function (location) { return location.pathname.startsWith("/app-cra"); };

    var appCra = function () {
        return Pt(appName$1, loader$1, router$1);
    };
    //# sourceMappingURL=index.js.map

    appNavigation();
    appCra();
    Ct();

}));
