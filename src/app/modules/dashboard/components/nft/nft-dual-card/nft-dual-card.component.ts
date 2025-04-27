import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';

@Component({
  selector: 'nft-dual-card',
  templateUrl: './nft-dual-card.component.html',
  imports: [NgStyle, CurrencyPipe],
})
export class NftDualCardComponent {
  @Input() nft: Nft = <Nft>{};
}
