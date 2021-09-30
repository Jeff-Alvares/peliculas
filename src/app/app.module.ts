import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PelisComponent } from './pelis/pelis.component';
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './menu/menu.component';
import { MusicaComponent } from './musica/musica.component';
import { GenerosPeliculasComponent } from './generos-peliculas/generos-peliculas.component';
import { GenerosMusicalesComponent } from './generos-musicales/generos-musicales.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    PelisComponent,
    SliderComponent,
    MenuComponent,
    MusicaComponent,
    GenerosPeliculasComponent,
    GenerosMusicalesComponent,
    HomeComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
