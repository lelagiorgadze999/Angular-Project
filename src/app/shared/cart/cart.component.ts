import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, Ishop } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  constructor(public cartServ: CartService) {}

  public getItemCount(item: Ishop) {
    const count = this.cartServ.carts.reduce((prev, current) => {
      if (current.id === item.id) prev++;
      return prev;
    }, 0);

    return count;
  }
}
