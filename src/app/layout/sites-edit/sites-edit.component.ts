import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { SitesService } from '../../shared/services/sites/sites.service';
import { ConfigService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites-edit',
  templateUrl: './sites-edit.component.html',
  styleUrls: ['./sites-edit.component.scss'],
  animations: [routerTransition()],
  providers: [
    ConfigService
  ]
})
export class SitesEditComponent implements OnInit {

  site = {};
  types;

  constructor(
    private route: ActivatedRoute,
    private sitesService: SitesService,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.types = data.types,
      this.site = data.site
    });
  }

  updateSite(sitesForm: NgForm){ 
      this.sitesService.update(this.site['id'],this.site).subscribe(
          data => alert('Se han guardado los cambios exitosamente')
      );
      this._location.back();
  }

  return(){
    this.router.navigate(['/sites']);
  }
}