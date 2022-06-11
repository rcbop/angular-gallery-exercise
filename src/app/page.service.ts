import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private currentPageSource = new BehaviorSubject<number>(1);
  currentPage = this.currentPageSource.asObservable();

  constructor() { }

  changePage(page: number) {
    this.currentPageSource.next(page);
  }
}
