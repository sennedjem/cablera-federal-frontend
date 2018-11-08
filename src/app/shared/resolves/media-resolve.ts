import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MediaService } from '../services/media/media.service';

@Injectable()
export class MediaResolve implements Resolve<Observable<Object>>{

	constructor(private mediaService: MediaService){}

	resolve(route: ActivatedRouteSnapshot): Observable<Object>{
		return this.mediaService.list()
	}
}
