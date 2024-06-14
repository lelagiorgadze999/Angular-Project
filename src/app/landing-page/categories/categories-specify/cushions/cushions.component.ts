import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, Ishop } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-cushions',
  templateUrl: './cushions.component.html',
  styleUrl: './cushions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CushionsComponent {
  public mycushions: Ishop[] = [
    {
      id: 'cushion-1',
      name: 'Potato style',
      img: '../../../../../assets/images/categories/cushions/cushion1.svg',
      price: '15.00',
    },
    {
      id: 'cushion-2',
      name: 'Coral bean bag chair',
      img: '../../../../../assets/images/categories/cushions/cushion2.svg',
      price: '25.00',
    },
  ];
  constructor(public cartServ: CartService) {}
}
