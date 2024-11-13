import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { ListagemPacientesComponent } from './pages/listagem-pacientes/listagem-pacientes.component';
import { PerfilDetalheComponent } from './pages/perfil-detalhe/perfil-detalhe.component';
import { LoginComponent } from './pages/login/login.component';
import { ListagemTemasComponent } from './pages/listagem-temas/listagem-temas.component';

const routes: Routes = [
{
  path : '',
  component : HomeComponent 
},
{
  path : 'sobre',
  component : SobreComponent 
},
{ 
  path: 'cadastro-paciente/:parametro', 
  component: CadastroPacienteComponent 
},
{ 
  path: 'listagem-pacientes', 
  component: ListagemPacientesComponent 
},
{ 
  path: 'listagem-temas', 
  component: ListagemTemasComponent 
},
{ 
  path: 'perfil-detalhe', 
  component: PerfilDetalheComponent 
},
{ 
  path: 'login', 
  component: LoginComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
