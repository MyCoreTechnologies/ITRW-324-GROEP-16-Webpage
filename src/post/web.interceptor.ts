import { subservice } from './web.service';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService {

  constructor(public submitService: subservice) {
  }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    request = request.clone({
      setHeaders: {
     authentication: '${this.submitService.getToken()}'
      }
    });
    return next.handle(request);
  }
}