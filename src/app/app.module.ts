import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageViewComponent } from './home-page-view/home-page-view.component';
import { ShopSectionViewComponent } from './shop-section-view/shop-section-view.component';
import { PopularSectionViewComponent } from './popular-section-view/popular-section-view.component';
import { CollectionsSectionViewComponent } from './collections-section-view/collections-section-view.component';
import { NewsletterSectionViewComponent } from './newsletter-section-view/newsletter-section-view.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ProductListingPageViewComponent } from './product-listing-page-view/product-listing-page-view.component';
import { FourHoFourComponent } from './four-ho-four/four-ho-four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import {MatButtonModule} from '@angular/material/button';
import {SlideshowService} from './services/slideshow.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageViewComponent,
    ShopSectionViewComponent,
    PopularSectionViewComponent,
    CollectionsSectionViewComponent,
    NewsletterSectionViewComponent,
    PopUpComponent,
    ProductListingPageViewComponent,
    FourHoFourComponent,
    HeaderComponent,
    SideNavListComponent,
    SlideShowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    SlideshowModule,
    MatButtonModule
  ],
  providers: [SlideshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
