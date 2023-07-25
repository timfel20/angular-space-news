import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from '../spaceflight-news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsArticles: any[] = [];

  constructor( private spaceflightNewsService: SpaceflightNewsService ) { }

  ngOnInit(): void {
    this.fetchNewsArticles();
  }

  fetchNewsArticles() {
    this.spaceflightNewsService.getSpaceflightNews()
      .subscribe(
        (data) => {
          this.newsArticles = data;
        },
        (error) => {
          console.error('Error fetching news articles:', error);
        }
      );
  }
}
