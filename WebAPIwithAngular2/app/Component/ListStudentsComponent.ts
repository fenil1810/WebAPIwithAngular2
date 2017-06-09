import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Mark } from '../Models/Mark';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { StudentInformation } from '../Models/StudentInformation';
import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'stuinfo',
    templateUrl: './app/HtmlPage1.html',

})
export class ListStudentsComponent {

    constructor(private studentService: StudentService, private _router: Router) {
        this.refresh();
        // this.getData();
    }
    public Id: number;
    public getMarks(stud) {

        localStorage.setItem("CurrentStudentMarks", JSON.stringify(stud));
        this._router.navigate(['Marks']);
    }
    /*
    public openDialog(stud) {
      //  $("#dialog1").dialog("open");
    }
    */
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
    public student: StudentInformation = new StudentInformation();
    private errorMessage: any = '';
    private marks: Mark[] = [];

    refresh() {
        if (localStorage.getItem("CurrentStandard") != null && localStorage.getItem("CurrentStandard") != undefined)
            this.student = JSON.parse(localStorage.getItem("CurrentStandard"));

        this.studentService.LoadList(this.student).then(data => {
            this.students = data;
        })
    }
}
