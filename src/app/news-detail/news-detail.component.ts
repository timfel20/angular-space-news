import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceflightNewsService } from '../spaceflight-news.service';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  newsArticle: any;

  constructor(  
    private route: ActivatedRoute,
    private spaceflightNewsService: SpaceflightNewsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const newsId = params['id'];
      this.fetchNewsArticle(newsId);
    });
  }

  fetchNewsArticle(newsId: string) {
    this.spaceflightNewsService.getNewsArticleById(newsId)
      .subscribe(
        (data) => {
          this.newsArticle = data;
        },
        (error) => {
          console.error('Error fetching news article:', error);
        }
      );
  }

}
