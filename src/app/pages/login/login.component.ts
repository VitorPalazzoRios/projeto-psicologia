import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.loginData.username, this.loginData.password).subscribe(
      data => {
        console.log('Login bem-sucedido', data);
      },
      error => {
        console.error('Erro no login', error);
      }
    );
  }
}
