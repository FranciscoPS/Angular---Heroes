import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Nos ayuda a obtener los parámetros de una ruta o enrutamiento , podemos extraer la url, id, y parametros que mandamos desde otros componentes, en este caso lo necesitamos para obtener el "termino"
import { HeroesService } from '../../services/heroes.service'; //Importamos el servicio de heroes, ya que dicho servicio es para extraer información, la estamos utilizando com si fuera una api
import { Router } from '@angular/router'; //Importamos Router



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []; //Creamos un arreglo para ir guardando aquí las coincidencias 
  termino:string;

  //Declaramos lo que importamos:
  //ActivatedRoute lo usaremos para suscribirnos y sacar terminos de la ruta que mandemos, en este caso necesitamos el termino de busqueda
  //Importamos el servicio de heroes, para utilizar la información contenida en ese servicio
  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,private _router:Router ) {

  }

  //Cuando estamos aquí, ya fuimos redirigidos, por lo que el método ngOnInit se activará, obteniendo así la url en al que nos encontramos, tomando el parámetro que ya debe estar en el url ya que fuimos redirigidos con ese término en la url
  ngOnInit(): void {
    //Utilizamos el activatedRoute que importamos, para extraer el termino de la ruta actual del navegador, extraemos el parametro usando params.susbscribe, seguido de una funcion flecha, mandandole el parametro, por facilidad de llamamos params al elemento que mandamos pero puede llevar cualquier nombre
    this.activatedRoute.params.subscribe( params  =>{

      this.termino = params['termino']; //Este termino lo igualamos para poder usar  la variable termino en el template
      //Utilizamos el servicio _heroesService.buscarHeroes, este método del servicio, recibe un parámetro y busca en todos los datos, regresando un conjunto de arreglos que coincidieron con el string que recibió.
      //En este caso decimos que nuestro arreglo creado es igual al arreglo con los arreglos que encontro buscarHeroes en base al término que mandamos
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );//Mandamos el parámetro llamado termino, este nombre lo decidimos en el routing
      console.log(this.heroes);

    });
  }

  verHeroe(idx:number){
    console.log(idx); //Imprimimos el id
    this._router.navigate( ['/heroe',idx] ); 
  }

}
