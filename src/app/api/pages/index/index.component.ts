import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
})
export class IndexComponent implements OnInit {
  public movil: boolean;
  constructor(private responsive: ResponsiveService) {}

  ngOnInit(): void {
    this.responsive.getMovilStatus().subscribe((movil) => {
      if (movil) {
        this.movil = true;
      } else {
        this.movil = false;
      }
    });

    this.onResize();
  }

  onResize() {
    this.responsive.checkWidth();
  }
}
