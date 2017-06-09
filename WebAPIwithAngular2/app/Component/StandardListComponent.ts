import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Mark } from '../Models/Mark';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { StudentInformation } from '../Models/StudentInformation';
import { StandardList } from '../Models/StandardList';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'stdinfo',
    template: ` <div>
        <a href="jQueryGoogleChart.aspx">Dashboard</a>
        <a (click)="NavigateToCreate()">Create</a>
        <table class="table">
            <tr>
                <th>Standard</th>                
            </tr>
            <tr *ngFor="let std of standard">
                <td>{{std.Standard}}</td>
                <td><a (click)="getList(std)">List</a></td>
                <td><a (click)="getResult(std)">Result</a></td>
            </tr>
        </table>
    </div>`,

})
export class StandardListComponent {

    constructor(private studentService: StudentService, private _router: Router) {
        this.refresh();
    }
    
    private standard: StandardList[] = [];
    //public standard: StandardList = new StandardList();
    refresh() {
        this.studentService.LoadStandardData().then(data => {
            this.standard = data;
        })
    }
    getList(stud) {
        localStorage.setItem("CurrentStandard", JSON.stringify(stud));
        this._router.navigate(['ListStudents'])
    }
}
