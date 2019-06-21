import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'product/:itemTitle', component: ProductInfoComponent},
  {path: 'myCart', component: MyCartComponent},
  {path: 'not-found', component: NotFoundComponent },
  {path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
