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

  private requestAllImages(page: number, perPage: number): Observable<any> {
    let url = this.buildListImagesURL(page, perPage);
    return this.httpClient.get(url);
  }

  private requestSearchImage(query: string, page: number, perPage: number): Observable<any> {
    let url = this.buildImageSearchURL(query, page, perPage);
    return this.httpClient.get(url);
  }

  private requestGetImage(imageId: string): Observable<any> {
    let url = this.buildImageURL(imageId)
    return this.httpClient.get(url);
  }

  async listAllImages(page: number, perPage: number) {
    const response = this.requestAllImages(page, perPage);
    return 
  }

  searchImage(query: string, page: number, perPage: number): Observable<any> {
    return this.requestSearchImage(query, page, perPage);
  }

  getOneImage(imageId: string): Observable<any> {
    return this.requestGetImage(imageId);
  }

  parseListImageRow(responseDataRow: any): Image { 
    return new Image(
      responseDataRow.id,
      responseDataRow.created_at,
      responseDataRow.description,
      responseDataRow.likes,
      responseDataRow.urls.regular,
      responseDataRow.user.name,
      0,
      [],
    );
  }
}