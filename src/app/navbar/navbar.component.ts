import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../search.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHatWizard = faHatWizard;
  faXmark = faXmark;
  @ViewChild("search") searchInput: ElementRef;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearch(term: string) {
    console.log('searching', term);
    if (term.length > 0) {
      this.searchService.changeSearchTerm(term);
    }
  }

  cleanSearch() {
    this.searchService.changeSearchTerm('');
    this.searchInput.nativeElement.value = '';
  }
}
