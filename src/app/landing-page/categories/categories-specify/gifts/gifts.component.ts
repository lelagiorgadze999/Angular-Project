import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, Ishop } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftsComponent {
  public mygifts: Ishop[] = [
    {
      id: 'gift-1',
      name: 'Marble hexagon',
      img: '../../../../../assets/images/categories/gift/gift1.svg',
      price: '15.00',
    },
    {
      id: 'gift-2',
      name: 'Home decor lucky deer',
      img: '../../../../../assets/images/categories/gift/gift2.svg',
      price: '35.00',
    },
    {
      id: 'gift-3',
      name: 'Benefits of using natural stone',
      img: '../../../../../assets/images/categories/gift/gift3.svg',
      price: '25.00',
    },
    {
      id: 'gift-4',
      name: 'Gloss dinnerware dish',
      img: '../../../../../assets/images/categories/gift/gift4.svg',
      price: '25.00',
    },
  ];
  constructor(public cartServ: CartService) {}
}
