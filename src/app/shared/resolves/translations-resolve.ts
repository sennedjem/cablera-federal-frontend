import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslationsResolve implements Resolve<Observable<Object>>{

	constructor(private translate: TranslateService){}

	resolve(route: ActivatedRouteSnapshot): Observable<Object>{
        var language = localStorage.getItem('language');
        var currentLanguage = language? language: 'en'

        switch (currentLanguage){
            case 'es':
                return this.translate.getTranslation('es');
            case 'en':
                return this.translate.getTranslation('en'); 
        }
	}
}
