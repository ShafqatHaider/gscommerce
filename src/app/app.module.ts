import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Main-Component/dashboard/dashboard.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { BannerSliderComponent } from './MyComponents/banner-slider/banner-slider.component';
import { CategoryNavigationComponent } from './MyComponents/category-navigation/category-navigation.component';
import { CardsComponent } from './MyComponents/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    BannerSliderComponent,
    CategoryNavigationComponent,
    CardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
