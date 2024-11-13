import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    
  loginData = { username: '', password: '' };

  
  constructor(private authService: AuthService, private  router: Router) {}

  

  onSubmit(): void {
    this.authService.login(this.loginData.username, this.loginData.password).subscribe({
        next: (data) => {
            this.router.navigate(['/listagem-pacientes']);
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
