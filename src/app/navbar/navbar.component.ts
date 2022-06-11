import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHatWizard = faHatWizard;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearch(term: string) {
    if (term.length > 0) {
      this.searchService.changeSearchTerm(term);
    }
  }
}
