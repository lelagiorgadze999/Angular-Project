import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, Ishop } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-cookware',
  templateUrl: './cookware.component.html',
  styleUrl: './cookware.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookwareComponent {
  public myCookwares: Ishop[] = [
    {
      id: 'cookware-1',
      name: 'Handmade brown',
      img:
        '../../../../../assets/images/categories/cookware/cookware1.svg',
      price: '15.00',
    },
    {
      id:'cookware-2',
      name: 'Marble small amenity tray',
      img:
        '../../../../../assets/images/categories/cookware/cookware2.svg',
      price: '35.00',
    },
    {
      id:'cookware-3',
      name: 'Wooden tea cup coaster',
      img:
        '../../../../../assets/images/categories/cookware/cookware3.svg',
      price: '25.00',
    },
  ];
  constructor(public cartServ: CartService) {}
}
