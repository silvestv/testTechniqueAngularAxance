import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HomePageViewComponent} from './pages/home-page-view/home-page-view.component';
import {ProductListingPageViewComponent} from './pages/product-listing-page-view/product-listing-page-view.component';
import {FourHoFourComponent} from './pages/four-ho-four/four-ho-four.component';
// Routing
// Redirection en cas de mauvais routing
const routes: Routes = [
  {path: '', redirectTo: '/home/hf', pathMatch: 'full'},
  {path: 'home', component: HomePageViewComponent},
  {path: 'home/:id', component: HomePageViewComponent},
  {path: 'productListing', component: ProductListingPageViewComponent},
  {path: 'not-found', component: FourHoFourComponent},
  {path: '**', redirectTo: 'not-found' }


];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
