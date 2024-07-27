import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.interface';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  @Input() imageURLs: Image[];
  currentImageIndex: number;
  isImgFullScreen: boolean = false;

  constructor() {
    this.currentImageIndex = 0;
  }

  ngOnInit(): void {
  }

  nextImage(): void {
    if (this.currentImageIndex === this.imageURLs.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
  }

  previousImage() {
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.imageURLs.length - 1;
    } else {
      this.currentImageIndex--;
    }
  }

  onNext(): void {
    if (this.imageURLs.length === 0) {
      return;
    }
    this.nextImage();
  }

  onPrevious(): void {
    if (this.imageURLs.length === 0) {
      return;
    }
    this.previousImage();
  }

  onClickDot(index: number) {
    this.currentImageIndex = index;
  }

  enableFullScreen() {
    this.isImgFullScreen = true;
  }

  disableFullScreen() {
    this.isImgFullScreen = false;
  }
}
