import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-perfil-detalhe',
  templateUrl: './perfil-detalhe.component.html',
  styleUrls: ['./perfil-detalhe.component.scss']
})
export class PerfilDetalheComponent {
  parametro: string = "";
  usuario = {};
  mostrarStatus: boolean = false;
  tipo: string = "";
  tipoPessoa : String = "Fisica";
  mostraCpf : boolean = true;
  mostraCnpj : boolean = false;
  mostraCRM : boolean = false;
  mostraCRP : boolean = false;
  dadosRecebidos : any;

  constructor(private apiService : ApiService,
              private route      : ActivatedRoute
              ){

  }


  ngOnInit(){
    this.parametro = this.route.snapshot.paramMap.get('id')!;
      this.apiService.httpListPacientes(this.parametro).subscribe({
        next: (data) => {
          this.dadosRecebidos = data;
          console.log(this.dadosRecebidos);
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
