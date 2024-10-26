import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { IconePrincipalComponent } from './componentes/icone-principal/icone-principal.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { ListagemPacientesComponent } from './pages/listagem-pacientes/listagem-pacientes.component';
import { EditarPacienteComponent } from './pages/editar-paciente/editar-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PerfilDetalheComponent } from './pages/perfil-detalhe/perfil-detalhe.component';
import { IconePrincipalNomeComponent } from './componentes/icone-principal-nome/icone-principal-nome.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    IconePrincipalComponent,
    CadastroPacienteComponent,
    ListagemPacientesComponent,
    EditarPacienteComponent,
    PerfilDetalheComponent,
    IconePrincipalNomeComponent,
    EditarPerfilComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService ,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
