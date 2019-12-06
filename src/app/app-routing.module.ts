import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HomePageViewComponent} from './home-page-view/home-page-view.component';
import {ProductListingPageViewComponent} from './product-listing-page-view/product-listing-page-view.component';


const routes: Routes = [
  {path: 'home/hf', component: HomePageViewComponent},
  {path: 'home/:id', component: HomePageViewComponent},
  {path: 'productListing', component: ProductListingPageViewComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
