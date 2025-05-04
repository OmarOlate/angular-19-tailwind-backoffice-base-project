import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from 'src/ui/atoms';
import { ButtonComponent } from 'src/ui/molecules';

@Component({
  selector: 'app-header-dashboard',
  imports: [ButtonComponent, RouterLink, IconComponent],
  templateUrl: './header-dashboard.component.html',
})
export class HeaderDashboardComponent {
    readonly $title = input<string>(undefined,{alias: 'title'})

    readonly $subtitle = input<string>(undefined, {alias: 'subtitle'})

    clickedButton(){
      console.log('holas')
    }
}
