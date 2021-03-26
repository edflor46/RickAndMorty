import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../../interfaces/personaje.interface';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {

  personajeSearch: Personaje[] = [];
  value:string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate(['Rick&Morty/personajes'], {
        queryParams: { character: value },
      });

    }
  }

}
