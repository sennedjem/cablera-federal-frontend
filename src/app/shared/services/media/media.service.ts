import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService extends GenericService<Object>{

  constructor(
    protected http: HttpClient
  ) {
    super(http,"media");
  }

}
