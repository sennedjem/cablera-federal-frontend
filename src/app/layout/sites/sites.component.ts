import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-sites',
    templateUrl: './sites.component.html',
    styleUrls: ['./sites.component.scss'],
    animations: [routerTransition()]
})
export class SitesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
