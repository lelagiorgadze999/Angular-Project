import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, Ishop } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-towels',
  templateUrl: './towels.component.html',
  styleUrl: './towels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TowelsComponent {
  public myTowel: Ishop[] = [
    {
      id: 'towel-1',
      name: 'Elstone home white coloured',
      img: '../../../../../assets/images/categories/towel/towel1.svg',
      price: '15.00',
    },
    {
      id: 'towel-2',
      name: 'Nature baby merino knite',
      img: '../../../../../assets/images/categories/towel/towel2.svg',
      price: '35.00',
    },
    {
      id: 'towel-3',
      name: 'Towels cotton soft',
      img: '../../../../../assets/images/categories/towel/towel3.svg',
      price: '25.00',
    },
  ];
  constructor(public cartServ: CartService) {}
}
