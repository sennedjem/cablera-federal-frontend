import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { SitesService } from '../../shared/services/sites/sites.service';
import { ConfigService } from '../../shared/services';

@Component({
    selector: 'app-sites',
    templateUrl: './sites.component.html',
    styleUrls: ['./sites.component.scss'],
    animations: [routerTransition()],
    providers: [ConfigService]
})
export class SitesComponent implements OnInit {

    site = {};
    types = [];
    
    /* Para la tabla */
    configuration;
    data;
    columns;

    constructor(private sitesService: SitesService) {}

    ngOnInit() {
        this.sitesService.searchTypes().subscribe(
            data => this.types = data
        );

        /* Para la tabla */
        this.columns = [
            { key: 'phone', title: 'Phone' },
            { key: 'age', title: 'Age' },
            { key: 'company', title: 'Company' },
            { key: 'name', title: 'Name' },
            { key: 'isActive', title: 'STATUS' },
        ];
        
        this.configuration = ConfigService.config;
        this.data = [{
            phone: '+1 (934) 551-2224',
            age: 20,
            address: { street: 'North street', number: 12 },
            company: 'ZILLANET',
            name: 'Valentine Webb',
            isActive: false,
        }, {
            phone: '+1 (948) 460-3627',
            age: 31,
            address: { street: 'South street', number: 12 },
            company: 'KNOWLYSIS',
            name: 'Heidi Duncan',
            isActive: true,
        }];
    }

    searchSite(sitesForm: NgForm){ 
        this.sitesService.searchSite(this.site).subscribe(
            data => alert('Se han obtenido los ultimos posteos de ' + data['url'] + ' exitosamente')
        );
    }
}