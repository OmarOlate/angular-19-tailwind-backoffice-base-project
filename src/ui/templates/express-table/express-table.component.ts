import { NgTemplateOutlet } from '@angular/common';
import { booleanAttribute, Component, contentChildren, input } from '@angular/core';
import { SLOT, SlotAsRecordPipe } from 'src/ui/utils';
import { DividerComponent } from 'src/ui/atoms';

@Component({
  selector: 'app-express-table',
  imports: [SlotAsRecordPipe, NgTemplateOutlet, DividerComponent],
  templateUrl: './express-table.component.html',
})
export class ExpressTableComponent{
  protected readonly $slots = contentChildren(SLOT);

  readonly $addBottonLine = input(false, {
    alias: 'addBottomLine',
    transform: booleanAttribute
  })
}
