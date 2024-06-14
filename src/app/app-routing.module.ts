import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { CategoriesComponent } from './landing-page/categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BestSellerComponent } from './landing-page/best-seller/best-seller.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { restrictDashboardGuard } from './shared/restrict-dashboard.guard';
import { DecorationsComponent } from './landing-page/categories/categories-specify/decorations/decorations.component';
import { BedLinenComponent } from './landing-page/categories/categories-specify/bed-linen/bed-linen.component';
import { CushionsComponent } from './landing-page/categories/categories-specify/cushions/cushions.component';
import { CookwareComponent } from './landing-page/categories/categories-specify/cookware/cookware.component';
import { GiftsComponent } from './landing-page/categories/categories-specify/gifts/gifts.component';
import { TowelsComponent } from './landing-page/categories/categories-specify/towels/towels.component';
import { CartComponent } from './shared/cart/cart.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      { path: 'decoration', component: DecorationsComponent },
      { path: 'bed-linen', component: BedLinenComponent },
      { path: 'cushion', component: CushionsComponent },
      { path: 'cookware', component: CookwareComponent },
      { path: 'gift', component: GiftsComponent },
      { path: 'towel', component: TowelsComponent },
    ],
  },
  { path: 'best-seller', component: BestSellerComponent },
  {
    path: 'user-info',
    component: UserInfoComponent,
    canActivate: [restrictDashboardGuard],
  },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
