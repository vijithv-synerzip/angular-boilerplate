/**
 * File that imports all  pollyfills like es6 polyfills (core js), angular's monkey patching (zone.js)
 * and decorator metadata (reflect-metadata).
 * Webpack creates separate file for pollyfills in dist folder.
 */

import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

import 'ts-helpers';

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
