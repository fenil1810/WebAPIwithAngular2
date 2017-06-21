import { Component} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Mark } from '../Models/Mark';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute,Router } from '@angular/router';
import { StudentInformation } from '../Models/StudentInformation';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'stuinfo',
    template: ` <div>
        <a href="jQueryGoogleChart.aspx">Dashboard</a>
        <a (click)="NavigateToCreate()">Create</a>
        <a (click)="NavigateToStandardList()">Standard List</a>
        <a (click)="NavigateToRegister()">Register</a>

        <table class="table">
            <tr>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Standard</th>
                <th>Section</th>
            </tr>
            <tr *ngFor="let stu of students">
                <td>{{stu.StudentName}}</td>
                <td>{{stu.Gender}}</td>
                <td>{{stu.Standard}}</td>
                <td>{{stu.Section}}</td>
                <td><a (click)="getUpdate(stu)">Update</a></td>
                <td><a (click)="getDelete(stu.StudentId)">Delete</a></td>
                <td><a (click)="getMarks(stu)">View Marks</a></td>
                <td><a (click)="AddMarks(stu)">Add Marks</a></td>
            </tr>
        </table>
    </div>`,

})
export class StudentInfoComponent {
    
    constructor(private studentService: StudentService,private _router:Router) {
        this.refresh();
       // this.getData();
    }
    public Id: number;
    public getMarks(stud) {

        localStorage.setItem("CurrentStudentMarks", JSON.stringify(stud));
        this._router.navigate(['Marks']);
    }

    public AddMarks(stud) {
        localStorage.setItem("AddMark", JSON.stringify(stud));
        this._router.navigate(['CreateMarks']);
    }
    public NavigateToCreate() {
        this._router.navigate(['Create']);
    }

    public NavigateToStandardList() {
        this._router.navigate(['StandardList']);
    }

    public NavigateToRegister() {
        this._router.navigate(['Register']);
    }
    public getUpdate(stud) {
                //alert('in');
                localStorage.setItem("CurrentStudent", JSON.stringify(stud));
                this._router.navigate(['Update']);
    }

    public getDelete(id: number) {
        this.studentService.Delete(id).then(data => {
            this.refresh();
        })
    }
    private students: StudentInformation[] = [];
    private errorMessage: any = '';
    private marks: Mark[] = [];
    
    refresh() {
        this.studentService.LoadData().then(data => {
            this.students = data;
        })
    }
/*   
    getData() {
        this.studentService.getData().subscribe(

            students => this.students = students,
            error => this.errorMessage = <any>error);
    }*/
}
