import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    canActivate() {
        var isLogged = this.auth.isLogged();

        if (!isLogged){
            this.auth.logout();
            this.router.navigate(['/login']);
        }
        
        return isLogged;
    }
}
