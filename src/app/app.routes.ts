/*
* Router configuration for the application
*
* */
import {provideRouter, RouterConfig} from '@angular/router';
import {LoginPage} from './login/login.component.ts';
import {HomeComponent} from './home/home.component.ts';


const routes : RouterConfig =[
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
       component:HomeComponent
    }

];

export const ROUTE_PROVIDERS = [
    provideRouter(routes)
];
