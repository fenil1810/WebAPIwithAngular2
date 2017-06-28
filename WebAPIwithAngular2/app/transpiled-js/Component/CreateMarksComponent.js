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
const Mark_1 = require("../Models/Mark");
const router_1 = require("@angular/router");
const StudentInformation_1 = require("../Models/StudentInformation");
require("rxjs/add/operator/switchMap");
const common_1 = require("@angular/common");
let CreateMarksComponent = class CreateMarksComponent {
    constructor(studentService, _router, marksService, location) {
        this.studentService = studentService;
        this._router = _router;
        this.marksService = marksService;
        this.students = [];
        this.errorMessage = '';
        this.student = new StudentInformation_1.StudentInformation();
        this.marks = new Mark_1.Mark();
        this.master = [];
        this.location = location;
        if (localStorage.getItem("AddMark") != null && localStorage.getItem("AddMark") != undefined)
            this.student = JSON.parse(localStorage.getItem("AddMark"));
        this.getSubjects();
    }
    refresh() {
        this.studentService.LoadData().then(data => {
            this.students = data;
        });
    }
    getSubjects() {
        this.marksService.LoadSubjects().then(data => {
            this.master = data;
        });
    }
    Add(elem) {
        console.log(elem);
        this.marksService.Add(elem).then(data => {
            this.refresh();
            this._router.navigate(['Marks']);
        });
    }
};
CreateMarksComponent = __decorate([
    core_1.Component({
        selector: 'create',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
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
    }),
    __metadata("design:paramtypes", [StudentService_1.StudentService, router_1.Router, MarksService_1.MarksService, common_1.Location])
], CreateMarksComponent);
exports.CreateMarksComponent = CreateMarksComponent;
//# sourceMappingURL=CreateMarksComponent.js.map