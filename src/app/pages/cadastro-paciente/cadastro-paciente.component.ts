import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector:     'app-cadastro-paciente',
  templateUrl:  './cadastro-paciente.component.html',
  styleUrls:    ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit{

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
  
  constructor(
    private router     : Router,
    private route      : ActivatedRoute,
    private apiService : ApiService,
    private cepService : CepService
      ) {}


  ngOnInit() {

    this.parametro = this.route.snapshot.paramMap.get('id')!;
    if(this.parametro != ""){
      this.mostrarStatus = true;
      this.apiService.httpListPacientes(this.parametro).subscribe({
        next: (data) => {
          this.dadosRecebidos = data;
          this.carregarForm();
        },
        error: (error) => {
            console.error('Erro no login', error);
        },
        complete: () => {
            console.log('Processo de login concluído');
           
        }
        
    });
    
    }

    this.tipo = this.route.snapshot.paramMap.get('tipo')!;
     if(this.parametro === 'editar'){
        this.mostrarStatus == true;
     }
     if(this.tipo == "profissional"){
      this.mostraCRM = true;
      this.mostraCRP = true;
     }
  }

  public profileForm = new FormGroup({
      usuario: new FormGroup({
      nome :           new FormControl(''),
      cpf:             new FormControl(''),
      cnpj:            new FormControl(''),
      rg:              new FormControl(''),
      CRM:             new FormControl(''),
      CRP:             new FormControl(''), 
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
      tipo:            new FormControl('')
    }),
    permissoes:      new FormControl(['cliente'])
  })

  public carregarForm(){
    this.profileForm.patchValue({
      usuario: {
        nome :           this.dadosRecebidos.nome,
        cpf:             this.dadosRecebidos.cpf,
        cnpj:            this.dadosRecebidos.cnpj,
        rg:              this.dadosRecebidos.rg,
        CRM:             this.dadosRecebidos.CRM,
        CRP:             this.dadosRecebidos.CRP, 
        email:           this.dadosRecebidos.email,
        endereco:        this.dadosRecebidos.endereco,
        cidade:          this.dadosRecebidos.cidade,
        bairro:          this.dadosRecebidos.bairro,
        uf:              this.dadosRecebidos.uf,
        cep:             this.dadosRecebidos.cep,
        complemento:     this.dadosRecebidos.complemento,
        data_nascimento: this.dadosRecebidos.data_nascimento,
        telefone:        this.dadosRecebidos.telefone,
        celular:         this.dadosRecebidos.celular,
        profissao:       this.dadosRecebidos.profissao,
        caminho_foto:    this.dadosRecebidos.caminho_foto,
        status:          this.dadosRecebidos.status,
        observacao:      this.dadosRecebidos.observacao,
        login:           this.dadosRecebidos.login,
        senha:           this.dadosRecebidos.senha,
        tipo:            this.dadosRecebidos.tipo
      },
      permissoes:   ['cliente']
    });
  }


  public submit(){

    



    if(this.parametro === 'criar'){
      this.profileForm.patchValue({
        usuario: {
          status: 'ativo' 
        }
      });
    }
    if(this.tipo === 'paciente'){
      this.profileForm.patchValue({
        usuario: {
          tipo: 'paciente' 
        }
      });
    }
    if(this.parametro === 'profissional'){
      this.profileForm.patchValue({
        usuario: {
          tipo: 'profissional' 
        }
      });
    }
    if(this.parametro === 'criar'){
      this.apiService.CasdatroUsuario(this.profileForm.value).subscribe( 
        {
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => this.router.navigate(['/listagem-pacientes' , this.tipo])
        }
      );
    }
    if(this.parametro != ''){
      this.apiService.EditarUsuario(this.profileForm.value, this.parametro).subscribe(
         
        {
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => this.router.navigate(['/listagem-pacientes' , this.tipo])
        }
      );
    }
    
  }

  onPessoaChange(){
    if(this.tipoPessoa == "Fisica"){
      this.mostraCpf = true;
      this.mostraCnpj = false;
    }
    if(this.tipoPessoa == "Juridica"){
      this.mostraCpf = false;
      this.mostraCnpj = true;
    }
  }

  buscarCep() {
    const cep = this.profileForm.get('usuario.cep')?.value;
    if (cep) {
      this.cepService.getCepData(cep).subscribe(data => {
        this.profileForm.patchValue({
          usuario : {
            endereco : data.logradouro,
            cidade : data.localidade,
            bairro: data.bairro,
            uf: data.uf
          }
          
        });
      });
    }
  }

}
