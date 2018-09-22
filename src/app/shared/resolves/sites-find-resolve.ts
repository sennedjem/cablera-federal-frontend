import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SitesService } from '../services/sites/sites.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class SitesFindResolver implements Resolve<Observable<Object>>{

	constructor(private sitesService: SitesService,private route: ActivatedRoute){}

	resolve(route: ActivatedRouteSnapshot): Observable<Object>{
		return this.sitesService.read((route.paramMap.get('id')));
	}
}
