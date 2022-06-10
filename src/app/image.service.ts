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

  constructor(private httpClient: HttpClient) {}

  private buildListImagesURL(page: number, perPage: number) {
    return `${this.unsplashAPIBaseURL}/photos?client_id=${environment.unsplashAccessKey}&page=${page}&per_page=${perPage}`;
  }

  private buildImageURL(imageId: string) {
    return `${this.unsplashAPIBaseURL}/photos/${imageId}?client_id=${environment.unsplashAccessKey}`;
  }

  private buildImageSearchURL(query: string, page: number, perPage: number) {
    return `${this.unsplashAPIBaseURL}/search/photos?client_id=${environment.unsplashAccessKey}&page=${page}&per_page=${perPage}&query=${query}`;
  }

  requestAllImages(page: number, perPage: number): Observable<Image[]> {
    return this.httpClient.get<Image[]>(this.buildListImagesURL(page, perPage));
  }

  requestSearchImage(query: string, page: number, perPage: number): Observable<any> {
    return this.httpClient.get<Image[]>(this.buildImageSearchURL(query, page, perPage));
  }

  requestGetImage(imageId: string): Observable<Image[]> {
    return this.httpClient.get<Image[]>(this.buildImageURL(imageId));
  }
}