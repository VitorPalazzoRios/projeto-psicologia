import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse } from 'src/app/models/auth-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}public/auth`, { username, password }).pipe(
        map(response => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('tipo', response.tipo);
            localStorage.setItem('id', response.id);
            return response;
        })
    );
}


}
