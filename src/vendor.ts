/**
 * File that is used to load 3rd party stylesheets and/or jquery and/or other dependencies.
 * Webpack creates separate file for vendors in dist folder.
 */

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';

/*styles sheets*/
import 'bootstrap/dist/css/bootstrap.min';

/*fonts*/
import 'opensans-npm-webfont';
