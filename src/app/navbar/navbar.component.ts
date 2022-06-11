import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../search.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHatWizard = faHatWizard;
  faXmark = faXmark;
  searchResultsCount = 0;
  searchTerm: string = '';

  @ViewChild("search") searchInput: ElementRef;

  constructor(private searchService: SearchService, private router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
    this.searchService.currentSearchResultsCount$.subscribe(count => {
      this.searchResultsCount = count;
    });
  }

  onSearch(term: string) {
    console.log('searching', term);
    this.searchTerm = term;
    if (term.length > 0) {
      this.searchService.changeSearchTerm(term);
    }
  }

  cleanSearch() {
    this.searchTerm = '';
    this.searchService.changeSearchTerm('');
    this.searchInput.nativeElement.value = '';
    this.router.navigate(['/']);
  }

  showModal(content: any) {
    this.modal.open(content).result.then(() => {
      this.cleanSearch();
      console.log('closed modal');
    });
  }

  isFavoritesPage(): boolean {
    return this.router.url.includes('/favorites');
  }
}
