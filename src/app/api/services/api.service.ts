import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRandomPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.apiUrl}/character/1,2,3,4`);
  }

  getPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/character/${id}`);
  }

  searchPersonajes(query = '', page = 200): Observable<Personaje[]> {
    const filter = `${environment.apiUrl}/character/?name=${query}&page=${page}`;
    return this.http.get<Personaje[]>(filter);
  }

 
}
