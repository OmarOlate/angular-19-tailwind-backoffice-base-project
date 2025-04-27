import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';

@Component({
  selector: 'nft-single-card',
  templateUrl: './nft-single-card.component.html',
  imports: [NgStyle, CurrencyPipe],
})
export class NftSingleCardComponent{
  @Input() nft: Nft = <Nft>{};
}
