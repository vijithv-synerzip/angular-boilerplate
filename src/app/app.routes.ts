/*
* Router configuration for the application
*
* */
import {provideRouter, RouterConfig} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';


const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
       component: HomeComponent
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];
