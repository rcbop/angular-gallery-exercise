import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Utils from '../utils';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: any;
  year: string;
  faPlus: any = faPlus;
  faMinus: any = faMinus;
  isFavorite: boolean = false;
  strTags: string;

  constructor(private router: Router, private imgService: ImageService) { 
    this.image = null;
    this.year = '';
    this.strTags = '';
  }


  ngOnInit(): void {
    let imgID = this.getImageIDFromRoutePath();
    this.imgService.requestGetImage(imgID).subscribe(res => {
      this.image = Utils.fixMissingFields(res);
      this.year = Utils.getYearFromDate(this.image.created_at);
      console.log('tags:', this.image.tags.length);
      for (let i in res.tags) {
        this.strTags = this.strTags + '#' + res.tags[i].title + ' ';
      }
      if (res.tags.length == 0) {
        this.strTags = 'No tags';
      }

      this.isFavorite = this.imgService.isFavorite(this.image)
    });
  }

  getImageIDFromRoutePath(): string {
    return this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
  }

  addFavorite(image: any) {
    this.isFavorite = true;
    this.imgService.addFavorite(image);
  }

  removeFavorite(image: any) {
    this.isFavorite = false;
    this.imgService.removeFavorite(image);
  }
}
