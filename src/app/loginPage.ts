/**
 * Created by synerzip on 5/8/16.
 */
import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'login-page',
    templateUrl: './login.html',
    directives:[ROUTER_DIRECTIVES]
})
export class LoginPage {
    constructor(private http:Http){

    }
    public username: string = "";
    public password: string = "";
    public model: {
        username: "";
        password: ""
    };
    handleSubmit(event: any){
        console.log("HELLO 123", this.username, this.password);
        let data= this.getUser(this.username, this.password);
        //console.log(data);
    }
    getUser(username:string, password:string){
        let obj= {
            username: username,
            password: password
        };
        console.log('123!!!');
        return this.http.get('mock/users')
            .toPromise()
            .then(resp => console.log("RESPONSE!!", resp))
            .catch(this.errorHandler)

    }
    private extractData(res: Response) {
        let body = res.json();
        console.log("RESPONSE -> ", res);
        return body;
    }

    private errorHandler(error:any) {
        console.log('ERROR!!!');
        return Observable.throw(error.json());
    }
}

/*
 @Injectable()
 class UserService{
 constructor(http: Http){

 }

 getUser(username:string, password:string){
 let obj= {
 username: username,
 password: password
 };
 return this._http.get('http://localhost:3000/db')
 .map(this.extractData)
 .catch(this.errorHandler)

 }
 private extractData(res: Response) {
 let body = res.json();
 console.log("RESPONSE -> ", res);
 return body;
 }

 private errorHandler(error:any) {
 return Observable.throw(error.json());
 }
 }*/
