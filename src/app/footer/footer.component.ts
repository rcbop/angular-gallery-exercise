import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { PageService } from '../page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  currentPage: number;

  constructor(private pageService: PageService, private router: Router) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.pageService.currentPage.subscribe(page => {
      this.currentPage = page;
    });
  }

  nextPage() {
    this.pageService.changePage(this.currentPage + 1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageService.changePage(this.currentPage - 1);
    }
  }

  isDetailsPage(): boolean {
    return this.router.url.includes('/images/');
  }
}
