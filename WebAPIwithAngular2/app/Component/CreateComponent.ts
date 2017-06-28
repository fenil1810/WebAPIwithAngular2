import { Component} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute,Router } from '@angular/router';
import { StudentInformation } from '../Models/StudentInformation';
import { StudentInfoComponent } from './StudentInfoComponent';
import 'rxjs/add/operator/switchMap';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
    selector: 'create',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    template: ` <div>
        <table class="table">
         	<tr>
					Student Name:	    
				<input type="text" [(ngModel)]="student.StudentName" name="studentname"  placeholder="Name" maxlength="20" required> 
                <br>
			
		</tr>
	    <tr>
					Gender:	    
				<input type="text" [(ngModel)]="student.Gender" name="gender"  placeholder="Gender" maxlength="1" required>
                <br>
			
		</tr>
    	<tr>
					Standard:	    
				<input type="number" min=0 max=12 [(ngModel)]="student.Standard" name="standard"  placeholder="Standard"  required><br>
			
		</tr>	
    	<tr>
					Section:	    
				<input type="text" [(ngModel)]="student.Section" name="section"  placeholder="Section" maxlength="1" required><br>
			
		</tr>
    </table>
    <button (click)="Add(student)">Create</button>
    </div>`,

})
export class CreateComponent {
    
    public resmessage: string;
    private students: StudentInformation[] = [];
    private errorMessage: any = '';
    public student: StudentInformation = new StudentInformation();
    location: Location
    constructor(private studentService: StudentService, private _router: Router, location: Location) {
        // this.saveStudent(student);
        this.location = location;     
    }
    refresh() {
        this.studentService.LoadData().then(data => {
            this.students = data;
        })
    }

    Add(elem) {
        console.log(elem);
        this.studentService.Add(elem).then(data => {
            this.refresh()
            this._router.navigate(['Student']);
        })
        
    }
    /*
    saveStudent(student) {
        //debugger
        this.studentService.saveStudent(student)
            .subscribe(response => {
         //       this.Stud;
               
            });
    }*/
}
