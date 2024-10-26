import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icone-principal',
  templateUrl: './icone-principal.component.html',
  styleUrls: ['./icone-principal.component.scss']
})
export class IconePrincipalComponent {

    constructor(private  router: Router){

    }
    irParaHome(){
      this.router.navigate(['/']);
    }
}
