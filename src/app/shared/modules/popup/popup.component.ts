import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  //Disponible alerts = success, info, warning, danger
  @Input()
  public type: string;
  @Input()
  public message: string;

  public alert: IAlert;

  constructor() { 
    this.alert = {
      type: this.type,
      message: this.message,
    }
  }

  ngOnInit() {
  }

  public closeAlert(alert: IAlert) {
    this.alert = null;
  }
}

export interface IAlert {
  type: string;
  message: string;
}