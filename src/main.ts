/**
 * Component that bootstraps root component of application - AppComponent
 * Webpack creates separate file (app) in dist folder.
 */

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import {ROUTE_PROVIDERS} from './app/app.routes.ts';

import '../public/style/style.scss';
if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    ROUTE_PROVIDERS
]).catch((err:any) => console.error("ERROR OCCURED!!!", err));
