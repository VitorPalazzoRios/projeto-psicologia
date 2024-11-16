import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent {

  constructor(private router: Router){

  }

  Sobre(){
    this.router.navigate(['/sobre']);
  }

  EditarPaciente(){
    this.router.navigate(['/cadastro-paciente', 'editar']);
  }


}
