import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector:     'app-cadastro-paciente',
  templateUrl:  './cadastro-paciente.component.html',
  styleUrls:    ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit{

  public parametro: string = '';
  usuario = {};
  mostrarStatus: boolean = true;

  constructor(
    private router     : Router,
    private route      : ActivatedRoute,
    private apiService : ApiService
      ) {}


  ngOnInit() {
    this.parametro = this.route.snapshot.paramMap.get('parametro')!;
     if(this.parametro === 'editar'){
        this.mostrarStatus == false;
     }
  }
  public profileForm = new FormGroup({
      usuario: new FormGroup({
      nome :           new FormControl(''),
      cpf:             new FormControl(''),
      cnpj:            new FormControl(''),
      rg:              new FormControl(''),
      email:           new FormControl(''),
      endereco:        new FormControl(''),
      cidade:          new FormControl(''),
      bairro:          new FormControl(''),
      uf:              new FormControl(''),
      cep:             new FormControl(''),
      complemento:     new FormControl(''),
      data_nascimento: new FormControl(''),
      telefone:        new FormControl(''),
      celular:         new FormControl(''),
      profissao:       new FormControl(''),
      caminho_foto:    new FormControl(''),
      status:          new FormControl(''),
      observacao:      new FormControl(''),
      login:           new FormControl(''),
      senha:           new FormControl(''),
      tipo:            new FormControl('Paciente')
    }),
    permissoes:      new FormControl(['cliente'])
  })


  public submit(){

    if(this.parametro === 'criar'){
      this.profileForm.patchValue({
        usuario: {
          status: 'ativo' 
        }
      });
    }

    this.apiService.CasdatroUsuario(this.profileForm.value).subscribe( 
      {
        next: (v) => 
        this.router.navigate(['/cadastro-paciente', 'criar'])
        ,
        error: (e) => console.error(e)
        ,
        complete: () => console.info('complete') 
      }
    );
  }



}
