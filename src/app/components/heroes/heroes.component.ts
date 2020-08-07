import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'; //Importamos Router

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  //Importar el servicio
  constructor( private _heroesService:HeroesService, private _router:Router) { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    
    //Al iniciar el componente, obtenemos por medio del servicio, la información de los heroes
    this.heroes = this._heroesService.getHeroes();
    console.log('ngOnInit inicializado!');
    console.log(this.heroes);

  }

  verHeroe(idx:number){
    console.log(idx); //Imprimimos el id
    this._router.navigate( ['/heroe',idx] ); 
  }

}
