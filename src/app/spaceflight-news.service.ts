import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class SpaceflightNewsService {

  private apiUrl = 'https://api.spaceflightnewsapi.net/v3/articles';

  constructor(private http: HttpClient) { }

  getSpaceflightNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getNewsArticleById(id: string): Observable<any> {
    const articleUrl = `${this.apiUrl}/${id}`;
    return this.http.get<any>(articleUrl);
  }
}
