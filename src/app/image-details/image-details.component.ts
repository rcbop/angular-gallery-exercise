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
  favoriteIcon: any = faPlus;
  isFavorite: boolean = false;

  constructor(private router: Router, private imgService: ImageService) { 
    this.image = null;
    this.year = '';
  }


  ngOnInit(): void {
    let imgID = this.getImageIDFromRoutePath();
    this.imgService.requestGetImage(imgID).subscribe(res => {
      this.image = Utils.fixMissingFields(res);
      this.year = Utils.getYearFromDate(this.image.created_at);

      this.isFavorite = this.imgService.isFavorite(this.image)
      this.changeFavoriteIcon();
    });
  }

  changeFavoriteIcon() {
    this.isFavorite ? this.favoriteIcon = this.faMinus : this.favoriteIcon = this.faPlus;
  }

  getImageIDFromRoutePath(): string {
    return this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
  }

  addFavorite(image: any) {
    this.imgService.addFavorite(image);
    this.favoriteIcon = this.faMinus;
  }

  removeFavorite(image: any) {
    this.imgService.removeFavorite(image);
    this.favoriteIcon = this.faPlus;
  }
}