/**
 * Component that bootstraps root component of application - AppComponent
 * Webpack creates separate file (app) in dist folder.
 */

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';

import '../public/style/style.scss';
if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, []);
