import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl: string;

  constructor(private http : HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }


  public httpListPacientes(login: string) {
    return this.http.get(
      `${this.apiUrl}api/usuarios/${login}`, {}
    );
  }
  



}
