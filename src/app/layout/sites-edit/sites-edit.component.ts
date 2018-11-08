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
  sites: Site[];
  types: [string];
  isNew: boolean;
  showPopup: boolean = false;
  message: String;
  popupType: String;

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
        (data) => {
          this.showSuccess();
          this._location.back();
        },
        (err) => {
          this.showError(err)
        }
      );
    else
      this.sitesService.update(this.site['id'],this.site).subscribe(
        (data) => {
          this.showSuccess();
          this._location.back();
        },
        (err) => {
          this.showError(err)
        }
      );

  }

  showError(err){
    this.showPopup = true;
    this.message = err.error.message;
    this.popupType = 'danger';
  }

  showSuccess(){
    this.showPopup = true;
    this.message = "Sites saved";
    this.popupType = 'success';
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