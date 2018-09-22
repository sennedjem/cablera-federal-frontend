import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { SitesService } from '../../shared/services/sites/sites.service';
import { ConfigService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sites-edit',
  templateUrl: './sites-edit.component.html',
  styleUrls: ['./sites-edit.component.scss'],
  animations: [routerTransition()],
  providers: [ConfigService]
})
export class SitesEditComponent implements OnInit {

  site = {};
  types;

  constructor(
    private route: ActivatedRoute,
    private sitesService: SitesService
  ) {}

  ngOnInit() {
      this.route.data.subscribe((data) => this.types = data.types);
      console.log(this.types)
  }

  searchSite(sitesForm: NgForm){ 
      this.sitesService.searchSite(this.site).subscribe(
          data => alert('Se han obtenido los ultimos posteos de ' + data['url'] + ' exitosamente')
      );
  }

}