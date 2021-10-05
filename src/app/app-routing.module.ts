import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PelisComponent } from './pelis/pelis.component';
import { MusicaComponent } from './musica/musica.component';
import { GenerosPeliculasComponent } from './generos-peliculas/generos-peliculas.component';
import { GenerosMusicalesComponent } from './generos-musicales/generos-musicales.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {path: 'peliculas', component: PelisComponent },
  {path: 'music', component: MusicaComponent },
  {path: 'home', component: HomeComponent },
  {path: 'gp', component: GenerosPeliculasComponent },
  {path: 'gm', component: GenerosMusicalesComponent },
  {path: 'modal', component: ModalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
