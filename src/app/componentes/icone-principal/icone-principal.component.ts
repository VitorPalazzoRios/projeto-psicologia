import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-icone-principal',
  templateUrl: './icone-principal.component.html',
  styleUrls: ['./icone-principal.component.scss']
})
export class IconePrincipalComponent {
  parametro: boolean = false;
  title = 'localStorage Example'; 
  storedValue: string | null = null;

  constructor(private  router: Router,
    private localStorageService: LocalStorageService){

  }

  ngOnInit(){
    this.storedValue = this.localStorageService.getItem('tipo'); 
  }
  
  isAuthenticated(): boolean 
  { 
    return !!localStorage.getItem('token');
  }


  

  irParaHome(){
    this.parametro = this.isAuthenticated();
  
      if(this.parametro == true){
       
        if(this.storedValue == "paciente"){
          this.router.navigate(['/listagem-pacientes', "paciente"]);
        }else{
          this.router.navigate(['/listagem-pacientes', "profissional"]);
        }
        
      }
      else{
        this.router.navigate(['/']);
      }

}
}
