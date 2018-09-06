import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';

import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../shared/models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user: User = new User();
    failLogin: boolean = false;
    message: String;

    constructor(public router: Router, public auth: AuthService) {}

    ngOnInit() {}

    onLoggedin(form: NgForm) {
        this.auth.handleAuthentication(this.user).subscribe(
            data => this.setTokenAndNavigate(data.token),
            error => this.setFailLogin(error)
        );
    }

    setTokenAndNavigate(token:string) {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
    }

    setFailLogin(response){
        this.failLogin = true;
        this.message = response.error.message;
        console.log(response);
    }
}
