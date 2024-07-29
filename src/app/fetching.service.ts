import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

export interface IWikiSearch {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class FetchingService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    const url = 'https://en.wikipedia.org/w/api.php';

    const params: any = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      origin: `*`,
    };

    return this.http
      .get<IWikiSearch[]>(url, { params })
      .pipe(pluck(`query`, `search`));
  }
}
