import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  private movil = new Subject();


  constructor() {
    this.checkWidth();
  }

  onMovil(status: boolean) {
    this.movil.next(status);
  }

  getMovilStatus(): Observable<any> {
    return this.movil.asObservable();
  }

  public checkWidth() {
    let width = window.innerWidth;

    if (width <= 700) {
      this.onMovil(true);
    } else {
      
      this.onMovil(false);
    }
  }
}
