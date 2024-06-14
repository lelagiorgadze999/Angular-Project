import { Injectable } from '@angular/core';

export interface Ishop {
  id: string;
  name: string;
  price: string;
  img: string;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public carts: Ishop[] = [];

  public addToCart(shopInfo?: Ishop) {
    this.carts.push(shopInfo || ({} as Ishop));
  }

  public removeCard(shopInfo: Ishop) {
    const index = this.carts.findIndex((cart) => {
      return shopInfo.id === cart.id;
    });
    if (index !== -1) {
      this.carts.splice(index, 1);
    }
  }
}
