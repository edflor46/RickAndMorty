import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { ApiService } from '../../services/api.service';
import { filter, take } from 'rxjs/operators';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

type RequesInfo = {
  next: string;
};
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [],
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];
  info: RequesInfo = {
    next: null,
  };

  private pageNum = 1;
  private query: string;

  constructor(
    private personajeService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.urlChange();
  }

  ngOnInit(): void {
    this.getResultsSearch();
  }

  scroll(): void {
    if (this.info.next) {
      this.pageNum++;
      this.getData();
    }
  }

  private urlChange(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.personajes = [];
        this.pageNum = 1;
        this.getResultsSearch();
      });
  }

  private getResultsSearch(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {

      this.query = params['character'];
      this.getData();
    });
  }

  private getData(): void {
    this.personajeService
      .searchPersonajes(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((response: any) => {
        if (response.results.length) {
          const { info, results } = response;
          this.personajes = [...this.personajes, ...results];
          this.info = info;
        } else {
          this.personajes = [];
        }
      });
  }
}
