
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  constructor(    private http: HttpClient) { }

  about() : Observable<boolean> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const header = { headers };
      return this.http.get<boolean>('http://10.0.0.20:8091/demo/about', header).pipe(
          tap(response => {
          }),
          map(response => {
            return response;
          }),
          catchError(error => {
                throw (error);
                return of(error);
              }
          ));
    }
}
