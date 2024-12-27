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

  public httpListPacientes(id: string) {
    return this.http.get(
      `${this.apiUrl}api/usuarios/id/${id}`, {}
    );
  }
  
  public ObterCadastros(tipo: string) {
    return this.http.get(
      `${this.apiUrl}api/usuarios/tipo/${tipo}`, {}
    );
  }


  public CasdatroUsuario(form: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}public/cadastro`, form);
  }


  public EditarUsuario(form: any, id: string ): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}api/usuarios/editar/${id}`, form.usuario);
  }


}
