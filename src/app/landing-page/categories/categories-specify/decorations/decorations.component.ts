import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, Ishop } from '../../../../shared/services/cart.service';

@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrl: './decorations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecorationsComponent {
  public myDecoration: Ishop[] = [
    {
      id: 'decoration-1',
      name: 'Waahkart antique fiber flower',
      img: '../../../../../assets/images/categories/decorations/decoration1.svg',
      price: '10.00',
    },
    {
      id: 'decoration-2',
      name: 'Home decor lucky family',
      img: '../../../../../assets/images/categories/decorations/decoration2.svg',
      price: '20.00',
    },
  ];
  constructor(public cartServ: CartService) {}
}
