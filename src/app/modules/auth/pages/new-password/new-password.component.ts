import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent, IconComponent } from 'src/ui';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
  imports: [FormsModule, RouterLink, AngularSvgIconModule, ButtonComponent, IconComponent],
})
export class NewPasswordComponent{
  hide = true;
}
