import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SitesService } from '../../shared/services/sites/sites.service';
import { ConfigService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sites',
    templateUrl: './sites.component.html',
    styleUrls: ['./sites.component.scss'],
    animations: [routerTransition()],
    providers: [ConfigService]
})
export class SitesComponent implements OnInit {
    
    /* Para la tabla */
    configuration;
    data;
    columns;

    translations

    constructor(
        private route: ActivatedRoute,
        private sitesService: SitesService
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.data = data.sitesResolve.data,
            this.translations = data.translations
        });

        /* Para la tabla */
        this.columns = [
            { 
                key: 'type', 
                title: this.translations['sites.type'], 
                placeholder: this.translations['sites.filterByType']
            },
            { 
                key: 'url', 
                title: this.translations['sites.url'], 
                placeholder: this.translations['sites.filterByUrl']
            },
            { 
                key: 'created_at', 
                title: this.translations['sites.creationDate'], 
                placeholder: this.translations['sites.filterByCreationDate'] 
            }
        ];
        
        this.configuration = ConfigService.config;
    }

    delete(id){
        this.sitesService.delete(id).subscribe(
            (data) => console.log('Se eliminado el sitio exitosamente'),
            error => console.log(error)
        );
        
        this.data = this.data.filter(function(site) {
            return site.id != id;
          });
    }
}