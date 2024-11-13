import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.scss']
})
export class SairComponent {

  parametro: boolean = false;

  constructor(private http: HttpClient, private  router: Router) {}

  isAuthenticated(): boolean 
  { 
    return !!localStorage.getItem('token');
  }

  logout(): void { 
    localStorage.removeItem('token');
  }

  Sair(){

    this.logout();
    this.router.navigate(['/']);

  }

}
