import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { MediaService } from '../../shared/services/media/media.service';
import { ConfigService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { Media } from '../../shared/models';

@Component({
  selector: 'app-media-edit',
  templateUrl: './media-edit.component.html',
  styleUrls: ['./media-edit.component.scss'],
  animations: [routerTransition()],
  providers: [
    ConfigService
  ]
})
export class MediaEditComponent implements OnInit {

  media: Media;
  isNew: boolean;
  showPopup: boolean = false;
  message: String;
  popupType: String;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.isNew = data.media == undefined,
      this.media = !this.isNew? data.media: {"name":"","district":""};
    });
  }

  updateMedia(mediaForm: NgForm){
    if(this.isNew)
      this.mediaService.create(this.media).subscribe(
        (data) => {
          this.showSuccess();
          this._location.back();
        },
        (err) => {
          this.showError(err)
        }
      );
    else
      this.mediaService.update(this.media['id'],this.media).subscribe(
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
    this.message = "Media saved";
    this.popupType = 'success';
  }


  return(){
    this.router.navigate(['/media']);
  }
}