import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { MarksService } from '../Service/MarksService';
import { Mark } from '../Models/Mark';
import { MASTER } from '../Models/MASTER';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { StudentInformation } from '../Models/StudentInformation';
import { StudentInfoComponent } from './StudentInfoComponent';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'create',
    template: ` <div>
        <table class="table">         	
	      <tr>
					SubjectName:	
                    <select [(ngModel)]="student.SubjectId">    
                    <option *ngFor="let stu of master" value= {{stu.SubjectId}}>
                        {{stu.SubjectName}}
                    </option>
                    </select>
				<br>
			
		</tr>
        <tr>
					Marks:	    
				<input type="number" [(ngModel)]="student.MarkofSubject" placeholder="Marks"  required>
                <br>
			
		</tr>
    </table>
    <button (click)="Add(student)">Create</button>
    </div>`,

})
export class CreateMarksComponent {

    public resmessage: string;
    private students: StudentInformation[] = [];
    private errorMessage: any = '';
    public student: StudentInformation = new StudentInformation();
    public marks: Mark = new Mark();
    public master: MASTER[] =[];
    constructor(private studentService: StudentService, private _router: Router, private marksService: MarksService) {
        if (localStorage.getItem("AddMark") != null && localStorage.getItem("AddMark") != undefined)
            this.student = JSON.parse(localStorage.getItem("AddMark"));
        this.getSubjects();
    }
    refresh() {
        this.studentService.LoadData().then(data => {
            this.students = data;
        })
    }
    getSubjects() {
        this.marksService.LoadSubjects().then(data => {
            this.master = data;
        })
    }

    Add(elem) {
        console.log(elem);
        this.marksService.Add(elem).then(data => {
            this.refresh()
            this._router.navigate(['Marks']);
        })

    }
}
