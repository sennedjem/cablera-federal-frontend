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

    constructor(
        private route: ActivatedRoute,
        private sitesService: SitesService
    ) {}

    ngOnInit() {
        this.route.data.subscribe((sites) => this.data = sites.sitesResolve.data);

        /* Para la tabla */
        this.columns = [
            { key: 'type', title: 'Type', placeholder: 'Filtrar por tipo'},
            { key: 'url', title: 'Url', placeholder: 'Filtrar por url' },
            { key: 'created_at', title: 'Created_at', placeholder: 'Creado en...' }
        ];
        
        this.configuration = ConfigService.config;
    }

    delete(id){
        this.sitesService.delete(id).subscribe(
            (data) => alert('Se eliminado el sitio exitosamente'),
            error => console.log(error)
        );
        
        this.data = this.data.filter(function(site) {
            return site.id != id;
          });
    }
}