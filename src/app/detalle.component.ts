import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './detalle.component.html',
})

export class Detalle{


  id:number;

  constructor(private _route: ActivatedRoute,
  private _router: Router){

  }

  ngOnInit():void{
    this.id = this._route.snapshot.params['id'];
  }

  atras():void{
    this._router.navigate(['listado']);
  }

}
