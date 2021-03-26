import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Personaje } from '../../interfaces/personaje.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [],
})
export class PersonajeComponent implements OnInit {
  personaje!: Personaje;
  constructor(
    private personajeService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.personajeService.getPersonaje(id)))
      .subscribe((personaje) => this.personaje = personaje
      );
  }
}
