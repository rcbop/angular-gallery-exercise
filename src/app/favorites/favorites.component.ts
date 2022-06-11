import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../model/image.model';
import { PageService } from '../page.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Image[] = [];
  favoritesCount: number = 0;
  firstPage: number = 1;
  pageSize: number = 12;

  constructor(private imgService: ImageService, private pageService: PageService) { }

  ngOnInit(): void {
    this.favoritesCount = this.imgService.getAllFavoritesCount();
    this.favorites = this.imgService.getFavorites(this.firstPage, this.pageSize);
    this.pageService.changePage(this.firstPage);
    this.pageService.currentPage.subscribe(page => {
      this.favorites = this.imgService.getFavorites(page, this.pageSize);
    });
    console.log('total favorites:', this.favoritesCount);
    this.pageService.changeTotalPages(Math.ceil(this.favoritesCount / this.pageSize));
  }

}
