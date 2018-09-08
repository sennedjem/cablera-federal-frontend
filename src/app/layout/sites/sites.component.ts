import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { SitesService } from '../../shared/services/sites/sites.service';

@Component({
    selector: 'app-sites',
    templateUrl: './sites.component.html',
    styleUrls: ['./sites.component.scss'],
    animations: [routerTransition()]
})
export class SitesComponent implements OnInit {

    site = {};
    types = [];

    constructor(private sitesService: SitesService) {}

    ngOnInit() {
        this.sitesService.searchTypes().subscribe(
            data => this.types = data
        );
    }

    searchSite(sitesForm: NgForm){ 
        this.sitesService.searchSite(this.site).subscribe(
            data => alert('Se han obtenido los ultimos posteos de ' + data['url'] + ' exitosamente')
        );
    }
}