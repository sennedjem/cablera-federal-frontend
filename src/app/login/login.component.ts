import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user: {};
    name: "";
    password: "";

    constructor(public router: Router, public auth: AuthService) {
        this.user = {name:"seba",password:"12345"}
        this.name = ""
        this.password = ""
    }

    ngOnInit() {}

    onLoggedin() {
        console.log(this.user)
        console.log(this.name)
        console.log(this.password)
        
        this.auth.handleAuthentication(this.user).subscribe(
            data => localStorage.setItem('token', data.token),
            error => console.log(error)
        );
    }
}
