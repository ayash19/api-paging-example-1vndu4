import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PageEvent } from '@angular/material';

import { ApiService } from '../api.service';

@Component({
  selector: 'api-search',
  templateUrl: './api-search-page.component.html'
})
export class ApiSearchPageComponent implements OnInit {
  public searchInput = new FormControl();
  public articles: any[] = [];
  public totalHits: number;
  public page: number = 0;
  public searchTerm: string;
  
  constructor(
    private api: ApiService,
    private http: HttpClient
  ) {}
  
  public ngOnInit() {
    this.getArticles();
    this.searchInput.valueChanges
      .pipe(
        debounceTime(1_000),
        distinctUntilChanged()
      ).subscribe((searchTerm) => {
        this.page = 0;
        this.searchTerm = searchTerm;
        this.getArticles(searchTerm);
      })
  }

  public getArticles(searchTerm = '') {
    this.api.getArticles({ query: searchTerm, page: this.page })
    .subscribe((resp) => {
      this.totalHits = resp.nbHits;
      this.articles = resp.hits;
    });
  }

  public changePage(event: PageEvent) {
    this.page = event.pageIndex;
    this.getArticles(this.searchTerm);
  }
}
