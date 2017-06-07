import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Mark } from '../Models/Mark';
import { MarksService } from '../Service/MarksService';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { StudentInformation } from '../Models/StudentInformation';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'markinfo',
    template: ` <div>
        <table class="table">
            <tr>
                <th>Student Name</th>
                <th>Subject Name</th>
                <th>Marks</th>
            </tr>
            <tr *ngFor="let stu of marks">
                <td>{{stu.StudentInformation.StudentName}}</td>
                <td>{{stu.SubjectName}}</td>
                <td>{{stu.MarkofSubject}}</td><td><a (click)="getUpdate(stu)">Update</a></td>
                <td><a (click)="getDelete(stu)">Delete</a></td>

                
            </tr>
        </table>
    </div>`,

})
export class MarkComponent {

    constructor(private studentService: StudentService, private _router: Router, private marksService: MarksService) {
        if (localStorage.getItem("CurrentStudentMarks") != null && localStorage.getItem("CurrentStudentMarks") != undefined)
            this.students = JSON.parse(localStorage.getItem("CurrentStudentMarks"));
        this.LoadMarks(this.students);
      
    }

    private students: StudentInformation[] = [];
    private errorMessage: any = '';
    private marks: Mark[] = [];
    LoadMarks(stud) {
        this.studentService.LoadMarks(stud).then(data => {
            this.marks = data;
        })
    }   
    
    public getUpdate(stud) {
       
        localStorage.setItem("Mark", JSON.stringify(stud));
        this._router.navigate(['UpdateMarks']);
    }
    public Create(stud) {

        localStorage.setItem("Mark", JSON.stringify(stud));
        this._router.navigate(['UpdateMarks']);
    }

    public getDelete(stud) {
        this.marksService.Delete(stud.MarkID).then(data => {
           this.LoadMarks(stud);             
        })
    }
    
}