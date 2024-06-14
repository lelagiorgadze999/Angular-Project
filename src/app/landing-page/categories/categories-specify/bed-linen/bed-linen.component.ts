import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, Ishop } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-bed-linen',
  templateUrl: './bed-linen.component.html',
  styleUrl: './bed-linen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BedLinenComponent {
  public myLinens: Ishop[] = [
    {
      id: 'linen-1',
      name: 'Elstone home white coloured',
      img: '../../../../../assets/images/categories/bed-linen/bed-linen1.svg',
      price: '15.00',
    },
    {
      id: 'linen-2',
      name: 'Nature baby merino knite',
      img: '../../../../../assets/images/categories/bed-linen/bed-linen2.svg',
      price: '25.00',
    },
  ];

  constructor(public cartServ: CartService) {}
}
