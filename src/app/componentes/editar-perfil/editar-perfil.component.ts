import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent {

  storedValue: string | null = null;
  tipo: string | null = null;
  constructor(private router: Router,
    private localStorageService: LocalStorageService
  ){

  }

  Sobre(){
    this.router.navigate(['/sobre']);
  }

  EditarPaciente(){
    this.storedValue = this.localStorageService.getItem('id');
    this.tipo = this.localStorageService.getItem('tipo');  
    console.log(this.storedValue);
    this.router.navigate(['/cadastro-paciente', 'editar' , this.tipo, this.storedValue]);
  }


}
