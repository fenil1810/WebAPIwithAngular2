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
const StudentInformation_1 = require("../Models/StudentInformation");
require("rxjs/add/operator/switchMap");
let ListStudentsComponent = class ListStudentsComponent {
    constructor(studentService, _router) {
        this.studentService = studentService;
        this._router = _router;
        this.pie_ChartData = [];
        this.pie_ChartOptions = {};
        this.bar_ChartData = [];
        this.bar_ChartOptions = {};
        this.students = [];
        this.student = new StudentInformation_1.StudentInformation();
        this.errorMessage = '';
        this.marks = [];
        //        this.getChartdata();
        this.visible = false;
        this.refresh();
        // this.getData();
    }
    getChartdata(stud) {
        var list = [];
        this.visible = false;
        var data3 = [];
        this.bar_ChartData = [['Subject', 'Marks']];
        this.studentService.getbarChart(stud).then(data4 => {
            for (var i = 0; i < data4.length; i++) {
                data3 = [];
                data3 = [data4[i].SubjectName, data4[i].MarkofSubject];
                this.bar_ChartData.push(data3);
            }
            this.bar_ChartOptions = {
                title: 'Marks',
                width: 500,
                height: 500
                // color:'green'
            };
            this.visible = true;
        });
    }
    getMarks(stud) {
        localStorage.setItem("CurrentStudentMarks", JSON.stringify(stud));
        this._router.navigate(['Marks']);
    }
    AddMarks(stud) {
        localStorage.setItem("AddMark", JSON.stringify(stud));
        this._router.navigate(['CreateMarks']);
    }
    NavigateToCreate() {
        this._router.navigate(['Create']);
    }
    NavigateToStandardList() {
        this._router.navigate(['StandardList']);
    }
    getUpdate(stud) {
        //alert('in');
        localStorage.setItem("CurrentStudent", JSON.stringify(stud));
        this._router.navigate(['Update']);
    }
    getDelete(id) {
        this.studentService.Delete(id).then(data => {
            this.refresh();
        });
    }
    refresh() {
        if (localStorage.getItem("CurrentStandard") != null && localStorage.getItem("CurrentStandard") != undefined)
            this.student = JSON.parse(localStorage.getItem("CurrentStandard"));
        this.studentService.LoadList(this.student).then(data => {
            this.students = data;
        });
    }
};
ListStudentsComponent = __decorate([
    core_1.Component({
        selector: 'stuinfo',
        templateUrl: '../app/HtmlPage1.html',
    }),
    __metadata("design:paramtypes", [StudentService_1.StudentService, router_1.Router])
], ListStudentsComponent);
exports.ListStudentsComponent = ListStudentsComponent;
//# sourceMappingURL=ListStudentsComponent.js.map