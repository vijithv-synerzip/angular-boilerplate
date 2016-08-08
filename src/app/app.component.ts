/**
 * Root component of angular application
 */

import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'autoiq-app',
  template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

}
