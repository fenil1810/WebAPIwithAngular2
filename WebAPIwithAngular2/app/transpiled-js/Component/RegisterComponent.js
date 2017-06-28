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
const router_1 = require("@angular/router");
const AccountService_1 = require("../Service/AccountService");
require("rxjs/add/operator/switchMap");
const common_1 = require("@angular/common");
let RegisterComponent = class RegisterComponent {
    constructor(location, accountService, _router) {
        this.accountService = accountService;
        this._router = _router;
        this.user = [];
        this.location = location;
    } /*
    refresh() {
        this.accountService.LoadData().then(data => {
            this.user = data;
        })
    }*/
    Add(elem) {
        console.log(elem);
        this.accountService.Add(elem).then(data => {
            // this.refresh()
            this._router.navigate(['Student']);
        });
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: ` <div>
        <table class="table">
         	<tr>
					Email:	    
				<input type="text" [(ngModel)]="user.Email" name="Email"  placeholder="Email" maxlength="50" required> 
                <br>
			
		</tr>
	    <tr>
					Password:	    
				<input type="text" [(ngModel)]="user.Password" name="Password"  placeholder="Password" maxlength="20" required>
                <br>
			
		</tr>
    	<tr>
					Confirm Password:	    
				<input type="text"  max=20 [(ngModel)]="user.ConfirmPassword" name="ConfirmPassword"  placeholder="ConfirmPassword"  required><br>
			
		</tr>	
    </table>
    <button (click)="Add(user)">Register</button>
    </div>`,
    }),
    __metadata("design:paramtypes", [common_1.Location, AccountService_1.AccountService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=RegisterComponent.js.map