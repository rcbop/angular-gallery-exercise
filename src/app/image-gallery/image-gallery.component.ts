import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model'; 
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(private imgService: ImageService) {}

  ngOnInit(): void {
    console.log("ngOnInit() image gallery");
    this.imgService.requestAllImages(1, 24).subscribe(res => {
      console.log("requestAllImages() image gallery");
      console.log(res);
      for (let img of res) {
        this.images.push(img);
      }
    });
  }
}
