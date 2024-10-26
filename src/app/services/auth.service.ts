import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse } from 'src/app/models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl + '/signin', { username, password }).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }
}
