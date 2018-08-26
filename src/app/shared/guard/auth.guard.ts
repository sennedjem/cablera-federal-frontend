import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {
        var isLogged = localStorage.getItem('token') != null;

        if (!isLogged)
            this.router.navigate(['/login']);
        
        return isLogged;
    }
}
