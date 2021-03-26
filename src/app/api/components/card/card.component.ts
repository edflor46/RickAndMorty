import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent {
  @Input() personaje!: Personaje;
}
