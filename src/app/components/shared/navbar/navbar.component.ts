import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Al importar  Router, podemos navegar entre rutas, lo importamos aquí porque aqui esta el buscador

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Declaramos la variable tipo Router para poder hacer la redirección
  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  //Creamos un método que se active en el buscador, nos va a mandar a este metodo el termino, luego hacemos el routing a buscar, mandandole dicho parámetro
  buscarHeroe( termino:string ){
    // console.log(termino);
    this.router.navigate( ['/buscar',termino] ); //Nos dirige al componente buscador, mandando el segundo parámetro tambien que es el término de busqueda
  }

}
