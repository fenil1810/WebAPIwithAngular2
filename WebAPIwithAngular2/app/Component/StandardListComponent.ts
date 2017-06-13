import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Service/StudentService';
import { Mark } from '../Models/Mark';
import { ResultInfo } from '../Models/ResultInfo';
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
                <td>
                    <div id="dialog-1"></div>
                    <button id="opener" data-toggle="modal" data-target="#myModal" (click)="calcresult(std)">Result</button>
                </td>
            </tr>
        </table>
    </div>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                     <h2>  Pie Chart</h2>
                     <div id="pie_chart" *ngIf="visible" [chartData]="pie_ChartData" [chartOptions] = "pie_ChartOptions" chartType="PieChart" GoogleChart>Loading..</div>
   
                </div>
                <div class="modal-footer">
                    <div id='png'></div>
                </div>
            </div>
        </div>
    </div>
`,

})
export class StandardListComponent {
    visible: boolean;
    constructor(private studentService: StudentService, private _router: Router) {
        this.refresh();
        //this.calcresult();

        this.visible = false;

    }
    
    private standard: StandardList[] = [];
    public pie_ChartData: any = [];
    public pie_ChartOptions: any = {};
    //public standard: StandardList = new StandardList();
    refresh() {
        this.studentService.LoadStandardData().then(data => {
            this.standard = data;
        })
    }
    public result: ResultInfo[] = [];
    
    calcresult(stud) {
     /*   this.studentService.calcResult(stud).then(data => {
            this.result=data;
        })*/
        this.visible = false;
        var data2: any = [];
        this.pie_ChartData = [['Result', 'Number of Students']];
        this.studentService.calcResult(stud).then(data => {
            for (var i = 0; i < data.length; i++) {
                data2 = [];
                data2 = [data[i].Result, data[i].Total];
                this.pie_ChartData.push(data2);
            }
            this.pie_ChartOptions = {
                title: 'Result',
                width: 500,
                height: 500,
                pieSliceText: 'value-and-percentage',
                slices: {
                    0: { color: 'green' },
                    1: { color: 'red' }
                }
            };
            this.visible = true;
        });

    }
    /*public pie_ChartData =
    [['Result', 'Number of Students'], ['Pass', 4], ['Fail', 1]];
    public pie_ChartOptions = {
    title: 'Result',
    width: 500,
    height: 500
};*/

    getList(stud) {
        localStorage.setItem("CurrentStandard", JSON.stringify(stud));
        this._router.navigate(['ListStudents'])
    }
}
