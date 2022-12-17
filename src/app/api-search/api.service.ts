import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  public getArticles(params: any = {}): Observable<any> {
    params.tags = 'story';
    const url = '//hn.algolia.com/api/v1/search';
    return this.http.get(url, { params });
  }
}