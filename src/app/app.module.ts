import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { CategoriesComponent } from './landing-page/categories/categories.component';
import { BestSellerComponent } from './landing-page/best-seller/best-seller.component';
import { JoinAsComponent } from './landing-page/join-as/join-as.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { TopComponent } from './landing-page/top/top.component';
import { BenefitsComponent } from './landing-page/benefits/benefits.component';
import { RegisterComponent } from './login-register/register/register.component';
import { LoginComponent } from './login-register/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrMsgComponent } from './shared/err-msg/err-msg.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { DecorationsComponent } from './landing-page/categories/categories-specify/decorations/decorations.component';
import { BedLinenComponent } from './landing-page/categories/categories-specify/bed-linen/bed-linen.component';
import { CushionsComponent } from './landing-page/categories/categories-specify/cushions/cushions.component';
import { CookwareComponent } from './landing-page/categories/categories-specify/cookware/cookware.component';
import { GiftsComponent } from './landing-page/categories/categories-specify/gifts/gifts.component';
import { TowelsComponent } from './landing-page/categories/categories-specify/towels/towels.component';
import { CustomPipe } from './shared/pipes/shorter.pipe';
import { PricePipe } from './shared/pipes/price.pipe';
import { CartComponent } from './shared/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    CategoriesComponent,
    BestSellerComponent,
    JoinAsComponent,
    FooterComponent,
    TopComponent,
    BenefitsComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    ErrMsgComponent,
    UserInfoComponent,
    DecorationsComponent,
    BedLinenComponent,
    CushionsComponent,
    CookwareComponent,
    GiftsComponent,
    TowelsComponent,
    CustomPipe,
    PricePipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
