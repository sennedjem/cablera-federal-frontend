import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MediaService } from '../../shared/services/media/media.service';
import { ConfigService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
    animations: [routerTransition()],
    providers: [ConfigService]
})
export class MediaComponent implements OnInit {
    
    /* Para la tabla */
    configuration;
    data;
    columns;

    constructor(
        private route: ActivatedRoute,
        private mediaService: MediaService
    ) {}

    ngOnInit() {
        this.route.data.subscribe((media) => this.data = media.mediaResolve.data);

        /* Para la tabla */
        this.columns = [
            { key: 'name', title: 'Name', placeholder: 'Filtrar por nombre'},
            { key: 'district', title: 'District', placeholder: 'Filtrar por distrito' }
        ];
        
        this.configuration = ConfigService.config;
    }

    delete(id){
        this.mediaService.delete(id).subscribe(
            (data) => alert('Se eliminado el medio exitosamente'),
            error => console.log(error)
        );
        
        this.data = this.data.filter(function(media) {
            return media.id != id;
          });
    }
}