/*
 * login page for the application for demo purpose
 *
 * */
import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class LoginPage {
    constructor(private http:Http, private router:Router){

    }
    public username: string = "";
    public password: string = "";
    public model: {
        username: "";
        password: ""
    };
    handleSubmit(event: any){
        this.router.navigate(['home']);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private errorHandler(error:any) {
        return Observable.throw(error.json());
    }
}
