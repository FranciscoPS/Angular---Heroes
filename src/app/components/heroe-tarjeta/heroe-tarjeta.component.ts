//Importamos el Input, este nos ayudará a recibir información
//El Output junto con EventEmitter es para poder generar una salida, ya que queremos usar el evento verHeroe del componente padre, necesitamos dispararlo mandando un output
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { Router } from '@angular/router'; //Importamos el Router para redicreccionar con el método verHeroe

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {}; //Estamos diciendo con el input, que esta variable la podemos recibir por fuera, sin embargo también podríamos trabajarla de forma local
  @Input() index:number;

  @Output() heroeSeleccionado:EventEmitter<number>; //Vamos a emitir un numero, en este caso el index con el EventEmitter

  constructor(private _router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index);
    this._router.navigate( ['/heroe',this.index] );
    // this.heroeSeleccionado.emit(this.index); //Por medio del EventEmitter declarado anteriormente como hereoeSeleccionado, mandamos el index
  }

}
