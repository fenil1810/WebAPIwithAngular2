import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Mark } from '../Models/Mark';
import { Observable, Subject } from 'rxjs/Rx';
import { Section } from '../Models/Section';
import { MarkChart } from '../Models/MarkChart';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { StudentInformation } from '../Models/StudentInformation';
import { GoogleChartComponent } from './GoogleChartComponent';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'stuinfo',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    templateUrl:'../app/HtmlPage1.html',

})
export class ListStudentsComponent{
    section: Section[];
    public pie_ChartData: any = [];
    public pie_ChartOptions: any = {};
    public bar_ChartData: any = [];
    public bar_ChartOptions: any = {};
    visible: boolean;
    location: Location;
    constructor(private studentService: StudentService, private _router: Router, location: Location) {
//        this.getChartdata();
        this.visible = false;
        this.refresh();
        this.location = location;
      
        // this.getData();
    }
 
    public getChartdata(stud) {
        var list: any = [];
        this.visible = false;


        var data3: any = [];
        this.bar_ChartData = [['Subject', 'Marks', { role: 'style' }]];
        this.studentService.getbarChart(stud).then(data4 => {
            for (var i = 0; i < data4.length; i++) {
                data3 = [];
                if (data4[i].MarkofSubject > 40)
                    data3 = [data4[i].SubjectName, data4[i].MarkofSubject, 'green'];
                else
                    data3 = [data4[i].SubjectName, data4[i].MarkofSubject, 'red'];

                    this.bar_ChartData.push(data3);
            }
            this.bar_ChartOptions = {
                title: 'Marks',
                width: 500,
                height: 500,
                colors:['green'],
                
            };
            this.visible = true;
        }); 
        

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
