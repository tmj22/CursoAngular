import { Component, OnInit } from '@angular/core';
import { Icoche } from 'app/coche';
import { CochesService } from 'app/coches.service';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent implements OnInit {
  titulo: string = 'Listado de coches en alquiler';
  mensaje: string = '';
  anchura: number = 100;
  mostrar : boolean = true;
  filtroModelo : string ="";
  private _cocheservice;

  coches: Icoche[];




  constructor(cs: CochesService) {
    this._cocheservice = cs
  }



mostrarPrecio(): void{
this.mostrar = !this.mostrar;
}



  ngOnInit(): void {
    this._cocheservice.getCoches().subscribe(c => this.coches = c);
  }

  onratingclicado(m: string): void{
    console.log(m);
  }

}
