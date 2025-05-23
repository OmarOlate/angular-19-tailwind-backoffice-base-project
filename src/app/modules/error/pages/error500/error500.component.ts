import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/ui';

@Component({
    selector: 'app-error500',
    imports: [AngularSvgIconModule, ButtonComponent],
    templateUrl: './error500.component.html'
})
export class Error500Component {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
