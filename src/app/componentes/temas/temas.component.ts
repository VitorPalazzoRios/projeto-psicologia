import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent {

  constructor(private router : Router){}

Temas(){
  this.router.navigate(['/listagem-temas']);
}

}
