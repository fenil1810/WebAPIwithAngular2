"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const StudentService_1 = require("../Service/StudentService");
const router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
let StandardListComponent = class StandardListComponent {
    constructor(studentService, _router) {
        this.studentService = studentService;
        this._router = _router;
        this.standard = [];
        this.pie_ChartData = [];
        this.pie_ChartOptions = {};
        this.result = [];
        this.refresh();
        //this.calcresult();
        this.visible = false;
    }
    //public standard: StandardList = new StandardList();
    refresh() {
        this.studentService.LoadStandardData().then(data => {
            this.standard = data;
        });
    }
    calcresult(stud) {
        /*   this.studentService.calcResult(stud).then(data => {
               this.result=data;
           })*/
        this.visible = false;
        var data2 = [];
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
        this._router.navigate(['ListStudents']);
    }
};
StandardListComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [StudentService_1.StudentService, router_1.Router])
], StandardListComponent);
exports.StandardListComponent = StandardListComponent;
//# sourceMappingURL=StandardListComponent.js.map