import { booleanAttribute, Component, computed, input, output } from '@angular/core';
import { IconComponent } from '../../atoms';
import { MatButtonModule } from '@angular/material/button';
import { ButtonType } from './enums';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [IconComponent, MatButtonModule, NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly $iconButton = input<string | null>(null, { alias: 'iconButton' });
  readonly $text = input<string | null>(null, {alias: 'text'})
  readonly $type = input<ButtonType>(ButtonType.NONE, {
    alias: 'type'
  })

  readonly $disabled = input(false, {
    alias: 'disabled',
    transform: booleanAttribute
  })
  
  readonly $clicked = output({alias: 'clicked'})

  readonly $resolvedType = computed(()=>
  this.$disabled() ? 'disabled': this.$type())
}
