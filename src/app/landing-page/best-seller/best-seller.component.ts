import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellerComponent {}
