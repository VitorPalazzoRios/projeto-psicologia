import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listagem-pacientes',
  templateUrl: './listagem-pacientes.component.html',
  styleUrls: ['./listagem-pacientes.component.scss']
})
export class ListagemPacientesComponent {

  tipo: string = "";
  ListagemCadastros: any; 

constructor(private router: Router,
            private route : ActivatedRoute,
            private apiService : ApiService
){
  
}
ngOnInit(){
  this.tipo = this.route.snapshot.paramMap.get('tipo')!;
  if(this.tipo == "paciente"){
    this.apiService.ObterCadastros("profissional").subscribe({
      next: (data) => {
        this.ListagemCadastros = data;
      },
      error: (error) => {
          console.error('Erro no login', error);
      },
      complete: () => {
          console.log('Processo de login concluído');
      }
  });
  }else{
    this.apiService.ObterCadastros("paciente").subscribe({
      next: (data) => {
        this.ListagemCadastros = data;
      },
      error: (error) => {
          console.error('Erro no login', error);
      },
      complete: () => {
          console.log('Processo de login concluído');
      }
  });
  }
 
}

EditarPaciente(){
  this.router.navigate(['/cadastro-paciente', 'paciente']);
}
VerPerfil(id : number){
  this.router.navigate(['/perfil-detalhe', id]);
}

ObterCadastros(){
  this.apiService.ObterCadastros(this.tipo).subscribe({
    next: (data) => {
        console.log(data);
    },
    error: (error) => {
        console.error('Erro no login', error);
    },
    complete: () => {
        console.log('Processo de login concluído');
    }
});
}
}
