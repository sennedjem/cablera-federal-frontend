import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../shared/models';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user: User = new User();
    gato = "";

    constructor(public router: Router, public auth: AuthService) {}

    ngOnInit() {}

    onLoggedin(form: NgForm) {
        console.log(this.user);
        //return;
        
        this.auth.handleAuthentication(this.user).subscribe(
            data => localStorage.setItem('token', data.token),
            error => console.log(error)
        );
    }
}
