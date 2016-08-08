#Angular BoilerPlate

**Note: This guide is following the Angular's [Style Guide](http://angular.io/styleguide)**

A complete, starter for Angular 2 using Webpack.

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

```bash
# clone our repo

# change directory to your app
$ cd angular-boilerplate

# install the dependencies with npm
$ npm install

# update selenium server
npm run webdriver-update

# start the server
$ npm run start
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
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* `npm run build`

## Testing

#### 1. Unit Tests

* `npm test`

#### 2. End-to-End Tests (aka. e2e, integration)

* in a tab, *if not already running!*: `npm start`
* in a new tab: `npm run webdriver-start`
* in another new tab: `npm run e2e`

## Scripts and Purpose
These are the various node scripts and their descriptions. if user does not have admin rights,
then add 'sudo' prefix in these commands.

| Script                    |  Purpose                                                                                           |
| --------------------------|----------------------------------------------------------------------------------------------------|
| npm run e2e               |  To run end to end testing using protractor.                                                       |
| npm run lint              |  To run TSLint check.                                                                              |
| npm run test              |  To run unit testing.                                                                              |
| npm run webdriver-update  |  To update selenium standalone server.                                                             |
| npm run webdriver-start   |  To start selenium standalone server.                                                              |
| npm run start             |  To start server locally (visit [http://localhost:8080](http://localhost:8080))                    |
| npm run clean             |  To remove node_modules, dist folder, and to  clean  npm cache.                                    |
| npm run clean-install     |  To clean(`npm run clean`) and reinstall npm dependencies.                                         |
| npm run test-build        |  To run linting, unit tests and then build dist for production                    |
| npm run test-start        |  To run unit tests and start server locally (visit [http://localhost:8080](http://localhost:8080)) |
