import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { RegisterUser } from '../Models/RegisterUser';
import { AccountService } from '../Service/AccountService';
import 'rxjs/add/operator/switchMap';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
    selector: 'register',
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
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

})
export class RegisterComponent {
    private user: RegisterUser[] = [];
    location: Location;
    constructor(location: Location, private accountService: AccountService, private _router: Router) {
        this.location = location;
    }/*
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
        })

    }
}
