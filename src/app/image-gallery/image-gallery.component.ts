import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model'; 
import { ImageService } from '../image.service';
import Utils from '../utils';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})


export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];
  pageSize = 24;
  firstPage = 1;

  constructor(private imgService: ImageService) {}

  ngOnInit(): void {
    this.imgService.getImages(this.firstPage, this.pageSize).subscribe(res => {
      for (let img of res) {
        this.images.push(Utils.fixMissingFields(img));
      }
    });
  }


}
