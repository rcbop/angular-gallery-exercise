import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model';
import { ImageService } from '../image.service';
import Utils from '../utils';
import { PageService } from '../page.service';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})


export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];
  pageSize = 24;
  currentPage = 1;
  searchTerm = '';

  constructor(private router: Router, private imgService: ImageService, private pageService: PageService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.pageService.changePage(this.currentPage);
    
    this.loadImages();
    this.listenToOnPageChanged();
    this.listenToOnSearchSubmited();
    console.log('image gallery component initialized');
  }

  loadImages() {
    console.log('loading images:', this.currentPage, this.pageSize, this.searchTerm);
    if (this.searchTerm.length > 0) {
      this.imgService.requestSearchImage(this.searchTerm, this.currentPage, this.pageSize).subscribe(res => {
        if (res.results.length == 0) {
          console.log('no images found');
          this.router.navigate(['/error']);
        }
        
        this.images = [];
        this.normalizeImages(res.results);
      });
    } else {
      this.imgService.getImages(this.currentPage, this.pageSize).subscribe(res => {
        this.images = [];
        this.normalizeImages(res);
      });
    }
  }

  normalizeImages(res: any) {
    for (let img of res) {
      this.images.push(Utils.fixMissingFields(img));
    }
  }

  listenToOnPageChanged() {
    this.pageService.currentPage.subscribe(page => {
      console.log('page changed', page);
      this.currentPage = page;
      this.images = [];
      this.loadImages();
    });
  }

  listenToOnSearchSubmited() {
    this.searchService.currentSearchTerm$.subscribe(searchTerm => {
      console.log('search term changed', searchTerm);
      this.searchTerm = searchTerm;
      this.loadImages();
    });
  }

}
