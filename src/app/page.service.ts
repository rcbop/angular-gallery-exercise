import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private currentPageSource = new BehaviorSubject<number>(1);
  currentPage = this.currentPageSource.asObservable();

  defaultPageCount = 999999;

  private totalPageSource = new BehaviorSubject<number>(this.defaultPageCount);
  currentTotalPages = this.totalPageSource.asObservable();
  
  constructor() { }
  
  changePage(page: number) {
    this.currentPageSource.next(page);
  }

  changeTotalPages(totalPage: number) {
    this.totalPageSource.next(totalPage);
  }

  resetTotalPages() {
    this.totalPageSource.next(this.defaultPageCount);
  }
}
