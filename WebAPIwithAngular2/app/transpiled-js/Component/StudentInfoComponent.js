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
let StudentInfoComponent = class StudentInfoComponent {
    constructor(studentService, _router) {
        this.studentService = studentService;
        this._router = _router;
        this.students = [];
        this.errorMessage = '';
        this.marks = [];
        this.refresh();
        // this.getData();
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
        this.studentService.LoadData().then(data => {
            this.students = data;
        });
    }
};
StudentInfoComponent = __decorate([
    core_1.Component({
        selector: 'stuinfo',
        template: ` <div>
        <a (click)="NavigateToCreate()">Create</a>
        <table class="table">
            <tr>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Standard</th>
                <th>Section</th>
            </tr>
            <tr *ngFor="let stu of students">
                <td>{{stu.StudentName}}</td>
                <td>{{stu.Gender}}</td>
                <td>{{stu.Standard}}</td>
                <td>{{stu.Section}}</td>
                <td><a (click)="getUpdate(stu)">Update</a></td>
                <td><a (click)="getDelete(stu.StudentId)">Delete</a></td>
                <td><a (click)="getMarks(stu)">View Marks</a></td>
                <td><a (click)="AddMarks(stu)">Add Marks</a></td>
            </tr>
        </table>
    </div>`,
    }),
    __metadata("design:paramtypes", [StudentService_1.StudentService, router_1.Router])
], StudentInfoComponent);
exports.StudentInfoComponent = StudentInfoComponent;
//# sourceMappingURL=StudentInfoComponent.js.map