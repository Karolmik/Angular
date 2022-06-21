import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scores } from 'src/intefaces/scores';

@Injectable({
  providedIn: 'root',
})
export class GetScoresService {
  constructor(private _http: HttpClient) {}
  getScores() {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    const url = 'http://scores.chrum.it/scores/snake';
    return this._http.get<Array<Scores>>(url, requestOptions);
  }
}
