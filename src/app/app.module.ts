import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageViewComponent } from './pages/home-page-view/home-page-view.component';
import { ShopSectionViewComponent } from './components/shop-section-view/shop-section-view.component';
import { PopularSectionViewComponent } from './components/popular-section-view/popular-section-view.component';
import { CollectionsSectionViewComponent } from './components/collections-section-view/collections-section-view.component';
import { NewsletterSectionViewComponent } from './components/newsletter-section-view/newsletter-section-view.component';
import { ProductListingPageViewComponent } from './pages/product-listing-page-view/product-listing-page-view.component';
import { FourHoFourComponent } from './pages/four-ho-four/four-ho-four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './modals/header/header.component';
import { SideNavListComponent } from './modals/side-nav-list/side-nav-list.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import {MatButtonModule} from '@angular/material/button';
import {SlideshowService} from './services/slideshow.service';
import {ItemsService} from './services/items.service';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import { PopinModalComponent } from './modals/popin-modal/popin-modal.component';
import { ModalModule } from 'ngb-modal';


@NgModule({
  declarations: [
    AppComponent,
    HomePageViewComponent,
    ShopSectionViewComponent,
    PopularSectionViewComponent,
    CollectionsSectionViewComponent,
    NewsletterSectionViewComponent,
    ProductListingPageViewComponent,
    FourHoFourComponent,
    HeaderComponent,
    SideNavListComponent,
    SlideShowComponent,
    ItemComponent,
    PopinModalComponent

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
    MatButtonModule,
    HttpClientModule,
    LayoutModule,
    NgbModule,
    ReactiveFormsModule,
    ModalModule

  ],
  providers: [
    SlideshowService,
    ItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


