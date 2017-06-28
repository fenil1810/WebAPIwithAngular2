import { Component,Input, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Router } from '@angular/router';
import { StudentInfoComponent } from './Component/StudentInfoComponent';
import { CreateComponent } from './Component/CreateComponent';
import { StudentInformation } from './Models/StudentInformation';
import { StudentService } from './Service/StudentService';
import { ModalComponent } from '../node_modules/ng2-bs3-modal/ng2-bs3-modal';
//import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
    selector: 'my-app',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    template: ` <div>
    <h1>Students</h1>
    <a (click)="NavigateToStudent()">Student</a>
    <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {
    location: Location;
    constructor(private _router: Router, location: Location) { this.location = location;}
    public NavigateToStudent()
    {
        this._router.navigate(['Student']);
        
    }
    
}