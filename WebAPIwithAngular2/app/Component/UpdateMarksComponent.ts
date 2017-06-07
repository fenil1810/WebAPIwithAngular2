import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Observable, Subject } from 'rxjs/Rx';
import { Mark } from '../Models/Mark';
import { MarksService } from '../Service/MarksService';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { StudentInformation } from '../Models/StudentInformation';
import { StudentInfoComponent } from './StudentInfoComponent';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'update',
    template: ` 
        <div>
        <table class="table">
         	<tr>
			    Marks:	    
				<input type="number" [(ngModel)]="marks.MarkofSubject" name="studentname"  placeholder="Marks" maxlength="2" required><br>			
		    </tr>
            <button (click)="getUpdate(marks)">Update</button>
         </table>
         </div> `,

})
export class UpdateMarksComponent {

    public resmessage: string;
    private errorMessage: any = '';
    public student: StudentInformation = new StudentInformation();
    public marks: Mark = new Mark();

    constructor(private marksService: MarksService, private _router: Router) {
        if (localStorage.getItem("Mark") != null && localStorage.getItem("Mark") != undefined)
            this.marks = JSON.parse(localStorage.getItem("Mark"));
    }
    getUpdate(elem) {
        console.log(elem);
        this.marksService.Update(elem).then(data => {
            //            this.refresh()
            this._router.navigate(['Marks']);
        })

    }
}
