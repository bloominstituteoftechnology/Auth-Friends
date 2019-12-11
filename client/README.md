Project bootstrapped with [Yet Another React Boilerplate](https://github.com/jasonsbarr/yet-another-react-boilerplate)

# Yet Another React Boilerplate

A (very opinionated) React SPA project boilerplate built with Webpack that includes:

- Dynamic, client-side routing
- Modular state management _without_ a ton of boilerplate
- A functional reducer factory with a `setState` helper
- Styling with Sass, CSS-in-JS, or both
- CSS and Sass modules for component styles that won't leak into the global scope
- Automatic loading for both external and self-hosted webfonts
- Linting for both styles and JS/JSX
- Automatic code formatting
- Testing with reasonable defaults for unit and integration tests
- Pre-commit hooks for testing, linting, and code formatting
- Optimized, responsive images
- Code splitting optimized for modern HTTP/2 clients
- Improved bundle cacheability for better performance
- Separate configs for dev and prod environments

Plus there's no need to "eject" to add your own configuration; you can just edit the config files and go.

## Sensible code organization

The `src` directory is divided into multiple predefined subdirectories for you to store your components, layouts, reducers, and more.

You can organize these any way you like, but the initial file structure gives you a reasonable starting point.

### The `src` directory contents

The components directory has the `App` component in its own subdirectory, with all its necessary files contained together. Then the `App` subdirectory has its own `index.js` file that exports the main component to provide an elegant interface for the rest of the application. It also includes its own `App.test.js` for component testing and `App.scss` for styling.

Each utility directory has an `index.js` file you can use to streamline the interface for the rest of the application as well, with some examples to give you an idea of how to do it. The examples will also show you how to use the included packages like Conflux and React Router.

Of course, you are completely free to ignore my suggestions and structure things however you like; it's your project.

## Usage: The reducer factory

To use the reducer factory function, simply import it at the top of the file containing your reducers:

```js
import { makeReducer } from "Utils";
```

Define a reducer function to handle each action you'll need to dispatch. Note that the function names will need to be formatted to match your action types.

For example, if you define action types like `ACTION_TYPE`, the function for that action will also need to be `ACTION_TYPE`.

Then at the bottom of your reducers file export the `makeReducer` function with the functions passed in as keys to an object:

```js
export default makeReducer({
  ACTION_TYPE
  // your other reducers
});
```

## Usage: The `setState` helper

It's common to see reducers that use this pattern:

```js
const usersReducer = (state, action) => {
  // handle building a new users property
  return { ...state, users };
};
```

I've created a helper for it called `setState`. Simply include it when you import `makeReducer`:

```js
import { makeReducer, setState } from "Utils";
```

Pass the key you want to set on your state object into `setState`:

```js
const setUsers = setState("users");
```

Then call the newly-returned function in your reducers:

```js
const ADD_USER(state, { payload: user }) {
  const users = { ...state.users, user };
  return setUsers(users);
};
```

## Usage: Included scripts

Here are the included scripts you can use after installation and their provided options

### Start

Starts the dev server with live reload when you make a change to the code.

Run with `npm start`.

### Build

Makes a production build, complete with optimized assets including responsive images for devices with different viewport sizes and pixel densities.

Run with `npm run build`.

### Test

Uses Jest and React Testing Library to run your tests.

Use `npm test` to start the test runner, which will run tests on changed files as you make edits.

Use `npm run test:run` to run all tests once.

Use `npm run test:all` to watch for file changes and then run _all_ tests on each change.

Use `npm run test:update` to update tests, including snapshots, and then run all tests.

Use `npm run test:coverage` or to generate coverage statistics for your test suite.

### Lint

Runs one or both of:

- ESLint on your JS/JSX code
- Stylelint on your CSS/SCSS and CSS-in-JS

Use `npm run lint` to lint everything.

Use `npm run lint:css` to lint all your styles only.

Use `npm run lint:js` to lint all your JS/JSX only.

_Note: I highly recommend you set up automatic linting in your editor if it doesn't handle it automatically_

### Format

Uses Prettier to format JS/JSX.

Run with `npm run format`.

_Note: I highly recommend setting up Prettier to run automatically in your editor so files are formatted when you change them_

### Serve

Serves your production build at `http://127.0.0.1:5000` and opens a new browser tab for it.

Run with `npm run serve`

## Included React packages

### State management: Conflux

From the [Conflux README](https://github.com/dustinmyers/react-conflux):

> Conflux is a modularized state management system utilizing the Context API and React Hooks for the React ecosystem. It provides predictable and optionally-nested state containers for applications in an elegant, streamlined, and developer-friendly manner.

Conflux allows you to define `StateProvider` wrappers for any component tree in your application.

You can use it to define a global state like you would with Redux, but you can also define state that encompasses a particular component tree when nested children need the state values but making it global would be overkill.

You can also mix-and-match as needed.

### Routing: React Router

With the new hooks available in v5.1 and upcoming plans to merge in Reach Router's API, [React Router](https://reacttraining.com/react-router/) was an easy decision. Flexible client-side routing with the ability to use routes just as you would any other component.

### Styling: Emotion

[Emotion](https://emotion.sh/docs/introduction) provides advanced styling capabilities with all the power of JavaScript, powerful built-in composition tools, and a great developer experience with source maps, testing utilities, and more.

I've added both the core package with the `css` prop and the `styled` higher-order component interface.

## Developer experience enhancements

- Supports JSX and both the latest JavaScript standards and Stage 4 proposals, as well as the popular Class Properties, Decorators, Dynamic Import, and BigInt late-stage TC39 proposals via Babel
- Import aliases defined in Webpack, ESLint config, Jest config, and `jsconfig.json` so instead of having to use a long relative path to import a component you can just use `import { App } from "Components/App"` wherever you're working
- WebFontLoader for easy web font use, both from external sources like Google Fonts and those hosted on your own server
- Emotion JSX transformation built-in via Babel so you don't have to manually define the `@jsx` pragma in every component you style
- Automatically loads imported CSS and Sass files into the build so you can choose how you want to write your styles
- Automatic browser style normalization, vendor prefixing, and browser support polyfills with fixes for known browser CSS bugs
- Preset `start` script loads Webpack Dev Server with live refresh in your default browser so you can see updated changes every time you edit your code (plus hot module replacement is a cinch to set up)
- Automated linting, formatting, and testing as a pre-commit hook so you never have to worry about accidentally submitting ugly, broken code
- It's easy to remove the pre-commit hook if you'd rather take a chance than have that peace of mind ;)
- Minimal ESLint config means you can define a style guide you're familiar with without having to rewrite the whole `.eslintrc` file
- Just about any optimization you might need for production is already configured (except static page generation, but that's in the works)
- Source maps for debugging in both dev and prod environments

## Production build optimizations

- Aggressive image compression and automatic generation of responsive image sizes
  - Uses:
  - Url loader (to inline small images)
  - SVG url loader (to inline small SVG images)
  - Imagemin Webpack plugin
  - PNGQuant
  - OptiPNG
  - Gifsicle
  - SVGo
  - MozJPG
  - Sharp
  - Responsive loader
- Minification of both JavaScript and generated CSS code
  - Uses:
  - Terser Webpack plugin
  - Optimize CSS assets Webpack plugin
- Tree-shaking for JS, and purging for unused CSS using Webpack built-ins and Purge CSS Webpack plugin
- Aggressive code splitting to take advantage of modern HTTP/2 clients' higher request concurrency

## Installation

The preferred way of initiating a YARB project is to install it using the CLI:

`yarb-cli create <project-directory> [options]`

See the [Yarb-CLI documentation](https://github.com/jasonsbarr/yarb-cli#readme) for instructions on downloading and a complete list of options.

Alternatively you can download/clone the repo from Github:

```bash
git clone --depth=1 git@github.com:jasonsbarr/yet-another-react-boilerplate.git [folder-name]

cd [folder-name]

rm -rf .git # so you can initialize your own repo

npm install
# or
yarn
```

## Contributing

Simply submit a PR and let's talk! If you have an idea but not a fully-formed code solution, either an issue or draft PR will do.

## Author

Jason Barr (me@jasonbarr.dev)

## Copyright and license info

Yet Another React Boilerplate is &copy; 2019 by Jason Barr. [Released under the MIT license](./LICENSE).

Projects created with this template are under their creators' copyright and may be released under a license of their choosing.
