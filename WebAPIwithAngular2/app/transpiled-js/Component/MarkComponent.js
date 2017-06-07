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
const MarksService_1 = require("../Service/MarksService");
const router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
let MarkComponent = class MarkComponent {
    constructor(studentService, _router, marksService) {
        this.studentService = studentService;
        this._router = _router;
        this.marksService = marksService;
        this.students = [];
        this.errorMessage = '';
        this.marks = [];
        if (localStorage.getItem("CurrentStudentMarks") != null && localStorage.getItem("CurrentStudentMarks") != undefined)
            this.students = JSON.parse(localStorage.getItem("CurrentStudentMarks"));
        this.LoadMarks(this.students);
    }
    LoadMarks(stud) {
        this.studentService.LoadMarks(stud).then(data => {
            this.marks = data;
        });
    }
    getUpdate(stud) {
        localStorage.setItem("Mark", JSON.stringify(stud));
        this._router.navigate(['UpdateMarks']);
    }
    Create(stud) {
        localStorage.setItem("Mark", JSON.stringify(stud));
        this._router.navigate(['UpdateMarks']);
    }
    getDelete(stud) {
        this.marksService.Delete(stud.MarkID).then(data => {
            this.LoadMarks(stud);
        });
    }
};
MarkComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [StudentService_1.StudentService, router_1.Router, MarksService_1.MarksService])
], MarkComponent);
exports.MarkComponent = MarkComponent;
//# sourceMappingURL=MarkComponent.js.map