import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SitesService } from '../services';

@Injectable()
export class TypesResolve implements Resolve<Observable<Object>>{

	constructor(private sitesService: SitesService){}

	resolve(route: ActivatedRouteSnapshot): Observable<Object>{
		return this.sitesService.searchTypes()
        
	}
}
