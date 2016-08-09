/*
 * login page for the application for demo purpose
 *
 * */
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'autoiq-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    public username: string = '';
    public password: string = '';
    public model: {
        username: "",
        password: ""
    };

    constructor(private router: Router) {

    }

    handleSubmit(event: any) {
        this.router.navigate(['home']);
    }

}
