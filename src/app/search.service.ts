import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private currentSearchTerm = new BehaviorSubject<string>('');
  public currentSearchTerm$ = this.currentSearchTerm.asObservable();

  constructor() { }

  changeSearchTerm(searchTerm: string) {
    this.currentSearchTerm.next(searchTerm);
  }
}
