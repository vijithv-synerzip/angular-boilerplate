/**
 * Component that bootstraps root component of application - AppComponent
 * Webpack creates separate file (app) in dist folder.
 */

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { appRouterProviders } from './app/app.routes';


import '../public/style/style.scss';
import '../public/style/login.scss';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    appRouterProviders
]).catch((err: any) => console.error('ERROR OCCURED!!!', err));
