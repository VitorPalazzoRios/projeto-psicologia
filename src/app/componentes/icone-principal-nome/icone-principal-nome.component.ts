import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icone-principal-nome',
  templateUrl: './icone-principal-nome.component.html',
  styleUrls: ['./icone-principal-nome.component.scss']
})
export class IconePrincipalNomeComponent {
  constructor(private  router: Router){

  }
  irParaHome(){
    this.router.navigate(['/']);
  }
}
