import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private  router: Router) {}

  navegarComParametroPaciente() {
    this.router.navigate(['/cadastro-paciente', 'criar', 'paciente', ""]);
  }

  navegarComParametroProfissional() {
    this.router.navigate(['/cadastro-paciente', 'criar', 'profissional', ""]);
  }

  irParaLogin(){
    this.router.navigate(['/login']);
  }

}
