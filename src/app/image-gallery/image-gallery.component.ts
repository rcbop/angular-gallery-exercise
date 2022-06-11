import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model';
import { ImageService } from '../image.service';
import Utils from '../utils';
import { PageService } from '../page.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})


export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];
  pageSize = 24;
  currentPage = 1;

  constructor(private imgService: ImageService, private pageService: PageService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.pageService.changePage(this.currentPage);

    this.loadImages();
    this.listenToOnPageChanged();
    this.listenToOnSearchSubmited();
  }

  loadImages() {
    this.imgService.getImages(this.currentPage, this.pageSize).subscribe(res => {
      this.normalizeImages(res);
    });
  }

  normalizeImages(res: any) {
    console.log(res);
    for (let img of res) {
      this.images.push(Utils.fixMissingFields(img));
    }
  }

  listenToOnPageChanged() {
    this.pageService.currentPage.subscribe(page => {
      this.currentPage = page;
      this.imgService.getImages(this.currentPage, this.pageSize).subscribe(res => {
        this.images = [];
        this.normalizeImages(res);
      });
    });
  }

  listenToOnSearchSubmited() {
    this.searchService.currentSearchTerm$.subscribe(searchTerm => {
      console.log(searchTerm);
      if (searchTerm.length == 0) {
        this.loadImages();
        return;
      }

      this.currentPage = 1;
      this.imgService.requestSearchImage(searchTerm, this.currentPage, this.pageSize).subscribe(res => {
        this.images = [];
        this.normalizeImages(res.results);
        this.pageService.changePage(this.currentPage);
      });
    });
  }

}
