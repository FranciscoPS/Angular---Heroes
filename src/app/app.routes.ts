import { RouterModule, Routes } from '@angular/router'; //Importas el modulo de rutas y rutas desde el path indiio
import { HomeComponent } from './components/home/home.component' //Tenemos que importar el componente al cual queremos enrutar
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component'; //Importamos el componente a la que haremos la ruta

//Es un arreglo de rutas
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, //Cada ruta tiene un path y un componente, el nombre que coloquemos en path es con el que ingrearemos desde el  html
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent}, //En este, es necesario colocar que recibiremos un parámetro, para así saber a que heroe redirigir
    { path: 'buscar/:termino', component: BuscadorComponent }, //Establecemos que al enrutar al componente del buscador, debemos mandar un parametro "termino"
    { path: '**', pathMatch: 'full', redirectTo: 'home' } //Esta es una ruta especial por si no llega a hacer match con ninguna de las otras rutas, te redirige a una ruta en particular, en este caso ponemos a home
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); //Exportamos el Sistema de rutas con el nombre de APP_ROUTING para utilizarlo en app.module.tss