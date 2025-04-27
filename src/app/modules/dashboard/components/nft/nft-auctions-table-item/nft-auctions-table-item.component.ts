import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Nft } from '../../../models/nft';

@Component({
  selector: 'nft-auctions-table-item',
  templateUrl: './nft-auctions-table-item.component.html',
  imports: [AngularSvgIconModule, CurrencyPipe],
})
export class NftAuctionsTableItemComponent {
  //@angular-eslint/component-selector
  @Input() auction = <Nft>{};
}
