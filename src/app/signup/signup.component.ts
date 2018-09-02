import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';

import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../shared/models';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    user: User = new User();
    failSignup: boolean = false;
    message: string;

    constructor(public router: Router, public auth: AuthService) {}

    ngOnInit() {}

    onSingup(form: NgForm) {
        this.auth.signUp(this.user).subscribe(
            data => this.proccessSignup(),
            error => this.setFailSignup(error)
        );
    }

    proccessSignup() {
        this.router.navigate(['/login']);
    }

    setFailSignup(error){
        this.failSignup = true;
        this.message = "Este error viene del server, pero supongo que el "+
        "unico error que puede haber es que el usuario este registrando otro usuario"+
        " con un mail ya registrado"
        //error.info; //info de error. que dira que el usuario ya existe...
        console.log(error);
    }
}
