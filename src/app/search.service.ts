import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private currentSearchTerm = new BehaviorSubject<string>('');
  public currentSearchTerm$ = this.currentSearchTerm.asObservable();

  private currentSearchResultsCount = new BehaviorSubject<number>(0);
  public currentSearchResultsCount$ = this.currentSearchResultsCount.asObservable();

  constructor() { }

  changeSearchTerm(searchTerm: string) {
    this.currentSearchTerm.next(searchTerm);
  }

  changeSearchResultsCount(searchResults: number) {
    this.currentSearchResultsCount.next(searchResults);
  }
}
