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

    translations;

    constructor(
        private route: ActivatedRoute,
        private mediaService: MediaService
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.data = data.mediaResolve.data,
            this.translations = data.translations
        });

        /* Para la tabla */
        this.columns = [
            { 
                key: 'name', 
                title: this.translations['media.name'],
                placeholder: this.translations['media.filterByName']
            },
            { 
                key: 'district', 
                title: this.translations['media.district'], 
                placeholder: this.translations['media.filterByDistrict']
            }
        ];
        
        this.configuration = ConfigService.config;
    }

    delete(id){
        this.mediaService.delete(id).subscribe(
            (data) => console.log('Se eliminado el medio exitosamente'),
            error => console.log(error)
        );
        
        this.data = this.data.filter(function(media) {
            return media.id != id;
          });
    }
}