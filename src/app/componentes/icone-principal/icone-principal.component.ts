import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icone-principal',
  templateUrl: './icone-principal.component.html',
  styleUrls: ['./icone-principal.component.scss']
})
export class IconePrincipalComponent {
  parametro: boolean = false;

  constructor(private  router: Router){

  }

  isAuthenticated(): boolean 
  { 
    return !!localStorage.getItem('token');
  }

  irParaHome(){
  
    this.parametro = this.isAuthenticated();

    if(this.parametro == true){
      this.router.navigate(['/listagem-pacientes']);
    }

    this.router.navigate(['/']);

}
}
