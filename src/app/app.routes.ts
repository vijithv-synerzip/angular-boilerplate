/**
 * Created by synerzip on 5/8/16.
 */
import {provideRouter, RouterConfig} from '@angular/router';
import {LoginPage} from './loginPage.ts';


const routes : RouterConfig =[
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }

];

export const ROUTE_PROVIDERS = [
    provideRouter(routes)
];
