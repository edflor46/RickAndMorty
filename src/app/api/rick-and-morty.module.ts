import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { IndexComponent } from './pages/index/index.component';

import { MovilComponent } from './shared/movil/movil.component';
import { DesktopComponent } from './shared/desktop/desktop.component';
import { MaterialModule } from './material/material.module';
import { RickAndMortyRountingModule } from './rick-and-morty-routing.module';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    PersonajeComponent,
    IndexComponent,
    MovilComponent,
    DesktopComponent,
    BuscarComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    RickAndMortyRountingModule,
    
  ],
})
export class RickAndMortyModule {}
