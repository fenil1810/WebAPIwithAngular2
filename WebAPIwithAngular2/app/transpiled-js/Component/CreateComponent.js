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
let CreateComponent = class CreateComponent {
    constructor(studentService, _router) {
        // this.saveStudent(student);
        this.studentService = studentService;
        this._router = _router;
        this.students = [];
        this.errorMessage = '';
        this.student = new StudentInformation_1.StudentInformation();
    }
    refresh() {
        this.studentService.LoadData().then(data => {
            this.students = data;
        });
    }
    Add(elem) {
        console.log(elem);
        this.studentService.Add(elem).then(data => {
            this.refresh();
            this._router.navigate(['Student']);
        });
    }
};
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
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
    }),
    __metadata("design:paramtypes", [StudentService_1.StudentService, router_1.Router])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=CreateComponent.js.map