import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  personajes: Personaje[] = [];

  constructor(private personajeRandom: ApiService) {}

  ngOnInit(): void {
    this.personajeRandom
      .getRandomPersonajes()
      .subscribe((resp) => (this.personajes = resp));
  }
}
