import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../../services';
import { PostsService } from '../../services/posts/posts.service'

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() icon: string;
    @Input() id: number;
    @Input() image: string;
    @Input() title: string;
    @Input() content: string;
    @Input() url: string;
    @Input() tags: Array<string>;
    @Input() publicationDate;
    @Input() site: string;
    @Input() favourite: boolean;
    @Input() esId: string;

    constructor(private dateService: DateService, private postsService: PostsService) {}

    ngOnInit() {}

    goPost(){
        window.open(this.url);
    }

    getPublishDate(){
        return this.dateService.formatDate(this.publicationDate,'dd/MM/yyyy, HH:mm');
    }

    getStarColor(){
        if(this.favourite){
            return "yellow"
        } else {
            return "grey" 
        }
    }

    changeStatus(){
        this.postsService.updateFavouriteStatus(this.esId,!this.favourite).subscribe((data) => {
            this.favourite = !this.favourite
            console.log(this);
        },(err) => {
            console.log('error');
        })
    }

    hasImage(){
        return (
            this.image 
        ) &&
        (
            this.image.startsWith("http") || 
            this.image.startsWith("https")
        ) &&
        (
            this.image.endsWith("jpg") || 
            this.image.endsWith("jpeg") || 
            this.image.endsWith("png") || 
            this.image.endsWith("gif")
        );
    }
}
