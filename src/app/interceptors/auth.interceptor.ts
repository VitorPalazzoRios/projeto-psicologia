import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    // Pega o token do localStorage 
    const token = localStorage.getItem('token'); 
    if (token) { 
      // Clona a requisição e adiciona o cabeçalho Authorization com o token JWT 
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }); 
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Remove o token expirado do localStorage
          localStorage.removeItem('token');
          // Redireciona para a página de login
          this.router.navigate(['/login']);
        }
        return observableThrowError(() => new Error(error.message));
      })
    );
  }
}
