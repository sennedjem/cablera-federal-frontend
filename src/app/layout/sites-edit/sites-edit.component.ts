import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { SitesService } from '../../shared/services/sites/sites.service';
import { ConfigService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { Site } from '../../shared/models';

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

  site: Site;
  types: [string];
  isNew: boolean;

  constructor(
    private route: ActivatedRoute,
    private sitesService: SitesService,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.types = data.types,
      this.isNew = data.site == undefined,
      this.sites = data.sites.data;
      this.site = !this.isNew? data.site: {"url":"","type":"","media_id":1,"user_id":JSON.parse(localStorage.getItem('user')).id};
    });
  }

  updateSite(sitesForm: NgForm){
    if(this.isNew)
      this.sitesService.create(this.site).subscribe(
        data => alert('Se guardado el sitio exitosamente')
      );
    else
      this.sitesService.update(this.site['id'],this.site).subscribe(
        data => alert('Se han guardado los cambios exitosamente')
      );

    this._location.back();
  }

  printform(sitesForm: NgForm){
    console.log(sitesForm)
  }

  urlAndTypeAreNotUnique(){
    return (this.site.url != "") && (this.site.type != "") && this.sites.some(this.sameUrlAndType,this);
  }

  sameUrlAndType(element, index, array){
    return ((element.id!=this.site.id) && (element.url == this.site.url) && (element.type == this.site.type));
  }

  return(){
    this.router.navigate(['/sites']);
  }
}