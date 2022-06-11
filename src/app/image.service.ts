import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Image } from './model/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  unsplashAPIBaseURL: string = 'https://api.unsplash.com';

  favorites: Map<string, Image> = new Map<string, Image>();

  constructor(private httpClient: HttpClient) {}

  private buildListImagesURL(page: number, perPage: number) {
    return `${this.unsplashAPIBaseURL}/photos?client_id=${environment.unsplashAccessKey}&page=${page}&per_page=${perPage}&order_by=latest`;
  }

  private buildImageURL(imageId: string) {
    return `${this.unsplashAPIBaseURL}/photos/${imageId}?client_id=${environment.unsplashAccessKey}`;
  }

  private buildImageSearchURL(query: string, page: number, perPage: number) {
    return `${this.unsplashAPIBaseURL}/search/photos?client_id=${environment.unsplashAccessKey}&page=${page}&per_page=${perPage}&query=${query}`;
  }

  getImages(page: number, perPage: number, query?: string): Observable<Image[]> {
    if (query) {
      return this.requestSearchImage(query, page, perPage);
    }
    return this.requestAllImages(page, perPage);
  }

  private requestAllImages(page: number, perPage: number): Observable<Image[]> {
    return this.httpClient.get<Image[]>(this.buildListImagesURL(page, perPage));
  }

  requestSearchImage(query: string, page: number, perPage: number): Observable<any> {
    return this.httpClient.get<Image[]>(this.buildImageSearchURL(query, page, perPage));
  }

  requestGetImage(imageId: string): Observable<Image> {
    return this.httpClient.get<Image>(this.buildImageURL(imageId));
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(Array.from(this.favorites.values())));
  }

  private loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      const images = JSON.parse(favorites);
      for (let image of images) {
        this.favorites.set(image.id, image);
      }
    }
  }

  addFavorite(image: Image) {
    this.loadFavorites();
    this.favorites.set(image.id, image);
    this.saveFavorites();
  }

  removeFavorite(image: Image) {
    this.loadFavorites();
    this.favorites.delete(image.id);
    this.saveFavorites();
  }

  getAllFavoritesCount(): number {
    this.loadFavorites();
    return Array.from(this.favorites.values()).length;
  }

  getFavorites(pageNumber: number, pageSize: number): Image[] {
    this.loadFavorites();
    let allFavorites = Array.from(this.favorites.values());
    let start = (pageNumber - 1) * pageSize;
    let end = start + pageSize;
    return allFavorites.slice(start, end);
  }

  isFavorite(image: Image): boolean {
    return this.favorites.has(image.id);
  }
}