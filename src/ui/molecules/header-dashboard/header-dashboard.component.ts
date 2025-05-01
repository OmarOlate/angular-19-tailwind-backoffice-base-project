import { Component, input } from '@angular/core';
import { ButtonComponent } from 'src/ui/molecules';

@Component({
  selector: 'app-header-dashboard',
  imports: [ButtonComponent],
  templateUrl: './header-dashboard.component.html',
})
export class HeaderDashboardComponent {
    readonly $title = input<string>(undefined,{alias: 'title'})

    readonly $subtitle = input<string>(undefined, {alias: 'subtitle'})

    clickedButton(){
      console.log('holas')
    }
}
