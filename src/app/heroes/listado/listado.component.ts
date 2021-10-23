import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Ironman','Goku','Hulk','Ash'];
  heroeBorrado:string="";

  borrarHeroe():void{     
    this.heroeBorrado= this.heroes.shift()  || "";
  }
}
