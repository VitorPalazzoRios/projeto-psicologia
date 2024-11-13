import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icone-principal-nome',
  templateUrl: './icone-principal-nome.component.html',
  styleUrls: ['./icone-principal-nome.component.scss']
})


export class IconePrincipalNomeComponent {

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
    }else{
      this.router.navigate(['/']);
    }

    
  }
}
