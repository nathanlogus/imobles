import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cta } from './cta.model'

@Injectable()
export class HotsiteService {
  constructor(private http: HttpClient) { }
  url = 'https://sheets.googleapis.com/v4/spreadsheets/2PACX-1vQFyrOVnDk8O5cVeSqcwGaXQ5rsMUwl9TuM0rBFUTLywplghODAbnYXnO26fXnCXV3w1zx7aUHkbfqs/values/';

  create(Cta: any) {
    return this.http.post(this.url, Cta);
  }

}