import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-pacientes',
  templateUrl: './listagem-pacientes.component.html',
  styleUrls: ['./listagem-pacientes.component.scss']
})
export class ListagemPacientesComponent {

constructor(private router: Router){

}

EditarPaciente(){
  this.router.navigate(['/cadastro-paciente', 'paciente']);
}
VerPerfil(){
  this.router.navigate(['/perfil-detalhe']);
}


}
