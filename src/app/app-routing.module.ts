import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HomePageViewComponent} from './home-page-view/home-page-view.component';
import {ProductListingPageViewComponent} from './product-listing-page-view/product-listing-page-view.component';


const routes: Routes = [
  {path: '', redirectTo: '/productListing', pathMatch: 'full'},
  {path: 'home', component: HomePageViewComponent},
  {path: 'home/:id', component: HomePageViewComponent},
  {path: 'productListing', component: ProductListingPageViewComponent}


];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
