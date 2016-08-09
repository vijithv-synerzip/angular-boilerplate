/*
 * Landing page after login for the application for demo purpose
 *
 * */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
declare var $: any;

@Component({
    selector: 'autoiq-home',
    templateUrl: './home.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent{
    public themes = [ 'cerulean', 'cosmo', 'cyborg', 'darky', 'lumen', 'redable'];
    public selectedTheme:string = 'default';
    public themesheet:any = $('<link href="/dist/theme/'+ this.selectedTheme +'/bootstrap.css" rel="stylesheet" />');

    public selectTheme = (theme:string) =>{
        let themeurl = $('<link href="/dist/theme/'+ theme +'/bootstrap.css" rel="stylesheet" />');
        this.themesheet.attr('href',themeurl);
        console.log(themeurl);
    }
}
