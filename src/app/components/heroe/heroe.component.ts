import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Nos ayuda a obtener parámetros por id
import { HeroesService } from '../../services/heroes.service'; //Importamos el servicio



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) { 
    this.activatedRoute.params.subscribe( params =>{
      console.log(params['id']); //Obtenemos el segundo parámetro de la url, el id
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  

  ngOnInit(): void {
  }

}
