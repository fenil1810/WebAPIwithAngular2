import { Component,Input, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Router } from '@angular/router';
import { StudentInfoComponent } from './Component/StudentInfoComponent';
import { CreateComponent } from './Component/CreateComponent';
import { StudentInformation } from './Models/StudentInformation';
import { StudentService } from './Service/StudentService';
import { ModalComponent } from '../node_modules/ng2-bs3-modal/ng2-bs3-modal';


@Component({
    selector: 'my-app',
    template: ` <div>
    <h1>Students</h1>
    <a (click)="NavigateToStudent()">Student</a>
    <router-outlet></router-outlet>
    </div>`,

})
export class AppComponent {

    constructor(private _router:Router){}
    public NavigateToStudent()
    {
        this._router.navigate(['Student']);
    }
    
}