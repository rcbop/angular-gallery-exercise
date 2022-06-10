import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: any;

  constructor(private router: Router, private imgService: ImageService) { 
    this.image = null;
  }


  ngOnInit(): void {
    console.log("ngOnInit() image details");
    console.log(this.router.url);
    let imgID = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    this.imgService.requestGetImage(imgID).subscribe(res => {
      console.log("requestGetImage() image details");
      this.image = res;
    });
  }
}
