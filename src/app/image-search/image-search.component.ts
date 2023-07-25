import { Component } from '@angular/core';
import { ImageSearchService } from '../image-search.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent {
  query: string = "";
  images: any[] = [];

  constructor(private imageSearchService: ImageSearchService) { }

  searchImages() {
    if (this.query) {
      this.imageSearchService.searchImages(this.query).subscribe((data: any) => {
        this.images = data.collection.items;
      });
    }
  }
}
