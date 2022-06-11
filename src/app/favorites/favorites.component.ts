import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Image[] = [];

  constructor(private imgService: ImageService) { }

  ngOnInit(): void {
    this.favorites = this.imgService.getAllFavorites();
    console.log(this.favorites);
  }

}
