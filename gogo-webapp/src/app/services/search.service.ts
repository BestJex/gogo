import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LintResult, SearchResult } from './interfaces';
import { Util } from '../util';

const endpoint = 'https://176.122.157.231:5000'

@Injectable({
  providedIn: 'root'
})
export class SearchService{

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * 根据关键词和页码搜索
   * @param keyword 关键词
   * @param page 页码
   */
  public search(keyword: string, page: number): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(
      `${endpoint}/api/search?q=${keyword}&p=${page}`
    ).pipe(
      catchError(Util.handleError(
        () => { }, null
      ))
    )
  }

  public lint(keyword: string): Observable<LintResult> {
    return this.httpClient.get<LintResult>(
      `${endpoint}/api/lint?q=${keyword}`
    ).pipe(
      catchError(Util.handleError(
        () => { }, null
      ))
    )
  }
}
