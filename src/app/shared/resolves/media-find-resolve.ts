import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { MediaService } from '../services/media/media.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, empty } from 'rxjs';

@Injectable()
export class MediaFindResolver implements Resolve<Observable<Object>>{

	constructor(private mediaService: MediaService,private route: ActivatedRoute){}

	resolve(route: ActivatedRouteSnapshot): Observable<Object>{
		var id = route.paramMap.get('id');
		return (id != null? this.mediaService.read(id):empty());
	}
}
