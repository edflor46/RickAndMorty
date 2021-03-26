import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';


const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'personajes', component: PersonajesComponent },
      { path: 'personaje/:id', component: PersonajeComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
  exports:[RouterModule]
})
export class RickAndMortyRountingModule {}
