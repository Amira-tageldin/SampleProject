import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) { }

  getCharacters() {
    return this
            .http
            .get('./assets/db.json');
        }
}
