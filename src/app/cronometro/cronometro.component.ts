import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent{
  constructor(private router: Router) {}

    routacion(name: string) {
    this.router.navigate([`/${name}`]);
  }

  numero: number=0;
  parado: boolean=false;

  async cuenta(){
    while(this.parado = true){
        this.numero++;
      await this.esperar(1000);
    }
   
  }

    esperar(ms:number){
      return new Promise(resolve => setTimeout(resolve, ms));
    }
 
    async pausa(){
      this.parado = false;
    }

    async contar(){
      this.parado = false;
      this.cuenta();
    }


  
}
