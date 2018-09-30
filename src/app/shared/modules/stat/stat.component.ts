import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../../services';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() icon: string;
    @Input() id: number;
    @Input() title: string;
    @Input() text: string;
    @Input() url: string;
    @Input() tags: Array<string>;
    @Input() publicationDate;
    @Input() site: string;

    constructor(private dateService: DateService) {}

    ngOnInit() {}

    goPost(){
        window.open(this.url);
    }

    getPublishDate(){
        return this.dateService.formatDate(this.publicationDate,'short');
    }
}
