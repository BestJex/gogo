import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Util } from '../util';
import { LintResult, SearchResult } from './interfaces';

const server = 'https://176.122.157.231:5000'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * 根据关键词和页码搜索
   * @param keyword 关键词
   * @param page 页码
   */
  search(keyword: string, page: number): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(
      `${server}/api/search?q=${keyword}&p=${page}`
    ).pipe(
      catchError(Util.handleError(
        () => { }, null
      ))
    )
  }

  /**
   * 根据关键词提示
   * @param keyword 关键词
   */
  lint(keyword: string): Observable<LintResult> {
    return this.httpClient.get<LintResult>(
      `${server}/api/lint?q=${keyword}`
    ).pipe(
      catchError(Util.handleError(
        () => { }, null
      ))
    )
  }
}
