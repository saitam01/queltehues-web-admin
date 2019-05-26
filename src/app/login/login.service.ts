import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
  queltehuesUrl = 'http://localhost:8080/queltehues/api/v1/auth';

  constructor(private http: HttpClient) {}

  authenticate(token) {
    return this.http.get(this.queltehuesUrl, {
      params: {
        'jwt': token
      }
    });
  }
}
