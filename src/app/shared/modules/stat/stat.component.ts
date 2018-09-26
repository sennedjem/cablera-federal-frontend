import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() icon: string;
    @Input() title: string;
    @Input() text: string;
    @Input() url: string;

    constructor() {}

    ngOnInit() {}

    hacerAlgo(){
        window.open('https://' + this.url);
    }
}
