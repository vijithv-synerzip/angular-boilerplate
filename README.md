#AutoIQ BoilerPlate

**Note: This guide is following the Angular's [Style Guide](http://angular.io/styleguide)**

A complete, yet simple, starter for Angular 2 using Webpack.

This seed repo serves as an Angular 2 starter for anyone looking to get up and running with Angular 2 and TypeScript fast.
 Using [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using
 Protractor for our end-to-end story and Karma for our unit tests.

* Best practices in file and application organization for [Angular 2](https://angular.io/).
* Ready to go build system using [Webpack](https://webpack.github.io/docs/) for working with [TypeScript](http://www.typescriptlang.org/).
* Testing Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* End-to-end Angular 2 code using [Protractor](https://angular.github.io/protractor/).
* Stylesheets with [SASS](http://sass-lang.com/) (not required, it supports regular css too).
* Error reported with [TSLint](http://palantir.github.io/tslint/).

>Warning: Make sure you're using the latest version of Node.js and NPM



### Prerequisites

[node](https://nodejs.org/en/download/). See [Dependencies](#dependencies) for more details.

### Quick start

> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone our repo

# change directory to your app
$ cd angular-boilerplate

# install the dependencies with npm
$ npm install | sudo npm install

# start the server
$ npm run start

# IF it gives typings errors, It meants ```postinstall``` command is not run. run it mannualy
$ npm run webdriver-update && typings install | sudo npm run webdriver-update && sudo typings install

```
go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Install [node](https://nodejs.org/en/download/)
* Ensure you're running Node (`v5.x.x`+) and NPM (`3.x.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:

```bash
npm run  start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)



## Scripts and Purpose
These are the various node scripts and their descriptions. if user does not have admin rights,
then add 'sudo' prefix in these commands.

| Script     | Purpose    |
| --------|---------|
| npm run clean  | To clean node_modules, dist folder, and to  clean  npm cache.  |
| npm run start  |  To start server locally (visit [http://localhost:8080](http://localhost:8080))   |
| npm run clean-start  |   Delete, Reinstall npm dependencies , and start server. |
| npm run build |  To build dist folder for production. |
| npm run e2e|   To run end to end testing using protractor.  |
| npm run test| To run unit testing    |
| npm run complete-test  | To run unit testing and end to end testing    |
| npm run test-build |  To run unit tests and then build dist for production   |
| npm run test-start  |  To run unit tests and start server locally (visit [http://localhost:8080](http://localhost:8080))   |
| npm run clean-test-start  |  to clean and Reinstall node dependencies, running tests and start server locally |