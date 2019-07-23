# Lowloader SingleSpa Microfrontends Example Project

# Create React App

If you are building React Microapps, you will most likely wish to make use of the convenience of create-react-app. This is of course very possible, but you'll need to do a little bit of work.

## Aims

- Preserve "standalone" development with yarn start. I want to develop and debug the app in isolation without the microfrontend framework around it.
- Build Watch. I want to be able to build automatically whenever a file changes.

## Eject

First up, you'll need to eject. Sorry about this, you're going to need to modify the config quite a bit.

Hit me up if you find a good way to avoid this.

## Build Watch

For local development, you'll want to have the option to build your code into

## Disable Chunk Splitting

Webpack chunk splitting it cool, but even with hashing turned off, it's not guaranteed to produce the same filenames for the same code on subsequent runs. This is fine if Webpack is loading the code, but isn't going to work so well for our purposes.

Open config/webpack.config.js

find the following code:

    splitChunks: {
      chunks: 'all',
      name: false,
    },

replace it with:

    splitChunks: false,
