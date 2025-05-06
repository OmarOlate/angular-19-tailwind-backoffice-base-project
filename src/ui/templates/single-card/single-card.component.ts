import { booleanAttribute, Component, contentChildren, input } from '@angular/core';
import { SLOT } from '../../utils';
import { SlotAsRecordPipe } from "../../utils/slot-as-record.pipe";
import { NgTemplateOutlet } from '@angular/common';
import { DividerComponent } from '../../atoms';
// called with <ng-template app-slot="header">    </ng-template> | SlotDirective
@Component({
  selector: 'app-card',
  imports: [SlotAsRecordPipe, NgTemplateOutlet, DividerComponent],
  templateUrl: './single-card.component.html',
})
export class CardComponent {
  protected readonly $slots = contentChildren(SLOT);

  readonly $addBottonLine = input(false, {
    alias: 'addBottomLine',
    transform: booleanAttribute
  })
}
