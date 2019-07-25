# Lowloader SingleSpa Microfrontends Example Project

A MicroFrontend demo project featuring:

- SingleSpa
- Lowloader
- Create React App
- AngularJS boilerplate (legacy)
- Navigation app built in plain ES6.
- Live Reload
- Webpack
- Rollup

## Usage

Get the dependencies with:

    lerna bootstrap

Alternatively you may run `yarn` manually in each folder in packages. Lerna automates this for you.

Start the server app:

    cd packages/server
    yarn start

To build individual microapps, cd into the correct app folder and:

    yarn start

Each app has a different build process, and you may have multiple build processes running at once. I suggest using different tabs for this in a terminal app such as iTerm.

## Monorepo

For convenience, I've packaged this app up as a Lerna monorepo. In a real app, each package may be its own repo, with its own owner, build process, etc.

Microapps are essentially free-living apps that share a DOM. Each of these apps can be started in standalone mode, and will run just fine.

## Create React App (packages/app-cra)

If you are building React Microapps, you will most likely wish to make use of the convenience of create-react-app. This is of course very possible, but you'll need to do a little bit of work.

### Aims

- Preserve "standalone" development with yarn start. I want to develop and debug the app in isolation without the microfrontend framework around it.
- Build Watch. I want to be able to build automatically whenever a file changes.

### Eject

First up, you'll need to eject. Sorry about this, you're going to need to modify the config quite a bit.

Hit me up if you find a good way to avoid this.

### Build Watch

For local development, you'll want to have the option to build your code into a folder of your choosing. Here, I've used cra-build-watch.

    yarn add cra-build-watch

Now open up package.json and replace the start script with the following:

    "start": "cra-build-watch --build-path ../server/webroot/app-cra",
    "start:standalone": "node scripts/start.js",

### Disable Chunk Splitting

Webpack chunk splitting it cool, but even with hashing turned off, it's not guaranteed to produce the same filenames for the same code on subsequent runs. This is fine if Webpack is loading the code, but isn't going to work so well for our purposes.

Open config/webpack.config.js

find the following code:

    splitChunks: {
      chunks: 'all',
      name: false,
    },

replace it with:

    splitChunks: false,

## AngularJS (app-legacy)

This app is build with Angular JS and Webpack. It uses the single-spa-angularjs adapter to generate its lifecycle functions.

It's AngularJS, so is a bit odd, but should be expanatory enough. Runs in standalone or microfrontend mode.

## Microfrontend

This is the Microfrontend orchestration tool It is the only app that is loaded by default. It has a set of tiny loaders, that will load and instantiate apps on demand in response to rouce changes.

## ES6 Navigation App (app_navigation)

This app is built out of ES6 and compiles with Rollup. It's the most lightweight app, and is included to show how simple a microapp can be.

## Pull requests

Please feel free to issue PRs.
