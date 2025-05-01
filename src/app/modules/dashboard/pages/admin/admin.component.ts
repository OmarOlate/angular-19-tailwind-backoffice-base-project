import { Component } from '@angular/core';
import { PrincipalIndicatorsEnum } from './interface';
import { RouterLink } from '@angular/router';
import { CardComponent, HeaderDashboardComponent, TableComponent } from 'src/ui';

@Component({
  selector: 'app-admin',
  imports: [HeaderDashboardComponent, CardComponent, RouterLink, TableComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  indicators: Array<PrincipalIndicatorsEnum>;

  constructor() {
    this.indicators = [
      {
        name: 'Indicador 1',
        action: 'action1',
        numbers: 10009
      },
      {
        name: 'Indicador 2',
        action: 'action3',
        numbers: 200
      },
      {
        name: 'Indicador 3',
        action: 'action3',
        numbers: 300
      },
      {
        name: 'Indicador 4',
        action: 'action4',
        numbers: 400
      }
    ];
  }
}
